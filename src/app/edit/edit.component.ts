import { ContactsService } from './../services/contacts.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Contact } from '../model/model.contact';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  contact:any[0];
  idContact:number;

  constructor(public activateRoute:ActivatedRoute,public contactService:ContactsService) { 
    this.idContact=activateRoute.snapshot.params["id"];
  }

  ngOnInit(): void {
    this.contactService.getContactsId(this.idContact).subscribe(data=>{
      this.contact=data;
    },err=>{alert("there is somethinf wrong please check again !")})
  }

  editContact(){

    this.contactService.uploadContact(this.contact).subscribe(data=>
      {
        console.log(data);
        alert("uploading successful thank you very much Sir !");
      },err=>{
        console.log(err);
       alert("Ayay there is something wrong verify again please !");
      })
         
  }
}
