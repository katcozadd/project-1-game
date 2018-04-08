$(document).ready(function() {
	console.log('sanity check');


let avocado = $('#avocado'); //creating an avocado variable for the avocado image
let broccoli = $('#broccoli'); //creating an broccoli variable for the broccoli image
let carrot = $('#carrot'); //creating an carrot variable for the carrot image
let meat = $('#meat'); //creating an meat variable for the meat image

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
		TweenMax.fromTo(avocado, 5, //animating the avocado for 8 seconds			
			{css: {top: '-10px'}}, //starting animation at -10px from the top of container		
			{css: {top: '550px'}, //stop point for the animation 550px from the top of container		
			onComplete:function() //Tween Max onComplete functiion stating that the animation is over 
			{avocado.remove()}, //removing the avocado after animation to avoid storage issues 
			onUpdate:update }); 
			function complete() {	
			}
			function update() {
                }
	}

	// spawnAvocado(); //calling the spawnAvocado function



	function spawnMeat () {
		TweenMax.fromTo(meat, 5, //animating the meat for 5 seconds			
			{css: {left: '100px', top: '-10px'}}, //starting animation at 100px from the left and -10px from the top of container		
			{css: {left: '100px', top: '550px'}, //stop point for the animation  100px from left and 550px from the top of container		
			onComplete:function() //Tween Max onComplete functiion stating that the animation is over 
			{ meat.remove() }, //removing the meat after animation to avoid storage issues
			onUpdate:update }); 
			function complete() {	
			}
			function update() {
                }
	}

	// spawnMeat(); //calling the spawnMeat function

		function spawnBroccoli () {
		TweenMax.fromTo(broccoli, 5, //animating the brocolli for 10 seconds			
			{css: {left: '400px', top: '-10px'}}, //starting animation at 400px from the left and -10px from the top of container		
			{css: {left: '400px', top: '550px'}, //stop point for the animation  400px from left and 550px from the top of container		
			onComplete:function() //Tween Max onComplete functiion stating that the animation is over 
			{ broccoli.remove() }, //removing the broccoli after animation to avoid storage issues
			onUpdate:update }); 
			function complete() {	
			}
			function update() {
                }
	}

	// spawnBroccoli(); //calling the spawnBrocolli function

		function spawnCarrot () {
		TweenMax.fromTo(carrot, 5, //animating the carrot for 4 seconds			
			{css: {left: '800px', top: '-10px'}}, //starting animation at 800px from the left and -10px from the top of container		
			{css: {left: '800px', top: '500px'}, //stop point for the animation 800px from left and 550px from the top of container		
			onComplete:function() //Tween Max onComplete functiion stating that the animation is over 
			{ carrot.remove() }, //removing the carrot after animation to avoid storage issues
			onUpdate:update
		}); 
			function complete() {
            }
            function update() {
            }
	}

	// spawnCarrot(); //calling the spawnBrocolli function



    let dropFood = setInterval(function(){
        let random = getRandom();
        switch(random) { 
            case 1: 
            	spawnAvocado();
                break;
            case 2: 
            	spawnMeat();
                break;
            case 3: 
            	spawnBroccoli();
                break;
            case 4: 
            	spawnCarrot();
            	break;
            default: 
                break;
        }
    }, 800)



    function getRandom() { //get a random number to cycle through the arrows to randomize the drop.
        let number = Math.floor(Math.random() * ((6-1)+1) + 1);
        return number;
    }


});


//figuring out how to get the avocado animation to spawn at random spots across the x axis of the page at random intervals
//1. spawn avocado in many places
//2. create a function that will take into account the length of the container
//3. randomize what spots of the length things should spawn


