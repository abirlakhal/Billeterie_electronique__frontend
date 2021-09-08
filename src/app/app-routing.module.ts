import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './user/about/about.component';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from './auth/auth.guard';
import { ContactComponent } from './user/contact/contact.component';
import { EvComponent } from './user/ev/ev.component';
import { EventComponent } from './user/event/event.component';
import { EventsComponent } from './user/events/events.component';
import { HomeComponent } from './user/home/home.component';
import { UserComponent } from './user/user.component';
import { ClientComponent } from './admin/client/client.component';
import { MessageComponent } from './admin/message/message.component';
import { ContainerComponent } from './admin/container/container.component';
import { OrganizerComponent } from './admin/organizer/organizer.component';
import { AlleventComponent } from './admin/allevent/allevent.component';
import { UpdateprofilComponent } from './user/updateprofil/updateprofil.component';
import { UpdateeventComponent } from './user/updateevent/updateevent.component';
import { MessagedComponent } from './admin/messaged/messaged.component';
import { OrgprofilComponent } from './user/orgprofil/orgprofil.component';
import { CliprofilComponent } from './user/cliprofil/cliprofil.component';
import { UpdateorgComponent } from './user/updateorg/updateorg.component';
import { PaypalComponent } from './user/paypal/paypal.component';
import { MyeventsComponent } from './user/myevents/myevents.component';
import { CreateeventComponent } from './user/createevent/createevent.component';
import { TicketComponent } from './user/ticket/ticket.component';
import { FavorisComponent } from './user/favoris/favoris.component';



const routes: Routes = [
 { path: '' , component: UserComponent,
    children: [
      {
        path: '', component: HomeComponent 
      },
      {
        path: 'event/:id', component: EventComponent 
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
        path: 'upevent/:id', component: UpdateeventComponent  
      },
      {
        path: 'upprofil/:id', component: UpdateprofilComponent  
      },
      {
        path: 'cliprofil/:id', component: CliprofilComponent 
      },
      {
        path: 'orgprofil/:id', component: OrgprofilComponent 
      },
      {
        path: 'updateUser/:id', component: UpdateprofilComponent 
      },
      {
        path: 'updateOrg/:id', component: UpdateorgComponent
      },
      {
        path: 'paypal', component: PaypalComponent
      },
      {
        path: 'myevent', component: MyeventsComponent
      },
      {
        path: 'createevent', component: CreateeventComponent
      },
      {
        path: 'updateevent/:id', component: UpdateeventComponent
      },
      {
        path: 'ticket', component: TicketComponent
      },
      {
        path: 'favoris', component: FavorisComponent
      }
    ]
  },
 {
  path: 'admin', component: AdminComponent,
  children: [
    {
      path: '', component: ContainerComponent 
    },
    {
      path: 'clients', component: ClientComponent 
    },
    {
      path: 'allevent', component: AlleventComponent 
    },
    {
      path: 'message', component: MessageComponent 
    },
    {
      path: 'organizers', component: OrganizerComponent 
    },
    {
      path: 'allevent/eventd/:id', component: EventComponent 
    },
    {
      path: 'message/:id', component: MessagedComponent 
    },
    {
      path: 'client/:id', component: CliprofilComponent 
    },
    {
      path: 'org/:id', component: OrgprofilComponent 
    },
    {
      path: 'updateevent/:id', component: UpdateeventComponent
    },
  ]  
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
