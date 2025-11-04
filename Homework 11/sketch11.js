var characterX = 100;
var characterY = 200;

var w = 87;
var d = 83;
var a = 65;
var s = 68;

var shapeX = 30;
var shapeY = 50;
var shapeXSpeed;
var shapeYSpeed;

var mouseShapeX;
var mouseShapeY;
function setup()
{
    createCanvas(600,600);
    shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) +1);
    shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) +1);
    createCharacter(100,100);
}

function draw()
{
    background(225,225,225);
    stroke(0);
    fill(0);

    createBorders(10);

    textSize(10);
    text("EXIT", width-50,height-50)

    drawCharacter();
    characterMovement();
    

    fill(127,0,225)
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

function createCharacter(x,y)
{
    characterX = x;
    characterY = y;
    console.log(characterX);
}

function drawCharacter()
{
    fill(255,182,193);
    circle(characterX,characterY,20)
}

function createBorders(thickness)
{
    rect(0,0,width,10);

    rect(0,0,10,height);

    rect(0,height-10,width,10);

    rect(width-10,0,10,height-50);
}

function mouseClicked()
{
    mouseShapeX = mouseX;
    mouseShapeY = mouseY;
}



//         fill(255,182,193)
