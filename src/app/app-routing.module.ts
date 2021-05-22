import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from './auth/auth.guard';
import { CartComponent } from './cart/cart.component';
import { ContactComponent } from './contact/contact.component';
import { EvComponent } from './ev/ev.component';
import { EventComponent } from './event/event.component';
import { EventsComponent } from './events/events.component';
import { HomeComponent } from './home/home.component';
import { ProfilComponent } from './profil/profil.component';


const routes: Routes = [
 { path: '' , component: HomeComponent },
 {
  path: 'profil', component: ProfilComponent,canActivate:[AuthGuard] 
 },
 {
  path: 'home', component: HomeComponent 
 },
 {
  path: 'event/:id', component: EventComponent 
 },
 {
  path: 'cart', component: CartComponent 
 },
 {
  path: 'about', component: AboutComponent 
 },
 {
  path: 'contact', component: ContactComponent 
 },
 {
  path: 'events', component: EventsComponent  
 },
 {
  path: 'ev/:id', component: EvComponent  
 },
 {
  path: 'card', component: CartComponent  
 },
 {
  path: 'admin', component: AdminComponent  
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
