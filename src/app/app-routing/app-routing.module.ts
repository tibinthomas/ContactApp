import { MyContactsComponent } from '../mainwindow/my-contacts/my-contacts.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const routingData: Routes = [
  { path: 'my-contact', component: MyContactsComponent }
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
