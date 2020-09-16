var today = new Date();
var birthday = moment([2001, 9, 9]);
var curr_day = moment([today.getFullYear(), today.getMonth(), today.getDate()]);
var years = birthday.diff(curr_day, 'years');
var months = birthday.diff(curr_day, 'months');
var days = birthday.diff(curr_day, 'days');
document.getElementById("how_old").innerHTML = "years: " + years.toString() + "months: " + months.toString() + "days: " + days.toString();
