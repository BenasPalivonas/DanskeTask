import * as express from 'express';
import * as mongoose from 'mongoose';
import { ICarPlateSchema } from '../models/ICarPlate';
const CarPlate= require('../models/CarPlate');
export const carPlatesRouter = express.Router();
carPlatesRouter.get('/get', async (req,res)=>{
    try{
    const carPlates:ICarPlateSchema[]= await CarPlate.find();
    res.json(sortObject(carPlates,"ownerName"))
    }
    catch(err){
        res.send("Error"+err);
    }
})
carPlatesRouter.get('/get/:id', async (req,res)=>{
    if(!checkIfValid(req.params.id)){
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
    const cp= await carPlate.save();
    res.json(cp);
}
catch(err){
    res.send("Error"+err);
}
});
carPlatesRouter.patch("/patch/:id", async(req,res)=>{
    try{
        const carPlate:ICarPlateSchema= await CarPlate.findById(req.params.id);
        if(!checkIfValid(req.params.id)){
            res.status(404).send("invalid id");
        }
        carPlate.plateNumber=req.body.plateNumber||carPlate.plateNumber;  
        carPlate.ownerName=req.body.ownerName||carPlate.ownerName;     
        const cp=await carPlate.save();
        res.send(cp); 
    }
    catch(err){
    res.send("Error"+err);
    }
});
carPlatesRouter.delete("/delete/:id",async (req,res)=>{
    try{
        const carPlate:ICarPlateSchema= await CarPlate.findById(req.params.id);
        if(!checkIfValid(req.params.id)){
            res.status(404).send("invalid id");
        }
       var cp=carPlate.delete();
        res.json(cp);
    }
    catch (err){
        res.send("Error"+err);
    }
})
carPlatesRouter.delete("/delete",async (req,res)=>{
    try{
        const carPlates:ICarPlateSchema[]= await CarPlate.find();
        CarPlate.deleteMany(()=>{return true});
        res.json("deleted");
    }
    catch (err){
        res.send("Error"+err);
    }
})
const checkIfValid=(id):boolean=>{
   return mongoose.Types.ObjectId.isValid(id);
}
const sortObject=(obj,sortBy)=>{
    return obj.sort((a,b)=>{
        if(a[sortBy] < b[sortBy]) { return -1; }
        if(a[sortBy] > b[sortBy]) { return 1; }
        return 0;
    })
}