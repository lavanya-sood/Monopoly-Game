//display the card of the place the user has landed on 
var showCard = function(name) {
	document.getElementById('card-'+name).className = 'card shown';
};

//hide the card of the location that has been displayed
var hideCard = function(name) {
	document.getElementById('card-'+name).className = 'card';
};

//Set the music to false
var startmusic = false;

//The music file 
var music = new Audio('Audio/musicbeats.mp3');

//Starts playing the music file 
function playmusic(){
	startmusic = true;
	if (startmusic == true){
		//the skeleton of this code was taken from Stack Overflow - http://stackoverflow.com/questions/3273552/html5-audio-looping
		  music.addEventListener('ended', function() {
		    this.currentTime = 0;
		    this.play();
		}, false);
		  music.play();
	} 
}

//Stops the music file from playing
function stopmusic(){
	startmusic = false;
	music.pause();
	music.currenttime = 0;
}

//shows the player 1 information screen
function startingthegame(){

	    document.getElementById("player1info").style.display = 'block';
	    document.getElementById("mainsoundscreen").style.display = 'none';   
}

//the initial money of the players
var money1 = parseInt(5000);
var money2 = parseInt(5000);
document.getElementById("moneydis").innerHTML = money1;
document.getElementById("moneydis2").innerHTML = money2;




//Displays the screen for player 1 to input their name and pick their color
function playername1() {
    document.getElementById("player2info").style.display = 'none';
    document.getElementById("player1info").style.display = 'inline-block'; 
        
}

//Displays the screen for player 2 to input their name and pick their color
function playername2() {
     var getstatus = document.getElementById("colorstatus").innerHTML;
     
     //checks if player has entered a name
    if (firstplayer.value == ""){
    	return alert("You need to enter a player name");
    //checks if player has accepted a pawn or not 
    } else if (getstatus == " "){
		return alert("You need a pawn");
	} else {
		//changes to the next screen
    	document.getElementById("player1info").style.display = 'none';
    	document.getElementById("player2info").style.display = 'inline-block'; 
  
    }
}


//initializes the game
function gamestart() {
	var getstatus = document.getElementById("colorstatus2").innerHTML;
	//checks if the player has entered a name
	if (secondplayer.value == ""){
		return alert("You need to enter a player name");
	//checks if the player has selected a player
	} else if (getstatus == " ") {
		return alert("You need a pawn");
	}
	else {
		//gets player 1's name
	    var stplayer = document.getElementById("firstplayer").value;
	    // gets player 2's name
	    var ndplayer = document.getElementById("secondplayer").value;

	    //sets the value of the html to the values input
	    document.getElementById("player1").innerHTML = stplayer;
	     document.getElementById("player2").innerHTML = ndplayer;
	    document.getElementById("player1info").style.display = 'none';
	    document.getElementById("player2info").style.display = 'none';
	    document.getElementById("playmusic").style.display = 'inline-block';
	    //Initializes the game
	    document.getElementById("game_div").style.display = 'inline-block';
	    document.getElementById("sidebar").style.display = 'block';   
	}
}


function gamefinish(){
//checks if player 1's money is less than or equal to 0
	if (money1 <= 0 ){	
		//displays the win screen
		 document.getElementById("winnerscreen").style.display = 'block';
   		 document.getElementById("game_div").style.display = 'none';
   		 document.getElementById("sidebar").style.display = 'none';  
   		 document.getElementById("cornergame").style.display = 'none';  
		 document.getElementById("playmusic").style.display = 'none';
	    // gets player 2's name
	    var winname = document.getElementById("secondplayer").value;
	     document.getElementById("winner_name").innerHTML = winname;	
//checks if player 2's money is less than or equal to 0
	} if (money2 <= 0){	
		//displays the win screen	  		  
		 document.getElementById("winnerscreen").style.display = 'block';
   		 document.getElementById("game_div").style.display = 'none';
   	 	 document.getElementById("sidebar").style.display = 'none'; 
   	 	 document.getElementById("cornergame").style.display = 'none';
   	 	 document.getElementById("playmusic").style.display = 'none'; 
		//gets player 1's name 
		 var winname = document.getElementById("firstplayer").value;
	     document.getElementById("winner_name").innerHTML = winname;
		
	}
}


//If player one picks the first pawn
function choice1p1() {
	//sets the pawn color to the picked color
	document.getElementById("1house").setAttribute("xlink:href", "Images/Pawns and Houses/playerpawn1house.png"); 
	//sets the house color to the picked color  
	document.getElementById("object").setAttribute("xlink:href", "Images/Pawns and Houses/playerpawn1.png"); 
	//display status
	 var colorplayer = "You selected house1";
 	document.getElementById("colorstatus").innerHTML = colorplayer;
}

//If player one picks second pawn
function choice2p1() {
	//sets the pawn color to the picked color
	document.getElementById("1house").setAttribute("xlink:href", "Images/Pawns and Houses/playerpawn2house.png"); 
	//sets the house color to the picked color  
	document.getElementById("object").setAttribute("xlink:href", "Images/Pawns and Houses/playerpawn2.png"); 
	//display status
	var colorplayer = "You selected house2";
 	document.getElementById("colorstatus").innerHTML = colorplayer;

}

//if player one picks third pawn 
function choice3p1() {
	//sets the pawn color to the picked color
	document.getElementById("1house").setAttribute("xlink:href", "Images/Pawns and Houses/playerpawn3house.png"); 
	//sets the house color to the picked color  
	document.getElementById("object").setAttribute("xlink:href", "Images/Pawns and Houses/playerpawn3.png"); 
	//display status
	var colorplayer = "You selected house3";
 	document.getElementById("colorstatus").innerHTML = colorplayer;

}

