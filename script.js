const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

canvas.width = 400;
canvas.height = 600;

const cw = canvas.width;
const ch = canvas.height;
const ballSize = 15;
let ballX = cw / 2 - ballSize / 2;
let ballY = ch / 2;
const PlayerRectX = 60;
const PlayerRectY = 10;
const playerX = cw / 2 - (PlayerRectX / 2);
const playerY = 580;
const AiRect = 20;
let ballSpeedX = 1;
let ballSpeedY = 1;

const table = () => {
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, cw, ch);
}

const ball = () => {
    ctx.fillStyle = 'white';
    ctx.fillRect(ballX, ballY, ballSize, ballSize);
    ballX += ballSpeedX;
    ballY += ballSpeedY;
    if (ballX <= 0 || ballX + ballSize >= cw) {
        ballSpeedX = -ballSpeedX;
    }
    if (ballY <= 0 || ballY + ballSize >= ch) {
        ballSpeedY = -ballSpeedY;
    }

}

const player = () => {
    ctx.fillStyle = 'green';
    ctx.fillRect(playerX, playerY, PlayerRectX, PlayerRectY);
}

const AI = () => {
    ctx.fillStyle = 'red';
    ctx.fillRect(10, 10, AiRect, AiRect);
}

topCanvas = canvas.offsetLeft;

const PlayerPosition = (e) => {
    playerX = e.ArrowRight - topCanvas;
}

const game = () => {
    table()
    ball()
    player()
    AI()
}

setInterval(game, 1000 / 60)