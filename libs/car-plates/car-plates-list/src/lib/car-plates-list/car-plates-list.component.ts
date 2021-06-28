import { Component, OnInit } from '@angular/core';
import { CarPlate } from '../../../../models/car-plate-interface';
import { CarPlateService } from 'libs/car-plates/data-acess/src/lib/car-plate.service';
@Component({
  selector: 'car-plates-list',
  templateUrl: './car-plates-list.component.html',
  styleUrls: ['./car-plates-list.component.scss']
})
export class CarPlatesListComponent implements OnInit {
  carPlates: CarPlate[]=[];
   constructor(private carPlatesService:CarPlateService){
   }
  ngOnInit(): void {
    this.GetCarPlates();
  }
 GetCarPlates() {
    this.carPlatesService.GetCarPlates().subscribe((ans) => {
      this.carPlates = ans;
        });
  }
  HandleDelete(id:number):void{
    this.carPlatesService.DeleteCarPlate(id).subscribe(()=>{
      this.GetCarPlates();
    });
  }
}
