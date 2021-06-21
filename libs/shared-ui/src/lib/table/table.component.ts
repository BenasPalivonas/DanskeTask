import {AfterViewInit, Component, Input, ViewChild} from '@angular/core';
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
export class TableComponent implements AfterViewInit  {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  @Input() tableData:PeriodicElement[]=[];
  dataSource = new MatTableDataSource<PeriodicElement>(this.tableData);

  @ViewChild(MatPaginator) paginator?: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator||null;
  }

}
