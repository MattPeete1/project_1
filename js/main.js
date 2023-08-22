/*----- constants -----*/

const slotOptions = [
    '🍓',
    '🍌',
    '🍇',
    '🍒',
    '💸'
];

/*----- state variables -----*/


/*----- cached elements  -----*/
let wheelEls = document.querySelectorAll('.wheel');
let winMsgEl = document.getElementById('winMsg');
let walletEl = document.getElementById('wltMoney');
let betEl = document .getElementById('betMoney');

/*----- event listeners -----*/
document.getElementById('spin').addEventListener('click', handleLeverPull);

/*----- functions -----*/
function init() {
    render();
};

function render() {

};

function handleLeverPull() {
    wheelEls.forEach(function(el) {
        let choice = Math.floor(Math.random() * slotOptions.length);
        el.innerText = slotOptions[choice];
    });
    if (w1.innerText === w2.innerText && w2.innerText === w3.innerText && w3.innerText === w1.innerText) {
        return winMsgEl.innerText = 'You Won Money'
    } else {
        return winMsgEl.innerText = 'Try Again!'
    }
};
