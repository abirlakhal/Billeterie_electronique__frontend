import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { FooterComponent } from './common/footer/footer.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './common/header/header.component';
import { SidenavComponent } from './common/sidenav/sidenav.component';
import { ProfilComponent } from './profil/profil.component';
import { UserService } from './core/services/user.service';
import { AuthGuard } from './auth/auth.guard';
import { AuthInterceptor } from './auth/auth.interceptor';
import { CartComponent } from './cart/cart.component';
import { EventComponent } from './event/event.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { EventService } from './core/services/event.service';
import { CatService } from './core/services/cat.service';
import { EventsComponent } from './events/events.component';
import { MessageService } from './core/services/message.service';
import { EvComponent } from './ev/ev.component';
//import { ModalComponent } from './common/header/header.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { PaypalComponent } from './paypal/paypal.component';
import { AdminComponent } from './admin/admin.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    ContactComponent,
    HeaderComponent,
    SidenavComponent,
    ProfilComponent,
    CartComponent,
    EventComponent,
    AboutComponent,
    EventsComponent,
    EvComponent,
    PaypalComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    NgxPaginationModule
    
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
