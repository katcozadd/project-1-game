# Project One - Vegan Vickie

## Big Picture:

Vickie is a vegan girl who has been put into her worst nightmare... stuck in the middle of a sunflower field in the midst of a meat storm. Meats and vegetables are falling from the sky and it is up to the game player to help Vickie get out of the sunflower field safely. Try to collect vegetables and try not to get hit by meat while crossing the field.

### Trello & Game Planning

https://trello.com/b/wd5Y3YRI/ga-project-1-game-vegan-vickie

I definitely under-estimated the difficulty teaching myself some of the algorithims that I used in this project while in the planning portion. I used a website called Trello to create user stories, checklists and estimate velocity of each task.

I did go back throughout the project and update some of the checklists and user stories to match a more realistic approach to this game, but not thoroughly.

### Approach Taken

Soooo I decided to start this project by doing all of the users stories that I foresaw having the lowest velocity, which was a fantastic start that gave me a lot of optimism. 

As I finished making things look pretty, I started to realize how difficult some of the game logic was going to be for me... Logic took me four of the six days that we had to complete this project.

### Technical Requirements

For this project, the follow was required:

- Render a game in the browser
- Design logic for winning & visually display which player won, or if it is one player, have a win state with feedback for the player
- Include separate HTML / CSS / JavaScript files
- Stick with KISS (Keep It Simple Stupid) and DRY (Don't Repeat Yourself) principles
- Use Javascript or jQuery for DOM manipulation
- Deploy your game online, where the rest of the world can access it
- Use semantic markup for HTML (adhere to best practices)

### Technologies Used

For this project, I used a CDN from https://greensock.com/ called TweenMax. This helped me create my animation functions for falling objects.

Example:
```
	function spawnAvocado() {
		TweenMax.fromTo(avocado, 10, //animating the avocado for 10 seconds			
			{css: {top: '-100px'}}, //starting animation at -100px from the top of container		
			{css: {top: '800px'}, //stop animation at 800px 
			onUpdate:update}) 
			function update() {//updating and respawning function
				checkCollision(vickie, avocado);//invoking checkCollision function everytime the animation updates
			}
}
```

As well as HTML5, CSS3 and jQuery...

### Obstacles

The biggest and most challenging obstacle I faced (and tackled!!!) was collision detection between two moving objects. I used the follow algorithm after 123,092,342 failed attempts and one trip to the bathroom to cry:

```
    function checkCollision(element1, element2) { 
    	if (element1[0].x < element2[0].x + element2[0].width &&
    		element1[0].x + element1[0].width > element2[0].x &&
    	element1[0].y < element2[0].y + element2[0].height && 
    	element1[0].height + element1[0].y > element2[0].y) {
    		element2.remove();
    	}
    }
```

### Project Continuation

Before I submit this project into my portfolio work, I intended on:
- Creating a scoreboard that adds points every time a vegetable is "caught"
- Creating custom alert messages to let user know that they have either won the game or lost

### Deployment

I deployed my game to https://pages.github.com/, which makes deloying and hosting webpages directly from a repository easy as pie.

The URL to my game is https://katcozadd.github.io/project-1-game/index.html.

### Personal Flare

I have an intense love for vegetables and a fear of meat, so I thought it would be funny to make a game that brings that to life. Okay... I'm not really scared of meat, I just don't eat it. 

Bitmojis lighten up all situations.

Vegan rap songs suck.

Aren't we all losers if a giant slab of meat falls from the sky and hits us in the face??!