//if player one picks fourth pawn
function choice4p1() {
	//sets the pawn color to the picked color
	document.getElementById("1house").setAttribute("xlink:href", "Images/Pawns and Houses/playerpawn4house.png");
	//sets the house color to the picked color   
	document.getElementById("object").setAttribute("xlink:href", "Images/Pawns and Houses/playerpawn4.png"); 
	//display status
	var colorplayer = "You selected house4";
 	document.getElementById("colorstatus").innerHTML = colorplayer;

}

//if player one picks fifth pawn 
function choice5p1() {
	//sets the pawn color to the picked color
	document.getElementById("1house").setAttribute("xlink:href", "Images/Pawns and Houses/playerpawn5house.png"); 
	//sets the house color to the picked color  
	document.getElementById("object").setAttribute("xlink:href", "Images/Pawns and Houses/playerpawn5.png"); 
	//display status
	var colorplayer = "You selected house5";
 	document.getElementById("colorstatus").innerHTML = colorplayer;

}


//if player two picks first pawn
function choice1p2() {
	//sets the pawn color to the picked color
	document.getElementById("2house").setAttribute("xlink:href", "Images/Pawns and Houses/playerpawnI1house.png"); 
	//sets the house color to the picked color  
	document.getElementById("object2").setAttribute("xlink:href", "Images/Pawns and Houses/playerpawnI1.png"); 
	//display status
	var colorplayer = "You selected house1";
 	document.getElementById("colorstatus2").innerHTML = colorplayer;

}

//if player two picks second pawn
function choice2p2() {
	//sets the pawn color to the picked color
	document.getElementById("2house").setAttribute("xlink:href", "Images/Pawns and Houses/playerpawnI2house.png");
	//sets the house color to the picked color   
	document.getElementById("object2").setAttribute("xlink:href", "Images/Pawns and Houses/playerpawnI2.png"); 
	//display status
	var colorplayer = "You selected house2";
 	document.getElementById("colorstatus2").innerHTML = colorplayer;

}

//if player two picks third pawn
function choice3p2() {
	//sets the pawn color to the picked color
	document.getElementById("2house").setAttribute("xlink:href", "Images/Pawns and Houses/playerpawnI3house.png"); 
	//sets the house color to the picked color  
	document.getElementById("object2").setAttribute("xlink:href", "Images/Pawns and Houses/playerpawnI3.png"); 
	//display status
	var colorplayer = "You selected house3";
 	document.getElementById("colorstatus2").innerHTML = colorplayer;

}

//if player two picks fourth pawn
function choice4p2() {
	//sets the pawn color to the picked color
	document.getElementById("2house").setAttribute("xlink:href", "Images/Pawns and Houses/playerpawnI4house.png");  
	//sets the house color to the picked color 
	document.getElementById("object2").setAttribute("xlink:href", "Images/Pawns and Houses/playerpawnI4.png"); 
	//display status
	var colorplayer = "You selected house4";
 	document.getElementById("colorstatus2").innerHTML = colorplayer;

}

//if player two picks fifth pawn
function choice5p2() {
	//sets the pawn color to the picked color
	document.getElementById("2house").setAttribute("xlink:href", "Images/Pawns and Houses/playerpawnI5house.png"); 
	//sets the house color to the picked color  
	document.getElementById("object2").setAttribute("xlink:href", "Images/Pawns and Houses/playerpawnI5.png"); 
	//display status
	var colorplayer = "You selected house5";
 	document.getElementById("colorstatus2").innerHTML = colorplayer;

}

//sets the player 1's turn to true to start the game
var turnplayer1 = true;
//player one goes first then player 2
var turnplayer2 = false;

//the variable to check dice total
var diceTotal;

function rollDice() {
	//gets the numbers given in the dice's face

    var die1 = document.getElementById("die1");
    var die2 = document.getElementById("die2");
    var status = document.getElementById("status");
    //generates a random number from 1 to 6
    var d1 = Math.floor(Math.random() * 6) + 1;
    var d2 = Math.floor(Math.random() * 6) + 1;
    //adds the numbers
    diceTotal = d1 + d2;
    //displays the new dice numbers 
    die1.innerHTML = d1;
    die2.innerHTML = d2;
    status.innerHTML = "You rolled " + diceTotal + ".";
   //gives the total of the dice
  return diceTotal;
  //return 5;
   
}




function position (x,y,cost,rent,name,propcolor,displayname,housex,housey){
    //sets the specific x-coodinate for a specific position
    this.x = x;
    //sets the specific y-coodinate for a specific position
    this.y = y;
    //sets the specific cost for a specific position
    this.cost = cost;
    //sets the specific rent for a specific position
    this.rent = rent;
    //sets the specific name for a specific position
    this.name = name;
    //sets the specific property color for a specific position
    this.propcolor = propcolor;
    //sets the specific display name for a specific position
    this.displayname = displayname;
    //sets the coodinates for a players house on a specific position
    this.housex = housex;
    this.housey = housey;

}

