import { Component, OnInit } from '@angular/core';
import {schedule} from "../module";

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit{
  schedule = schedule;
  constructor() {
  }

  ngOnInit(): void {
    this.InsertSchedule();
  }

  InsertSchedule(){
    for(let course of schedule.courses){
      for(let day of course.day){
        for(let i = 0; i < course.duration; i++){
          let format:string = "";
          let start = course.start_time + i;
          let time:string = String(day) + String(start);
          const Course_day = document.querySelector('#' + time)!;
          Course_day.classList.add("light");
          if(course.online){
            format = "онлайн";
          }
          if(!course.online){
            format = "оффлайн";
          }
          Course_day.innerHTML = `<span> ${course.course_name} </span>
                                  <span> ${course.professor_name} ${course.course_type} ${format} ${course.room}</span>
                                  <span> (${course.start_time}:00 - ${course.start_time + 1}:00)</span> `;

        }
      }
    }
  }
}
