$(document).ready(function() {
	console.log('sanity check');
	


	//creating a start point for vickie to start moving
	let vickieStart = 0;

	$(document).keydown(function(event) {
	//Moving with the right arrow key
        if(event.keyCode == "37")
            $("#vickie").stop(true).animate({"left" : "-=50px"});
    //moving with the left arrow key
        if(event.keyCode == "39")
            $("#vickie").stop(true).animate({"left" : "+=50px"});	

	}
)


	let avocado = $('#avocado');

	TweenMax.fromTo(avocado, 10, 	
	{css: {top: '-10px'}}, 
	{css: {top: '500px'}, 
	onComplete:function() { avocado.remove()}});

	let rect = $('#vickie').getBoundingClientRect();
	console.log(rect);







})