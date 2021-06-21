import {AfterViewInit, Component, Input, OnChanges, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
 export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements AfterViewInit ,OnInit  {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  //i can do this =[{name:"carPlate",displayName:"Car Plate"}]
  @Input() tableData:PeriodicElement[]=[];
  dataSource?:MatTableDataSource<PeriodicElement>;
  @ViewChild(MatPaginator) paginator?: MatPaginator;
  ngOnInit(){
  this.dataSource =new MatTableDataSource<PeriodicElement>(this.tableData);
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