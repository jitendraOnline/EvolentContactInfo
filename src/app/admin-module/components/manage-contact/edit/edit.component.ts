import { Component, OnInit,Input, OnChanges, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ContactModel } from 'src/app/core-module/model/contactModel';
import { ContactUserService } from 'src/app/shared-module/service/contact-user.service';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  @Input('editContact') editContact:ContactModel;
  profileForm:any;
  constructor(private fb: FormBuilder,private contactUserService:ContactUserService) { 

  }
  typeOfAction:string='new';

  ngOnInit() {
  }

  onSubmit() {
    console.warn(this.profileForm.value);
    this.contactUserService.saveUser(this.profileForm.value).subscribe((resposne)=>{
      alert(resposne.message);
    },(error)=>{
      alert(error.message);
    })
  }

  createNewContact(){
    this.typeOfAction='new'
    this.profileForm = this.fb.group({
      firstName: [''],
      lastName: [''],
      email:[''],
      phoneNumber:[''],
      status:[''] 
      });
  }

  editSelecctedContact(contactInfo:ContactModel){
    this.typeOfAction='edit'
    this.profileForm = this.fb.group({
      id:contactInfo['id'],
      firstName:contactInfo['firstName'],
      lastName:contactInfo['lastName'],
      email:contactInfo['email'],
      phoneNumber:contactInfo['phoneNumber'],
      status:contactInfo['status'],
    });
  }

  ngOnChanges(){
    if(this.editContact){
      this.editSelecctedContact(this.editContact);
    }
    else{
      this.createNewContact();
    }
  }
  
 

}
