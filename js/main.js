/*----- constants -----*/

const slotOptions = [
    '🍓',
    '🍌',
    '🍇',
    '🍒',
    '💸'
];

const strawBry = 1.50;
const bannana = 1.60;
const grapes = 1.70;
const cherry = 1.80;
const money = 2.50;
/*----- state variables -----*/


/*----- cached elements  -----*/
let wheelEls = document.querySelectorAll('.wheel');
let winMsgEl = document.getElementById('winMsg');
let wallet = document.getElementById('wltMoney');
let bet = document.getElementById('betMoney');
/*----- event listeners -----*/
document.getElementById('spin').addEventListener('click', handleLeverPull);
document.getElementById('betUp').addEventListener('click', handleBettingUp);
document.getElementById('betDown').addEventListener('click', handleBettingDown);
/*----- functions -----*/
init();

function init() {
    wallet.innerHTML = Number(500);
    bet.innerHTML = Number(0);
    render()
};

function render() {
    handleBettingUp();
    handleBettingDown();
};

function handleLeverPull() {
    wheelEls.forEach(function(el) {
        let choice = Math.floor(Math.random() * slotOptions.length);
        el.innerText = slotOptions[choice];
    });
    if (w1.innerText === w2.innerText && w2.innerText === w3.innerText && w3.innerText === w1.innerText) {
        return winMsgEl.innerText = 'You Won Money';
    } else {
        return winMsgEl.innerText = 'Try Again!';
    };
};

function handleBettingUp() {
    bet.innerHTML = Number(bet.innerHTML) + 10;
    if (bet.innerHTML > 100) {
        bet.innerHTML = 100;
    } if (Number(bet.innerHTML) + 10) {
        wallet.innerHTML = Number(wallet.innerHTML) + Number(-10);
    };
};

function handleBettingDown() {
    bet.innerHTML = Number(bet.innerHTML) - 10;
    if (bet.innerHTML < 10) {
        bet.innerHTML = 10;
    } if (Number(bet.innerHTML) - 10) {
        wallet.innerHTML = Number(wallet.innerHTML) + Number(10);
    };
};

