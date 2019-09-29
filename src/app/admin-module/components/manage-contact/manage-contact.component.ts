import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ContactModel } from 'src/app/core-module/model/contactModel';
import { ContactUserService } from 'src/app/shared-module/service/contact-user.service';
import { AdminSharedDataService } from '../../services/admin-shared-data.service';


@Component({
  selector: 'app-manage-contact',
  templateUrl: './manage-contact.component.html',
  styleUrls: ['./manage-contact.component.scss'],
  
})
export class ManageContactComponent implements OnInit,OnDestroy {

constructor(private activatedRoute:ActivatedRoute,private router:Router, private contactService:ContactUserService,private adminSharedDataService:AdminSharedDataService) { }

contactList:ContactModel[]=[];
selectedContact:ContactModel;

  ngOnInit() {
    
    this.activatedRoute.paramMap.subscribe((params:ParamMap)=>{
      let paramas=params['params'];
      this.contactService.getAllContact().subscribe((contactList:ContactModel[])=>{
        this.contactList=contactList;
      })

      this.selectedContact=this.findContactById(paramas['id']);

      if(paramas['id']){
        if(!this.selectedContact ){
          alert("invaid id was passed in url");
        }

      }

    })

    console.log(this.selectedContact);
   
  }

  

  // selectContact(selectContact:ContactModel){
  //   console.log('selectedLog in manage',selectContact);
  //   this.selectedContact=selectContact;
  //   this.router.navigate(['./',{id:selectContact.id}]);
  // }

  findContactById(id:string){
   return this.selectedContact=this.contactList.find((obj)=>{
      if(obj.id==id){
        console.log("id found for ",obj.id);
        return true;
      }
      else{
        return false;
      }
    })

  }

  ngOnDestroy(){
   
  }

}