var positions = []
//array of the positions in the board
positions[0] = new position(520,570,0,0,"Go","Images/white_rectangle_bl_border.gif","Go",510,540)
positions[1] = new position(470,570,300,250,"cloudcity","Images/Property Colors/redsquare.png","Cloud City",475,540)
positions[2] = new position(420,570,0,0,"freespacer","Images/white_rectangle_bl_border.gif","Free",420,540)
positions[3] = new position(375,570,300,250,"dorne","Images/Property Colors/redsquare.png","Dorne",380,540)
positions[4] = new position(325,570,0,0,"freespacer","Images/white_rectangle_bl_border.gif","Free",325,540)
positions[5] = new position(275,570,0,0,"Chancecard","Images/white_rectangle_bl_border.gif","Chance",275,540)
positions[6] = new position(227,570,350,300,"azkaban","Images/Property Colors/orange square.png","Azkaban",235,540)
positions[7] = new position(180,570,0,0,"freespacer","Images/Property Colors/Images/white_rectangle_bl_border.gif","Free",180,540)
positions[8] = new position(135,570,350,300,"mysticfalls","Images/Property Colors/orange square.png","Mystic Falls",140,540)
positions[9] = new position(90,570,350,300, "centralcity","Images/Property Colors/orange square.png","Central City",100,540)
positions[10] = new position(30,570,0,0,"Jail","Images/white_rectangle_bl_border.gif","Jail",30,570)
positions[11] = new position(30,500,400,350,"gothamcity","Images/Property Colors/pink square.png","Gotham City",60,500)
positions[12] = new position(30,445,0,0, "freespacer","Images/white_rectangle_bl_border.gif","Free",60,445)
positions[13] = new position(30,395,400,350, "metropolis","Images/Property Colors/pink square.png","Metropolis",60,395)
positions[14] = new position(30,345,400,350, "winterfell","Images/Property Colors/pink square.png","Winterfell",60,345)
positions[15] = new position(30,295,0,0, "Chancecard","Images/white_rectangle_bl_border.gif","Chance",60,295)
positions[16] = new position(30,245,450,400, "qarth","Images/Property Colors/purple square.png","Qarth",60,245)
positions[17] = new position(30,195,0,0,"freespacer","Images/white_rectangle_bl_border.gif","Free",60,195)
positions[18] = new position(30,145,450,400,"tatooine","Images/Property Colors/purple square.png","Tatooine",60,145)
positions[19] = new position(30,90,450,400,"shire","Images/Property Colors/purple square.png","The Shire",60,100)
positions[20] = new position(30,30,0,0,"gameOfluck", "Images/white_rectangle_bl_border.gif","Free",60,30)
positions[21] = new position(90,30,500,450, "alderaan","Images/Property Colors/yellow square.png","Alderaan",90,65)
positions[22] = new position(135,30,0,0,"freespacer","Images/white_rectangle_bl_border.gif","Free",135,65)
positions[23] = new position(180,30,500,450, "burrow","Images/Property Colors/yellow square.png","The Burrow",190,65)
positions[24] = new position(225,30,500,450, "lianyu","Images/Property Colors/yellow square.png", "Lian Yu",240,65)
positions[25] = new position(275,30,0,0, "Chancecard","Images/white_rectangle_bl_border.gif","Chance",275,65)
positions[26] = new position(325,30,550,500, "braavos","Images/Property Colors/green square.jpeg","Braavos",335,65)
positions[27] = new position(375,30,550,500 , "riverdale","Images/Property Colors/green square.jpeg","Riverdale",375,65)
positions[28] = new position(420,30,0,0, "freespacer","Images/white_rectangle_bl_border.gif","Free",420,65)
positions[29] = new position(470,30,550,500, "krypton","Images/Property Colors/green square.jpeg","Krypton",470,65)
positions[30] = new position(520,30,0,0, "gameOfluck","Images/white_rectangle_bl_border.gif","bouncejail",520,30)
positions[31] = new position(520,90,600,550, "kingslanding","Images/Property Colors/blue square.png","Kings Landing",505,100)
positions[32] = new position(520,145,600,550, "volantis","Images/Property Colors/blue square.png","Volantis",505,145)
positions[33] = new position(520,195,0,0, "freespacer","Images/white_rectangle_bl_border.gif","Free",505,195)
positions[34] = new position(520,245,600,550, "starshollow","Images/Property Colors/blue square.png","Stars Hollow",505,245)
positions[35] = new position(520,295,0,0, "Chancecard","Images/white_rectangle_bl_border.gif","Chance",505,295)
positions[36] = new position(520,345,650,600, "storybrooke","Images/Property Colors/dark blue square.png","Storybrooke",505,345)
positions[37] = new position(520,395,0,0, "freespacer","Images/white_rectangle_bl_border.gif","Free",505,395)
positions[38] = new position(520,445,0,0, "freespacer","Images/white_rectangle_bl_border.gif","Free",505,445)
positions[39] = new position(520,500,650,600, "mordor","Images/Property Colors/dark blue square.png","Mordor",505,500)


//the inital position is set to 0 
var current_pos = 0;
var current_pos2 = 0;
var currentjail = false;
var currentjail2 = false;

