import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FullCalendarModule } from '@fullcalendar/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeUserComponent } from './home-user/home-user.component';
import { HomeManagerComponent } from './home-manager/home-manager.component';
import { HomeCxoComponent } from './home-cxo/home-cxo.component';
import { HeaderComponent } from './header/header.component';
import { TicketManagementComponent } from './ticket-management/ticket-management.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeUserComponent,
    HomeManagerComponent,
    HomeCxoComponent,
    HeaderComponent,
    TicketManagementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FullCalendarModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
