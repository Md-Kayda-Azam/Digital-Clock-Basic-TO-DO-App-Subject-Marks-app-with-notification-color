const h = document.querySelector('.h');
const m = document.querySelector('.m');
const s = document.querySelector('.s');
const ampm = document.querySelector('.ampm');

const days = document.querySelector('.days');
const months = document.querySelector('.months');
const years = document.querySelector('.years');

const h2 = document.querySelector('.h2');
const m2 = document.querySelector('.m2');
const s2 = document.querySelector('.s2');
const ampm2 = document.querySelector('.ampm2');

const days2 = document.querySelector('.days2');
const months2 = document.querySelector('.months2');
const years2 = document.querySelector('.years2');


const h3 = document.querySelector('.h3');
const m3 = document.querySelector('.m3');
const s3 = document.querySelector('.s3');
const ampm3 = document.querySelector('.ampm3');

const days3 = document.querySelector('.days3');
const months3 = document.querySelector('.months3');
const years3 = document.querySelector('.years3');




setInterval(() => {
    let date = new Date();

    let hrs = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    if (hrs == 0) {
        hour = 12;
    } else if (hrs > 0 && hrs <= 12) {
        hour = hrs;
    } else {
        hour = hrs - 12;
    }

    let am_pm;
    (hrs < 12) ? am_pm = 'AM': am_pm = 'PM';

    let second;
    (sec < 10) ? second = `0${sec}`: second = `${sec}`

    let minutes;
    (min < 10) ? minutes = `0${min}`: minutes = `${min}`

    let d;
    (day < 10) ? d = `0${day}`: d = day;

    let mon;
    (day < 10) ? mon = `0${month}`: mon = month;

    h.innerHTML = `${hour}:`;
    m.innerHTML = `${minutes} `;
    s.innerHTML = `(${second})`;
    days.innerHTML = `${d} /`
    months.innerHTML = `${mon} /`
    years.innerHTML = `${year}`
    ampm.innerHTML = `${am_pm}`

    h2.innerHTML = `${hour}:`;
    m2.innerHTML = `${minutes} `;
    s2.innerHTML = `(${second})`;
    days2.innerHTML = `${d} /`
    months2.innerHTML = `${mon} /`
    years2.innerHTML = `${year}`
    ampm2.innerHTML = `${am_pm}`

    h3.innerHTML = `${hour}:`;
    m3.innerHTML = `${minutes} `;
    s3.innerHTML = `${second}`;
    ampm3.innerHTML = `${am_pm}`
    days3.innerHTML = `${d} /`
    months3.innerHTML = `${mon} /`
    years3.innerHTML = `${year}`
  
}, 1000);


























