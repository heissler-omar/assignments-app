import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Assg1Component } from './pages/assg1/assg1.component';
import { Assg2Component } from './pages/assg2/assg2.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'assg1', component: Assg1Component},
  {path: 'assg2', component: Assg2Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
