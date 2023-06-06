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
import { Widget1Component } from './home-cxo/widgets/widget1/widget1.component';
import { SocialCornerComponent } from './social-corner/social-corner.component';
import { LeaveManagementComponent } from './leave-management/leave-management.component';
import { BannerSectionComponent } from './banner-section/banner-section.component';
import { FormTemplatesComponent } from './form-templates/form-templates.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeUserComponent,
    HomeManagerComponent,
    HomeCxoComponent,
    HeaderComponent,
    TicketManagementComponent,
    Widget1Component,
    SocialCornerComponent,
    LeaveManagementComponent,
    BannerSectionComponent,
    FormTemplatesComponent
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
