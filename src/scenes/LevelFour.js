
// You can write more code here

/* START OF COMPILED CODE */

class LevelFour extends Phaser.Scene {

	constructor() {
		super("LevelFour");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// shapesContainer
		const shapesContainer = this.add.container(0, 0);

		// shapeRectOne
		const shapeRectOne = this.add.rectangle(500, 999, 128, 128);
		shapeRectOne.name = "shapeRectOne";
		shapeRectOne.isFilled = true;
		shapeRectOne.fillColor = 7393107;
		shapesContainer.add(shapeRectOne);

		// shapeRectTwo
		const shapeRectTwo = this.add.rectangle(500, 869, 128, 128);
		shapeRectTwo.name = "shapeRectTwo";
		shapeRectTwo.isFilled = true;
		shapeRectTwo.fillColor = 7393107;
		shapesContainer.add(shapeRectTwo);

		// shapeRectFour
		const shapeRectFour = this.add.rectangle(1154, 877, 128, 128);
		shapeRectFour.name = "shapeRectFour";
		shapeRectFour.isFilled = true;
		shapeRectFour.fillColor = 7393107;
		shapesContainer.add(shapeRectFour);

		// shapeRectSix
		const shapeRectSix = this.add.rectangle(1285, 877, 128, 128);
		shapeRectSix.name = "shapeRectSix";
		shapeRectSix.isFilled = true;
		shapeRectSix.fillColor = 7393107;
		shapesContainer.add(shapeRectSix);

		// shapeRectSeven
		const shapeRectSeven = this.add.rectangle(1285, 1006, 128, 128);
		shapeRectSeven.name = "shapeRectSeven";
		shapeRectSeven.isFilled = true;
		shapeRectSeven.fillColor = 7393107;
		shapesContainer.add(shapeRectSeven);

		// shapeRectEight
		const shapeRectEight = this.add.rectangle(1418, 877, 128, 128);
		shapeRectEight.name = "shapeRectEight";
		shapeRectEight.isFilled = true;
		shapeRectEight.fillColor = 7393107;
		shapesContainer.add(shapeRectEight);

		// shapeRectFiveteen
		const shapeRectFiveteen = this.add.rectangle(1416, 220, 128, 128);
		shapeRectFiveteen.name = "shapeRectFiveteen";
		shapeRectFiveteen.isFilled = true;
		shapeRectFiveteen.fillColor = 7393107;
		shapesContainer.add(shapeRectFiveteen);

		// shapeRectSixteen
		const shapeRectSixteen = this.add.rectangle(1154, 87, 128, 128);
		shapeRectSixteen.name = "shapeRectSixteen";
		shapeRectSixteen.isFilled = true;
		shapeRectSixteen.fillColor = 7393107;
		shapesContainer.add(shapeRectSixteen);

		// shapeRectNineteen
		const shapeRectNineteen = this.add.rectangle(1416, 87, 128, 128);
		shapeRectNineteen.name = "shapeRectNineteen";
		shapeRectNineteen.isFilled = true;
		shapeRectNineteen.fillColor = 7393107;
		shapesContainer.add(shapeRectNineteen);

		// shapeRectTwenty
		const shapeRectTwenty = this.add.rectangle(1285, 87, 128, 128);
		shapeRectTwenty.name = "shapeRectTwenty";
		shapeRectTwenty.isFilled = true;
		shapeRectTwenty.fillColor = 7393107;
		shapesContainer.add(shapeRectTwenty);

		// shapeRectTwentyOne
		const shapeRectTwentyOne = this.add.rectangle(1023, 87, 128, 128);
		shapeRectTwentyOne.name = "shapeRectTwentyOne";
		shapeRectTwentyOne.isFilled = true;
		shapeRectTwentyOne.fillColor = 7393107;
		shapesContainer.add(shapeRectTwentyOne);

		// shapeRect22
		const shapeRect22 = this.add.rectangle(500, 740, 128, 128);
		shapeRect22.name = "shapeRect22";
		shapeRect22.isFilled = true;
		shapeRect22.fillColor = 7393107;
		shapesContainer.add(shapeRect22);

		// shapeRect24
		const shapeRect24 = this.add.rectangle(632, 999, 128, 128);
		shapeRect24.name = "shapeRect24";
		shapeRect24.isFilled = true;
		shapeRect24.fillColor = 7393107;
		shapesContainer.add(shapeRect24);

		// shapeRect25
		const shapeRect25 = this.add.rectangle(500, 350, 128, 128);
		shapeRect25.name = "shapeRect25";
		shapeRect25.isFilled = true;
		shapeRect25.fillColor = 7393107;
		shapesContainer.add(shapeRect25);

		// shapeRect26
		const shapeRect26 = this.add.rectangle(500, 220, 128, 128);
		shapeRect26.name = "shapeRect26";
		shapeRect26.isFilled = true;
		shapeRect26.fillColor = 7393107;
		shapesContainer.add(shapeRect26);

		// shapeRect27
		const shapeRect27 = this.add.rectangle(500, 89, 128, 128);
		shapeRect27.name = "shapeRect27";
		shapeRect27.isFilled = true;
		shapeRect27.fillColor = 7393107;
		shapesContainer.add(shapeRect27);

		// shapeRect28
		const shapeRect28 = this.add.rectangle(632, 89, 128, 128);
		shapeRect28.name = "shapeRect28";
		shapeRect28.isFilled = true;
		shapeRect28.fillColor = 7393107;
		shapesContainer.add(shapeRect28);

		// shapeRect29
		const shapeRect29 = this.add.rectangle(632, 220, 128, 128);
		shapeRect29.name = "shapeRect29";
		shapeRect29.isFilled = true;
		shapeRect29.fillColor = 7393107;
		shapesContainer.add(shapeRect29);

		// shapeRect30
		const shapeRect30 = this.add.rectangle(500, 480, 128, 128);
		shapeRect30.name = "shapeRect30";
		shapeRect30.isFilled = true;
		shapeRect30.fillColor = 7393107;
		shapesContainer.add(shapeRect30);

		// shapeRect31
		const shapeRect31 = this.add.rectangle(892, 220, 128, 128);
		shapeRect31.name = "shapeRect31";
		shapeRect31.isFilled = true;
		shapeRect31.fillColor = 7393107;
		shapesContainer.add(shapeRect31);

		// shapeRect32
		const shapeRect32 = this.add.rectangle(1023, 220, 128, 128);
		shapeRect32.name = "shapeRect32";
		shapeRect32.isFilled = true;
		shapeRect32.fillColor = 7393107;
		shapesContainer.add(shapeRect32);

		// shapeRect33
		const shapeRect33 = this.add.rectangle(1154, 220, 128, 128);
		shapeRect33.name = "shapeRect33";
		shapeRect33.isFilled = true;
		shapeRect33.fillColor = 7393107;
		shapesContainer.add(shapeRect33);

		// shapeRect
		const shapeRect = this.add.rectangle(1285, 746, 128, 128);
		shapeRect.name = "shapeRect";
		shapeRect.isFilled = true;
		shapeRect.fillColor = 7393107;
		shapesContainer.add(shapeRect);

		// shapeRect_1
		const shapeRect_1 = this.add.rectangle(1154, 746, 128, 128);
		shapeRect_1.name = "shapeRect_1";
		shapeRect_1.isFilled = true;
		shapeRect_1.fillColor = 7393107;
		shapesContainer.add(shapeRect_1);

		// shapeRect_2
		const shapeRect_2 = this.add.rectangle(1023, 745, 128, 128);
		shapeRect_2.name = "shapeRect_2";
		shapeRect_2.isFilled = true;
		shapeRect_2.fillColor = 7393107;
		shapesContainer.add(shapeRect_2);

		// shapeRect_3
		const shapeRect_3 = this.add.rectangle(1023, 877, 128, 128);
		shapeRect_3.name = "shapeRect_3";
		shapeRect_3.isFilled = true;
		shapeRect_3.fillColor = 7393107;
		shapesContainer.add(shapeRect_3);

		// shapeRect_4
		const shapeRect_4 = this.add.rectangle(632, 869, 128, 128);
		shapeRect_4.name = "shapeRect_4";
		shapeRect_4.isFilled = true;
		shapeRect_4.fillColor = 7393107;
		shapesContainer.add(shapeRect_4);

		// shapeRect_5
		const shapeRect_5 = this.add.rectangle(632, 740, 128, 128);
		shapeRect_5.name = "shapeRect_5";
		shapeRect_5.isFilled = true;
		shapeRect_5.fillColor = 7393107;
		shapesContainer.add(shapeRect_5);

		// shapeRect_6
		const shapeRect_6 = this.add.rectangle(632, 610, 128, 128);
		shapeRect_6.name = "shapeRect_6";
		shapeRect_6.isFilled = true;
		shapeRect_6.fillColor = 7393107;
		shapesContainer.add(shapeRect_6);

		// shapeRect_7
		const shapeRect_7 = this.add.rectangle(632, 480, 128, 128);
		shapeRect_7.name = "shapeRect_7";
		shapeRect_7.isFilled = true;
		shapeRect_7.fillColor = 7393107;
		shapesContainer.add(shapeRect_7);

		// shapeRect_8
		const shapeRect_8 = this.add.rectangle(762, 220, 128, 128);
		shapeRect_8.name = "shapeRect_8";
		shapeRect_8.isFilled = true;
		shapeRect_8.fillColor = 7393107;
		shapesContainer.add(shapeRect_8);

		// shapeRect_9
		const shapeRect_9 = this.add.rectangle(892, 352, 128, 128);
		shapeRect_9.name = "shapeRect_9";
		shapeRect_9.isFilled = true;
		shapeRect_9.fillColor = 7393107;
		shapesContainer.add(shapeRect_9);

		// shapeRect_10
		const shapeRect_10 = this.add.rectangle(892, 483, 128, 128);
		shapeRect_10.name = "shapeRect_10";
		shapeRect_10.isFilled = true;
		shapeRect_10.fillColor = 7393107;
		shapesContainer.add(shapeRect_10);

		// shapeRect_11
		const shapeRect_11 = this.add.rectangle(1023, 352, 128, 128);
		shapeRect_11.name = "shapeRect_11";
		shapeRect_11.isFilled = true;
		shapeRect_11.fillColor = 7393107;
		shapesContainer.add(shapeRect_11);

		// shapeRect_12
		const shapeRect_12 = this.add.rectangle(1154, 352, 128, 128);
		shapeRect_12.name = "shapeRect_12";
		shapeRect_12.isFilled = true;
		shapeRect_12.fillColor = 7393107;
		shapesContainer.add(shapeRect_12);

		// shapeRect_13
		const shapeRect_13 = this.add.rectangle(1285, 352, 128, 128);
		shapeRect_13.name = "shapeRect_13";
		shapeRect_13.isFilled = true;
		shapeRect_13.fillColor = 7393107;
		shapesContainer.add(shapeRect_13);

		// shapeRect_14
		const shapeRect_14 = this.add.rectangle(1416, 352, 128, 128);
		shapeRect_14.name = "shapeRect_14";
		shapeRect_14.isFilled = true;
		shapeRect_14.fillColor = 7393107;
		shapesContainer.add(shapeRect_14);

		// shapeRect_16
		const shapeRect_16 = this.add.rectangle(1154, 484, 128, 128);
		shapeRect_16.name = "shapeRect_16";
		shapeRect_16.isFilled = true;
		shapeRect_16.fillColor = 7393107;
		shapesContainer.add(shapeRect_16);

		// shapeRect_19
		const shapeRect_19 = this.add.rectangle(1285, 615, 128, 128);
		shapeRect_19.name = "shapeRect_19";
		shapeRect_19.isFilled = true;
		shapeRect_19.fillColor = 7393107;
		shapesContainer.add(shapeRect_19);

		// shapeRect_20
		const shapeRect_20 = this.add.rectangle(1154, 615, 128, 128);
		shapeRect_20.name = "shapeRect_20";
		shapeRect_20.isFilled = true;
		shapeRect_20.fillColor = 7393107;
		shapesContainer.add(shapeRect_20);

		// shapeRect_21
		const shapeRect_21 = this.add.rectangle(1023, 615, 128, 128);
		shapeRect_21.name = "shapeRect_21";
		shapeRect_21.isFilled = true;
		shapeRect_21.fillColor = 7393107;
		shapesContainer.add(shapeRect_21);

		// shapeRect_22
		const shapeRect_22 = this.add.rectangle(892, 615, 128, 128);
		shapeRect_22.name = "shapeRect_22";
		shapeRect_22.isFilled = true;
		shapeRect_22.fillColor = 7393107;
		shapesContainer.add(shapeRect_22);

		// collidersContainer
		const collidersContainer = this.add.container(0, 0);

		// colliderShapeEighteen
		const colliderShapeEighteen = this.add.rectangle(565, 609, 2, 120);
		colliderShapeEighteen.isFilled = true;
		colliderShapeEighteen.fillColor = 0;
		collidersContainer.add(colliderShapeEighteen);

		// colliderShapeNineteen
		const colliderShapeNineteen = this.add.rectangle(1353, 682, 2, 260);
		colliderShapeNineteen.isFilled = true;
		colliderShapeNineteen.fillColor = 0;
		collidersContainer.add(colliderShapeNineteen);

		// colliderShapeTwentyOne
		const colliderShapeTwentyOne = this.add.rectangle(1483, 220, 2, 380);
		colliderShapeTwentyOne.isFilled = true;
		colliderShapeTwentyOne.fillColor = 0;
		collidersContainer.add(colliderShapeTwentyOne);

		// colliderShapeTwentyFour
		const colliderShapeTwentyFour = this.add.rectangle(563, 21, 250, 2);
		colliderShapeTwentyFour.isFilled = true;
		colliderShapeTwentyFour.fillColor = 0;
		collidersContainer.add(colliderShapeTwentyFour);

		// colliderShape27
		const colliderShape27 = this.add.rectangle(826, 485, 2, 385);
		colliderShape27.isFilled = true;
		colliderShape27.fillColor = 0;
		collidersContainer.add(colliderShape27);

		// colliderShape28
		const colliderShape28 = this.add.rectangle(1218, 20, 520, 2);
		colliderShape28.isFilled = true;
		colliderShape28.fillColor = 0;
		collidersContainer.add(colliderShape28);

		// colliderShape33
		const colliderShape33 = this.add.rectangle(826, 152, 250, 2);
		colliderShape33.isFilled = true;
		colliderShape33.fillColor = 0;
		collidersContainer.add(colliderShape33);

		// colliderShape34
		const colliderShape34 = this.add.rectangle(497, 672, 128, 2);
		colliderShape34.isFilled = true;
		colliderShape34.fillColor = 0;
		collidersContainer.add(colliderShape34);

		// colliderShape35
		const colliderShape35 = this.add.rectangle(695, 288, 250, 2);
		colliderShape35.isFilled = true;
		colliderShape35.fillColor = 0;
		collidersContainer.add(colliderShape35);

		// colliderShape36
		const colliderShape36 = this.add.rectangle(893, 684, 120, 2);
		colliderShape36.isFilled = true;
		colliderShape36.fillColor = 0;
		collidersContainer.add(colliderShape36);

		// colliderShape38
		const colliderShape38 = this.add.rectangle(432, 870, 2, 390);
		colliderShape38.isFilled = true;
		colliderShape38.fillColor = 0;
		collidersContainer.add(colliderShape38);

		// colliderShape39
		const colliderShape39 = this.add.rectangle(567, 351, 2, 120);
		colliderShape39.isFilled = true;
		colliderShape39.fillColor = 0;
		collidersContainer.add(colliderShape39);

		// colliderShape43
		const colliderShape43 = this.add.rectangle(432, 285, 2, 530);
		colliderShape43.isFilled = true;
		colliderShape43.fillColor = 0;
		collidersContainer.add(colliderShape43);

		// colliderShape44
		const colliderShape44 = this.add.rectangle(563, 1068, 250, 2);
		colliderShape44.isFilled = true;
		colliderShape44.fillColor = 0;
		collidersContainer.add(colliderShape44);

		// colliderShape45
		const colliderShape45 = this.add.rectangle(497, 549, 120, 2);
		colliderShape45.isFilled = true;
		colliderShape45.fillColor = 0;
		collidersContainer.add(colliderShape45);

		// colliderShape
		const colliderShape = this.add.rectangle(699, 84, 2, 128);
		colliderShape.isFilled = true;
		colliderShape.fillColor = 0;
		collidersContainer.add(colliderShape);

		// colliderShape_1
		const colliderShape_1 = this.add.rectangle(703, 740, 2, 650);
		colliderShape_1.isFilled = true;
		colliderShape_1.fillColor = 0;
		collidersContainer.add(colliderShape_1);

		// colliderShapeTwentyOne_1
		const colliderShapeTwentyOne_1 = this.add.rectangle(1223, 217, 2, 120);
		colliderShapeTwentyOne_1.isFilled = true;
		colliderShapeTwentyOne_1.fillColor = 0;
		collidersContainer.add(colliderShapeTwentyOne_1);

		// colliderShapeTwentyOne_2
		const colliderShapeTwentyOne_2 = this.add.rectangle(1345, 219, 2, 120);
		colliderShapeTwentyOne_2.isFilled = true;
		colliderShapeTwentyOne_2.fillColor = 0;
		collidersContainer.add(colliderShapeTwentyOne_2);

		// colliderShapeTwentyOne_3
		const colliderShapeTwentyOne_3 = this.add.rectangle(1283, 156, 120, 2);
		colliderShapeTwentyOne_3.isFilled = true;
		colliderShapeTwentyOne_3.fillColor = 0;
		collidersContainer.add(colliderShapeTwentyOne_3);

		// colliderShapeTwentyOne_4
		const colliderShapeTwentyOne_4 = this.add.rectangle(1284, 281, 120, 2);
		colliderShapeTwentyOne_4.isFilled = true;
		colliderShapeTwentyOne_4.fillColor = 0;
		collidersContainer.add(colliderShapeTwentyOne_4);

		// colliderShapeNineteen_1
		const colliderShapeNineteen_1 = this.add.rectangle(1416, 811, 120, 2);
		colliderShapeNineteen_1.isFilled = true;
		colliderShapeNineteen_1.fillColor = 0;
		collidersContainer.add(colliderShapeNineteen_1);

		// colliderShapeNineteen_2
		const colliderShapeNineteen_2 = this.add.rectangle(1023, 548, 120, 2);
		colliderShapeNineteen_2.isFilled = true;
		colliderShapeNineteen_2.fillColor = 0;
		collidersContainer.add(colliderShapeNineteen_2);

		// colliderShapeNineteen_3
		const colliderShapeNineteen_3 = this.add.rectangle(1022, 420, 120, 2);
		colliderShapeNineteen_3.isFilled = true;
		colliderShapeNineteen_3.fillColor = 0;
		collidersContainer.add(colliderShapeNineteen_3);

		// colliderShapeNineteen_4
		const colliderShapeNineteen_4 = this.add.rectangle(961, 484, 2, 125);
		colliderShapeNineteen_4.isFilled = true;
		colliderShapeNineteen_4.fillColor = 0;
		collidersContainer.add(colliderShapeNineteen_4);

		// colliderShapeNineteen_5
		const colliderShapeNineteen_5 = this.add.rectangle(1086, 484, 2, 125);
		colliderShapeNineteen_5.isFilled = true;
		colliderShapeNineteen_5.fillColor = 0;
		collidersContainer.add(colliderShapeNineteen_5);

		// colliderShapeNineteen_6
		const colliderShapeNineteen_6 = this.add.rectangle(1223, 484, 2, 125);
		colliderShapeNineteen_6.isFilled = true;
		colliderShapeNineteen_6.fillColor = 0;
		collidersContainer.add(colliderShapeNineteen_6);

		// colliderShapeNineteen_7
		const colliderShapeNineteen_7 = this.add.rectangle(1287, 548, 125, 2);
		colliderShapeNineteen_7.isFilled = true;
		colliderShapeNineteen_7.fillColor = 0;
		collidersContainer.add(colliderShapeNineteen_7);

		// colliderShapeNineteen_8
		const colliderShapeNineteen_8 = this.add.rectangle(1354, 420, 260, 2);
		colliderShapeNineteen_8.isFilled = true;
		colliderShapeNineteen_8.fillColor = 0;
		collidersContainer.add(colliderShapeNineteen_8);

		// colliderShapeTwentyOne_5
		const colliderShapeTwentyOne_5 = this.add.rectangle(956, 85, 2, 120);
		colliderShapeTwentyOne_5.isFilled = true;
		colliderShapeTwentyOne_5.fillColor = 0;
		collidersContainer.add(colliderShapeTwentyOne_5);

		// colliderShapeNineteen_9
		const colliderShapeNineteen_9 = this.add.rectangle(956, 812, 2, 255);
		colliderShapeNineteen_9.isFilled = true;
		colliderShapeNineteen_9.fillColor = 0;
		collidersContainer.add(colliderShapeNineteen_9);

		// colliderShapeNineteen_10
		const colliderShapeNineteen_10 = this.add.rectangle(1090, 944, 255, 2);
		colliderShapeNineteen_10.isFilled = true;
		colliderShapeNineteen_10.fillColor = 0;
		collidersContainer.add(colliderShapeNineteen_10);

		// colliderShapeNineteen_11
		const colliderShapeNineteen_11 = this.add.rectangle(1485, 877, 2, 120);
		colliderShapeNineteen_11.isFilled = true;
		colliderShapeNineteen_11.fillColor = 0;
		collidersContainer.add(colliderShapeNineteen_11);

		// colliderShapeNineteen_12
		const colliderShapeNineteen_12 = this.add.rectangle(1419, 944, 125, 2);
		colliderShapeNineteen_12.isFilled = true;
		colliderShapeNineteen_12.fillColor = 0;
		collidersContainer.add(colliderShapeNineteen_12);

		// colliderShapeNineteen_13
		const colliderShapeNineteen_13 = this.add.rectangle(1353, 1008, 2, 125);
		colliderShapeNineteen_13.isFilled = true;
		colliderShapeNineteen_13.fillColor = 0;
		collidersContainer.add(colliderShapeNineteen_13);

		// colliderShapeNineteen_14
		const colliderShapeNineteen_14 = this.add.rectangle(1288, 1072, 125, 2);
		colliderShapeNineteen_14.isFilled = true;
		colliderShapeNineteen_14.fillColor = 0;
		collidersContainer.add(colliderShapeNineteen_14);

		// colliderShapeNineteen_15
		const colliderShapeNineteen_15 = this.add.rectangle(1220, 1008, 2, 125);
		colliderShapeNineteen_15.isFilled = true;
		colliderShapeNineteen_15.fillColor = 0;
		collidersContainer.add(colliderShapeNineteen_15);

		// colliderShape_2
		const colliderShape_2 = this.add.rectangle(632, 413, 120, 2);
		colliderShape_2.isFilled = true;
		colliderShape_2.fillColor = 0;
		collidersContainer.add(colliderShape_2);

		// player
		const player = this.add.image(501, 999, "dino");
		player.scaleX = 0.45;
		player.scaleY = 0.45;

		// text_1
		const text_1 = this.add.text(132, 10, "", {});
		text_1.text = "Level 4";
		text_1.setStyle({ "color": "#890777ff", "fontSize": "50px", "fontStyle": "bold italic" });

		// timerCountDown
		const timerCountDown = this.add.text(1658, 10, "", {});
		timerCountDown.text = "20";
		timerCountDown.setStyle({ "color": "#890777ff", "fontSize": "50px", "fontStyle": "bold" });

		this.shapesContainer = shapesContainer;
		this.shapeRectOne = shapeRectOne;
		this.shapeRectTwo = shapeRectTwo;
		this.shapeRectFour = shapeRectFour;
		this.shapeRectSix = shapeRectSix;
		this.shapeRectSeven = shapeRectSeven;
		this.shapeRectEight = shapeRectEight;
		this.shapeRectFiveteen = shapeRectFiveteen;
		this.shapeRectSixteen = shapeRectSixteen;
		this.shapeRectNineteen = shapeRectNineteen;
		this.shapeRectTwenty = shapeRectTwenty;
		this.shapeRectTwentyOne = shapeRectTwentyOne;
		this.shapeRect22 = shapeRect22;
		this.shapeRect24 = shapeRect24;
		this.shapeRect25 = shapeRect25;
		this.shapeRect26 = shapeRect26;
		this.shapeRect27 = shapeRect27;
		this.shapeRect28 = shapeRect28;
		this.shapeRect29 = shapeRect29;
		this.shapeRect30 = shapeRect30;
		this.shapeRect31 = shapeRect31;
		this.shapeRect32 = shapeRect32;
		this.shapeRect33 = shapeRect33;
		this.shapeRect = shapeRect;
		this.shapeRect_1 = shapeRect_1;
		this.shapeRect_2 = shapeRect_2;
		this.shapeRect_3 = shapeRect_3;
		this.shapeRect_4 = shapeRect_4;
		this.shapeRect_5 = shapeRect_5;
		this.shapeRect_6 = shapeRect_6;
		this.shapeRect_7 = shapeRect_7;
		this.shapeRect_8 = shapeRect_8;
		this.shapeRect_9 = shapeRect_9;
		this.shapeRect_10 = shapeRect_10;
		this.shapeRect_11 = shapeRect_11;
		this.shapeRect_12 = shapeRect_12;
		this.shapeRect_13 = shapeRect_13;
		this.shapeRect_14 = shapeRect_14;
		this.shapeRect_16 = shapeRect_16;
		this.shapeRect_19 = shapeRect_19;
		this.shapeRect_20 = shapeRect_20;
		this.shapeRect_21 = shapeRect_21;
		this.shapeRect_22 = shapeRect_22;
		this.collidersContainer = collidersContainer;
		this.colliderShapeEighteen = colliderShapeEighteen;
		this.colliderShapeNineteen = colliderShapeNineteen;
		this.colliderShapeTwentyOne = colliderShapeTwentyOne;
		this.colliderShapeTwentyFour = colliderShapeTwentyFour;
		this.colliderShape27 = colliderShape27;
		this.colliderShape28 = colliderShape28;
		this.colliderShape33 = colliderShape33;
		this.colliderShape34 = colliderShape34;
		this.colliderShape35 = colliderShape35;
		this.colliderShape36 = colliderShape36;
		this.colliderShape38 = colliderShape38;
		this.colliderShape39 = colliderShape39;
		this.colliderShape43 = colliderShape43;
		this.colliderShape44 = colliderShape44;
		this.colliderShape45 = colliderShape45;
		this.colliderShape = colliderShape;
		this.colliderShape_1 = colliderShape_1;
		this.colliderShapeTwentyOne_1 = colliderShapeTwentyOne_1;
		this.colliderShapeTwentyOne_2 = colliderShapeTwentyOne_2;
		this.colliderShapeTwentyOne_3 = colliderShapeTwentyOne_3;
		this.colliderShapeTwentyOne_4 = colliderShapeTwentyOne_4;
		this.colliderShapeNineteen_1 = colliderShapeNineteen_1;
		this.colliderShapeNineteen_2 = colliderShapeNineteen_2;
		this.colliderShapeNineteen_3 = colliderShapeNineteen_3;
		this.colliderShapeNineteen_4 = colliderShapeNineteen_4;
		this.colliderShapeNineteen_5 = colliderShapeNineteen_5;
		this.colliderShapeNineteen_6 = colliderShapeNineteen_6;
		this.colliderShapeNineteen_7 = colliderShapeNineteen_7;
		this.colliderShapeNineteen_8 = colliderShapeNineteen_8;
		this.colliderShapeTwentyOne_5 = colliderShapeTwentyOne_5;
		this.colliderShapeNineteen_9 = colliderShapeNineteen_9;
		this.colliderShapeNineteen_10 = colliderShapeNineteen_10;
		this.colliderShapeNineteen_11 = colliderShapeNineteen_11;
		this.colliderShapeNineteen_12 = colliderShapeNineteen_12;
		this.colliderShapeNineteen_13 = colliderShapeNineteen_13;
		this.colliderShapeNineteen_14 = colliderShapeNineteen_14;
		this.colliderShapeNineteen_15 = colliderShapeNineteen_15;
		this.colliderShape_2 = colliderShape_2;
		this.player = player;
		this.timerCountDown = timerCountDown;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Container} */
	shapesContainer;
	/** @type {Phaser.GameObjects.Rectangle} */
	shapeRectOne;
	/** @type {Phaser.GameObjects.Rectangle} */
	shapeRectTwo;
	/** @type {Phaser.GameObjects.Rectangle} */
	shapeRectFour;
	/** @type {Phaser.GameObjects.Rectangle} */
	shapeRectSix;
	/** @type {Phaser.GameObjects.Rectangle} */
	shapeRectSeven;
	/** @type {Phaser.GameObjects.Rectangle} */
	shapeRectEight;
	/** @type {Phaser.GameObjects.Rectangle} */
	shapeRectFiveteen;
	/** @type {Phaser.GameObjects.Rectangle} */
	shapeRectSixteen;
	/** @type {Phaser.GameObjects.Rectangle} */
	shapeRectNineteen;
	/** @type {Phaser.GameObjects.Rectangle} */
	shapeRectTwenty;
	/** @type {Phaser.GameObjects.Rectangle} */
	shapeRectTwentyOne;
	/** @type {Phaser.GameObjects.Rectangle} */
	shapeRect22;
	/** @type {Phaser.GameObjects.Rectangle} */
	shapeRect24;
	/** @type {Phaser.GameObjects.Rectangle} */
	shapeRect25;
	/** @type {Phaser.GameObjects.Rectangle} */
	shapeRect26;
	/** @type {Phaser.GameObjects.Rectangle} */
	shapeRect27;
	/** @type {Phaser.GameObjects.Rectangle} */
	shapeRect28;
	/** @type {Phaser.GameObjects.Rectangle} */
	shapeRect29;
	/** @type {Phaser.GameObjects.Rectangle} */
	shapeRect30;
	/** @type {Phaser.GameObjects.Rectangle} */
	shapeRect31;
	/** @type {Phaser.GameObjects.Rectangle} */
	shapeRect32;
	/** @type {Phaser.GameObjects.Rectangle} */
	shapeRect33;
	/** @type {Phaser.GameObjects.Rectangle} */
	shapeRect;
	/** @type {Phaser.GameObjects.Rectangle} */
	shapeRect_1;
	/** @type {Phaser.GameObjects.Rectangle} */
	shapeRect_2;
	/** @type {Phaser.GameObjects.Rectangle} */
	shapeRect_3;
	/** @type {Phaser.GameObjects.Rectangle} */
	shapeRect_4;
	/** @type {Phaser.GameObjects.Rectangle} */
	shapeRect_5;
	/** @type {Phaser.GameObjects.Rectangle} */
	shapeRect_6;
	/** @type {Phaser.GameObjects.Rectangle} */
	shapeRect_7;
	/** @type {Phaser.GameObjects.Rectangle} */
	shapeRect_8;
	/** @type {Phaser.GameObjects.Rectangle} */
	shapeRect_9;
	/** @type {Phaser.GameObjects.Rectangle} */
	shapeRect_10;
	/** @type {Phaser.GameObjects.Rectangle} */
	shapeRect_11;
	/** @type {Phaser.GameObjects.Rectangle} */
	shapeRect_12;
	/** @type {Phaser.GameObjects.Rectangle} */
	shapeRect_13;
	/** @type {Phaser.GameObjects.Rectangle} */
	shapeRect_14;
	/** @type {Phaser.GameObjects.Rectangle} */
	shapeRect_16;
	/** @type {Phaser.GameObjects.Rectangle} */
	shapeRect_19;
	/** @type {Phaser.GameObjects.Rectangle} */
	shapeRect_20;
	/** @type {Phaser.GameObjects.Rectangle} */
	shapeRect_21;
	/** @type {Phaser.GameObjects.Rectangle} */
	shapeRect_22;
	/** @type {Phaser.GameObjects.Container} */
	collidersContainer;
	/** @type {Phaser.GameObjects.Rectangle} */
	colliderShapeEighteen;
	/** @type {Phaser.GameObjects.Rectangle} */
	colliderShapeNineteen;
	/** @type {Phaser.GameObjects.Rectangle} */
	colliderShapeTwentyOne;
	/** @type {Phaser.GameObjects.Rectangle} */
	colliderShapeTwentyFour;
	/** @type {Phaser.GameObjects.Rectangle} */
	colliderShape27;
	/** @type {Phaser.GameObjects.Rectangle} */
	colliderShape28;
	/** @type {Phaser.GameObjects.Rectangle} */
	colliderShape33;
	/** @type {Phaser.GameObjects.Rectangle} */
	colliderShape34;
	/** @type {Phaser.GameObjects.Rectangle} */
	colliderShape35;
	/** @type {Phaser.GameObjects.Rectangle} */
	colliderShape36;
	/** @type {Phaser.GameObjects.Rectangle} */
	colliderShape38;
	/** @type {Phaser.GameObjects.Rectangle} */
	colliderShape39;
	/** @type {Phaser.GameObjects.Rectangle} */
	colliderShape43;
	/** @type {Phaser.GameObjects.Rectangle} */
	colliderShape44;
	/** @type {Phaser.GameObjects.Rectangle} */
	colliderShape45;
	/** @type {Phaser.GameObjects.Rectangle} */
	colliderShape;
	/** @type {Phaser.GameObjects.Rectangle} */
	colliderShape_1;
	/** @type {Phaser.GameObjects.Rectangle} */
	colliderShapeTwentyOne_1;
	/** @type {Phaser.GameObjects.Rectangle} */
	colliderShapeTwentyOne_2;
	/** @type {Phaser.GameObjects.Rectangle} */
	colliderShapeTwentyOne_3;
	/** @type {Phaser.GameObjects.Rectangle} */
	colliderShapeTwentyOne_4;
	/** @type {Phaser.GameObjects.Rectangle} */
	colliderShapeNineteen_1;
	/** @type {Phaser.GameObjects.Rectangle} */
	colliderShapeNineteen_2;
	/** @type {Phaser.GameObjects.Rectangle} */
	colliderShapeNineteen_3;
	/** @type {Phaser.GameObjects.Rectangle} */
	colliderShapeNineteen_4;
	/** @type {Phaser.GameObjects.Rectangle} */
	colliderShapeNineteen_5;
	/** @type {Phaser.GameObjects.Rectangle} */
	colliderShapeNineteen_6;
	/** @type {Phaser.GameObjects.Rectangle} */
	colliderShapeNineteen_7;
	/** @type {Phaser.GameObjects.Rectangle} */
	colliderShapeNineteen_8;
	/** @type {Phaser.GameObjects.Rectangle} */
	colliderShapeTwentyOne_5;
	/** @type {Phaser.GameObjects.Rectangle} */
	colliderShapeNineteen_9;
	/** @type {Phaser.GameObjects.Rectangle} */
	colliderShapeNineteen_10;
	/** @type {Phaser.GameObjects.Rectangle} */
	colliderShapeNineteen_11;
	/** @type {Phaser.GameObjects.Rectangle} */
	colliderShapeNineteen_12;
	/** @type {Phaser.GameObjects.Rectangle} */
	colliderShapeNineteen_13;
	/** @type {Phaser.GameObjects.Rectangle} */
	colliderShapeNineteen_14;
	/** @type {Phaser.GameObjects.Rectangle} */
	colliderShapeNineteen_15;
	/** @type {Phaser.GameObjects.Rectangle} */
	colliderShape_2;
	/** @type {Phaser.GameObjects.Image} */
	player;
	/** @type {Phaser.GameObjects.Text} */
	timerCountDown;

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();
		this.physics.world.gravity.y = 0;
		this.physics.world.enable(this.player);
		this.player.body.setSize(282.5, 275.5);
		this.events.on('update', this.handleMovingEvent, this);
		this.enableColliders();
		this.timer();
		this.cursors = this.input.keyboard.createCursorKeys();

