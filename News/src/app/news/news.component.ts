import { Component, OnInit } from '@angular/core';
import {New, news} from "../module";

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  news = news;
  first_column: New[] = [];
  second_column: New[] = [];
  pageNews: New[] = [];
  page: number;
  collection_size: number;
  items_on_page: number;
  startIndex: number;

  constructor() {
    this.page = 1;
    this.collection_size = news.length;
    this.items_on_page = 6;
    this.startIndex = 0;
    this.getPageNews();
  }

  ngOnInit(): void {
    this.getPageNews();
  }


  getPageNews(){
    this.pageNews = news.slice(this.startIndex, this.startIndex + this.items_on_page);
    this.first_column = this.pageNews.slice(0, 3);
    this.second_column = this.pageNews.slice(3, 6);
  }

  ChangePage(page: number){
    this.startIndex = this.items_on_page * (page - 1);
    this.pageNews = [];
    this.getPageNews();
  }
}
