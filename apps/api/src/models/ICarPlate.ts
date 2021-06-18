import * as mongoose from 'mongoose';
export interface ICarPlateSchema extends mongoose.Document{
    plateNumber: string;
    ownerName: string;
}