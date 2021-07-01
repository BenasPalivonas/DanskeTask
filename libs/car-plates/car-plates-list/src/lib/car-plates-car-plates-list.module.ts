import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedUiModule } from '@danske-task/shared-ui';
import { CarPlatesListComponent } from './car-plates-list/car-plates-list.component';
import {CarPlatesDataAcessModule} from '@danske-task/car-plates/data-acess';
import {CarPlatesCarPlatesEditModule} from '@danske-task/car-plates/car-plates-edit';
@NgModule({
  imports: [
    CommonModule,
    SharedUiModule,
    CarPlatesDataAcessModule,
    CarPlatesCarPlatesEditModule,
],
  declarations:[ CarPlatesListComponent],
  exports: [
    CarPlatesListComponent
  ],
})
export class CarPlatesCarPlatesListModule {}
