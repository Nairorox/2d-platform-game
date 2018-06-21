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


let chapter1 = new Chapter(game);

//background
new Layer(0, 0, null, './sprites/bg/c1/_11_background.png', layersGroup[0], chapter1, -0.05 );
new Layer(0, 0, null, './sprites/bg/c1/_10_distant_clouds.png', layersGroup[1], chapter1, 0.1, 0.01 );
new Layer(0, 0, null, './sprites/bg/c1/_09_distant_clouds1.png', layersGroup[2], chapter1, 0.2, -0.02 );
new Layer(0, 0, null, './sprites/bg/c1/_08_clouds.png', layersGroup[3], chapter1, 0.3, 0.03 );
new Layer(0, 0, null, './sprites/bg/c1/_07_huge_clouds.png', layersGroup[4], chapter1, 0.4, -0.04 );
new Layer(0, 0, null, './sprites/bg/c1/_06_hill2.png', layersGroup[5], chapter1, 0.5 );
new Layer(0, 0, null, './sprites/bg/c1/_05_hill1.png', layersGroup[6], chapter1, 0.6 );
new Layer(0, 0, null, './sprites/bg/c1/_04_bushes.png', layersGroup[7], chapter1, 0.7 );
new Layer(0, 0, null, './sprites/bg/c1/_03_distant_trees.png', layersGroup[8], chapter1, 0.8 );
new Layer(0, 0, null, './sprites/bg/c1/_02_trees and bushes.png', layersGroup[9], chapter1, 0.9 );
new Layer(0, 0, null, './sprites/bg/c1/_01_ground.png', layersGroup[10], chapter1, 1);

//walls
new Wall(120, 570, 1220, 530, chapter1, false, 'blue', false, 0, false)
new Wall(120, 440, 10, 550, chapter1, true, 	'green')
new Wall(620, 510, 100, 50, chapter1, true, 'yellow', true, -1.5)
new Wall(20, 510, 100, 50, chapter1, true, 'yellow', true, 1.5)
//bridge
for(let i = 0; i <20; i += 1){
		new Wall(2550 + i*130, 250, 20, 30, chapter1, true, false);
}
//stairs
for(let i = 0; i <50; i += 1){
		new Wall(1340 + i*20, 480 - i*5, 40, 3000, chapter1, true, false);
}

new KillingWall(-1200, 0, 800, 1050, chapter1, true, 'red', true, 4, true, true, 4600)
new KillingWall(900, 20, 200, 450, chapter1, true, 'red', true, -3, true, true, -200)
new KillingWall(1150, 530, 50, 20, chapter1, true, 'red', true, -1, true, true, -200)
new WinWall(5720, 610, 1000, 50, chapter1, true, 'green', true, -0.5, true, true, 5500)


/*	chapter 2	*/

let chapter2 = new Chapter(game);
new Layer(0, 0, null, './sprites/bg/c2/sky.png', layersGroup[4], chapter2, 0.1, 0.01 );
new Layer(0, 0, null, './sprites/bg/c2/clouds_1.png', layersGroup[5], chapter2, 0.25, 0.025 );
new Layer(0, 0, null, './sprites/bg/c2/clouds_3.png', layersGroup[6], chapter2, 0.4, 0.04 );
new Layer(0, 0, null, './sprites/bg/c2/clouds_4.png', layersGroup[7], chapter2, 0.55, 0.055 );
new Layer(0, 0, null, './sprites/bg/c2/clouds_2.png', layersGroup[8], chapter2, 0.7, -0.07 );
new Layer(0, 0, null, './sprites/bg/c2/rocks_1.png', layersGroup[9], chapter2, 0.85 );
new Layer(0, 0, null, './sprites/bg/c2/rocks_2.png', layersGroup[10], chapter2, 1 );

new Wall(120, 670, 320, 530, chapter2, true, 'yellow', false, 0, true);



let lastStairC2;

let totalRandomOffset = 0;
	for(let i = 0; i < 10; i += 1){
		let random = Math.random()*220;
		totalRandomOffset += random;
		new KillingWall(580 + (380 * i) + random, 590, 40, 30, chapter2, true, 'red', false, 0, true);
	}
	//stairs
	for(let i = 0; i < 30; i += 1){
		lastStairC2 = new Wall(380 *10 + totalRandomOffset + i*20, 610 - i*5, 40, 3000, chapter2, true, false);
	}

let test = new WinWall(380 *10 + totalRandomOffset + 30*20, 460, 1000, 50, chapter2, true, 'green')
let movingPlatform = new Wall(120, 630, 250, 30, chapter2, true, 'blue', true, 4, true, true);

let chapter3 = new Chapter(game);

game.start();
