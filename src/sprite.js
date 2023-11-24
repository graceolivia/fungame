
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

function drawSprite() {
    ctx.drawImage(sprite, spriteProperties.x, spriteProperties.y, spriteProperties.width, spriteProperties.height);
}

function updateSpritePosition() {
    spriteProperties.x += spriteProperties.speed;
    if (spriteProperties.x + spriteProperties.width > canvas.width || spriteProperties.x < 0) {
        spriteProperties.speed *= -1;
    }
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