import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import {Router} from '@angular/router';
@Component({
  selector: 'car-plates-edit',
  templateUrl: './car-plates-edit.component.html',
  styleUrls: ['./car-plates-edit.component.scss']
})
export class CarPlatesEditComponent implements OnInit {
 dialogRef!:MatDialogRef <TemplateRef<any>>;
  constructor(
    // private dialog: MatDialog,
    // private router:Router
  ) { }
  @ViewChild("editFormDialog",{static:true}) editFormDialog!:TemplateRef<any>
  ngOnInit(): void {
  }

}