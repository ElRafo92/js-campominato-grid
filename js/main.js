'use strict'
const genera = document.querySelector('.genera');
let tabella = document.querySelector('.tabella')

genera.addEventListener('click', function() {
    for (let i = 1; i < 11; i++) {
    const casella = document.createElement('div');
    casella.classList.add('casella', 'bg-green');
    casella.innerHTML = i;

    casella.addEventListener('click', function() {
        casella.classList.remove('bg-green');
        casella.classList.add('bg-red');
    })
    
    tabella.append(casella);
    };
});

