import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarPlateService } from './car-plate.service';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers:[
    CarPlateService
  ]
})
export class CarPlatesDataAcessModule {}