function movePlayer() {
    //disables the roll button so the other player cannot press the Roll button on turn of the other player
    document.getElementById("buttonroll").style.cursor = "wait";
  	document.getElementById("buttonroll").disabled = true;
    //player 1's turn
    if (turnplayer1 == true) {
    	    var currentSquareIndex = current_pos;
	    	//if player not in jail then start the game
	    	if (currentjail == false) {
	    		//gets the dice number
		    	diceTotal = rollDice();
		    	
		    	//adds it to the current position
		   		current_pos = current_pos + diceTotal;
		    	if (current_pos > 39) {
		    		//the player goes around the board 
		        	current_pos = current_pos - 40;
		   		}
		   		if(current_pos == 10) {
		   			//if player on jail positon set it to true 
		    		currentjail = true;
		    		
		    	}
		    	var id = setInterval(frame,300);
		    	//sets the animation
		    	function frame(){
				//checks if the position the player is on is the same position they have to land on
		    		if (currentSquareIndex == current_pos){
						//gets the x and y co-ordinates
		    			clearInterval(id);
		    			var x = positions[current_pos].x
		    			var y = positions[current_pos].y
		    			document.getElementById("object").setAttribute("x", x);
		    			document.getElementById("object").setAttribute("y", y);
						showCard(positions[current_pos].name);
						setTimeout(function() {
							hideCard(positions[current_pos].name);
						}, 3000);
						setTimeout(function () { payrent(); endturn();}, 500);
    
		    		}
		    		else {
						//adds to the current index and adds it
		    			currentSquareIndex = currentSquareIndex + 1;
						if (currentSquareIndex > 39) {
							currentSquareIndex = currentSquareIndex - 40;
						}
						//gets the coordinates
		    			var x = positions[currentSquareIndex].x
		    			var y = positions[currentSquareIndex].y
		    			document.getElementById("object").setAttribute("x", x);
		    			document.getElementById("object").setAttribute("y", y);
		    		}
		    	}
				
	    	} else if (currentjail == true) {
	    		//calls jail status through the pay rent function
	    		setTimeout(function () { payrent(); endturn();}, 500);
	    	}
	   	
    //player 2's turn 
	} else if (turnplayer2 == true) {
		    	   
		 var currentSquareIndex2 = current_pos2;
		    	//if player not in jail then start the game
		    	if (currentjail2 == false) {
		    		//gets the dice number
			    	diceTotal = rollDice();
			    	document.getElementById("buttonroll").style.cursor = "wait";
   					document.getElementById("buttonroll").disabled = true;
			    	//adds it to the current position
			   		current_pos2 = current_pos2 + diceTotal;
			    	if (current_pos2 > 39) {
			    		//the player goes around the board 
			        	current_pos2 = current_pos2 - 40;
			   		}
			   		if(current_pos2 == 10) {
			   			//if player on jail positon set it to true 
			    		currentjail2 = true;
			    	}
			    	var id = setInterval(frame,300);
			    	//starts the animation of player 2
			    	function frame(){
						//checks if the player is in the correct position						
			    		if (currentSquareIndex2 == current_pos2){
							//gets the x and y coordinates
			    			clearInterval(id);
			    			var x = positions[current_pos2].x
			    			var y = positions[current_pos2].y
			    			document.getElementById("object2").setAttribute("x", x);
			    			document.getElementById("object2").setAttribute("y", y);
							showCard(positions[current_pos2].name);
							setTimeout(function() {
								hideCard(positions[current_pos2].name);
							}, 3000);
							setTimeout(function () { payrent(); endturn();}, 500);
	    
			    		}
			    		else {
							//moves the player one step forward at a time
			    			currentSquareIndex2 = currentSquareIndex2 + 1;
							if (currentSquareIndex2 > 39) {
								currentSquareIndex2 = currentSquareIndex2 - 40;
							}
							//gets the x and y coordinates
			    			var x = positions[currentSquareIndex2].x
			    			var y = positions[currentSquareIndex2].y
			    			document.getElementById("object2").setAttribute("x", x);
			    			document.getElementById("object2").setAttribute("y", y);
			    		}
			    	}
					
		    	} else if (currentjail2 == true) {
		    		//calls the jail function
	    		setTimeout(function () { payrent(); endturn();}, 500);
	    	}
	   	
	}
    

}



var statusplayers = "Player 1's turn";
document.getElementById("statusplay").innerHTML = statusplayers;
//shows which player's turn it is
function playstat(){
	if (turnplayer1 == true){
			//sets if player 1's turn
			statusplayers = "Player 1's turn";

			document.getElementById("statusplay").innerHTML = statusplayers;
		} else if (turnplayer2 == true) {
			//sets if player 2's turn
			statusplayers = "Player 2's turn";
			document.getElementById("statusplay").innerHTML = statusplayers;

		}
}

function endturn() {
	//ends the turn of the current player
	if (turnplayer1 == true){
		setTimeout(function () { gamefinish();}, 1000);
		//sets it to other player's turn
		turnplayer1 = false;
		turnplayer2 = true;
		playstat();
	} else if (turnplayer2 == true) {
		setTimeout(function () { gamefinish();}, 1000);
		//sets it to other player's turn
		turnplayer2 = false; 
		turnplayer1 = true;
		playstat();
	}
	//enables the roll button
	document.getElementById("buttonroll").style.cursor = "pointer";
   	document.getElementById("buttonroll").disabled = false;
} 







//Wheel skeleton code taken from - http://jsbin.com/qefada/11/edit?html,js,output
function rand(min, max) {
  return Math.random() * (max - min) + min;
}

//sets the color and the labels to be displayed on the wheel
var color = ['#B22222','#00BFFF','#FF1493','#2F4F4F','#FF8C00','#9400D3', "#FF0000", "#32CD32"];
var label = ['Win $100', 'Lose $200', 'Win $300', 'Nothing', 'Lose $500', 'Lose $400', 'Win $1000', "Lose $300"];

//sets the amount for the reward
var reward = [100,-200,300,0,-500,-400,1000,-300];
//creates the wheel 
var slices = color.length;
var sliceDeg = 360/slices;
var deg = rand(0, 360);
var speed = 0;
var slowDownRand = 0;
var ctx = canvas.getContext('2d');
var width = canvas.width; // size
var center = width/2;      // center
var isStopped = false;
var lock = false;

var playingwheel = 0;
//displays the wheel screen
function gameofluck(){
   	document.getElementById("game_div").style.display = 'none';
    document.getElementById("cornergame").style.display = 'inline-block';
    document.getElementById("playmusic").style.display = 'none';
    document.getElementById("sidebar").style.display = 'none';
    playingwheel = 0;
    isStopped = false;
    lock = false;
    //calls the animation function
    anim();    
    document.getElementById("displayplayermoney1").innerHTML = money1;
    document.getElementById("displayplayermoney2").innerHTML = money2;	
     var stplayer = document.getElementById("firstplayer").value;
	    // gets player 2's name
	    var ndplayer = document.getElementById("secondplayer").value;

	    //sets the value of the html to the values input
	    document.getElementById("cornerp1name").innerHTML = stplayer;
	     document.getElementById("cornerp2name").innerHTML = ndplayer;		
}


function deg2rad(deg) {
  return deg * Math.PI/180;
}

//draws the wheel
function drawSlice(deg, color) {
  ctx.beginPath();
  ctx.fillStyle = color;
  ctx.moveTo(center, center);
  ctx.arc(center, center, width/2, deg2rad(deg), deg2rad(deg+sliceDeg));
  ctx.lineTo(center, center);
  ctx.fill();
}

//writes the text
function drawText(deg, text) {
  ctx.save();
  ctx.translate(center, center);
  ctx.rotate(deg2rad(deg));
  ctx.textAlign = "right";
  ctx.fillStyle = "#fff";
  ctx.font = 'bold 20px sans-serif';
  ctx.fillText(text, 130, 10);
  ctx.restore();
}

