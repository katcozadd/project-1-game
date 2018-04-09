$(document).ready(function() {
	console.log('sanity check');

	let asparagus = $('#asparagus'); //creating an asparagus variable for the asparagus image
	let avocado = $('#avocado'); //creating an avocado variable for the avocado image
	let broccoli = $('#broccoli'); //creating a broccoli variable for the broccoli image
	let carrot = $('#carrot'); //creating a carrot variable for the carrot image
	let cucumber = $('#cucumber'); //creating a cucumber variable for the cucumber image
	let eggplant = $('#eggplant'); //creating an eggplant variable for the eggplant image
	let pepper = $('#pepper'); //creating a pepper variable for the pepper image
	let squash = $('squash'); //creating a squash variable for the squash image
	let chicken = $('#chicken'); //creating a chicken variable for the chicken image
	let groundmeat = $('#groundmeat'); //creating a groundmeat variable for the groundmeat image
	let pork = $('#pork'); //creating a pork variable for the pork image
	let meat = $('#meat'); //creating a meat variable for the meat image
	let vickie = $('#vickie');


	//creating functionality for character movement
	function vickieGo () {
	$(document).keydown(function(event) {

	let vickieStart = 0; //creating a start point for vickie to start moving
        if(event.keyCode == "37") //Moving with the right arrow key
            $("#vickie").stop(true).animate({"left" : "-=70px"}, "fast"); //moving vickie right 50px
        if(event.keyCode == "39")   //moving with the left arrow key   
            $("#vickie").stop(true).animate({"left" : "+=70px"}, "fast"); //moving vickie left 50px
		}

		);
	}

	vickieGo(); //calling the vickieGo function

	//creating functionality for spawning and animating images along the length of the screen
	function spawnAvocado() {
		TweenMax.fromTo(avocado, 10, //animating the avocado for 8 seconds			
			{css: {top: '-100px'}}, //starting animation at -10px from the top of container		
			{css: {top: '800px'},}) //stop point for the animation 550px from the top of container		
	// 		onComplete:function() //Tween Max onComplete functiion stating that the animation is over 
	// 		{avocado.remove()}, //removing the avocado after animation to avoid storage issues 
	// 		onUpdate:update }); 
	// 		function complete() {	
	// 		}
	// 		function update() {

            
	}

	
		function spawnBroccoli () {
		TweenMax.fromTo(broccoli, 7, //animating the brocolli for 10 seconds			
			{css: {left: '400px', top: '-100px'}}, //starting animation at 400px from the left and -10px from the top of container		
			{css: {left: '400px', top: '800px'}, //stop point for the animation  400px from left and 550px from the top of container		
			// onComplete:function() //Tween Max onComplete functiion stating that the animation is over 
			// { broccoli.remove() }, //removing the broccoli after animation to avoid storage issues
			// onUpdate:update }); 
			// function complete() {	
			// }
			// function update() {
            })
	}


		function spawnCarrot () {
		TweenMax.fromTo(carrot, 8, //animating the carrot for 4 seconds			
			{css: {left: '800px', top: '-100px'}}, //starting animation at 800px from the left and -10px from the top of container		
			{css: {left: '800px', top: '800px'}, //stop point for the animation 800px from left and 550px from the top of container		
			// onComplete:function() //Tween Max onComplete functiion stating that the animation is over 
			// { carrot.remove() }, //removing the carrot after animation to avoid storage issues
			// onUpdate:update}); 
			// function complete() {
   //          }
   //          function update() {
            })
	}

	function spawnCucumber() {
		TweenMax.fromTo(cucumber, 6, //animating the avocado for 8 seconds			
			{css: {top: '-100px'}}, //starting animation at -10px from the top of container		
			{css: {top: '800px'}, //stop point for the animation 550px from the top of container		
			// onComplete:function() //Tween Max onComplete functiion stating that the animation is over 
			// {cucumber.remove()}, //removing the avocado after animation to avoid storage issues 
			// onUpdate:update }); 
			// function complete() {	
			// }
			// function update() {
            })
	}

		function spawnAsparagus() {
		TweenMax.fromTo(asparagus, 10, //animating the avocado for 8 seconds			
			{css: {top: '-100px'}}, //starting animation at -10px from the top of container		
			{css: {top: '800px'}, //stop point for the animation 550px from the top of container		
			// onComplete:function() //Tween Max onComplete functiion stating that the animation is over 
			// {asparagus.remove()}, //removing the avocado after animation to avoid storage issues 
			// onUpdate:update }); 
			// function complete() {	
			// }
			// function update() {
            })
	}


		function spawnPepper() {
		TweenMax.fromTo(pepper, 7, //animating the avocado for 8 seconds			
			{css: {top: '-100px'}}, //starting animation at -10px from the top of container		
			{css: {top: '800px'}, //stop point for the animation 550px from the top of container		
			// onComplete:function() //Tween Max onComplete functiion stating that the animation is over 
			// {pepper.remove()}, //removing the avocado after animation to avoid storage issues 
			// onUpdate:update }); 
			// function complete() {	
			// }
			// function update() {
            })
	}

		function spawnEggplant() {
		TweenMax.fromTo(eggplant, 5, //animating the avocado for 8 seconds			
			{css: {top: '-100px'}}, //starting animation at -10px from the top of container		
			{css: {top: '800px'}, //stop point for the animation 550px from the top of container		
			// onComplete:function() //Tween Max onComplete functiion stating that the animation is over 
			// {eggplant.remove()}, //removing the avocado after animation to avoid storage issues 
			// onUpdate:update }); 
			// function complete() {	
			// }
			// function update() {
            })
	}

		function spawnSquash() {
		TweenMax.fromTo(squash, 8, //animating the avocado for 8 seconds			
			{css: {top: '-100px'}}, //starting animation at -10px from the top of container		
			{css: {top: '800px'}, //stop point for the animation 550px from the top of container		
			// onComplete:function() //Tween Max onComplete functiion stating that the animation is over 
			// {squash.remove()}, //removing the avocado after animation to avoid storage issues 
			// onUpdate:update }); 
			// function complete() {	
			// }
			// function update() {
            })
	}

		function spawnChicken() {
		TweenMax.fromTo(chicken, 5, //animating the avocado for 8 seconds			
			{css: {top: '-100px'}}, //starting animation at -10px from the top of container		
			{css: {top: '800px'}, //stop point for the animation 550px from the top of container		
			// onComplete:function() //Tween Max onComplete functiion stating that the animation is over 
			// {chicken.remove()}, //removing the avocado after animation to avoid storage issues 
			// onUpdate:update }); 
			// function complete() {	
			// }
			// function update() {
            })
	}

		function spawnGroundMeat() {
		TweenMax.fromTo(groundmeat, 4, //animating the avocado for 8 seconds			
			{css: {top: '-100px'}}, //starting animation at -10px from the top of container		
			{css: {top: '800px'}, //stop point for the animation 550px from the top of container		
			// onComplete:function() //Tween Max onComplete functiion stating that the animation is over 
			// {groundmeat.remove()}, //removing the avocado after animation to avoid storage issues 
			// onUpdate:update }); 
			// function complete() {	
			// }
			// function update() {
            })
	}

		function spawnPork() {
		TweenMax.fromTo(pork, 6, //animating the avocado for 8 seconds			
			{css: {top: '-100px'}}, //starting animation at -10px from the top of container		
			{css: {top: '800px'}, //stop point for the animation 550px from the top of container		
			// onComplete:function() //Tween Max onComplete functiion stating that the animation is over 
			// {pork.remove()}, //removing the avocado after animation to avoid storage issues 
			// onUpdate:update }); 
			// function complete() {	
			// }
			// function update() {
            })
	}

		function spawnMeat () {
		TweenMax.fromTo(meat, 7, //animating the meat for 5 seconds			
			{css: {left: '100px', top: '-100px'}}, //starting animation at 100px from the left and -10px from the top of container		
			{css: {left: '100px', top: '800px'}, //stop point for the animation  100px from left and 550px from the top of container		
			// onComplete:function() //Tween Max onComplete functiion stating that the animation is over 
			// { meat.remove() }, //removing the meat after animation to avoid storage issues
			// onUpdate:update }); 
			// function complete() {	
			// }
			// function update() {
            })
	}

	//creating functionality that will trigger animation of images based off of a random number between 1-6
	//setting an interval of 1 millisecond between each random number
    const dropFood = setInterval(function(){
        let random = getRandom();
        switch(random) { 
            case 1: //if random number is 1 call these functions
            	spawnAvocado();
            	spawnChicken();
                break;
            case 2: //if random number is 2 call these functions
            	spawnAsparagus();
            	spawnGroundMeat();
                break;
            case 3: //if random number is 3 call these functions
            	spawnBroccoli();
            	spawnPork();
                break;
            case 4: //if random number is 4 call these functions
            	spawnCarrot();
            	spawnMeat();
            	break;
            case 5: //if random number is 5 call these functions
            	spawnCucumber();
            	spawnSquash();
            	break;
            case 6: //if random number is 6 call these functions
            	spawnEggplant();
            	spawnPepper();
            	break;
            default: 
                break;
        }
    }, 2000) //interval timing

    function getRandom() { //get a random number to cycle through the arrows to randomize the drop.
        let number = (Math.floor(Math.random() * 6) + 1);
        return number;
    }
    
            
// check for collision   

 function collision(avocado, vickie) {
        var x1 = avocado.offset().left;
        var y1 = avocado.offset().top;
        var h1 = avocado.outerHeight(true);
        var w1 = avocado.outerWidth(true);
        var b1 = y1 + h1;
        var r1 = x1 + w1;
        var x2 = vickie.offset().left;
        var y2 = vickie.offset().top;
        var h2 = vickie.outerHeight(true);
        var w2 = vickie.outerWidth(true);
        var b2 = y2 + h2;
        var r2 = x2 + w2;

        if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) return false;
        return true;
      }



});

