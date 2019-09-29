import { Component, OnInit ,Input, OnChanges, Output} from '@angular/core';
import { EventEmitter } from 'events';
import { ContactModel } from 'src/app/core-module/model/contactModel';

@Component({
  selector: 'app-list-contact',
  templateUrl: './list-contact.component.html',
  styleUrls: ['./list-contact.component.scss']
})
export class ListContactComponent implements OnInit,OnChanges {

  @Input('contact') contact:ContactModel;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(){
    console.log(this.contact.firstName);
  }

  selectContact(){
  
  }
}