//draws the rectangle containing the wheel 
function drawImg() {
  ctx.clearRect(0, 0, width, width);
  for(var i=0; i<slices; i++){
    drawSlice(deg, color[i]);
    drawText(deg+sliceDeg/2, label[i]);
    deg += sliceDeg;
  }
}



//rotates the wheel around
function anim() {
	
  deg += speed;
  deg %= 360;

  // Increment speed
  if(!isStopped && speed<3){
    speed = speed+1 * 0.1;
  }
  // Decrement Speed
  if(isStopped){
    if(!lock){
      lock = true;
      slowDownRand = rand(0.95, 0.96);
    } 
    speed = speed>0.2 ? speed*=slowDownRand : 0;
  }
  // Stopped!
  if(lock && !speed){
    var ai = Math.floor(((360 - deg - 90) % 360) / sliceDeg); // deg 2 Array Index
    ai = (slices+ai)%slices; // Fix negative index
   //money is rewarded to the player
		if (turnplayer2 == true){
		    money1 = money1 + parseInt(reward[ai]);

		} else if (turnplayer1 == true){
		    money2 = money2 + parseInt(reward[ai]);
		}
	 
	  document.getElementById("moneydis").innerHTML = money1;
    document.getElementById("moneydis2").innerHTML = money2;
     document.getElementById("displayplayermoney1").innerHTML = money1;
    document.getElementById("displayplayermoney2").innerHTML = money2;
    playingwheel = 1;
    gamefinish();
    return alert("You got:\n"+ label[ai] ); // Get Array Item from end Degree
  	
  }

  drawImg();
  window.requestAnimationFrame( anim );
};


document.getElementById("spin").addEventListener("mousedown", function(){
  isStopped = true;
}, false);

//takes the player back to the main game 
 function back(){
	if (playingwheel == 1){
	document.getElementById("game_div").style.display = 'inline-block';
    document.getElementById("cornergame").style.display = 'none';
    document.getElementById("sidebar").style.display = 'block';
    document.getElementById("playmusic").style.display = 'inline-block';
    } else {
    	return alert("Take a risk and play! You cannot go back.")
    }
    isStopped = false;
    lock = false;
    
}

//sets up chance cards
function chance(quote,prizemoney,ccard){
	this.quote = quote;
	this.prizemoney = prizemoney;
	this.ccard = ccard;
}


//An array Of chance cards is set up
var chances = []
chances[0] = new chance("You just accidently purchased a big boat. Pay $300", -300, "Images/Chance Cards/Chancecard1.jpg")
chances[1] = new chance("Someone just uploaded a video of you. Collect $200 of monetization", 200, "Images/Chance Cards/Chancecard2.jpg")
chances[2] = new chance("You just won the marathon Here's $100", 100, "Images/Chance Cards/Chancecard3.jpg")
chances[3] = new chance("You were in a car crash, pay $400 insurance", -400, "Images/Chance Cards/Chancecard4.jpg")
chances[4] = new chance("You just won a new car. Here's $300", 300, "Images/Chance Cards/Chancecard5.jpg")
chances[5] = new chance("You just won the spelling bee. Here is $200", 200, "Images/Chance Cards/Chancecard6.jpg")
chances[6] = new chance("You just splurged on new shoes. Pay $100", -100, "Images/Chance Cards/Chancecard7.jpg")
chances[7] = new chance("You just dropped your phone in the toilet. Replace it for $200", -200, "Images/Chance Cards/Chancecard8.jpg")
chances[8] = new chance("You were in a beauty pageant. You win $100", 100, "Images/Chance Cards/Chancecard9.jpg")
chances[9] = new chance("You accidently kicked a ball through a window. Pay $200", -200, "Images/Chance Cards/Chancecard10.jpg")




function chancecards(){
	//A random card is selected
	var cnum = Math.round(Math.random()*8) + 1;
	var picchance = chances[cnum].ccard;
	
	document.getElementById("chancecardimg").setAttribute("src",picchance);
	document.getElementById("gamestatusdisplay").innerHTML = " ";
	
//Money is given or taken from a player
	var chancecard = chances[cnum].quote;
	var ccost = chances[cnum].prizemoney;
	if (turnplayer1 == true) {
		money1 = money1 + ccost
		

	} else if (turnplayer2 == true){
		money2 = money2 + ccost
		
	}

	
    document.getElementById("moneydis").innerHTML = money1;
    document.getElementById("moneydis2").innerHTML = money2;


}



//the properties purchased by the player will be added to this array
var propertybox1 = []
var propertybox2 = []


//set the image of the player's house
var house1 = new Image("purplehouse.png");

