import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './user/home/home.component';

import { FooterComponent } from './common/footer/footer.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './common/header/header.component';
import { SidenavComponent } from './common/sidenav/sidenav.component';
import { UserService } from './core/services/user.service';
import { AuthGuard } from './auth/auth.guard';
import { AuthInterceptor } from './auth/auth.interceptor';
import { EventComponent } from './user/event/event.component';
import { AboutComponent } from './user/about/about.component';
import { ContactComponent } from './user/contact/contact.component';
import { EventService } from './core/services/event.service';
import { CatService } from './core/services/cat.service';
import { EventsComponent } from './user/events/events.component';
import { MessageService } from './core/services/message.service';
import { EvComponent } from './user/ev/ev.component';
//import { ModalComponent } from './common/header/header.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { PaypalComponent } from './user/paypal/paypal.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { MatIconModule } from '@angular/material';
import { ClientComponent } from './admin/client/client.component';
import { OrganizerComponent } from './admin/organizer/organizer.component';
import { MessageComponent } from './admin/message/message.component';
import { NavbarComponent } from './admin/navbar/navbar.component';
import { ContainerComponent } from './admin/container/container.component';
import { AlleventComponent } from './admin/allevent/allevent.component';
import { MessagedComponent } from './admin/messaged/messaged.component';
import { UpdateeventComponent } from './user/updateevent/updateevent.component';
import { UpdateprofilComponent } from './user/updateprofil/updateprofil.component';
import { CreateeventComponent } from './user/createevent/createevent.component';
import { OrgprofilComponent } from './user/orgprofil/orgprofil.component';
import { CliprofilComponent } from './user/cliprofil/cliprofil.component';
import { MyeventsComponent } from './user/myevents/myevents.component';
import { UpdateorgComponent } from './user/updateorg/updateorg.component';
import { TicketComponent } from './user/ticket/ticket.component';
import { FavorisComponent } from './user/favoris/favoris.component';






@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    ContactComponent,
    HeaderComponent,
    SidenavComponent,
    EventComponent,
    AboutComponent,
    EventsComponent,
    EvComponent,
    PaypalComponent,
    AdminComponent,
    UserComponent,
    ClientComponent,
    OrganizerComponent,
    MessageComponent,
    NavbarComponent,
    ContainerComponent,
    AlleventComponent,
    MessagedComponent,
    UpdateeventComponent,
    UpdateprofilComponent,
    CreateeventComponent,
    OrgprofilComponent,
    CliprofilComponent,
    MyeventsComponent,
    UpdateorgComponent,
    TicketComponent,
    FavorisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    MatIconModule
    
  ],
  //entryComponents: [ ModalComponent ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  },AuthGuard,UserService,EventService,CatService,MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
