/**
 * STUDENT INFORMATION SELECTOR
 */
const form = document.querySelector('#form');
const name1 = document.querySelector('#name');
const fname = document.querySelector('#fname');
const mname = document.querySelector('#mname');
const roll = document.querySelector('#roll');
const loc = document.querySelector('#location');
/**
 * STUDENT RESULT SELECTOR
 */
const bn = document.querySelector('#bn');
const en = document.querySelector('#en');
const math = document.querySelector('#math');
const sci = document.querySelector('#sci');
const ss = document.querySelector('#ss');
const rel = document.querySelector('#rel');
const result4 = document.querySelector('#result4');
const lodd = document.querySelector('#lodd');
const ph = document.querySelector('input[placeholder]')

console.log(ph);
let total = (bn.value + en.value + math.value + sci.value + ss.value + rel.value) + 6;
let final_result = new Student();

let finix;
form.addEventListener('submit', function (e) {
    e.preventDefault();


    lodd.innerHTML = `Loding .`
    lodd.style.color = 'white'

    setTimeout(function () {
        lodd.innerHTML = `Loding ..`
        lodd.style.color = 'white'
    }, 500);
    setTimeout(function () {
        lodd.innerHTML = `Loding ...`
        lodd.style.color = 'white'
    }, 700);
    setTimeout(function () {
        lodd.innerHTML = `Loding ....`
        lodd.style.color = 'white'
    }, 1000);
    setTimeout(function () {
        lodd.innerHTML = `Loding .....`
        lodd.style.color = 'white'
    }, 1500);
    setTimeout(function () {
        lodd.innerHTML = `Loding ......`
        lodd.style.color = 'white'
    }, 2000);
    setTimeout(function () {
        lodd.innerHTML = `Loding .......`
        lodd.style.color = 'white'
    }, 2500);



    setTimeout(function () {
        lodd.innerHTML = `Checking .`

    }, 2800);
    setTimeout(function () {
        lodd.innerHTML = `Checking ..`

    }, 3300);
    setTimeout(function () {
        lodd.innerHTML = `Checking ...`
    }, 3500);

    setTimeout(function () {
        lodd.innerHTML = `Confirm..❤`
        lodd.style.color = 'green';
    }, 4000)
    setTimeout(function () {

        let student1 = document.querySelector('#tbody1');
        student1.innerHTML = `
   
    <thead>
    <tr>
        <th>#</th>
        <th>Name</th>
        <th>Father Name</th>
        <th>Mother Name</th>
        <th>Roll</th>
        <th>Location</th>
    </tr>
</thead>
<tr>
   <td>1</td>
   <td>${name1.value}</td>
   <td>${fname.value}</td>
   <td>${mname.value}</td>
   <td>${roll.value}</td>
   <td>${loc.value}</td>
   
</tr>
`;
        let student2 = document.querySelector('#tbody2');
        student2.innerHTML = `


    <thead>
    <tr>
        <th>Bangla</th>
        <th>English</th>
        <th>Math</th>
        <th>S-Science</th>
        <th>Science</th>
        <th>Religion</th>
    </tr>
</thead>
<tr>
<td>${bn.value}</td>
<td>${en.value}</td>
<td>${math.value}</td>
<td>${sci.value}</td>
<td>${ss.value}</td>
<td>${rel.value}</td>
</tr>
`;
        result4.innerHTML = `<p class="alert alert-info w-75 mt-2">Your gpa is: ${final_result.gpa(bn.value, en.value, math.value, sci.value, ss.value, rel.value)} and your grade is: ${final_result.grade(bn.value, en.value, math.value, sci.value, ss.value, rel.value)} , and ${final_result.cgpa(final_result.gpa(bn.value),final_result.gpa(en.value),final_result.gpa(math.value),final_result.gpa(sci.value),final_result.gpa(ss.value),final_result.gpa(rel.value))}</p>

`


        lodd.innerHTML = '';

    }, 3000)

});


const pm = document.querySelector('#pm');
const pn = document.querySelector('#pn');
const po = document.querySelector('#po');
const pp = document.querySelector('#pp');

name1.addEventListener('keyup', function () {
    let userName = name1.value;
    let val = /^[a-zA-Z ][^\.\@\#\%\&]*$/;

    let fuserName = fname.value;
    let vall = /^[a-zA-Z ][^\.\@\#\%\&]*$/;

    if (userName == '') {
        pm.innerHTML = `<p class="text-danger">plz type your name</p>`
    } else if (val.test(userName) == false) {
        pm.innerHTML = `<p class="text-danger">plz valid name</p>`
    } else if (val.test(userName) == true) {
        pm.innerHTML = ``
    } else {
        pm.innerHTML = ``
    }

});

fname.addEventListener('keyup', function () {

    let fuserName = fname.value;
    let vall = /^[a-zA-Z ][^\.\@\#\%\&]*$/;

    if (fuserName == '') {
        pn.innerHTML = `<p class="text-danger">plz type your father name</p>`
    } else if (vall.test(fuserName) == false) {
        pn.innerHTML = `<p class="text-danger">plz valid name</p>`
    } else if (vall.test(fuserName) == true) {
        pn.innerHTML = ``
    } else {
        pn.innerHTML = ``
    }

});
mname.addEventListener('keyup', function () {

    let muserName = mname.value;
    let vall2 = /^[a-zA-Z ][^\.\@\#\%\&]*$/;

    if (muserName == '') {
        po.innerHTML = `<p class="text-danger">plz type your mother name</p>`
    } else if (vall2.test(muserName) == false) {
        po.innerHTML = `<p class="text-danger">plz valid name</p>`
    } else if (vall2.test(muserName) == true) {
        po.innerHTML = ``
    } else {
        po.innerHTML = ``
    }

});
loc.addEventListener('keyup', function () {

    let locName = loc.value;
    let vall2 = /^[a-zA-Z ][^\.\@\#\%\&]*$/;

    if (locName == '') {
        pp.innerHTML = `<p class="text-danger">plz type your location name</p>`
    } else if (vall2.test(locName) == false) {
        pp.innerHTML = `<p class="text-danger">plz valid location name</p>`
    } else if (vall2.test(locName) == true) {
        pp.innerHTML = ``
    } else {
        pp.innerHTML = ``
    }

});