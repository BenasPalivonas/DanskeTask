import * as express from 'express';
import * as mongoose from 'mongoose';
import { ICarPlateSchema } from '../models/ICarPlate';
import { CarPlatesSeedData } from '../seed/seedData';
const CarPlate= require('../models/CarPlate');
export const carPlatesRouter = express.Router();
carPlatesRouter.get('/get', async (req,res)=>{
    try{
    const carPlates:ICarPlateSchema[]= await CarPlate.find();
    res.json(SortArrayOfObjectsBy(carPlates,"ownerName"))
    }
    catch(err){
        res.send("Error"+err);
    }
})
carPlatesRouter.get('/get/:id', async (req,res)=>{
    if(!checkIfValidId(req.params.id)){
        res.status(404).send("invalid id");
    }
    try{
    const carPlate:ICarPlateSchema= await CarPlate.findById(req.params.id);
    res.json(carPlate);
    }
    catch(err){
        res.send("Error"+err);
    }
})
carPlatesRouter.post('/post',async (req,res)=>{
    const carPlate : ICarPlateSchema = new CarPlate({
       plateNumber: req.body.plateNumber,
       ownerName: req.body.ownerName
    });
try{
    const cp:ICarPlateSchema=await carPlate.save();
    res.json(cp);
}
catch(err){
    res.send("Error"+err);
}
});
carPlatesRouter.patch("/patch/:id", async(req,res)=>{
    try{
        const carPlate:ICarPlateSchema= await CarPlate.findById(req.params.id);
        if(!checkIfValidId(req.params.id)){
            res.status(404).send("invalid id");
        }
        carPlate.plateNumber=req.body.plateNumber||carPlate.plateNumber;  
        carPlate.ownerName=req.body.ownerName||carPlate.ownerName;     
        const cp:ICarPlateSchema=await carPlate.save();
        res.send(cp); 
    }
    catch(err){
    res.send("Error"+err);
    }
});
carPlatesRouter.delete("/delete/:id",async (req,res)=>{
    const id:string=req.params.id;
    try{
        const carPlate:ICarPlateSchema= await CarPlate.findById(id);
        if(!checkIfValidId(id)){
            res.send("invalid id");
        }
       carPlate.delete();
        res.send(200).send(`Deleted car plate with id: ${id}`);
    }
    catch (err){
        res.send("Error"+err);
    }
})
carPlatesRouter.delete("/deleteAll",async (req,res)=>{
    try{
        CarPlate.deleteMany(()=>{return true});
        res.sendStatus(200);
    }
    catch (err){
        res.send("Error"+err);
    }
})
carPlatesRouter.post("/seedData",async (req,res)=>{
try{
    CarPlatesSeedData.forEach(async(cp)=>{
       await new CarPlate({
            plateNumber: cp.plateNumber,
            ownerName: cp.ownerName
         }).save().catch(()=>{console.log(`${cp.plateNumber} already exsists`)});
    });
    res.sendStatus(200);
}
catch(err){
res.send("Error"+err);
}
});

const checkIfValidId=(id:string):boolean=>{
   return mongoose.Types.ObjectId.isValid(id);
}
const SortArrayOfObjectsBy=(obj:Array<any>,sortBy:string):Array<any>=>{
    return obj.sort((a,b)=>{
        if(a[sortBy] < b[sortBy]) { return -1; }
        if(a[sortBy] > b[sortBy]) { return 1; }
        return 0;
    })
}