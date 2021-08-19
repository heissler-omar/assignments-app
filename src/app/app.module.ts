import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatRippleModule} from '@angular/material/core';
import {MatTooltipModule} from '@angular/material/tooltip';

/* Components: */
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HomeComponent } from './pages/home/home.component';
import { Assg1Component } from './pages/assg1/assg1.component';
import { Assg2Component } from './pages/assg2/assg2.component';
import { Assg3Component } from './pages/assg3/assg3.component';
import { Assg4Component } from './pages/assg4/assg4.component';
import { GameControlComponent } from './components/assg4-components/game-control/game-control.component';
import { OddComponent } from './components/assg4-components/odd/odd.component';
import { EvenComponent } from './components/assg4-components/even/even.component';
import { Assg5Component } from './pages/assg5/assg5.component';
import { ActiveUsersComponent } from './components/assg5-components/active-users/active-users.component';
import { InactiveUsersComponent } from './components/assg5-components/inactive-users/inactive-users.component';
import { UserService } from './services/users.service';
import { CounterService } from './services/counter.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    HomeComponent,
    Assg1Component,
    Assg2Component,
    Assg3Component,
    Assg4Component,
    GameControlComponent,
    OddComponent,
    EvenComponent,
    Assg5Component,
    ActiveUsersComponent,
    InactiveUsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonToggleModule,
    MatRippleModule,
    MatTooltipModule,
    FormsModule
  ],
  providers: [UserService, CounterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
