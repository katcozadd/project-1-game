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
			// console.log($('#vickie').position());
	let vickieStart = 900; //creating a start point for vickie to start moving
        if(event.keyCode == "37") //Moving with the right arrow key
            $("#vickie").stop(true).animate({"left" : "-=50px"}, "fast"); //moving vickie right 50px
        	if (vickieStart === 50) {
        		alert('Guuuuuurl! You are a wiener... I mean winner!');
        	}
         if(event.keyCode == "39")   //moving with the left arrow key   
             $("#vickie").stop(true).animate({"left" : "+=30px"}, "fast"); //moving vickie left 50px		}
			}

		);

	}

	console.log(vickie[0].x);

	vickieGo(); //calling the vickieGo function


	//creating functionality for spawning and animating images along the length of the screen
	function spawnAvocado() {
		TweenMax.fromTo(avocado, 10, //animating the avocado for 8 seconds			
			{css: {top: '-100px'}}, //starting animation at -10px from the top of container		
			{css: {top: '800px'},
			onUpdate:update}) 
			function update() {
				checkCollision(vickie, avocado);
			}
}

	
		function spawnBroccoli () {
		TweenMax.fromTo(broccoli, 7, //animating the brocolli for 10 seconds			
			{css: {top: '-100px'}}, //starting animation at -10px from the top of container		
			{css: {top: '800px'},
			onUpdate:update}) 
			function update() {
				checkCollision(vickie, broccoli);

            
	}
}


		function spawnCarrot () {
		TweenMax.fromTo(carrot, 8, //animating the carrot for 4 seconds			
			{css: {top: '-100px'}}, //starting animation at -10px from the top of container		
			{css: {top: '800px'},
			onUpdate:update}) 
			function update() {
				checkCollision(vickie, carrot);

            
	}
}


		function spawnAsparagus() {
		TweenMax.fromTo(asparagus, 10, //animating the avocado for 8 seconds			
			{css: {top: '-100px'}}, //starting animation at -10px from the top of container		
			{css: {top: '800px'},
			onUpdate:update}) 
			function update() {
				checkCollision(vickie, asparagus);

            
	}
}


		function spawnPepper() {
		TweenMax.fromTo(pepper, 7, //animating the avocado for 8 seconds			
			{css: {top: '-100px'}}, //starting animation at -10px from the top of container		
			{css: {top: '800px'},
			onUpdate:update}) 
			function update() {
				checkCollision(vickie, pepper);

            
	}
}
		function spawnEggplant() {
		TweenMax.fromTo(eggplant, 5, //animating the avocado for 8 seconds			
			{css: {top: '-100px'}}, //starting animation at -10px from the top of container		
			{css: {top: '800px'},
			onUpdate:update}) 
			function update() {
				checkCollision(vickie, eggplant);

            
	}
}

		function spawnSquash() {
		TweenMax.fromTo(squash, 8, //animating the avocado for 8 seconds			
			{css: {top: '-100px'}}, //starting animation at -10px from the top of container		
			{css: {top: '800px'},
			onUpdate:update}) 
			function update() {
				checkCollision(vickie, squash);

            
	}
}

		function spawnChicken() {
		TweenMax.fromTo(chicken, 5, //animating the avocado for 8 seconds			
			{css: {top: '-100px'}}, //starting animation at -10px from the top of container		
			{css: {top: '800px'},
			onUpdate:update}) 
			function update() {
				meatCollision(vickie, chicken);

            
	}
}

		function spawnGroundMeat() {
		TweenMax.fromTo(groundmeat, 4, //animating the avocado for 8 seconds			
			{css: {top: '-100px'}}, //starting animation at -10px from the top of container		
			{css: {top: '800px'},
			onUpdate:update}) 
			function update() {
				meatCollision(vickie, groundmeat);

            
	}
}

		function spawnPork() {
		TweenMax.fromTo(pork, 6, //animating the avocado for 8 seconds			
			{css: {top: '-100px'}}, //starting animation at -10px from the top of container		
			{css: {top: '800px'},
			onUpdate:update}) 
			function update() {
				meatCollision(vickie, pork);

            
	}
}

		function spawnMeat () {
		TweenMax.fromTo(meat, 4, //animating the meat for 5 seconds			
			{css: {top: '-100px'}}, //starting animation at -10px from the top of container		
			{css: {top: '800px'},
			onUpdate:update}) 
			function update() {
				meatCollision(vickie, meat);

            
	}
}

	//creating functionality that will trigger animation of images based off of a random number between 1-6
	//setting an interval of 1 millisecond between each random number
    const dropFood = setInterval(function(){
        let random = getRandom();
        switch(random) { 
            case 1: //if random number is 1 call these functions
            	spawnAvocado();
            	spawnChicken();
            	spawnCarrot();
            	spawnMeat();
            	spawnGroundMeat();
                break;
            case 2: //if random number is 2 call these functions
            	spawnAsparagus();
            	spawnGroundMeat();
            	spawnPepper();
            	spawnMeat();
                break;
            case 3: //if random number is 3 call these functions
            	spawnBroccoli();
            	spawnPork();
            	spawnEggplant();
            	spawnGroundMeat();
                break;
            case 4: //if random number is 4 call these functions
            	spawnAvocado();
            	spawnChicken();
            	spawnCarrot();
            	spawnGroundMeat();
            	break;
            case 5: //if random number is 5 call these functions
            	spawnAsparagus();
            	spawnGroundMeat();
            	spawnPepper();
            	spawnMeat();
            	break;
            case 6: //if random number is 6 call these functions
            	spawnBroccoli();
            	spawnPork();
            	spawnEggplant();
            	spawnGroundMeat();
              	break;
            default: 
                break;
        }
    }, 2000) //interval timing

    function getRandom() { //get a random number to cycle through the arrows to randomize the drop.
        let number = (Math.floor(Math.random() * 6) + 1);
        return number;
    }
    
       
    //check collisions
    function checkCollision(element1, element2) {
    	if (element1[0].x < element2[0].x + element2[0].width &&
    	element1[0].y < element2[0].y + element2[0].height && 
    	element1[0].height + element1[0].y > element2[0].y) {
    		// score += 1;
    		// $('#gamePoints').append(score);
    		// console.log('collisions');
    		element2.remove();

    	}
    }

        function meatCollision(element1, element2) {
    	if (element1[0].x === element2.x &&
    	element1[0].y === element2[0].y) {
    		// score += 1;
    		// $('#gamePoints').append(score);
    		alert('Game over guuuuurl...')
    	}
    }



    



});

