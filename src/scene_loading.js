/**
*  Molyjam 2013 - Air Drops v1.0
*   -> Loading Scene
*
*  @author Lobster Games
*  @date   Jul 2013
*/
"use strict";

window.onload = function(){
	Crafty.init(game_width, game_height);
	Crafty.canvas.init();

	Crafty.scene("loading", function() {
	 	Crafty.load(["../images/cao.png",
					 "../images/gajo sprite sheet.png",
					 "../images/poia.png"],
			function(){
				Crafty.sprite('../images/cao.png', {	
					spr_dog: [0, 0, 98, 50]
				});	

				Crafty.sprite('../images/poia.png', {
					spr_poo: [0, 0, 98, 50]
				});

				Crafty.sprite('../images/gajo sprite sheet.png', {
					spr_gj1_empty: [0,   0, 70, 66],
					spr_gj2_empty: [70,  0, 70, 66],
					spr_gj3_empty: [140, 0, 70, 66],
					spr_gj4_empty: [210, 0, 70, 66],

					spr_gj1_full: [0,   66, 70, 66],
					spr_gj2_full: [70,  66, 70, 66],
					spr_gj3_full: [140, 66, 70, 66],
					spr_gj4_full: [210, 66, 70, 66],

					spr_gj1_0: [0,   66, 70, 66],
					spr_gj2_0: [70,  66, 70, 66],
					spr_gj3_0: [140, 66, 70, 66],
					spr_gj4_0: [210, 66, 70, 66]

				});			

				Crafty.scene("main");
			}
		);

		Crafty.audio.add("beep", "../sound/beep.mp3");
		Crafty.audio.add("start", "../sound/168124__mayanxibalba__bit-computer-music.wav");
	

	    
	    // Black background with some loading text
	    Crafty.background("#000");
	    Crafty.e("2D, DOM, Text").attr({w: 40, h: 20, x: 300, y: 210})
	      .text("Loading")
	      .css({"text-align": "center"});
	});
  	
	Crafty.scene("loading");
};