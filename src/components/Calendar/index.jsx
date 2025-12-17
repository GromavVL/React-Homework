import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  getDate,
  getDay,
  startOfMonth,
  startOfWeek,
  endOfMonth,
  getWeek,
  getYear,
  addDays,
  parse,
  isSameDay,
  isSameMonth,
} from 'date-fns';

const WEEK_DAYS = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

class Calendar extends Component {
  constructor (props) {
    super(props);
    this.state = {
      currentDate: new Date(),
      date: new Date(),
    };
  }
  render () {
    const { date, currentDate } = this.state;

    const currentDay = getDate(currentDate);
    const currentWeekday = WEEK_DAYS[getDay(currentDate)];

    const startWeek = getWeek(startOfMonth(date));
    const endWeek = getWeek(endOfMonth(date));

    
    const monthDays = [];
    for (let i = startWeek; i <= endWeek; i++) {
      const weekDays = [];
      let startWeekDay = startOfWeek(
        parse(`${i}`, 'w', new Date(getYear(date), 0, 1))
      );
      console.log('startWeekDay :>> ', startWeekDay);

      for (let j = 0; j < 7; j++) {
        weekDays.push(getDate(addDays(startWeekDay, j)));
      }
      monthDays.push(weekDays);
    }

    const isTheSameDay1 = isSameDay(currentDate, new Date(2025, 0, 8));
    const isTheSameDay2 = isSameDay(currentDate, currentDate);

    const isTheSameMonth1 = isSameMonth(date, new Date(2024, 0, 7));
    const isTheSameMonth2 = isSameMonth(date, new Date(2025, 0, 5));
    return (
      <section>
        <div>{currentDay}</div>
        <div>{currentWeekday}</div>
      </section>
    );
  }
}
export default Calendar;
