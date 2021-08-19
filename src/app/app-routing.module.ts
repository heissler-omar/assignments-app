import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Assg1Component } from './pages/assg1/assg1.component';
import { Assg2Component } from './pages/assg2/assg2.component';
import { Assg3Component } from './pages/assg3/assg3.component';
import { Assg4Component } from './pages/assg4/assg4.component';
import { Assg5Component } from './pages/assg5/assg5.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'assg1', component: Assg1Component},
  {path: 'assg2', component: Assg2Component},
  {path: 'assg3', component: Assg3Component},
  {path: 'assg4', component: Assg4Component},
  {path: 'assg5', component: Assg5Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
