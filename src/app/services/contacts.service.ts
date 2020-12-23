import { Contact } from './../model/model.contact';
import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';




@Injectable()
export class ContactsService {

    constructor(public http:HttpClient){}



    getContacts(){
       return this.http.get("http://localhost:8080/contacts"); 
    }

    getContactsId(id:number){
        return this.http.get("http://localhost:8080/contacts/"+id); 
     }

    saveContact(contact:Contact){
        return this.http.post("http://localhost:8080/contacts",contact); 
    }
    uploadContact(c:Contact){
        return this.http.post("http://localhost:8080/contacts/"+c.id,c); 
    }

    deleteContact(id:number){
       return this.http.delete("http://localhost:8080/contacts/"+id);

    }


   /* getDelete(contact:Contact, id:number){
        this.http.delete("http://localhost:8080/contacts/{id}",contact.id);
    }
*/
}