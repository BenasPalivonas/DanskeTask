import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarPlatesListComponent } from './car-plates-list/car-plates-list.component';
import {SharedUiModule} from '@danske-task/shared-ui';

@NgModule({
  imports: [
    CommonModule
  ,SharedUiModule],
  declarations: [
    CarPlatesListComponent
  ],
  exports: [
    CarPlatesListComponent
  ],
})
export class CarPlatesCarPlatesListModule {}
