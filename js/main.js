/*----- constants -----*/

const slotOptions = [
    '🍓',
    '🍌',
    '🍇',
    '🍒',
    '💸'
];

const walletEl = document.getElementById('.wltMoney');

let wheelEls = document.querySelectorAll('.wheel');

wheelEls.forEach(function(el, idx) {
    el.innerText = slotOptions[idx % slotOptions.length];
});







/*----- state variables -----*/


/*----- cached elements  -----*/


/*----- event listeners -----*/


/*----- functions -----*/
function init() {

};