function propertybuy() {
    //gets the cost of the property the player has landed on 
    var property;
    if (turnplayer1 == true){
    	var cost = parseInt(positions[current_pos].cost);
    	var displayname = positions[current_pos].displayname;
	} else if (turnplayer2 == true){
		var cost = parseInt(positions[current_pos2].cost);
		var displayname = positions[current_pos2].displayname;

	}
	//checks if the property has a cost 
    if (cost !== 0) {
	    if (confirm("You landed on " + displayname + ". It is for $" + cost + " Want to buy it?") == true) {
	        
	        if (turnplayer1 == true) {
	        	property = "You bought it!"
	        	//reduces the players money 
	        	money1 = money1 - cost
	        	propertybox1.push(positions[current_pos].name)
	        	
	        	//places a house on the player's property
	        	 var picx = positions[current_pos].housex
                                var picy = positions[current_pos].housey                                                         
                                var houseim = document.getElementsByClassName("player1house")[0].cloneNode(true);
                                houseim.setAttribute("x", picx);
                                houseim.setAttribute("y", picy);
                                houseim.setAttribute("width", 30);
                                houseim.setAttribute("height", 30);
                                document.getElementById("svg").appendChild(houseim);
     			

                 //adds property to player's property box
     			var squareprop = document.getElementById("propnew").setAttribute("xlink:href", positions[current_pos].propcolor);
     			var propboxx = parseInt(document.getElementById("propnew").getAttribute("x"));
     			var propboxy = parseInt(document.getElementById("propnew").getAttribute("y"));
     			//places the property color in the property box
     			var ypos = propboxy;
     			var xpos = propboxx;
     			
     			if (xpos < 280 && ypos < 60) {
     				xpos = propboxx + 40;	
     			}
     			if (xpos >= 280 ) {
     				propboxx = 0;
     				xpos = propboxx + 40;
     				ypos = propboxy + 40;
     			}
     			if (ypos === 60 && xpos < 280 ){
     				 xpos = propboxx + 40;
     				 ypos = 60;	
     			}
     			if (ypos === 100 && xpos < 280 ){
     				 xpos = propboxx + 40;
     				 ypos = 100;	
     			}
   
     				//places the property on the property box		
     			document.getElementById("propnew").setAttribute("x", xpos);
     			document.getElementById("propnew").setAttribute("y", ypos);
                                var propertyboxadd = document.getElementsByClassName("propbutton")[0].cloneNode(true);
                                propertyboxadd.setAttribute("x", xpos);
                                propertyboxadd.setAttribute("y", ypos);
                                propertyboxadd.setAttribute("width", 20);
                                propertyboxadd.setAttribute("height", 20);
                                document.getElementById("prop1svg").appendChild(propertyboxadd);
                                document.getElementById("gamestatusdisplay").innerHTML = property;



	    	} else if (turnplayer2 == true) {
	    		property = "You bought it!"
	        	//money of the player is reduced
	        	money2 = money2 - cost
	    		propertybox2.push(positions[current_pos2].name)

	    		//places the house on the players property
	        	var picx = positions[current_pos2].housex
                var picy = positions[current_pos2].housey                                                         
                var houseim = document.getElementsByClassName("player2house")[0].cloneNode(true);
                houseim.setAttribute("x", picx);
                houseim.setAttribute("y", picy);
                houseim.setAttribute("width", 30);
                houseim.setAttribute("height", 30);
                document.getElementById("svg").appendChild(houseim);

                //places a house in the property box
	    		var squareprop = document.getElementById("propnew2").setAttribute("xlink:href", positions[current_pos2].propcolor);
     			var propboxx = parseInt(document.getElementById("propnew2").getAttribute("x"));
     			var propboxy = parseInt(document.getElementById("propnew2").getAttribute("y"));
     			//checks the x and y coordinates in the property box
     			var ypos = propboxy;
     			var xpos = propboxx;
     			
     			if (xpos < 280 && ypos < 60) {
     				xpos = propboxx + 40;	
     			}
     			if (xpos >= 280 ) {
     				propboxx = 0;
     				xpos = propboxx + 40;
     				ypos = propboxy + 40;
     			}
     			if (ypos === 60 && xpos < 280 ){
     				 xpos = propboxx + 40;
     				 ypos = 60;	
     			}
     			if (ypos === 100 && xpos < 280 ){
     				 xpos = propboxx + 40;
     				 ypos = 100;	
     			}

     			//clones and places the properties in the property box			
     			document.getElementById("propnew2").setAttribute("x", xpos);
     			document.getElementById("propnew2").setAttribute("y", ypos);
                               
                var propertyboxadd = document.getElementsByClassName("propbutton2")[0].cloneNode(true);
                propertyboxadd.setAttribute("x", xpos);
                propertyboxadd.setAttribute("y", ypos);
                propertyboxadd.setAttribute("width", 20);
                propertyboxadd.setAttribute("height", 20);
                document.getElementById("prop2svg").appendChild(propertyboxadd);

                document.getElementById("gamestatusdisplay").innerHTML = property;
	    	}	
	    } else {
	    	//player refuses to buy property
	        property = "You pressed cancel!"
	        document.getElementById("gamestatusdisplay").innerHTML = property;
	    }
	} else {
		if (turnplayer1 == true) {
			if (positions[current_pos].name == "Chancecard"){
				//starts the chance card function
				chancecards();
				
			} else if (current_pos == 10) {
				jailstatus();
				

			} else if (current_pos == 0  ) {
				//starts the landing on go
				gofunction();
				
			} else if (current_pos == 20 ) {
				//starts the game of luck function
				gameofluck();

			} else if (current_pos == 30){
				//starts the go to jail function
				gotojail();
			}
			else  {
				//starts the free space function
				freespace();
				
			} 
		}
			else if (turnplayer2 == true) {
			if (positions[current_pos2].name == "Chancecard"){
				//starts the chance card function
				chancecards();

			} else if (current_pos2 == 0 ) {
				//starts the landing on go
				gofunction();
				
			} else if (current_pos2 == 10  ) {
				//starts the jail function
				jailstatus();
				
			} else if (current_pos2 == 20 ) {
				//starts the game of luck function
				gameofluck();

			}else if (current_pos2 == 30){
				//starts the go to jail function
				gotojail();
			} else {
				//starts the free space function
				freespace();

			} 
		}
	}
    //displays the money of the player
    document.getElementById("moneydis").innerHTML = money1;
    document.getElementById("moneydis2").innerHTML = money2;

}


//landed back to the original position they were on
function gofunction(){
		if (turnplayer1 == true){
				// gains money
				money1 = money1 + 300
				
				var stat = "Landed on Go";
			
	} else if (turnplayer2 = true){
				//gains money
				money2 = money2 + 300
				
				var stat = "Landed on Go";
			
	}
	document.getElementById("gamestatusdisplay").innerHTML = stat;
}


