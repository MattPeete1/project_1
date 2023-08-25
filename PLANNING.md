
# Lucky Slots Slot Machine
- We all have come to know the world of gambling and if not all of us some of us may have dipped our hands into the exciting, but heart stopping world of betting. In this game you're going to be able to test just how lucky you are with the world's most exciting game. “The Lucky Slots.”

## Design
- I would like the design to have a classy, but fun finish to it.
- I want the machine to have a wood looking design to it.
- I would like the font to be in cursive.

![WireFrame](<Screenshot 2023-08-18 at 12.30.27 PM.png>)

## Pseudocode 

### constants 
- wheelObjects - such as cherries, bananas, and things like that.
- The payouts of the objects 
- How long the wheel spins
- The bet amounts- Increments it can be done in which is 10
- Your wallet- aka your starting amount which is 500

### Elements 
- Play again button 
- Combo chart - Just a display chart of what will win the player what - Only for visual purposes nothing mechanical
- Wallet -display
- Bet - display

### Initialized 
- The fruit to the wheel
- The bet amount 
- The players wallet 
- The payouts of each combo that the player can land on
- The slots set to the highest combo across all three rows

### Handle a player clicking the spin button
- Update the new balance based upon if they won or lost anything.
- Update the message to either congrats or you lost.
- The fruits will be assigned to a number which will be picked from the math random method
- You will know if you won by the congats message along with the funds being added to account
- You wull know if you lost by the "you lose" message

### Clicking the replay button
- Restart the wheels 
- Fill the wallet back up to the original amount 

### Game Over 
- Checks to see if your credits are at 0
- If they are prompts the “your out of credits” 
- Shows the reset game button