		const interactiveArea = this.add.rectangle(0, 0, this.cameras.main.width, this.cameras.main.height, 0x000000, 0);
		interactiveArea.setOrigin(0);
		interactiveArea.setInteractive();
		let dragStartX = 0;
		let dragStartY = 0;
		interactiveArea.on("pointerdown", (pointer) => {
			dragStartX = pointer.x;
			dragStartY = pointer.y;
		});
		interactiveArea.on("pointerup", (pointer) => {
			const dragEndX = pointer.x;
			const dragEndY = pointer.y;
			const dragThreshold = 50;
			const dragX = dragEndX - dragStartX;
			const dragY = dragEndY - dragStartY;

			if (Math.abs(dragX) > Math.abs(dragY) && Math.abs(dragX) > dragThreshold) {
				//Check Y Axis Collision and Continue Movement; Stop at Collision
				if (dragX > 0) {
					this.playTweenForPlayer("Right");
				} else {
					this.playTweenForPlayer("Left");
				}
			} else if (
				Math.abs(dragY) > Math.abs(dragX) &&
				Math.abs(dragY) > dragThreshold
			) {
				//Check X Axis Collision and Continue Movement; Stop at Collision
				if (dragY > 0) {
					this.playTweenForPlayer("Down");
				} else {
					this.playTweenForPlayer("Up");
				}
			}
		});
	}

	handleMovingEvent() {
		if (this.player.body.velocity.x !== 0 || this.player.body.velocity.y !== 0) {
			for(let i = 0; i < this.shapesContainer.list.length; i++) {
				this.physics.world.enable(this.shapesContainer.list[i]);
				this.shapesContainer.list[i].body.setImmovable(true);
			}
		}
	}	

	handleColors() {
		for(let i = 0; i < this.shapesContainer.list.length; i++) {
			if((this.player.x >= this.shapesContainer.list[i].x - 30 && this.player.x <= this.shapesContainer.list[i].x + 30) && (this.player.y >= this.shapesContainer.list[i].y - 30 && this.player.y <= this.shapesContainer.list[i].y + 30)) {
				this.shapesContainer.list[i].fillColor = 15926373;
			}
		}
	}

	enableColliders() {
		for(let i = 0; i < this.collidersContainer.length; i++) {
			this.physics.world.enable(this.collidersContainer.list[i]);
			this.collidersContainer.list[i].body.setImmovable(true);
			this.physics.add.collider(this.player, this.collidersContainer.list[i], this.stopCollision, null, this);
		}
	}

	stopCollision() {
		this.player.body.setVelocity(0);
		// console.log(Math.floor(this.player.x), Math.floor(this.player.y));
	}

	playTweenForPlayer(swipeSide) {
		switch(swipeSide) {
			case "Left":
				this.player.body.setVelocityX(-2000);
				this.player.flipX = true;
				break;

			case "Right":
				this.player.body.setVelocityX(2000);
				this.player.flipX = false;
				break;
			case "Up":
				this.player.body.setVelocityY(-2000);
				break;
			case "Down":
				this.player.body.setVelocityY(2000);
				break;
		}
	}

	checkLevelComplete() {
		let count = 0;
		for(let i = 0; i < this.shapesContainer.list.length; i++) {
			if(this.shapesContainer.list[i].fillColor == 15926373) {
				count++;
				if(count == this.shapesContainer.list.length) {
					this.scene.stop("LevelFour");
					this.scene.start("LevelFive");
				}
			}
		}
	}

	arrowKeyPress(){		
		if(this.cursors.left.isDown){
			this.player.body.setVelocityX(-1800);
			this.player.flipX = true;
		}
		else if(this.cursors.right.isDown){
			this.player.body.setVelocityX(1800);
			this.player.flipX = false;
		}
		else if(this.cursors.up.isDown){
			this.player.body.setVelocityY(-1800);
		}
		else if(this.cursors.down.isDown){
			this.player.body.setVelocityY(1800);
		}
	}

	restartGame(){
		let restartLogo = this.add.image(960,540,"restartLogo");
		restartLogo.setInteractive().on("pointerdown",()=>{
			this.scene.restart("LevelFour");
			this.input.keyboard.enabled = true;
		})
	}

	timer(){
		let time = 20;
		let t1 = setInterval(()=>{
			this.timerCountDown.setText(time)
			time--;
			if(time==0){
				clearInterval(t1);
				this.timerCountDown.setText("Time Out");
				this.input.keyboard.enabled = false;
				this.restartGame();
			}
		},1000)
	}

	update() {
		this.handleColors();
		this.checkLevelComplete();
		this.arrowKeyPress();
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
