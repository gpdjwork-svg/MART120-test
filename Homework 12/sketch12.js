var characterX = 200;
var characterY = 200;

var w = 87;
var d = 83;
var a = 65;
var s = 68;

var shapeX = 50;
var shapeY = 100;
var shapeXSpeed;
var shapeYSpeed;

var enemyX = 200;
var enemyY = 50;
var enemyXSpeed;
var enemyYSpeed;

var mouseShapeX;
var mouseShapeY;
function setup()
{
    createCanvas(600,600);
    shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) +1);
    shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) +1);
    enemyXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) +1);
    enemyYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) +1);
    createCharacter(100,50);
}

function draw()
{
    background(255,255,255);
    stroke(0);
    fill(0);

    createBorders(10);

    createExit();
    drawCharacter();
    characterMovement();
    

    fill(0,0,255)
    circle(shapeX,shapeY,15)

     shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) +1);
     shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) +1);

    shapeX += shapeXSpeed;
    shapeY += shapeYSpeed;

    if(shapeX > width)
    {
        shapeX = 0;
    }
    if(shapeX < 0)
    {
        shapeX = width;
    }
    if(shapeY > height)
    {
        shapeY = 0;
    }
    if(shapeY < 0)
    {
        shapeY = height;
    }

    fill(127,0,225)
    circle(enemyX,enemyY,20)
     enemyXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) +1);
     enemyYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) +1);

    enemyX += enemyXSpeed;
    enemyY += enemyYSpeed;

    if(enemyX > width)
    {
        enemyX = 0;
    }
    if(enemyX < 0)
    {
        enemyX = width;
    }
    if(enemyY > height)
    {
        enemyY = 0;
    }
    if(enemyY < 0)
    {
        enemyY = height;
    }
        

    if(characterX > width && characterY > width-50)
    {
        fill(0);
        stroke(5);
        textSize(25);
        text("You Win!", width/2-50, height/2-50);
    }

    fill(120,45,80);
    circle(mouseShapeX, mouseShapeY, 30);
}

function characterMovement()
{
    if(keyIsDown(w))
    {
        characterY -= 10;
    }
    if(keyIsDown(s))
    {
        characterY += 10;
    }
    if(keyIsDown(a))
    {
        characterX -= 10;
    }
    if(keyIsDown(d))
    {
        characterX += 10;
    }
}

function drawCharacter(x,y)
{
    fill(255,182,193);
    circle(characterX,characterY,20)
}

function createExit()
{
    textSize(10);
    text("EXIT", width-50,height-50);
}


function createBorders(thickness)
{
    rect(0,0,width,thickness);

    rect(0,0,thickness,height);

    rect(0,height-thickness,width,thickness);

    rect(width-thickness,0,thickness,height-50);
}

function createCharacter(x,y)
{
    characterX = x;
    characterY = y;
}


function mouseClicked()
{
    mouseShapeX = mouseX;
    mouseShapeY = mouseY;
}



//         fill(255,182,193)
