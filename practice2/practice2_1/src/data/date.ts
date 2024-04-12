import { DateTime } from "luxon";

export const makeRandomPastDate = () => {
  const value = new Date().valueOf();
  const n = 100000;
  return new Date(value - Math.floor(Math.random() * n * n));
};

export const makeRelativeDate = (date: Date) =>
  DateTime.fromJSDate(date).startOf("day").toRelative();
export const randomRelativeDate = () => makeRelativeDate(makeRandomPastDate());

export const makeDayMonthYear = (date: Date) =>
  DateTime.fromJSDate(date).toLocaleString(DateTime.DATETIME_FULL);
  //이 코드를 통해, '19시간 전' 과 같은 문자를 만든다
export const randomDayMonthYear = () => makeDayMonthYear(makeRandomPastDate());
