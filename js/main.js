/*----- constants -----*/

const slotOptions = [
    {fruit: '🍓', multiplier: 1.50},
    {fruit: '🍌', multiplier: 1.60},
    {fruit: '🍇', multiplier: 1.70},
    {fruit: '🍒', multiplier: 1.80},
    {fruit: '💸', multiplier: 2.50}
];

/*----- state variables -----*/


/*----- cached elements  -----*/
let wheelEls = document.querySelectorAll('.wheel');
let winMsgEl = document.getElementById('winMsg');
let wallet = document.getElementById('wltMoney');
let bet = document.getElementById('betMoney');
let win;
/*----- event listeners -----*/
document.getElementById('spin').addEventListener('click', handleLeverPull);
document.getElementById('betUp').addEventListener('click', handleBettingUp);
document.getElementById('betDown').addEventListener('click', handleBettingDown);
/*----- functions -----*/
init();

function init() {
    render();
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
        el.innerText = slotOptions[choice].fruit;
        win = checkWin(w1.innerText, w2.innerText, w3.innerText);
    });
    if (w1.innerText === w2.innerText && w2.innerText === w3.innerText && w3.innerText === w1.innerText) {
        return winMsgEl.innerText = 'You Won Money'
    } else if (Number(wallet.innerHTML) === 0) {
        return winMsgEl.innerText = 'Game Over!'
    }else {
        return winMsgEl.innerText = 'Try Again!'
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

function checkWin() {
    if (Number(bet.innerHTML) === Number && winMsgEl.innerText === 'You Won Money' && wheelEls.innerText === slotOptions[0].fruit) {
        wallet.innerHTML = Number(wallet.innerHTML) + (Number(bet.innerHTML) * Number(slotOptions[0].multiplier));
        } else if (Number(bet.innerHTML) === Number && winMsgEl.innerText === 'You WonMoney' && wheelEls.innerText === slotOptions[1].fruit) {
            wallet.innerHTML = Number(wallet.innerHTML) + (Number(bet.innerHTML) * Number(slotOptions[1].multiplier));
        } else if (Number(bet.innerHTML) === Number && winMsgEl.innerText === 'You WonMoney' && wheelEls.innerText === slotOptions[2].fruit) {
            wallet.innerHTML = Number(wallet.innerHTML) + (Number(bet.innerHTML) * Number(slotOptions[2].multiplier));
        } else if (Number(bet.innerHTML) === Number && winMsgEl.innerText === 'You WonMoney' && wheelEls.innerText === slotOptions[3].fruit) {
            wallet.innerHTML = Number(wallet.innerHTML) + (Number(bet.innerHTML) * Number(slotOptions[3].multiplier));
        } else if (Number(bet.innerHTML) === Number && winMsgEl.innerText === 'You WonMoney' && wheelEls.innerText === slotOptions[4].fruit) {
            wallet.innerHTML = Number(wallet.innerHTML) + (Number(bet.innerHTML) * Number(slotOptions[4].multiplier));
        } else if (Number(bet.innerHTML) === Number && winMsgEl.innerText === 'You WonMoney' && wheelEls.innerText === slotOptions[5].fruit) {
        } else {
            (winMsgEl.innerText === 'Try Again!') 
            //take the bet back to 0 and then subtract the wallet from the bet.
            bet.innerHTML = 0;
            wallet.innerHTML = Number(wallet.innerHTML) - Number(bet.innerHTML);
        };
    }  
