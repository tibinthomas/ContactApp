import { PersonService } from './shared/person.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MdSidenavModule, MdIconModule, MdButtonModule, MdMenuModule } from '@angular/material';

import { AppComponent } from './app.component';
import { TopbarComponent } from './topbar/topbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MainwindowComponent } from './mainwindow/mainwindow.component';
import { MyContactsComponent } from './mainwindow/my-contacts/my-contacts.component';
import { CEProfileComponent } from './mainwindow/ceprofile/ceprofile.component';
import { VProfileComponent } from './mainwindow/vprofile/vprofile.component';
import { CEContactComponent } from './mainwindow/cecontact/cecontact.component';
import { VContactComponent } from './mainwindow/vcontact/vcontact.component';

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    SidebarComponent,
    MainwindowComponent,
    MyContactsComponent,
    CEProfileComponent,
    VProfileComponent,
    CEContactComponent,
    VContactComponent,
  ],
  imports: [
    BrowserModule,
    MdSidenavModule,
    BrowserAnimationsModule,
    MdIconModule,
    MdButtonModule,
    MdMenuModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [PersonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
