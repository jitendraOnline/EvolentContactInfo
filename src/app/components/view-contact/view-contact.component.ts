import { Component, OnInit,ViewChild } from '@angular/core';

import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { ContactUserService } from 'src/app/shared-module/service/contact-user.service';
import { ContactModel } from 'src/app/core-module/model/contactModel';
@Component({
  selector: 'app-view-contact',
  templateUrl: './view-contact.component.html',
  styleUrls: ['./view-contact.component.scss']
})
export class ViewContactComponent implements OnInit {

dataSource: MatTableDataSource<ContactModel>;
@ViewChild(MatPaginator,{static: false}) paginator: MatPaginator;
@ViewChild(MatSort,{static: false}) sort: MatSort;
contactList:ContactModel[]  = [];

constructor( private contactSerivce:ContactUserService) {
}
 
ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
}

ngOnInit(){
    this.contactSerivce.getAllContact().subscribe((userList:ContactModel[])=>{
      this.contactList=userList;
      this.dataSource = new MatTableDataSource(this.contactList);
    }) 
}

displayedColumns = ['id', 'firstName', 'lastName', 'email','phoneNumber','status','action'];

applyFilter(filterValue: string) {
  filterValue = filterValue.trim(); // Remove whitespace
  filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
  this.dataSource.filter = filterValue;
}

}


