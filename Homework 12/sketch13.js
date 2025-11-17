var characterX = 40;
var characterY = 50;

var w = 87;
var s = 83;
var a = 65;
var d = 68;

var shapeX = 30;
var shapeY = 50;

var enemyX = [];
var enemyY = [];
var enemyD = [];

var enemyXS = [];
var enemyYS = [];

var EX = [];
var EY = [];
var ED = [];

var EXS = [];
var EYS = [];

var mouseShapeX;
var mouseShapeY;

function setup() {
    createCanvas(500, 600);
    for (var i = 0; i < 4; i++) {
        enemyXS[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        enemyYS[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        enemyX[i] = getRandomNumber(500);
        enemyY[i] = getRandomNumber(600);
        enemyD[i] = getRandomNumber(30);
        EXS[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        EYS[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        EX[i] = getRandomNumber(500);
        EY[i] = getRandomNumber(600);
        ED[i] = getRandomNumber(30);
    }

    createCharacter(characterX, characterY);
}

function draw() {
    background(225,225,225);
    stroke(0);
    fill(0);

    createBorders(10);

    textSize(16);
    text("EXIT", width - 50, height - 50)

    drawCharacter();
    characterMovement();


    // first enemy
    fill(120,45,80);
    for (var i = 0; i < enemyX.length; i++) {
        circle(enemyX[i], enemyY[i], enemyD[i]);
        enemyXS[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        enemyYS[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);

        enemyX[i] += enemyXS[i];
        enemyY[i] += enemyYS[i];

        if (enemyX[i] > width) {
            enemyX[i] = 0;
        }
        if (enemyX[i] < 0) {
            enemyX[i] = width;
        }
        if (enemyY[i] > height) {
            enemyY[i] = 0;
        }
        if (enemyY[i] < 0) {
            enemyY[i] = height;
        }
    }
    // second enemy
    fill(0,0,255);
    for (var i = 0; i < EX.length; i++) {
        circle(EX[i], EY[i], ED[i]);
        EXS[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        EYS[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);


        EX[i] += EXS[i];
        EY[i] += EYS[i];
        if (EX[i] > width) {
            EX[i] = 0;
        }
        if (EX[i] < 0) {
            EX[i] = width;
        }
        if (EY[i] > height) {
            EY[i] = 0;
        }
        if (EY[i] < 0) {
            EY[i] = height;
        }
    }


    if (characterX > width && characterY > width - 50) {
        fill(0);
        stroke(5);
        textSize(26);
        text("You Win!", width / 2 - 50, height / 2 - 50);
    }

    fill(0, 168, 107);
    circle(mouseShapeX, mouseShapeY, 25);
}

function characterMovement() {
    if (keyIsDown(w)) {
        characterY -= 10;
    }
    if (keyIsDown(s)) {
        characterY += 10;
    }
    if (keyIsDown(a)) {
        characterX -= 10;
        console.log("movement: " + characterX);
    }
    if (keyIsDown(d)) {
        characterX += 10;
    }
}

function createCharacter(x, y) {
    characterX = x;
    characterY = y;
}

function drawCharacter() {
    fill(255,182,193);
    circle(characterX, characterY, 25);
}

function createBorders(thickness) {
    rect(0, 0, width, thickness);
    rect(0, 0, thickness, height);
    rect(0, height - thickness, width, thickness);
    rect(width - thickness, 0, thickness, height - 50);
}

function mouseClicked() {
    mouseShapeX = mouseX;
    mouseShapeY = mouseY;
}

function getRandomNumber(number) {
    return Math.floor(Math.random() * number) + 10;
}


//         fill(255,182,193)
// fill(120,45,80)
// fill (0,0,255)
// background 
