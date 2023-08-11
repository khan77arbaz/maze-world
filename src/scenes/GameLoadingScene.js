
// You can write more code here

/* START OF COMPILED CODE */

class GameLoadingScene extends Phaser.Scene {

	constructor() {
		super("GameLoadingScene");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// loading
		this.add.image(957, 542, "loading");

		// loading_1
		this.add.image(963, 540, "loading");

		// gamebackground
		const gamebackground = this.add.image(961, 539, "gamebackground");
		gamebackground.scaleX = 2;
		gamebackground.scaleY = 2;

		// text_1
		const text_1 = this.add.text(629.5, 491, "", {});
		text_1.text = "Maze Worlds";
		text_1.setStyle({ "color": "#56046bff", "fontSize": "100px", "fontStyle": "bold italic", "stroke": "#ffffffff" });

		this.events.emit("scene-awake");
	}

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();
		setTimeout(()=>{
			this.scene.stop("GameLoadingScene");
			this.scene.start("LevelOne");
		},2000)
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
