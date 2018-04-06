$(document).ready(function() {
	console.log('sanity check');
	


	//creating a start point for vickie to start moving
	let vickieStart = 0;

	$(document).keydown(function(event) {
	//Moving with right arrow key


        if(event.keyCode == "37")
            $("#vickie").stop(true).animate({"left" : "-=50px"});

        if(event.keyCode == "39")
            $("#vickie").stop(true).animate({"left" : "+=50px"});	

	}
)






// let canvas = document.getElementById('gameCanvas');
// let context = canvas.getContext('2d');
// let imgDrops;
// let xPositionOfChar = 500;
// let yPositionOfChar = 500;






// //Part 1 - Creating Vickie and letting her move

// function move(event) {

// 	//Moving with right arrow key
	
// 	if (event.keyCode === 39) {
// 		xPositionOfChar += 20;
// 	}
// 	//Moving with left arrow key
	
// 	if (event.keyCode === 37) {
// 		xPositionOfChar -= 20;
// 	}

// 	//reseting the width of the canvas 

// 	canvas.width = canvas.width;
	
// 	//setting the height, width and postition of Vickie
	
// 	context.rect(xPositionOfChar, yPositionOfChar, 30, 70);
	
// 	//allows the character show up on the canvas
	
// 	context.stroke();

// }
// //key event that will call the move function when key is pressed down
// document.onkeydown = move;


//Spawning veggies and meat from the sky







})