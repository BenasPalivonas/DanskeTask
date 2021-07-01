import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarPlatesEditComponent } from './car-plates-edit/car-plates-edit.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
@NgModule({
  imports: [CommonModule,
  MatDialogModule,
  MatFormFieldModule,
  MatButtonModule],
  declarations: [
    CarPlatesEditComponent
  ],
  exports: [
    CarPlatesEditComponent
  ],
})
export class CarPlatesCarPlatesEditModule {}
