import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table/table.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { FilterMenuComponent } from './filter-menu/filter-menu.component';
import { MatButtonModule } from '@angular/material/button';
@NgModule({
  imports: [CommonModule,
  MatPaginatorModule,
  BrowserAnimationsModule,
  BrowserModule,
  MatFormFieldModule,
  MatTableModule,
  MatButtonModule
  ],
  declarations: [
    TableComponent,
    FilterMenuComponent,
  ],
  exports: [
    TableComponent,
    FilterMenuComponent,
  ],
})
export class SharedUiModule {}
