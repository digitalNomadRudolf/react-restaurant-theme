// current year
export const THIS_YEAR = +(new Date().getFullYear());

// current month starting from 1 -12
// 1 => January, 12 => December
export const THIS_MONTH = +(new Date().getMonth()) + 1;


// week day names and shortnames
export const WEEK_DAYS = {
    Sunday: "Sun",
    Monday: "Mon",
    Tuesday: "Tue",
    Wednesday: "Wed",
    Thursday: "Thu",
    Friday: "Fri",
    Saturday: "Sat"
}

// Calendar month names and shortnames
export const CALENDAR_MONTHS = {
    January: "Jan",
    February: "Feb",
    March: "Mar",
    April: "Apr",
    May: "May",
    June: "Jun",
    July: "Jul",
    August: "Aug",
    September: "Sep",
    October: "Oct",
    November: "Nov",
    December: "Dec"
}

// weeks displayed on calendar
export const CALENDAR_WEEKS = 6;


// pads a string value with leading zeroes(0) until lenght is reached 
// for example zeroPad(5, 2) => "05"
export const zeroPad = (value, length) => {
    return `${value}`.padStart(length, 0);
}

// Number days in a month for a given year from 28 - 31
export const getMonthDays = (month = THIS_MONTH, year = THIS_YEAR) => {
    const months30 = [4, 6, 9, 11];
    const leapYear = year % 4 === 0;

    return month === 2 ? leapYear
                   ? 29
                   : 28
                   : months30.includes(month)
                   ? 30 
                   : 31;   
}

// first day of the month for a given year from 1 - 7
// 1 => Sunday, 7 => Saturday
export const getMonthFirstDay = (month = THIS_MONTH, year = THIS_YEAR) => {
    return +(new Date(`${year}-${zeroPad(month, 2)}-01`).getDay()) + 1;
}

// check if a value is a date
export const isDate = date => {
    const isDate = Object.prototype.toString.call(date) === '[object Date]';
    const isValidDate = date && !Number.isNaN(date.valueOf());

    return isDate && isValidDate;
}

// check if two date values are of the same month and year
export const isSameMonth = (date, basedate = new Date()) => {
    if(!(isDate(date) && isDate(basedate))) return false;

    const basedateMonth = +(basedate.getMonth()) + 1;
    const basedateYear = basedate.getFullYear();

    const dateMonth = +(date.getMonth()) + 1;
    const dateYear = date.getFullYear();

    return (+basedateMonth === +dateMonth) && (+basedateYear === +dateYear);
}

// check if two date values are the same day
export const isSameDay = (date, basedate = new Date()) => {
    if(!(isDate(date) && isDate(basedate))) return false;

    const basedateDate = basedate.getDate();
    const basedateMonth = +(basedate.getMonth()) + 1;
    const basedateYear = basedate.getFullYear();

    const dateDate = date.getDate();
    const dateMonth = +(date.getMonth()) + 1;
    const dateYear = date.getFullYear();

    return (+basedateDate === +dateDate) && (+basedateMonth === +dateMonth) && (+basedateYear === +dateYear);
}

// format given date as YYYY-MM-DD
// months and days are zero padded
export const getDateISO = (date = new Date) => {
    if(!isDate(date)) return null;

    return [
        date.getFullYear(),
        zeroPad(+date.getMonth() + 1, 2),
        zeroPad(+date.getDate(), 2)
    ].join('-');
}

// get month and year before the given month and year
export const getPreviousMonth = (month, year) => {
    const prevMonth = (month > 1) ? month - 1 : 12;
    const prevMonthYear = (month > 1) ? year : year - 1;

    return { month: prevMonth, year: prevMonthYear };
}

// get month and year after the given month and year
export const getNextMonth = (month, year) => {
    const nextMonth = (month < 12) ? month + 1 : 1;
    const nextMonthYear = (month < 12) ? year: year + 1;

    return { month: nextMonth, year: nextMonthYear };
}

// calendar builder function which takes a year and month as arguments and returns an array of 42 elements, where 
// each element represents a calendar date in the format YYYY, MM, DD
export default (month = THIS_MONTH, year = THIS_YEAR) => {
    // get number of days in the month and the month's first day
    const monthDays = getMonthDays(month, year);
    const monthFirstDay = getMonthFirstDay(month, year);

    // get number of days to be displayed from previous and next months
    // these ensure a total 42 days (6 weeks) displayed on the calendar 
    const daysFromPrevMonth = monthFirstDay - 1;
    const daysFromNextMonth = (CALENDAR_WEEKS * 7) - (daysFromPrevMonth + monthDays);

    // get previous and next months and years 
    const { month: prevMonth, year: prevMonthYear } = getPreviousMonth(month, year);
    const { month: nextMonth, year: nextMonthYear } = getNextMonth(month, year);

    // get number of days in previous month
    const prevMonthDays = getMonthDays(prevMonth, prevMonthYear);

    // builds dates to be displayed from previous month
    const prevMonthDates = [...new Array(daysFromPrevMonth)].map((n, index) => {
        const day = index + 1 + (prevMonthDays - daysFromPrevMonth);
        return [ prevMonthYear, zeroPad(prevMonth, 2), zeroPad(day, 2) ];
    });

    // builds dates to be displayed from current month
    const thisMonthDates = [...new Array(monthDays)].map((n, index) => {
        const day = index + 1;
        return [year, zeroPad(month, 2), zeroPad(day, 2)];
    });

    // builds dates to be displayed from next month
    const nextMonthDates = [...new Array(daysFromNextMonth)].map((n, index) => {
        const day = index + 1;
        return [nextMonthYear, zeroPad(nextMonth, 2), zeroPad(day, 2)];
    });

    // combines all dates from previous, current and next months
    return [ ...prevMonthDates, ...thisMonthDates, ...nextMonthDates ];

}