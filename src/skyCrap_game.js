/**
*  Molyjam 2013 - Air Drops v1.0
*
*  @author Lobster Games
*  @date   Jul 2013
*/
"use strict";

//-----------------------------
//Dimentions
var window_width = 640;
var window_height = 480;

var game_width = 640;
var game_height = 410;


//-----------------------------
var Game;
var dog;
var player;
var highscorePanel;
//-----------------------------


Game = {
	map_grid: {
		width: 4,
		height: 5,
		tile: {
			width: 391/4,
			height: (294-30)/5
		}
	},
 	
  // Initialize and start our game
 	start: function() {
  		loadSprites();
  		Crafty.init(window_width, window_height);
  		Crafty.canvas.init();

  		drawScene();	
  	},
}

Crafty.c('Grid', {
	init: function(){
		this.attr({
			w: Game.map_grid.tile.width,
			h: Game.map_grid.tile.height
		})
	},

	//Store a entity at (X, Y)
	at: function(x, y){
		if(x === undefined && y === undefined)
			return {
				x: Math.round((this.x - left_span) / Game.map_grid.tile.width),
				y: Math.round((this.y - up_span - high_score_height) / Game.map_grid.tile.height)
			}
		else{
			this.attr({
				x: x * Game.map_grid.tile.width			+ left_span,
				y: y * Game.map_grid.tile.height		+ up_span +  high_score_height
			});
			return this;
		}


	},
});





function configPlayer(){
    var player = Crafty.e();
    player.addComponent("2D, Canvas, Color");
    player.color("red").attr({w:50, h:50});

    player.addComponent("Collision").bind('Moved', function(from){
    	if(this.hit('2D'))
    		this.attr({x: from.x, y: from.y});
    });

    player.addComponent("Multiway").multiway(4, {
    	LEFT_ARROW: 180,
    	RIGHT_ARROW: 0
    });

}



//----------------------------------
//Startup
//==================================
function loadSprites(){
	//console.log("Loading Sprites");

	Crafty.load(["../images/cao.png",
				 "../images/gajo1vazio.png",
				 "../images/poia.png"],
		function(){
			Crafty.sprite(98,53, '../images/cao.png', {	
				spr_dog: [0, 0]
			});	

			Crafty.sprite(98,53, '../images/poia.png', {
				spr_poo: [0, 0]
			});

			Crafty.sprite('../images/gajo1vazio.png', {
				spr_gj1_empty: [0, 0, 98, 66]
			});

		});

}


//Draw all the game's components
function drawScene(){
 		Crafty.background("url('../images/molyGW.png') no-repeat");
 //   Crafty.e('HighScore');
  	initGrid();

}

//Init all the startup Grid Actors
function initGrid(){
	//player = Crafty.e('Player').at(0, Game.map_grid.height -1);
//	Crafty.e('DogDeamon');	
//	Crafty.e('PL1').at(1, Game.map_grid.height - 1);
	Crafty.e('Initializer');
}



