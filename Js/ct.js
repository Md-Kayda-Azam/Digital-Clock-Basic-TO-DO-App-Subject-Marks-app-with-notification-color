// COUNTER FUNCTION

const start2 = document.getElementById('start2');
const stop2 = document.getElementById('stop2');
const p1 = document.getElementById('p1');
const inp = document.getElementById('inp');
const loader = document.getElementById('loader');



let counter_value = 0;


let clear
start2.addEventListener('click', function () {

    counter_value = inp.value;


    clear = setInterval(() => {
        p1.innerHTML = counter_value;


        let width = `${loader_dynamic(inp.value, counter_value)}`

        loader.style.width = `${width}%`

        if (counter_value == 0) {
            clearInterval(clear);
        };

        if (width > 50 && width <= 100) {
            loader.style.backgroundColor = "blue"
            p1.style.color = "blue"
        } else if (width > 30 && width <= 50) {
            loader.style.backgroundColor = "red"
            p1.style.color = "red"
        } else if (width <= 30) {
            loader.style.backgroundColor = "orange"
            p1.style.color = "orange"
        };

        counter_value--;
    }, 1000);


});


stop2.addEventListener('click', function () {
    clearInterval(clear);
});



// TODO APPS FUNTION

const to_do = document.querySelector('#to-do');
const btn = document.querySelector('#btn');
const p2 = document.querySelector('#p2');


btn.addEventListener('click', function () {
    p2.innerHTML += `<p class="alert alert-success">${to_do.value}
    </p>`

});