function gotojail(){
	if (turnplayer1 == true){
		//sets the current position of the player to jail
		current_pos = 10;
		currentjail = true;
		//places the player on jail
		var x = positions[current_pos].x
		var y = positions[current_pos].y
		document.getElementById("object").setAttribute("x", x);
		document.getElementById("object").setAttribute("y", y);


		
	} else if (turnplayer2 == true){
		//sets the current position to jail
		current_pos2 = 10;
		currentjail2 = true;
		//places the player on jail
		var x = positions[current_pos2].x
		var y = positions[current_pos2].y
		document.getElementById("object2").setAttribute("x", x);
		document.getElementById("object2").setAttribute("y", y);
		
	}
}


function payrent(){
	//gets the name of the property the user landed on
	var thelanded = positions[current_pos].name;
	var thelanded2 = positions[current_pos2].name;
	
		
		if (turnplayer1 == true) {
			//checks if the property is owned by the other player
			if (propertybox2.indexOf(thelanded) > -1) {
		  		//gets the rent value of the position
		  		var rent = parseInt(positions[current_pos].rent);
		  		//subtracts money from one player and gives it to the other
		  		money1 = money1 - rent
		  		money2 = money2 + rent
		  		payment = "You just paid rent!"
		  		document.getElementById("gamestatusdisplay").innerHTML = payment;
		  	//checks if the player owns the property themselves
		  	} else if (propertybox1.indexOf(thelanded) > -1) {
		  		money1 = money1 + 0 
		  		payment = "You landed on your own property";
		  		document.getElementById("gamestatusdisplay").innerHTML = payment;
		  	} else {
		  		//allows user to purchase the property
		  		propertybuy();
		  	}

		  	document.getElementById("moneydis").innerHTML = money1;
		  	document.getElementById("moneydis2").innerHTML = money2;
	  	} else if (turnplayer2 == true) {
	  		//checks if the property is owned by the other player
	  		if (propertybox1.indexOf(thelanded2) > -1) {
	  			//gets the rent value of the position 
		  		var rent = parseInt(positions[current_pos].rent);
		  		//subtracts money from one player and gives it to the other
		  		money2 = money2 - rent
		  		money1 = money1 + rent
		  		payment = "You just paid rent!"
		  		document.getElementById("gamestatusdisplay").innerHTML = payment;
		  	//checks if the player owns the property themselves
		  	} else if (propertybox2.indexOf(thelanded2) > -1) {
		  		payment = "You landed on your own property";
		  		money1 = money1 + 0 
		  		document.getElementById("gamestatusdisplay").innerHTML = payment;
		  	} else {
		  		//allows the user to purchase the property
		  		propertybuy();
		  	}
		  	document.getElementById("moneydis").innerHTML = money1;
		  	document.getElementById("moneydis2").innerHTML = money2;
	  	}
}


function freespace(){
	//just a free position for the user to land on 
	var stat = "Just free space";
	document.getElementById("gamestatusdisplay").innerHTML = stat;
}


//sets the bail for jail 
var JailStatus;
var bail = 300;

function jailstatus () {
	
	if (turnplayer1 == true) {
		//checks if player is in jail
			if (currentjail == true) {
				//shows a pop-up box
					if (confirm("You landed on Jail. Pay the bail of 300 to continue playing") == true) {   
						currentjail = false;  
						JailStatus = "Great continue playing from next turn";
						document.getElementById("gamestatusdisplay").innerHTML = JailStatus;
				        //player pays bail 
				        money1 = money1 - bail   

				    } else {
				    	//player refuses to pay bail 
				    	JailStatus = "STAY IN JAIL";
				    	document.getElementById("gamestatusdisplay").innerHTML = JailStatus;
					}
				
	    		document.getElementById("moneydis").innerHTML = money1;
	    		document.getElementById("moneydis2").innerHTML = money2;

			}
	} else if (turnplayer2 == true) {
		if (currentjail2 == true) {
			//shows pop up box
				if (confirm("You landed on Jail. Pay the bail of 300 to continue playing") == true) {   
					currentjail2 = false;  
					JailStatus = "Great continue playing from next turn";
					//player pays bail
					money2 = money2 - bail   

			    } else {
			    	//player refuses to pay bail 
			    	JailStatus = "STAY IN JAIL";
			    	
			    }
	
		    document.getElementById("gamestatusdisplay").innerHTML = JailStatus;
    		document.getElementById("moneydis").innerHTML = money1;
    		document.getElementById("moneydis2").innerHTML = money2;
		}
	}
		       

}

//instructions for the game
var inscounter = 2;
//shows the instructions for the main features
 function changeimage1() {
    if (inscounter < 7) {
      source = 'Instructions/Gameboardfeatures- ' + inscounter + '.jpg'
      document.getElementById('gfii').src = source;
      inscounter += 1;}
    else {
      backtomaininstructions();
    }
  }

//shows the instructions for property buy
var inscounter2 = 2;
function changeimage2() {
    if (inscounter2 < 5) {
      source = 'Instructions/Propertyinstructions- ' + inscounter2 + '.jpg'
      document.getElementById('bpii').src = source;
      inscounter2 += 1;}
    else {
      backtomaininstructions();
    }
  }

//shows the instructions for paying rent
var inscounter3 = 1;
function changeimage3() {
    if (inscounter3 < 3) {
      source = 'Instructions/Rentinstructions ' + inscounter3 + '.jpg'
      document.getElementById('rpii').src = source;
      inscounter3 += 1;}
    else {
      backtomaininstructions();
    }
  }

//shows the instructions for free space
var inscounter4 = 2;
function changeimage4() {
    if (inscounter4 < 2) {
      source = 'Instructions/Freespaces ' + inscounter4 + '.jpg'
      document.getElementById('fsii').src = source;
      inscounter4 += 1;}
    else {
      backtomaininstructions();
    }
  }

//shows the instructions for landing on go 
var inscounter5 = 2;
function changeimage5() {
    if (inscounter5 < 3) {
      source = 'Instructions/Goinstructions- ' + inscounter5 + '.jpg'
      document.getElementById('lgii').src = source;
      inscounter5 += 1;}
    else {
      backtomaininstructions();
    }
  }

