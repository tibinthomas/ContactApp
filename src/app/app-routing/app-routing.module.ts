import { VProfileComponent } from './../mainwindow/vprofile/vprofile.component';
import { VContactComponent } from './../mainwindow/vcontact/vcontact.component';
import { CEProfileComponent } from './../mainwindow/ceprofile/ceprofile.component';
import { CEContactComponent } from './../mainwindow/cecontact/cecontact.component';
import { MyContactsComponent } from '../mainwindow/my-contacts/my-contacts.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const routingData: Routes = [
  { path: 'my-contact', component: MyContactsComponent },
  { path: 'ce-contact', component: CEContactComponent },
  { path: 'ce-profile', component: CEProfileComponent },
  { path: 'v-contacts', component: VContactComponent },
  { path: 'v-profile', component: VProfileComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routingData)
  ],

  exports: [RouterModule],

  declarations: []
})
export class AppRoutingModule { }
