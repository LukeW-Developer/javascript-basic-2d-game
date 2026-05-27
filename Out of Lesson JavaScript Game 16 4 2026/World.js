var Game = Game || {};

Game.World = class {

	constructor(root, p) {
		this.main = root;
		this.player = p;
		this.map = Array.from(Array(worldW), () => new Array(worldH));

		this.update();
	}

	// give color to tile
	update() {

		let value = 0;

		for (let i = 0; i < worldW; i++) {
			for (let j = 0; j < worldH; j++) {
				value = Math.floor(Math.random() * 10)

				if (i - i & j > i^2 & value) {
					value = 1;
				} else {
					value = 2;
				}

				this.map[i][j] = value;
			}
		}
	}

	// get color from tile
	colorCheck(value) {
		if (value == 1) {
			ctx.fillStyle = "lime";
		} else {
			ctx.fillStyle = "green";
		}
	}

	render() {
		let value = 0;

		for (let i = 0; i < worldW; i++) {
			for (let j = 0; j < worldH; j++) {
				value = this.map[i][j];
				this.colorCheck(value);

				this.x = (ntileSize * this.player.playerSpawnX) - this.player.x;
				this.y = (ntileSize * this.player.playerSpawnY) - this.player.y;

				ctx.fillRect(i * ntileSize - this.x, j * ntileSize - this.y, ntileSize, ntileSize);
			}
		}
	}
};

// unused
Game.World.tile = class {

	constructor() {
		this.posX;
		this.posY;
		this.tileColor;
	}
};