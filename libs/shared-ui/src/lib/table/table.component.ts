import {AfterViewInit, Component, Input, OnChanges, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { CarPlate } from 'libs/car-plates/data-acess/src/lib/car-plate';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements AfterViewInit ,OnInit  {
  displayedColumns: string[] = ['_id', 'plateNumber', 'ownerName', 'actions'];
  @Input() tableData?:CarPlate[]=[];
  dataSource?:MatTableDataSource<CarPlate>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  ngOnInit(){
  this.dataSource =new MatTableDataSource<CarPlate>(this.tableData);
  }
  ngAfterViewInit() {
  if(this.dataSource){
    this.dataSource.paginator = this.paginator || null;
    }
  }
  changePageEvent($event:any){
    console.log($event);
  }

}