//shows the instructions for landing on jail
var inscounter6 = 2;
function changeimage6() {
    if (inscounter6 < 5) {
      source = 'Instructions/jailinstructions- ' + inscounter6 + '.jpg'
      document.getElementById('ljii').src = source;
      inscounter6 += 1;}
    else {
      backtomaininstructions();
    }
  }

//shows the instructions for landing on go to jail 
var inscounter7 = 2;
function changeimage7() {
    if (inscounter7 < 4) {
      source = 'Instructions/gotojailinstructions -' + inscounter7 + '.jpg'
      document.getElementById('lgjii').src = source;
      inscounter7 += 1;}
    else {
      backtomaininstructions();
    }
  }

//shows the instructions for landing on chance cards
var inscounter8 = 2;
function changeimage8() {
    if (inscounter8 < 3) {
      source = 'Instructions/chanceinstruction- ' + inscounter8 + '.jpg'
      document.getElementById('ccii').src = source;
      inscounter8 += 1;}
    else {
      backtomaininstructions();
    }
  }

//shows the instructions for landing on the Game Of Luck
var inscounter9 = 1;
function changeimage9() {
    if (inscounter9 < 5) {
      source = 'Instructions/luckinstructions- ' + inscounter9 + '.jpg'
      document.getElementById('glii').src = source;
      inscounter9 += 1;}
    else {
      backtomaininstructions();
    }
  }

//displays the specific instruction  division and resets the counter
  function featuresgame(){
    document.getElementById("instructions_mainscreen").style.display = 'none'; 
      document.getElementById("gamefeatures").style.display = 'inline-block';
      document.getElementById('gfii').src = 'Instructions/Gameboardfeatures- 1.jpg';
      inscounter = 2;
  }
//displays the specific instruction  division and resets the counter
  function buyingapropertyinstructions(){
    document.getElementById("instructions_mainscreen").style.display = 'none'; 
      document.getElementById("buyingapropins").style.display = 'inline-block';
        document.getElementById('bpii').src = 'Instructions/Propertyinstructions- 1.jpg';
       inscounter2 = 2;
  }
//displays the specific instruction  division and resets the counter
 function freespaceinstructions(){
    document.getElementById("instructions_mainscreen").style.display = 'none'; 
      document.getElementById("freespaceinstruct").style.display = 'inline-block';
        document.getElementById('fsii').src = 'Instructions/Freespaces 1.jpg';
       inscounter4 = 2;
  }

//displays the specific instruction  division and resets the counter
   function payingrentinstructions(){
    document.getElementById("instructions_mainscreen").style.display = 'none'; 
      document.getElementById("payingrentinstruct").style.display = 'inline-block';
      document.getElementById('rpii').src = 'Instructions/Rentinstructions 1.jpg';
       inscounter3 = 2;
  }
//displays the specific instruction  division and resets the counter
   function landingongoinstructions(){
    document.getElementById("instructions_mainscreen").style.display = 'none'; 
      document.getElementById("landingongoinstruct").style.display = 'inline-block';
      document.getElementById('lgii').src = 'Instructions/Goinstructions- 1.jpg';
       inscounter5 = 2;
  }

//displays the specific instruction  division and resets the counter
   function landingonjailinstructions(){
    document.getElementById("instructions_mainscreen").style.display = 'none'; 
      document.getElementById("landingonjailinstruct").style.display = 'inline-block';
      document.getElementById('ljii').src = 'Instructions/jailinstructions- 1 .jpg';
       inscounter6 = 2;
  }

//displays the specific instruction  division and resets the counter
   function landingongotojailinstructions(){
    document.getElementById("instructions_mainscreen").style.display = 'none'; 
      document.getElementById("landingongotojailinstruct").style.display = 'inline-block';
      document.getElementById('lgjii').src = 'Instructions/gotojailinstructions -1.jpg';
       inscounter7 = 1;
  }

//displays the specific instruction  division and resets the counter
   function chancecardinstructions(){
    document.getElementById("instructions_mainscreen").style.display = 'none'; 
      document.getElementById("chancecardsinstruct").style.display = 'inline-block';
      document.getElementById('ccii').src = 'Instructions/chanceinstruction- 1.jpg';
       inscounter8 = 1;
  }

//displays the specific instruction  division and resets the counter
   function gameofluckinstructions(){
    document.getElementById("instructions_mainscreen").style.display = 'none'; 
      document.getElementById("gameofluckinstruct").style.display = 'inline-block';
      document.getElementById('glii').src = 'Instructions/luckinstructions- 1.jpg';
       inscounter9 = 1;
  }


//takes the player back to the main instructions screen 
  function backtomaininstructions(){
    document.getElementById("instructions_mainscreen").style.display = 'inline-block'; 
      document.getElementById("payingrentinstruct").style.display = 'none';
      document.getElementById("gamefeatures").style.display = 'none';
      document.getElementById("buyingapropins").style.display = 'none';
     document.getElementById("freespaceinstruct").style.display = 'none';

     document.getElementById("landingongoinstruct").style.display = 'none';
      document.getElementById("landingonjailinstruct").style.display = 'none';
     document.getElementById("landingongotojailinstruct").style.display = 'none';
     document.getElementById("chancecardsinstruct").style.display = 'none';
     document.getElementById("gameofluckinstruct").style.display = 'none';
  }

//takes the player back to the main game 
  function backtothemainmenu(){
    document.getElementById("game_div").style.display = 'inline-block';
    document.getElementById("instructions_mainscreen").style.display = 'none';
    document.getElementById("sidebar").style.display = 'block';
    document.getElementById("playmusic").style.display = 'inline-block'; 
  }

//displays the instructions menu
  function showtheinstructionmenu(){
  	document.getElementById("game_div").style.display = 'none';
    document.getElementById("instructions_mainscreen").style.display = 'inline-block';
    document.getElementById("sidebar").style.display = 'none';
    document.getElementById("playmusic").style.display = 'none'; 
  }


