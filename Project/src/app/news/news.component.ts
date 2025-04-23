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
    this.light();
  }

  ngOnInit(): void {
    this.light();
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

  light(){
    if(this.page == 1){
      const one = document.getElementById('one');
      if(one != null) {
        one.classList.add('light');
      }
    }
    if(this.page == 2){
      const one = document.getElementById('two');
      if(one != null) {
        one.classList.add('light');
      }
    }
    if(this.page == 3){
      const one = document.getElementById('three');
      if(one != null) {
        one.classList.add('light');
      }
    }
    if(this.page == 4){
      const one = document.getElementById('four');
      if(one != null) {
        one.classList.add('light');
      }
    }
    if(this.page == 5){
      const one = document.getElementById('five');
      if(one != null) {
        one.classList.add('light');
      }
    }
    if(this.page == 6){
      const one = document.getElementById('six');
      if(one != null) {
        one.classList.add('light');
      }
    }
    if(this.page == 7){
      const one = document.getElementById('seven');
      if(one != null) {
        one.classList.add('light');
      }
    }
  }

  Click_left(){
    if(this.page > 1){
      this.page -= 1;
      this.enlight();
      this.light();
      this.startIndex = this.items_on_page * (this.page - 1);
      this.pageNews = [];
      this.getPageNews();
    }
  }

  Click_right(){
    if(this.page < 7){
      this.page += 1;
      this.enlight();
      this.light();
      this.startIndex = this.items_on_page * (this.page - 1);
      this.pageNews = [];
      this.getPageNews();
    }
  }

  enlight(){
    if(this.page != 1){
      const one = document.getElementById('one');
      if(one != null) {
        one.classList.remove('light');
      }
    }
    if(this.page != 2){
      const one = document.getElementById('two');
      if(one != null) {
        one.classList.remove('light');
      }
    }
    if(this.page != 3){
      const one = document.getElementById('three');
      if(one != null) {
        one.classList.remove('light');
      }
    }
    if(this.page != 4){
      const one = document.getElementById('four');
      if(one != null) {
        one.classList.remove('light');
      }
    }
    if(this.page != 5) {
      const one = document.getElementById('five');
      if (one != null) {
        one.classList.remove('light');
      }
    }
      if(this.page != 6){
        const one = document.getElementById('six');
        if(one != null) {
          one.classList.remove('light');
        }
      }
      if(this.page != 7){
        const one = document.getElementById('seven');
        if(one != null) {
          one.classList.remove('light');
        }
      }
  }
}
