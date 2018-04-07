$(document).ready(function() {
	console.log('sanity check');


	function vickieGo () {
	$(document).keydown(function(event) {

	let vickieStart = 0; //creating a start point for vickie to start moving
        if(event.keyCode == "37") //Moving with the right arrow key
            $("#vickie").stop(true).animate({"left" : "-=50px"}); //moving vickie right 50px
        if(event.keyCode == "39")   //moving with the left arrow key   
            $("#vickie").stop(true).animate({"left" : "+=50px"}); //moving vickie left 50px
		}
		);
	}

	vickieGo(); //calling the vickieGo function


	function spawnAvocado() {
		let avocado = $('#avocado'); //creating an avocado variable for the avocado image
		TweenMax.fromTo(avocado, 8, //animating the avocado for 8 seconds			
			{css: {top: '-10px'}}, //starting animation at -10px from the top of container		
			{css: {top: '550px'}, //stop point for the animation 550px from the top of container		
			onComplete:function() //Tween Max onComplete functiion stating that the animation is over 
			{ avocado.remove() }, //removing the avocado after animation to avoid storage issues
		}); 	
	}

	spawnAvocado(); //calling the spawnAvocado function


	function spawnMeat () {
		let meat = $('#meat'); //creating an meat variable for the meat image
		TweenMax.fromTo(meat, 5, //animating the meat for 5 seconds			
			{css: {left: '100px', top: '-10px'}}, //starting animation at -10px from the top of container		
			{css: {left: '100px', top: '550px'}, //stop point for the animation 550px from the top of container		
			onComplete:function() //Tween Max onComplete functiion stating that the animation is over 
			{ meat.remove() }, //removing the meat after animation to avoid storage issues
		}); 
	}

	spawnMeat(); //calling the spawnMeat function



	// let fallingFoods = setInterval(function() {
	// 	let random = getRandom()
	// 	switch(random){
	// 		case 1: 
	// 		spawnAvocado();
	// 		break;
	// 		case 2:
	// 		spawnMeat();
	// 		break;
	// 	}
		
	// }, 300)

// 	function getRandom(min,max){
//  		return Math.round(Math.random() * (max-min) + min);
// 	}

// 	function dropArea () {
// 		let length = getRandom(100, ($('#game').width() - 100));
// 		let velocity = getRandom(850, 10000);
// 		let size = (50, 150);
// 		let thisBox = $("<div/>", {
// 			class: "box",
//     		style:  "width:" +size+ "px; height:"+size+"px; left:" + length+  "px; transition: transform " +velocity+ "ms linear;" });
// 	}

// dropArea();


});
