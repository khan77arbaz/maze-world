
window.addEventListener('load', function () {

	var game = new Phaser.Game({
		width: 1920,
		height: 1080,
		type: Phaser.AUTO,
        backgroundColor: "#6DF3BB",
		scale: {
			mode: Phaser.Scale.FIT,
			autoCenter: Phaser.Scale.CENTER_BOTH
		},
		physics: {
        	default: 'arcade',
			arcade: {
				debug: false,
			}
		},
	});
	
	game.scene.add("Preload", Preload);
	game.scene.add("GameLoadingScene", GameLoadingScene);
	// game.scene.add("Level", Level);
	game.scene.add("LevelOne", LevelOne);
	game.scene.add("LevelTwo", LevelTwo);
	game.scene.add("LevelThree", LevelThree);
	game.scene.add("LevelFour", LevelFour);
	game.scene.add("LevelFive", LevelFive);
	game.scene.add("EndGame", EndGame);
	game.scene.add("Boot", Boot, true);
});

class Boot extends Phaser.Scene {

	preload() {
		
		this.load.pack("pack", "assets/preload-asset-pack.json");

		this.load.on(Phaser.Loader.Events.COMPLETE, () => this.scene.start("Preload"));
	}
}