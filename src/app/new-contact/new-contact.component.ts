import { ContactsService } from './../services/contacts.service';
import { Contact } from '../model/model.contact';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.component.html',
  styleUrls: ['./new-contact.component.scss']
})
export class NewContactComponent implements OnInit {

  contact:Contact=new Contact();
  mode:number=1;


  constructor(public http:HttpClient,public contactService:ContactsService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.contactService.saveContact(this.contact).subscribe(data=>{
      console.log(data);
      this.mode=2;
    },err=>{console.log(err)});
  }

}
