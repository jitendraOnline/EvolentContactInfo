import { Component, OnInit, Input, OnChanges, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ContactModel } from 'src/app/core-module/model/contactModel';
import { ContactUserService } from 'src/app/shared-module/service/contact-user.service';
import { Router } from '@angular/router';
import { AppConstants } from 'src/app/shared-module/constants/app.constant';
import { AppConfigUrl } from 'src/app/shared-module/constants/app.config';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  @Input('editContact') editContact: ContactModel;
  profileForm: any;
  typeOfAction = 'new';
  constant = AppConstants;

  constructor(private fb: FormBuilder,
              private contactUserService: ContactUserService,
              private router: Router,
              ) {  }

  ngOnChanges() {
    this.createNewContact();
    if (this.editContact) {
      this.editSelecctedContact(this.editContact);
    }
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.profileForm);
    this.contactUserService.saveUser(this.profileForm.value).subscribe((resposne) => {
      alert(resposne.message);
      this.router.navigate([AppConfigUrl.viewContactNav]);
    }, (error) => {
      alert(this.constant.GEN_SAVE_MSG_ERR + ' ' + error.message);
    });
  }

  createNewContact() {
    this.typeOfAction = 'new';
    this.profileForm = this.fb.group({
      id: [''],
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required]],
      status: ['', [Validators.required]]
      });
  }


  editSelecctedContact(contactInfo: ContactModel) {
    this.typeOfAction = 'edit';
    this.profileForm.patchValue(contactInfo);
    console.log('value pathched');
  }

  deleteContact() {
    this.contactUserService.deleteContact(this.editContact.id).subscribe((resposne) => {
      alert(resposne.message);
      this.router.navigate([AppConfigUrl.viewContactNav]);
    }, (error) => {
      alert(this.constant.GEN_ERR_MSG + ' ' + error.message);
    });
  }

  // method to reset to defult
  resetToDefulat() {
  this.editSelecctedContact(this.editContact);
  }

}
