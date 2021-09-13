function getAge(birth_date) {
    'use strict';
    var DOB = new Date(birth_date.substring(6, 10), birth_date.substring(3, 5) - 1, birth_date.substring(0, 2)),
        today = new Date(),
        years = today.getYear() - DOB.getYear(),
        months = today.getMonth() - DOB.getMonth(),
        days = today.getDate() - DOB.getDate();
    if (today.getMonth() < DOB.getMonth()) {
        years -= 1;
        months += 12;
    }
    if (today.getDate() < DOB.getDate()) {
        months -= 1;
        days += 31;
        if (months < 0) {
            months = 11;
            years -= 1;
        }
    }
    return {years: years, months: months, days: days};
}

var soha_age = getAge('09/09/2001');
document.getElementById("years").innerHTML = soha_age.years;
document.getElementById("months").innerHTML = soha_age.months;
document.getElementById("days").innerHTML = soha_age.days;
