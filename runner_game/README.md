- Briefly explaining the overall game: This is a runners game with four different players or runners. Every time you start or refresh the page, the game will choose a random winner. 

Index.html

- The overall div contains the background of the game. Inside of the background, I created another div called animate and I will talk about it later when I get to the CSS portion. Inside of the animate div, I created four different players. 

- I created another div with all the buttons. I made the start button function but I still have to figure out about pause and reset. 


Style.css
So one thing I noticed about my background  and other images is that the images kept repeating over and over again and I am not sure why and that's why I added the code background repeat to no repeat which stops repetition.

As you have seen earlier the game on the default browser I added a little animation under the animate div. I actually wanted to stop the animation right after the alert function appears and I am still figuring out how to do that. 

- So let me explain the animation code. In order to make the players run, I used animation that would start a second after refreshing the page and I believe the one reason why the animation doesn't stop after the alert function is because I used infinite animation so it keeps going even after the alert function. So the the 0 and 100% background position means that the characters will start running from the bottom of the background image to 800px higher. I used the forward key to make sure that the characters run vertically and not horizontally. 

JS

- So I actually focused more on the CSS portion that the JS portion which I should not have done. I still have to figure out how I can connect the players to the div I used in html but here is the function with four different players and I used the let winner function to randomize the winner every time the game is refreshed and the alert function appears 5 seconds after the game is restarted. 