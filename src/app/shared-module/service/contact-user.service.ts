import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of, Observable, throwError } from 'rxjs';
import { ContactModel } from 'src/app/core-module/model/contactModel';

@Injectable({
  providedIn: 'root'
})



export class ContactUserService {

  userList:ContactModel[]=[
  {firstName:'jitendra',lastName:'patel',email:'jittu7777@gmail.com',id:"2",phoneNumber:"8102839329",status:"a"},
  {firstName:'anikit',lastName:'palia',email:'anikt@gmail.com',id:"1",phoneNumber:"8102839329",status:"a"},
  {firstName:'arpit',lastName:'verma',email:'arpit@gmail.com',id:"3",phoneNumber:"8102839329",status:"a"},
  ];
  constructor() { }

  getAllContact():Observable<ContactModel[]>{
    return of(this.userList);
  }

  saveUser(contactModel:ContactModel):Observable<Success>{
    if(contactModel.id){
      return this.updateContact(contactModel);
    }
    else{
      contactModel.id=Math.floor(Math.random() * 17)+'';
      return this.createContact(contactModel);
    }
  }


  updateContact(contactModel:ContactModel):Observable<Success>{
    return this.updateUser(contactModel);
  }

  createContact(contactModel:ContactModel):Observable<Success>{
    return this.createUser(contactModel);
  }

  createUser(contactModel:ContactModel):Observable<Success>{
    if(!this.findUser(contactModel)){
      this.userList.push(contactModel);
      return of({operation:'success',message:'contact created successfully '});
    }
    else{
      return throwError({operation:'fail',message:'user id alredy exist'});
    }
  }

  updateUser(contactModel:ContactModel):Observable<Success>{
   let index=this.userList.findIndex((Obj)=> Obj.id===contactModel.id);
   if(index!=-1){
    this.userList[index]={...contactModel};
    return of({operation:'success',message:'contact updated successfully '});
   }
   else{
    return throwError({operation:'fail',message:'failed to update'});
   }
  }

  findUser(contactModel:ContactModel):boolean{
   let contact= this.userList.find((Obj)=>{
      return Obj.id==contactModel.id
    });
    if(contact){
      return true;
     
    }
    else{
      return false;
      
    }
  }
 

}

export interface Success{
  operation:string;
  message:string;
}