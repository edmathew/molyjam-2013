/**
*  Molyjam 2013 - Air Drops v1.0
*   -> Loading Scene
*
*  @author Lobster Games
*  @date   Jul 2013
*/
"use strict";

var score = 0;

Crafty.scene("main", function(){
	Crafty.background("url('../images/molyGW.png') no-repeat");

	//Posicionamentos iniciais
	player = Crafty.e('Player').at(0, Game.map_grid.height - 1);
	Crafty.e('DogDeamon');	
	highscorePanel = Crafty.e('HighScore');
	Crafty.audio.play("start");



});

function lose(){
	Crafty('Poo').each(function(){
		this.destroy();
	});

	player.at(0, Game.map_grid.height - 1);
	dog.destroy();
	score = 0;
	poo_velocity = 140;
	POO_FREQUENCY = 70;
	highscorePanel.text('0');
	Crafty.audio.play("start");

}

