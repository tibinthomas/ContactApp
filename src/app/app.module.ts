import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {MdSidenavModule} from '@angular/material';

import { AppComponent } from './app.component';
import { TopbarComponent } from './topbar/topbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MainwindowComponent } from './mainwindow/mainwindow.component';

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    SidebarComponent,
    MainwindowComponent,
    MdSidenavModule
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
