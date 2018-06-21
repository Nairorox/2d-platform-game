/*		CREDITS			*/

//Created and coded by: Damian Nowakowski
//https://github.com/Nairorox/

//	Sprites Used:
//	main character:
//	https://devilsworkshop.itch.io/platformer-free-2d-sprites-game-art-and-ui
//	chapter 1:
//	https://raventale.itch.io/parallax-background
//	chapters 1+
//	https://free-game-assets.itch.io/free-horizontal-game-backgrounds


const gameDOM = document.querySelector('.app__game')
const ctx = gameDOM.getContext('2d');
const layersGroup = [];
for(var i=0; i < 12; i += 1){
	layersGroup.push(document.querySelector(`.app__b${i}`))
}

const bTree = document.querySelector('.app__btree');
const playerDOM = document.querySelector('.app__player');
const pctx = playerDOM.getContext('2d');

//sprites
let sprite = {};
for(var i = 1; i < 19; i++){
	sprite[`dead${i}`] = new Image();
	sprite[`dead${i}`].src = `./sprites/death/hero_death000${i}.png`;
}
for(var i = 1; i < 10; i++){
	sprite[`run${i}`] = new Image();
	sprite[`runl${i}`] = new Image();
	sprite[`idle${i}`] = new Image();
	sprite[`jump${i}`] = new Image();
	sprite[`run${i}`].src = `./sprites/run/hero_run000${i}.png`;
	sprite[`runl${i}`].src = `./sprites/runl/hero_run000${i}.png`;
	sprite[`idle${i}`].src = `./sprites/idle/hero_idle000${i}.png`;
	sprite[`jump${i}`].src = `./sprites/jump/hero_jump000${i}.png`;
}

sprite['gameOver'] = new Image();
sprite['gameOver'].src = `./sprites/title_gameOver.png`;


let gameSpeed = 5;