/**
*  Molyjam 2013 - Air Drops v1.0
*
*  @author Lobster Games
*  @date   Jul 2013
*/
"use strict";

//----------------------------------
//Sizing do mostrador - Area de jogo
//==================================
var display_width = 391;
var display_height = 294;
//----------------------------------

//----------------------------------
//Sizing do High-score Panel
//==================================
var high_score_height = 20;
var high_score_width = display_width;
//----------------------------------

//----------------------------------
//Posicionamento relativo do display
//==================================
var left_span = 126;
var up_span = 48;
//----------------------------------

//----------------------------------
//Variaveis de configuração do nível
//==================================
var POO_FREQUENCY = 70;
var DOG_SHOW_FREQUENCY = 100;
var DOG_NOSHOW_PROB = 1;  		

var POO_LEVEL_UP = 3;
var poo_velocity = 140;
//----------------------------------


Crafty.c('DogDeamon',{
	init: function(){
		this.requires('Grid');
		this.attr({
			lastTick: 0,
			dificulty: 1,
			lastPos: 0
		});

		this.bind('EnterFrame', function(){
			this.attr({
				lastTick: this.lastTick + 1 
			});

			if(this.lastTick % DOG_SHOW_FREQUENCY === 0){
				if(dog != undefined)
					dog.destroy();

				var aux = Math.random() * (Game.map_grid.width 
							+ DOG_NOSHOW_PROB) | 0;
				if(aux < Game.map_grid.width){
					dog = Crafty.e('Dog').at(aux, 0);
				}

				this.attr({
					lastTick: 0,
				});
			}
		});
	}


})

Crafty.c('Dog', {
	init: function(){
		this.requires('2D, Grid, Canvas, spr_dog');
		this.bind('EnterFrame', function(){

			this.attr({
				dog_tick_cnt: this.dog_tick_cnt + 1 
			})

			if(this.dog_tick_cnt % 
				(POO_FREQUENCY) === 0){
				this.poo();
				this.attr({
					dog_tick_cnt: this.dog_tick_cnt + 1 
				})
			}
		});

		this.attr({
			dog_tick_cnt: 0,
			dificulty: 1,
			visible:true
		});


	},

	poo: function(){
		var pos = this.at();
		var canPoo = true;
		Crafty('Poo').each(function(){
			var posaux = this.at();
			if(pos.x === posaux.x &&
				pos.y + 1 === posaux.y)
				canPoo = false;
		});

		if (canPoo){
			Crafty.e('Poo').at(pos.x, pos.y+1);
		}
	},
});

Crafty.c('Poo', {
	init: function(){
		this.requires('2D, Grid, Canvas, spr_poo, Solid, Collision');
		
		this.attr({
			poo_tick_cnt: 0,
		});
	

		this.bind('EnterFrame', function(){
			var posPoo = this.at();
			var auxPoo = this.poo_tick_cnt + 1;

			if(auxPoo % poo_velocity === 0){
				auxPoo = 0;
				if(Math.round(posPoo.y) < 3){
					Crafty.audio.play("beep");
					this.at(posPoo.x, posPoo.y+1);
				}else{
					var plPos = player.at();
					if(Math.round(plPos.x) === Math.round(posPoo.x)){
						this.destroy();
						score++;
						highscorePanel.text(score);
						if (score % POO_LEVEL_UP === 0){
							poo_velocity = poo_velocity - 18;
							POO_FREQUENCY = POO_FREQUENCY - 8;
						}
					}else{
						lose();
					}
				}
			
				
			}


			this.attr({
				poo_tick_cnt: auxPoo
			});
		});

		this.onHit('Player', function(){
			this.destroy();
		});

	},	


});


Crafty.c('Player', {
	init: function(){
		this.requires('2D, DOM, Grid, spr_gj1_empty');

		this.bind('KeyDown', function(e){
			switch(e.key){
				case Crafty.keys['LEFT_ARROW']:
					player.moveLeft();
					break;
				case Crafty.keys['RIGHT_ARROW']:
					player.moveRight();
					break;
			}
		});
	},

	moveRight: function(){
		var pos = this.at();
		if (pos.x < Game.map_grid.width - 1){
			var newx = pos.x + 1;
			this.at(newx , pos.y);
			switch(newx){
				case 1:
					
					break;
			}
		}


	},

	moveLeft: function(){
		var pos = this.at();
		if (pos.x > 0)
			this.at(pos.x - 1, pos.y);
	},
});


//----------------------------------
//Componentes Visuais
//==================================
Crafty.c('HighScore', {
	init: function(){
		this.requires('2D, Canvas, Text');
		this.attr({
			x: left_span+high_score_width-40,
  			y: up_span,
  			w: 40,
  			h: high_score_height
  		});
  		this.text('0');
	},	
})



