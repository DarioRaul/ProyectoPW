import { Component, HostBinding, OnInit } from '@angular/core';
import * as moment from 'moment';
import { AmazingTimePickerService } from 'amazing-time-picker';


import {ActivatedRoute, Router} from '@angular/router';



@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css']
})
export class CalendarioComponent implements OnInit {

  // tslint:disable-next-line: max-line-length
  constructor(private atp: AmazingTimePickerService, private router: Router, private activatedRoute: ActivatedRoute) { }

  week: any = [
    'Lunes',
    'Martes',
    'Miercoles',
    'Jueves',
    'Viernes',
    'Sabado',
    'Domingo'
  ];


  monthSelect: any[] = [];
  dateSelect: any;
  dateValue: any;

  @HostBinding('class') classes = 'row';



  edit = false;


  ngOnInit(): void {
    this.getDaysFromDate(6, 2021);
  }

  // tslint:disable-next-line: typedef
  getDaysFromDate(month: number, year: number) {

    const startDate = moment.utc(`${year}/${month}/01`);
    const endDate = startDate.clone().endOf('month');
    this.dateSelect = startDate;

    const diffDays = endDate.diff(startDate, 'days', true);
    const numberDays = Math.round(diffDays);

    const arrayDays = Object.keys([...Array(numberDays)]).map((a: any) => {
      // tslint:disable-next-line: radix
      a = parseInt(a) + 1;
      const dayObject = moment(`${year}-${month}-${a}`);
      return {
        name: dayObject.format('dddd'),
        value: a,
        indexWeek: dayObject.isoWeekday()
      };
    });

    this.monthSelect = arrayDays;
  }

  // tslint:disable-next-line: typedef
  changeMonth(flag: number) {
    if (flag < 0) {
      const prevDate = this.dateSelect.clone().subtract(1, 'month');
      this.getDaysFromDate(prevDate.format('MM'), prevDate.format('YYYY'));
    } else {
      const nextDate = this.dateSelect.clone().add(1, 'month');
      this.getDaysFromDate(nextDate.format('MM'), nextDate.format('YYYY'));
    }
  }

  // tslint:disable-next-line: typedef
  clickDay(day: { value: any; }) {
    const monthYear = this.dateSelect.format('YYYY-MM');
    const parse = `${monthYear}-${day.value}`;
    const objectDate = moment(parse);
    console.log(objectDate);
    this.dateValue = objectDate;
  }

  // tslint:disable-next-line: typedef
  open(){
    const amazingTimePicker = this.atp.open();
    amazingTimePicker.afterClose().subscribe(time => {
      console.log(time);
    });
  }
}
