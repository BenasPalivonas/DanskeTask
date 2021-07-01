import {AfterViewInit, Component, EventEmitter, Input, OnChanges, OnInit, Output, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {CarPlate} from '../../../../car-plates/models/car-plate-interface'
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements AfterViewInit , OnChanges  {
  displayedColumns: string[] = ['_id', 'plateNumber', 'ownerName', 'actions'];
  @Input() tableData?:CarPlate[]=[];
  @Output() HandleDelete=new EventEmitter();
  @Output() HandleEdit= new EventEmitter();
  dataSource?:MatTableDataSource<CarPlate>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  private assignDataSource() {
    this.dataSource = new MatTableDataSource<CarPlate>(this.tableData);
  }

  ngAfterViewInit() {
  this.assignPaginator();
  }
  private assignPaginator() {
    if (this.dataSource) {
      this.dataSource.paginator = this.paginator || null;
    }
  }

  ngOnChanges()	{
    if(this.dataSource){
      this.dataSource.data=this.tableData as CarPlate[]
      this.dataSource.paginator = this.paginator || null;
      return;
    }
    this.assignDataSource();
  }

  deleteElement($element:CarPlate){
  //   console.log($element);
  //  const newData=this.dataSource?.data.filter(a=>{
  //     console.log(a.plateNumber,$element.plateNumber);
  //     if( a.plateNumber == $element.plateNumber){
  //         return false;
  //     }
  //     return true;
  //   })
  //  this.dataSource=new MatTableDataSource<CarPlate>(newData);
  //  this.dataSource.paginator = this.paginator || null;
  this.HandleDelete.emit($element._id);
  }
  editElement($element:CarPlate){
    $element.ownerName+="test";
    this.HandleEdit.emit($element);   
  }
  changePageEvent($event:any){
    console.log($event);
  }

}