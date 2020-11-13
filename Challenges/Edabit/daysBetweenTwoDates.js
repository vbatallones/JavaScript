/*
Create a function that takes two dates and returns the number of days between the first and second date.
*/

const betweenTwoDates = (date1, date2) => {
    const oneDay = 24 * 60 * 60 * 1000;
	const diffDays = Math.round(Math.abs((date1 - date2) / oneDay));

	return diffDays 
}

betweenTwoDates(
    new Date("June 14, 2019"),
    new Date("June 20, 2019")
  ) //➞ 6
  
  
betweenTwoDates(
    new Date("December 29, 2018"),
    new Date("January 1, 2019")
  ) //➞ 3
  // Dates may not all be in the same month/year.
  
betweenTwoDates(
    new Date("July 20, 2019"),
    new Date("July 30, 2019")
  ) //➞ 10