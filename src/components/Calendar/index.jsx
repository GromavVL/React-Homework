import React, { Component } from 'react';
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

const WEEK_DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

class Calendar extends Component {
  constructor (props) {
    super(props);

    this.state = {
      curruntDate: new Date(),
      date: new Date(),
    };
  }
  render () {
    const { date, currentDate } = this.state;
    const currentDay = getdate(currentDate);
    const currentWeekday = WEEL_DAY[getDay(currentDate)];
    return <div>Calendar</div>;
  }
}
export default Calendar;
