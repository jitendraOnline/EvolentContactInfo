import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ContactModel } from 'src/app/core-module/model/contactModel';
import { ContactUserService } from 'src/app/shared-module/service/contact-user.service';
import { AppConfigUrl } from '../../../shared-module/constants/app.config';

@Component({
  selector: 'app-manage-contact',
  templateUrl: './manage-contact.component.html',
  styleUrls: ['./manage-contact.component.scss'],

})
export class ManageContactComponent implements OnInit {

constructor(private activatedRoute: ActivatedRoute,
            private contactService: ContactUserService) { }

contactList: ContactModel[] = [];
selectedContact: ContactModel;
appUrlConstant = AppConfigUrl;
  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      const paramas = params['params'];
      if (paramas['id']) {
        this.selectedContact = this.contactService.findUser(paramas['id']);
        if (!this.selectedContact ) {
          alert('invaid id was passed in url');
        }
      }
    });
    console.log(this.selectedContact);
  }
}
