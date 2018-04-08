$(document).ready(function() {
	console.log('sanity check');

	let asparagus = $('#asparagus');
	let avocado = $('#avocado'); //creating an avocado variable for the avocado image
	let broccoli = $('#broccoli'); //creating an broccoli variable for the broccoli image
	let carrot = $('#carrot'); //creating an carrot variable for the carrot image
	let cucumber = $('#cucumber');
	let eggplant = $('#eggplant');
	let pepper = $('#pepper');
	let squash = $('squash');
	let chicken = $('#chicken');
	let groundmeat = $('#groundmeat');
	let pork = $('#pork');
	let meat = $('#meat'); //creating an meat variable for the meat image

	function vickieGo () {
	$(document).keydown(function(event) {

	let vickieStart = 0; //creating a start point for vickie to start moving
        if(event.keyCode == "37") //Moving with the right arrow key
            $("#vickie").stop(true).animate({"left" : "-=70px"}); //moving vickie right 50px
        if(event.keyCode == "39")   //moving with the left arrow key   
            $("#vickie").stop(true).animate({"left" : "+=70px"}); //moving vickie left 50px
		}
		);
	}

	vickieGo(); //calling the vickieGo function


	function spawnAvocado() {
		TweenMax.fromTo(avocado, 4, //animating the avocado for 8 seconds			
			{css: {top: '-100px'}}, //starting animation at -10px from the top of container		
			{css: {top: '800px'}, //stop point for the animation 550px from the top of container		
			onComplete:function() //Tween Max onComplete functiion stating that the animation is over 
			{avocado.remove()}, //removing the avocado after animation to avoid storage issues 
			onUpdate:update }); 
			function complete() {	
			}
			function update() {
            }
	}

	
		function spawnBroccoli () {
		TweenMax.fromTo(broccoli, 5, //animating the brocolli for 10 seconds			
			{css: {left: '400px', top: '-100px'}}, //starting animation at 400px from the left and -10px from the top of container		
			{css: {left: '400px', top: '800px'}, //stop point for the animation  400px from left and 550px from the top of container		
			onComplete:function() //Tween Max onComplete functiion stating that the animation is over 
			{ broccoli.remove() }, //removing the broccoli after animation to avoid storage issues
			onUpdate:update }); 
			function complete() {	
			}
			function update() {
            }
	}


		function spawnCarrot () {
		TweenMax.fromTo(carrot, 8, //animating the carrot for 4 seconds			
			{css: {left: '800px', top: '-100px'}}, //starting animation at 800px from the left and -10px from the top of container		
			{css: {left: '800px', top: '800px'}, //stop point for the animation 800px from left and 550px from the top of container		
			onComplete:function() //Tween Max onComplete functiion stating that the animation is over 
			{ carrot.remove() }, //removing the carrot after animation to avoid storage issues
			onUpdate:update
		}); 
			function complete() {
            }
            function update() {
            }
	}

	function spawnCucumber() {
		TweenMax.fromTo(cucumber, 6, //animating the avocado for 8 seconds			
			{css: {top: '-100px'}}, //starting animation at -10px from the top of container		
			{css: {top: '800px'}, //stop point for the animation 550px from the top of container		
			onComplete:function() //Tween Max onComplete functiion stating that the animation is over 
			{cucumber.remove()}, //removing the avocado after animation to avoid storage issues 
			onUpdate:update }); 
			function complete() {	
			}
			function update() {
            }
	}

		function spawnAsparagus() {
		TweenMax.fromTo(asparagus, 10, //animating the avocado for 8 seconds			
			{css: {top: '-100px'}}, //starting animation at -10px from the top of container		
			{css: {top: '800px'}, //stop point for the animation 550px from the top of container		
			onComplete:function() //Tween Max onComplete functiion stating that the animation is over 
			{asparagus.remove()}, //removing the avocado after animation to avoid storage issues 
			onUpdate:update }); 
			function complete() {	
			}
			function update() {
            }
	}


		function spawnPepper() {
		TweenMax.fromTo(pepper, 3, //animating the avocado for 8 seconds			
			{css: {top: '-100px'}}, //starting animation at -10px from the top of container		
			{css: {top: '800px'}, //stop point for the animation 550px from the top of container		
			onComplete:function() //Tween Max onComplete functiion stating that the animation is over 
			{pepper.remove()}, //removing the avocado after animation to avoid storage issues 
			onUpdate:update }); 
			function complete() {	
			}
			function update() {
            }
	}

		function spawnEggplant() {
		TweenMax.fromTo(eggplant, 5, //animating the avocado for 8 seconds			
			{css: {top: '-100px'}}, //starting animation at -10px from the top of container		
			{css: {top: '800px'}, //stop point for the animation 550px from the top of container		
			onComplete:function() //Tween Max onComplete functiion stating that the animation is over 
			{eggplant.remove()}, //removing the avocado after animation to avoid storage issues 
			onUpdate:update }); 
			function complete() {	
			}
			function update() {
            }
	}

		function spawnSquash() {
		TweenMax.fromTo(squash, 4, //animating the avocado for 8 seconds			
			{css: {top: '-100px'}}, //starting animation at -10px from the top of container		
			{css: {top: '800px'}, //stop point for the animation 550px from the top of container		
			onComplete:function() //Tween Max onComplete functiion stating that the animation is over 
			{squash.remove()}, //removing the avocado after animation to avoid storage issues 
			onUpdate:update }); 
			function complete() {	
			}
			function update() {
            }
	}

		function spawnChicken() {
		TweenMax.fromTo(chicken, 5, //animating the avocado for 8 seconds			
			{css: {top: '-100px'}}, //starting animation at -10px from the top of container		
			{css: {top: '800px'}, //stop point for the animation 550px from the top of container		
			onComplete:function() //Tween Max onComplete functiion stating that the animation is over 
			{chicken.remove()}, //removing the avocado after animation to avoid storage issues 
			onUpdate:update }); 
			function complete() {	
			}
			function update() {
            }
	}

		function spawnGroundMeat() {
		TweenMax.fromTo(groundmeat, 3, //animating the avocado for 8 seconds			
			{css: {top: '-100px'}}, //starting animation at -10px from the top of container		
			{css: {top: '800px'}, //stop point for the animation 550px from the top of container		
			onComplete:function() //Tween Max onComplete functiion stating that the animation is over 
			{groundmeat.remove()}, //removing the avocado after animation to avoid storage issues 
			onUpdate:update }); 
			function complete() {	
			}
			function update() {
            }
	}

		function spawnPork() {
		TweenMax.fromTo(pork, 6, //animating the avocado for 8 seconds			
			{css: {top: '-100px'}}, //starting animation at -10px from the top of container		
			{css: {top: '800px'}, //stop point for the animation 550px from the top of container		
			onComplete:function() //Tween Max onComplete functiion stating that the animation is over 
			{pork.remove()}, //removing the avocado after animation to avoid storage issues 
			onUpdate:update }); 
			function complete() {	
			}
			function update() {
            }
	}

		function spawnMeat () {
		TweenMax.fromTo(meat, 2, //animating the meat for 5 seconds			
			{css: {left: '100px', top: '-100px'}}, //starting animation at 100px from the left and -10px from the top of container		
			{css: {left: '100px', top: '800px'}, //stop point for the animation  100px from left and 550px from the top of container		
			onComplete:function() //Tween Max onComplete functiion stating that the animation is over 
			{ meat.remove() }, //removing the meat after animation to avoid storage issues
			onUpdate:update }); 
			function complete() {	
			}
			function update() {
            }
	}


    let dropFood = setInterval(function(){
        let random = getRandom();
        switch(random) { 
            case 1: 
            	spawnAvocado();
                break;
            case 2: 
            	spawnAsparagus();
                break;
            case 3: 
            	spawnBroccoli();
                break;
            case 4: 
            	spawnCarrot();
            	break;
            case 5: 
            	spawnCucumber();
            	break;
            case 6:
            	spawnEggplant();
            	break;
            case 7:
            	spawnPepper();
            	break;
            case 8:
            	spawnSquash();
            	break;
            case 9: 
            	spawnChicken();
            	break;
            case 10:
            	spawnGroundMeat();
            	break;
            case 11:
            	spawnPork();
            	break;
            case 12:
            	spawnMeat();
            default: 
                break;
        }
    }, 700)



    function getRandom() { //get a random number to cycle through the arrows to randomize the drop.
        let number = (Math.floor(Math.random() * 12) + 1);
        return number;
    }


});


//figuring out how to get the avocado animation to spawn at random spots across the x axis of the page at random intervals
//1. spawn avocado in many places
//2. create a function that will take into account the length of the container
//3. randomize what spots of the length things should spawn


