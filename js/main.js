//game wheel choices along with the values that will be calculated
const slotOptions = [
    {fruit: '🍓', multiplier: 1.5},
    {fruit: '🍌', multiplier: 1.6},
    {fruit: '🍇', multiplier: 1.7},
    {fruit: '🍒', multiplier: 1.8},
    {fruit: '💸', multiplier: 2.5},
  ];
  
  //assigns the elements to the variables
  let wheelEls = document.querySelectorAll('.wheel');
  let winMsgEl = document.getElementById('winMsg');
  let wallet = document.getElementById('wltMoney');
  let bet = document.getElementById('betMoney');
  let win;
  
  //adds event listeners to the buttons
  document.getElementById('spin').addEventListener('click', handleLeverPull);
  document.getElementById('betUp').addEventListener('click', handleBettingUp);
  document.getElementById('betDown').addEventListener('click', handleBettingDown);
  playAgain.addEventListener('click', init);
  
  //initializes the game when the page is loaded
  init();
  
  //initial values needed fo the game to play
  function init() {
    render();
    wallet.innerHTML = Number(500);
    bet.innerHTML = Number(0);
    playAgain.style.display = 'none';
    winMsgEl.innerHTML = 'Spin to Play';
  };
  
  //renders the actions of the game when one of the buttons is clicked
  function render() {
    handleLeverPull();
    handleBettingUp();
    handleBettingDown();
  };
  
  function handleLeverPull() {
    //Sets the different fruit values for each wheel and randomizes them
    wheelEls.forEach(function (el) {
      let choice = Math.floor(Math.random() * slotOptions.length);
      el.innerText = slotOptions[choice].fruit;
      win = checkWin(w1.innerText, w2.innerText, w3.innerText);
    });
    //win logic for the game
    if (Number(wallet.innerHTML) === 0) {
      handlePlayAgain();
    };
    if (w1.innerText === w2.innerText && w2.innerText === w3.innerText && w3.innerText === w1.innerText) {
      return (winMsgEl.innerText = 'You Won Money');
    } else if (Number(wallet.innerHTML) === 0) {
      return (winMsgEl.innerText = 'Game Over!');
    } else {
      return (winMsgEl.innerText = 'Try Again!');
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
    } if (Number(wallet.innerHTML) === 0 && winMsgEl.innerText === 'Game Over!') {
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
    } if (Number(wallet.innerHTML) === 0 && winMsgEl.innerText === 'Game Over!') {
        bet.innerHTML = 0;
    } if (Number(wallet.innerHTML) === 500 && Number(bet.innerHTML) === 10) {
        bet.innerHTML = Number(bet.innerHTML) + Number(-10);
    } if (Number(bet.innerHTML) === 10) {
        wallet.innerHTML = Number(wallet.innerHTML) + Number(+10);
    };
  };
  
  //win logic for the game and the different multiplier values being added to the wallet
  function checkWin() {
    if (winMsgEl.innerText === 'You Won Money' && w1.innerText === slotOptions[0].fruit) {
      let wageringAmt = Number(bet.innerHTML);
      winnings = wageringAmt * slotOptions[0].multiplier;
      wallet.innerHTML = Number(wallet.innerHTML) + winnings + wageringAmt;
      return console.log(winnings, '0');
    } else if (winMsgEl.innerText === 'You Won Money' && w1.innerText === slotOptions[1].fruit) {
        let wageringAmt = Number(bet.innerHTML);
        winnings = wageringAmt * slotOptions[0].multiplier;
        wallet.innerHTML = Number(wallet.innerHTML) + winnings + wageringAmt;
        return console.log(winnings, '1');
    } else if (winMsgEl.innerText === 'You Won Money' && w1.innerText === slotOptions[2].fruit) {
        let wageringAmt = Number(bet.innerHTML);
        winnings = wageringAmt * slotOptions[0].multiplier;
        wallet.innerHTML = Number(wallet.innerHTML) + winnings + wageringAmt;
        return console.log(winnings, '2');
    } else if (winMsgEl.innerText === 'You Won Money' && w1.innerText === slotOptions[3].fruit) {
        let wageringAmt = Number(bet.innerHTML);
        winnings = wageringAmt * slotOptions[0].multiplier;
        wallet.innerHTML = Number(wallet.innerHTML) + winnings + wageringAmt;
        return console.log(winnings, '3');
    } else if (winMsgEl.innerText === 'You Won Money' && w1.innerText === slotOptions[4].fruit) {
        let wageringAmt = Number(bet.innerHTML);
        winnings = wageringAmt * slotOptions[0].multiplier;
        wallet.innerHTML = Number(wallet.innerHTML) + winnings + wageringAmt;
        return console.log(winnings, '4');
    } else {
        bet.innerHTML = 0;
        wallet.innerHTML = Number(wallet.innerHTML) - Number(bet.innerHTML);
    };
  };
  
  //handles the play again button showing the game again when the game is over
  function handlePlayAgain() {
    if (winMsgEl.innerText != 'Game Over!') {
      playAgain.style.display = 'none';
    } else {
      playAgain.style.display = 'block';
    };
  };
  