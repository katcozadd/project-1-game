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




	//creating functionality for character movement
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

	//creating functionality for spawning and animating images along the length of the screen
	function spawnAvocado() {
		TweenMax.fromTo(avocado, 10, //animating the avocado for 8 seconds			
			{css: {top: '-100px'}}, //starting animation at -10px from the top of container		
			{css: {top: '800px'}, //stop point for the animation 550px from the top of container		
	// 		onComplete:function() //Tween Max onComplete functiion stating that the animation is over 
	// 		{avocado.remove()}, //removing the avocado after animation to avoid storage issues 
	// 		onUpdate:update }); 
	// 		function complete() {	
	// 		}
	// 		function update() {
            })
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
			onComplete:function() //Tween Max onComplete functiion stating that the animation is over 
			{asparagus.remove()}, //removing the avocado after animation to avoid storage issues 
			onUpdate:update }); 
			function complete() {	
			}
			function update() {
            }
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

	//creating functionality that will trigger animation of images based off of a random number between 1-12
	//setting an interval of 1 millisecond between each random number
    let dropFood = setInterval(function(){
        let random = getRandom();
        switch(random) { 
            case 1: 
            	spawnAvocado();
            	spawnChicken();
                break;
            case 2: 
            	spawnAsparagus();
            	spawnGroundMeat();
                break;
            case 3: 
            	spawnBroccoli();
            	spawnPork();
                break;
            case 4: 
            	spawnCarrot();
            	spawnMeat();
            	break;
            case 5: 
            	spawnCucumber();
            	spawnSquash();
            	break;
            case 6:
            	spawnEggplant();
            	spawnPepper();
            	break;
            default: 
                break;
        }
    }, 2000)


    function getRandom() { //get a random number to cycle through the arrows to randomize the drop.
        let number = (Math.floor(Math.random() * 6-1) + 1);
        return number;
    }


    //creating functionality to detect collisions
  function detectCollision() {
    vickie = {x: 500, y: 403, width: 300, height: 300}
    avocado = {x: 500, y: 600, width: 50, height: 50}

    if (vickie.x < avocado.x + avocado.width &&
   			vickie.x + vickie.width > avocado.x &&
   			vickie.y < avocado.y + avocado.height &&
   			vickie.height + vickie.y > avocado.y) {
    		alert('collision detected!');
    	}	
	}
});





