var Game = Game || {};

Game.Player = class {

	constructor(root, player) {
		this.main = root
		
		this.playerScreenPosX = canvas.width / 2 - tileSize;
		this.playerScreenPosY = canvas.height / 2 - tileSize;

		this.playerSpawnX = worldW / 2;
		this.playerSpawnY = worldH / 2;

		this.x = 0;
		this.y = 0;

		this.hinput = 0;
		this.vinput = 0;

		this.speed = 5;
	}

	move(kInput) {
		if (kInput == "w") {
			this.vinput = 1;
		}
		if (kInput == "s") {
			this.vinput = 2;
		}
		if (kInput == "a") {
			this.hinput = 1;
		}
		if (kInput == "d") {
			this.hinput = 2;
		}
	}

	movereset(direction) {

		if (direction == 1) {
			this.vinput = 0;
		}

		if (direction == 2) {
			this.hinput = 0;
		}
		
	}

	update() {
		if (this.vinput == 1) {
			this.y += this.speed;
		}
		if (this.vinput == 2) {
			this.y -= this.speed;
		}
		if (this.hinput == 1) {
			this.x += this.speed;
		}
		if (this.hinput == 2) {
			this.x -= this.speed;
		}
	}

	fetchSprite() {
		ctx.fillStyle = "red";

		if (this.x < 25 || this.y < 25) {
  			ctx.fillStyle = "red";
		} else if (this.x > 25 || this.y > 25) {
			ctx.fillStyle = "blue";
		}
	}
	
	render() {
		this.fetchSprite();
		ctx.fillRect(this.playerScreenPosX, this.playerScreenPosY, ntileSize, ntileSize);

		console.log(Math.floor(this.x / ntileSize), Math.floor(this.y / ntileSize));
	}
};

