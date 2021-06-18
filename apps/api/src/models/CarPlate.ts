import * as mongoose from 'mongoose';
import { ICarPlateSchema } from './ICarPlate';
const carPlateSchema = new mongoose.Schema({
    plateNumber: {
        type: String,
        required:true,
        unique:true,
        dropDups:true
    },
    ownerName:{
        type: String,
        required:true,
    }
})
module.exports= mongoose.model<ICarPlateSchema>("CarPlate", carPlateSchema)