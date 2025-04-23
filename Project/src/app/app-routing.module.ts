import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NewsDetailComponent} from "./news-detail/news-detail.component";
import {NewsComponent} from "./news/news.component";
import {ScheduleComponent} from "./schedule/schedule.component";
import {LoginComponent} from "./login/login.component";
import {HomePageComponent} from "./home-page/home-page.component";
import {PersonalInfoComponent} from "./personal-info/personal-info.component";

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomePageComponent},
  {path: 'home/personalInfo', component: PersonalInfoComponent},
  {path: 'home/news', component: NewsComponent},
  {path: 'home/news/:news_id', component: NewsDetailComponent},
  {path: 'home/schedule', component: ScheduleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
