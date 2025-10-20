const counter = document.getElementById('counter');
const increment = document.getElementById('increment');
const decrement = document.getElementById('decrement');
const reset = document.getElementById('reset');

let count = 0;

function update() {
    counter.textContent = count;
    counter.style.color = count === 0 ? '#111' : (count > 0 ? '#007bff' : '#dc3545');
}

increment.addEventListener('click', () => {
    count++;
    update();
});

decrement.addEventListener('click', () => {
    if (count > 0) count--;
    update();
});

reset.addEventListener('click', () => {
    count = 0;
    update();
});

update();
