import { Router, RouterModule } from '@angular/router';
import { ContactsService } from './../services/contacts.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {NgForm} from '@angular/forms';



@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  allContacts:any;
  motcle:string="";

  constructor(public contactsService:ContactsService,public http:HttpClient, public router:Router) { }

  ngOnInit(): void {
    this.getAllContacts();
  }

  getAllContacts(){
    this.contactsService.getContacts().subscribe(data=>{
      this.allContacts=data;
    }, err=> {console.log(err)});

  }

  deleteContact(id:number){
     this.contactsService.deleteContact(id).subscribe(data=>{
       alert("your contact is deleted !")
     },err=>{
       alert("Your contact still here verify if something is wrong !");
     })
  }

  editContact(id:number){
       this.router.navigate(["edit",id]);
  }

}
