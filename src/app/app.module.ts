import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatRippleModule} from '@angular/material/core';

/* Components: */
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HomeComponent } from './pages/home/home.component';
import { Assg1Component } from './pages/assg1/assg1.component';
import { Assg2Component } from './pages/assg2/assg2.component';
import { Assg3Component } from './pages/assg3/assg3.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    HomeComponent,
    Assg1Component,
    Assg2Component,
    Assg3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonToggleModule,
    MatRippleModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
