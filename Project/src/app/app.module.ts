import { NgModule } from '@angular/core';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NewsComponent } from './news/news.component';
import { NewsDetailComponent } from './news-detail/news-detail.component';
import {ScheduleComponent} from "./schedule/schedule.component";
import { LoginComponent } from './login/login.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NewsComponent,
    NewsDetailComponent,
    ScheduleComponent,
    LoginComponent,
    HomePageComponent,
    PersonalInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
