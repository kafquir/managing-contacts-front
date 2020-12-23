import { EditComponent } from './edit/edit.component';
import { NewContactComponent } from './new-contact/new-contact.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactsComponent } from './contacts/contacts.component';

const routes: Routes = [
  {path:"about", component:AboutComponent},
  {path:"contacts", component:ContactsComponent},
  {path:"nouveau-contact", component:NewContactComponent},
  {path:"edit/:id", component:EditComponent},


  {path:"", redirectTo:'/about',pathMatch:'full'}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
