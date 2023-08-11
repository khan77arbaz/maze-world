
// You can write more code here

/* START OF COMPILED CODE */

class EndGame extends Phaser.Scene {

	constructor() {
		super("EndGame");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// endGameLogo
		const endGameLogo = this.add.image(36, 228, "endGameLogo");
		endGameLogo.scaleX = 3;
		endGameLogo.scaleY = 3;
		endGameLogo.setOrigin(0, 0);

		// playAgain
		const playAgain = this.add.image(960, 945, "playAgain23");

		this.playAgain = playAgain;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Image} */
	playAgain;

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();
		this.playAgain.setInteractive().on("pointerdown",()=>{
			this.scene.stop("EndGame");
			location.reload();
		})
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
