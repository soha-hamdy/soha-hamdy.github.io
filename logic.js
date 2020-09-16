var birthday = moment([2001, 9, 9]);
var today = new Date();
var curr_day = moment([today.getFullYear(), today.getMonth(), today.getDate()]);
var years = curr_day.diff(birthday, 'years');
var months = curr_day.diff(birthday, 'months');
var days = curr_day.diff(birthday, 'days');
//document.getElementById("how_old").innerHTML = "years: " + years.toString() + " months: " + months.toString() + " days: " + days.toString();
document.getElementById("how_old").innerHTML = moment([2002, 9, 10]).diff(moment([2001, 9, 9]), 'years');
