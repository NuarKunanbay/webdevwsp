import { NgModule } from '@angular/core';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NewsComponent } from './news/news.component';
import { NewsDetailComponent } from './news-detail/news-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NewsComponent,
    NewsDetailComponent
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
