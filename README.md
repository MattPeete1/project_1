Lucky Slots Slot Machine
- We all have come to know the world of gambling and if not all of us some of us may have dipped our hands into the exciting, but heart stopping world of betting. In this game you're going to be able to test just how lucky you are with the world's most exciting game. “The Lucky Slots.”

Technologies Used
- HTML
- CSS 
- JavaScript
- unsplash.com
- depositphotos.com

Getting Started 
- Link to Game:

Instructions
- This is a game of luck so it’s all up to you how lucky you think you are!
- You start with $500 and if you don't win anything there is no getting that money back.
- You are going to have a bet button in order to choose how much money you would like to place on the slots for the turn you are taking.
- The different wheel combinations will be shown on the screen so you know what you are capable of winning.
- Once you have chosen your bet then there is only one thing left to do which is to pull that lever and test your luck.
- Once you use all of your money then you will be prompted with a lose screen along with a play again button.

As a User 
- I would like to be able to bet a certain amount in $10 increments.
- I would like to have a wallet of funds.
- I would like to be able to spin the wheel.
- I would like to be able to look at a diagram to be able to see what combos give you what.
- I would like to have a play again button once I lose.
- I would like to see if I win or lose when I spin the wheel.

Next Steps 
- I would like to add more outcomes on the wheels.
- I would like to add music in the background along with a spinning sound.
- I would like to add money images to the wallet.

Design
- I would like the design to have a classy, but fun finish to it.
- I want the machine to have a wood looking design to it.
- I would like the font to be in cursive.

![WireFrame](<Screenshot 2023-08-18 at 12.30.27 PM.png>)

Pseudocode 

Constants 
- wheelObjects - such as cherries, bananas, and things like that.
- The payouts of the objects 
- How long the wheel spins
- The bet amounts- Increments it can be done in which is 10
- Your wallet- aka your starting amount which is 500

Elements 
- Play again button 
- Combo chart - Just a display chart of what will win the player what - Only for visual purposes nothing mechanical
- Wallet -display
- Bet - display

Initialized 
- The fruit to the wheel
- The bet amount 
- The players wallet 
- The payouts of each combo that the player can land on
- The slots set to the highest combo across all three rows

Handle a player clicking the spin button
- Update the new balance based upon if they won or lost anything.
- Update the message to either congrats or you lost.
- The fruits will be assigned to a number which will be picked from the math random method
- You will know if you won by the congats message along with the funds being added to account
- You wull know if you lost by the "you lose" message

Clicking the replay button
- Restart the wheels 
- Fill the wallet back up to the original amount 

Game Over 
- Checks to see if your credits are at 0
- If they are prompts the “your out of credits” 
- Shows the reset game button
