var birthday = new Date("09/09/2001");
var today = new Date();
var difference = today.getTime() - birthday.getTime();
var years = difference / (365 * 24 * 3600 * 1000)
difference = difference % (365 * 24 * 3600 * 1000)
var days = difference / (24 * 3600 * 1000)
document.getElementById("how_old").innerHTML = "years: " + years.toString() + "days: " + days.toString();
