var headX = 330;
var headY = 100;
var headMove = 1;

var leglX = 220;
var leglY = 500;
var leglMove = 3;

var legrX = 320;
var legrY = 500; 
var legrMove = 4;

var hairX = 300;
var hairY = 200; 
var movement; 

var size = 32;
var count = 0;
var sizeIncrease = 1;
function setup()
    {
        createCanvas(600,600);
        movement = floor(random() * 10);
    }
function draw()
    {
        background(220);
        fill(0,0,0,)

        //head
        fill(255,182,193)
        circle(headX,headY,150);
        headX+=headMove;
        if(headX >= 590 || headX <= 10)
            {
                headMove *= -1;
            }

        //legs
        rect(leglX,leglY,50,100);
        rect(legrX,legrY,50,100);
        leglY+=leglMove;
        if(leglY >= 590 || leglY <= 10)
            {
                leglMove *= -1;
            }
        legrX+=legrMove;
        if(legrX >= 590 || legrX <= 10)
            {
                legrMove *= -1;
            }
        legrY+=legrMove;
        if(legrY >= 590 || legrY <= 10)
            {
                legrMove *= -1;
            }
        
        //title
        fill(0,0,0)
        textSize(size);
        size+= sizeIncrease;
        count++;
        if(count > 5)
        {
            sizeIncrease *=-1;
            count = 0;
        }
        text('Self Portrait',10,30);
        text('By Grace',10,60)
    }
