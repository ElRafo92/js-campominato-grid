const genera = document.querySelector('.genera');
let tabella = document.querySelector('.tabella')

genera.addEventListener('click', function() {
    for (i = 1; i < 101; i++) {
    let casella = `<div class="casella bg-green">${i}</div>`;
    tabella.innerHTML += casella;
    }
    
});

