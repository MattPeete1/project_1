/*----- constants -----*/

//game wheel choices along with the values that will be calculated
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
playAgain.addEventListener('click', init);
/*----- functions -----*/
init();

//initial values needed fo the game to play
function init() {
    render();
    wallet.innerHTML = Number(500);
    bet.innerHTML = Number(0);
    playAgain.style.display = 'none';
    winMsgEl.innerHTML = 'Spin to Play';
};

function render() {
    handleLeverPull()
    handleBettingUp();
    handleBettingDown();
};

function handleLeverPull() {
    //Sets the different fruit values for each wheel and randomizes them
    wheelEls.forEach(function(el) {
        let choice = Math.floor(Math.random() * slotOptions.length);
        el.innerText = slotOptions[choice].fruit;
        win = checkWin(w1.innerText, w2.innerText, w3.innerText);
    });
    //win logic for the game
    if (Number(wallet.innerHTML) === 0) {
        handlePlayAgain();
    } if (w1.innerText === w2.innerText && w2.innerText === w3.innerText && w3.innerText === w1.innerText) {
        return winMsgEl.innerText = 'You Won Money'
    } else if (Number(wallet.innerHTML) === 0) {
        return winMsgEl.innerText = 'Game Over!'
    }else {
        return winMsgEl.innerText = 'Try Again!'
    };
};

function handleBettingUp() {
    bet.innerHTML = Number(bet.innerHTML) + 10;
    if (bet.innerHTML > 500) {
        bet.innerHTML = 500;
        //Fixes the betting problem when the game firts starts and when the game ends.
    } if (Number(bet.innerHTML) + 10) {
        wallet.innerHTML = Number(wallet.innerHTML) + Number(-10);
    } if (Number(wallet.innerHTML) === -10) {
        wallet.innerHTML = Number(wallet.innerHTML) + Number(10);
    } if (Number(wallet.innerHTML) === 0) {
        bet.innerHTML = 0;
    };
};

function handleBettingDown() {
    bet.innerHTML = Number(bet.innerHTML) - 10;
    if (bet.innerHTML < 10) {
        bet.innerHTML = 10;
        //Fixes the betting problem when the game firts starts and when the game ends.
    } if (Number(bet.innerHTML) - 10) {
        wallet.innerHTML = Number(wallet.innerHTML) + Number(10);
    } if (Number(wallet.innerHTML) < -10) {
        wallet.innerHTML = Number(wallet.innerHTML) + Number(10);
    } if (Number(wallet.innerHTML) === 0) {
        bet.innerHTML = 0;
    } if (Number(wallet.innerHTML) === 500 && Number(bet.innerHTML) === 10) {
        bet.innerHTML = Number(bet.innerHTML) + Number(-10);
    };
};


function checkWin() {
    let newBet = Number(bet.innerHTML);
    let winnings;
    if (winMsgEl.innerText === 'You Won Money') {
        wallet.innerHTML = Number(wallet.innerHTML) + Number(bet.innerHTML);
        Number(bet.innerHTML) * slotOptions.multiplier + Number(wallet.innerHTML);
        winnings = Number(slotOptions.multiplier) * Number(bet.innerHTML) + Number(bet.innerHTML);
        return winnings;
    } else {
        bet.innerHTML = 0;
        wallet.innerHTML = Number(wallet.innerHTML) - Number(bet.innerHTML);
    };
};

function handlePlayAgain() {
    if (winMsgEl.innerText != 'Game Over!') {
        playAgain.style.display = 'none';
    } else {
        playAgain.style.display = 'block';
    }
}