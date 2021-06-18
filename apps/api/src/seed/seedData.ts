const CarPlate= require('../models/CarPlate');
interface ICarPlate{
    plateNumber:string,
    ownerName:string,
}
export const CarPlatesSeedData:ICarPlate[]=[
        {
           plateNumber:"123 ABC",
           ownerName:"Simonas",
       },
      {
           plateNumber:"231 LPO",
           ownerName:"Alanas",
       },
      {
           plateNumber:"901 KBL",
           ownerName:"Julija",
       },
       {
           plateNumber:"201 SPR",
           ownerName:"Romualdas",
       },
      {
           plateNumber:"031 QWE",
           ownerName:"Greta",
       },
       {
           plateNumber:"671 PRL",
           ownerName:"Tamas",
       },
     {
           plateNumber:"654 POI",
           ownerName:"Vaidotas",
       },
      {
           plateNumber:"985 SMK",
           ownerName:"Vytautas",
       },
       {
           plateNumber:"345 SWL",
           ownerName:"Romualdas",
       },
       {
           plateNumber:"491 ION",
           ownerName:"Andrius",
       },
    ];