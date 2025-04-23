import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {New, news} from "../module";
import {Location} from "@angular/common";

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.css']
})
export class NewsDetailComponent implements OnInit {
  news = news;
  new: New | undefined;

  constructor(private route: ActivatedRoute,
              private location: Location,) { }

  ngOnInit(): void{
    this.getNew();
  }

  getNew(){
    const id = Number(this.route.snapshot.paramMap.get('news_id'));
    this.new = news.find(x => x.id === id);
  }

  Back(){
    this.location.back();
  }
}
