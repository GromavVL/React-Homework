import React, { Component } from "react";
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
} from "date-fns";

const WEEK_DAYS = ["SANDAY", "M...", "T", "W", "T", "F", "S"];

class Calendar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      curruntDate: new Date(),
      date: new Date(),
    };
  }
  render() {
    const { curruntDate: currentDate, date } = this.state;

    const curruntDay = getDate(currentDate);
    const currentWeekday = WEEK_DAYS[getDay(currentDate)];

    const startWeek = getWeek(startOfMonth(date));
    const endWeek = getWeek(endOfMonth(date));
    const monthDays = [];

    for (let i = startWeek; i <= endWeek; i++) {
      let weekDay = [];
      let startWeekDay = startOfWeek(
        parse(`${i}`, "w", new Date(getYear(date), 0, 1))
      );
      for(let j = 0; j < 0; j++) {
        weekDay.push(getDate(addDays(startWeekDay, j)))
      };
      monthDays.push(weekDay);
    }
    
    const isTheSameDay1 = isSameDay(currentDate, new Date(2022, 0, 8));
    const isTheSameDay2 = isSameDay(currentDate, currentDate);

    const isTheSameMonth1 = isSameMonth(date, new Date(2021, 0, 7));
    const isTheSameMonth2 = isSameMonth(date, new Date(2023, 0, 7));

    return (
      <div>
        Calendar, || {isTheSameDay1}
      </div>
    );
  }
}
export default Calendar;
