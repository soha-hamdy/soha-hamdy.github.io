function getCurrentAge(birth_date) {
    const DOB = new Date(
        birth_date.substring(6, 10),
        birth_date.substring(3, 5) - 1,
        birth_date.substring(0, 2)
    );
    const today = new Date();
    let years = today.getYear() - DOB.getYear();
    let months = today.getMonth() - DOB.getMonth();
    let days = today.getDate() - DOB.getDate();
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
    return { years: years, months: months, days: days };
}

function prepareAgeText(years, months, days) {
    let ageText = `<span id="years">${years} years</span>`;
    if (months > 0 && days > 0) {
        ageText += `<span id="months">, ${months} month${months === 1? '': 's'}</span> `;
        ageText += `<span id="days">and ${days} day${days === 1? '': 's'}</span>`;
    } else if (months > 0) {
        ageText += ` <span id="months">and ${months} month${months === 1? '': 's'}</span>`;
    } else if (days > 0) {
        ageText += ` <span id="days">and ${days} day${days === 1? '': 's'}</span>`;
    } else {
        ageText += `<br>It's Birthday! <span class="heart">&hearts;&hearts;&hearts;</span>`
    }
    return ageText;
}

const {years, months, days} = getCurrentAge('09/09/2001');
const ageText = prepareAgeText(years, months, days);
document.getElementById('age').innerHTML = ageText;
