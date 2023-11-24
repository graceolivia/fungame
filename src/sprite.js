
import spriteImage from '../images/tinyblackcat.png';

const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

const sprite = new Image();
sprite.src = spriteImage;

const spriteProperties = {
    x: 0,
    y: 0,
    width: 50,
    height: 50,
    speed: 2,
};

let keys = {
    right: false,
    left: false,
    up: false,
    down: false
};

function keyDownHandler(e) {
    if (e.key === "Right" || e.key === "ArrowRight") {
        keys.right = true;
    } else if (e.key === "Left" || e.key === "ArrowLeft") {
        keys.left = true;
    } else if (e.key === "Up" || e.key === "ArrowUp") {
        keys.up = true;
    } else if (e.key === "Down" || e.key === "ArrowDown") {
        keys.down = true;
    }
}

function keyUpHandler(e) {
    if (e.key === "Right" || e.key === "ArrowRight") {
        keys.right = false;
    } else if (e.key === "Left" || e.key === "ArrowLeft") {
        keys.left = false;
    } else if (e.key === "Up" || e.key === "ArrowUp") {
        keys.up = false;
    } else if (e.key === "Down" || e.key === "ArrowDown") {
        keys.down = false;
    }
}

window.addEventListener("keydown", keyDownHandler, false);
window.addEventListener("keyup", keyUpHandler, false);

function updateSpritePosition() {
    if (keys.right) {
        spriteProperties.x += spriteProperties.speed;
        if (spriteProperties.x + spriteProperties.width > canvas.width) {
            spriteProperties.x = canvas.width - spriteProperties.width;
        }
    }
    if (keys.left) {
        spriteProperties.x -= spriteProperties.speed;
        if (spriteProperties.x < 0) {
            spriteProperties.x = 0;
        }
    }
    if (keys.up) {
        spriteProperties.y -= spriteProperties.speed;
        if (spriteProperties.y < 0) {
            spriteProperties.y = 0;
        }
    }
    if (keys.down) {
        spriteProperties.y += spriteProperties.speed;
        if (spriteProperties.y + spriteProperties.height > canvas.height) {
            spriteProperties.y = canvas.height - spriteProperties.height;
        }
    }
}

function drawSprite() {
    ctx.drawImage(sprite, spriteProperties.x, spriteProperties.y, spriteProperties.width, spriteProperties.height);
}

function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function animate() {
    clearCanvas();
    updateSpritePosition();
    drawSprite();
    requestAnimationFrame(animate);
}

sprite.onload = function() {
    animate();
};

export { animate };