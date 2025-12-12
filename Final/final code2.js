var FsnowX = [];
var FsnowY = [];
var FsnowD = [];

var SsnowX = [];
var SsnowY = [];

var FSX = [];
var FSY = [];
var FSD = [];

var FXS = [];
var FYS = [];

var snowX = [];
var snowY = [];
var snowD = [];

var FallX = [];
var FallY = [];

var SX = [];
var SY = [];
var SD = [];

var FSXS = [];
var FSYS = [];

var moreX = [];
var moreY = [];
var moreD = [];

var againX = [];
var againY = [];

var MX = [];
var MY = [];
var MD = [];

var AX = [];
var AY = [];

var ZX = [];
var ZY = [];
var ZD = [];

var YX = [];
var YY = [];

var XX = [];
var XY = [];
var XD = [];

var WX = [];
var WY = [];

var VX = [];
var VY = [];
var VD = [];

var UX = [];
var UY = [];

var TX = [];
var TY = [];
var TD = [];

var RX = [];
var RY = [];

var QX = [];
var QY = [];
var QD = [];

var NX = [];
var NY = [];

var LX = [];
var LY = [];
var LD = [];

var BX = [];
var BY = [];

function setup() {
    createCanvas(1693, 860);
    for (var i = 0; i < 4; i++) {
        SsnowX[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        SsnowY[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        FsnowX[i] = getRandomNumber(500);
        FsnowY[i] = getRandomNumber(600);
        FsnowD[i] = getRandomNumber(30);
        FXS[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        FYS[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        FSX[i] = getRandomNumber(500);
        FSY[i] = getRandomNumber(600);
        FSD[i] = getRandomNumber(30);
        FallX[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        FallY[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        snowX[i] = getRandomNumber(500);
        snowY[i] = getRandomNumber(600);
        snowD[i] = getRandomNumber(30);
        FSXS[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        FSYS[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        SX[i] = getRandomNumber(500);
        SY[i] = getRandomNumber(600);
        SD[i] = getRandomNumber(30);
        againX[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        againY[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        moreX[i] = getRandomNumber(500);
        moreY[i] = getRandomNumber(600);
        moreD[i] = getRandomNumber(30);
        AX[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        AY[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        MX[i] = getRandomNumber(500);
        MY[i] = getRandomNumber(600);
        MD[i] = getRandomNumber(30);
        YX[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        YY[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        ZX[i] = getRandomNumber(500);
        ZY[i] = getRandomNumber(600);
        ZD[i] = getRandomNumber(30);
        WX[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        WY[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        XX[i] = getRandomNumber(500);
        XY[i] = getRandomNumber(600);
        XD[i] = getRandomNumber(30);
        UX[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        UY[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        VX[i] = getRandomNumber(500);
        VY[i] = getRandomNumber(600);
        VD[i] = getRandomNumber(30);
        RX[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        RY[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        TX[i] = getRandomNumber(500);
        TY[i] = getRandomNumber(600);
        TD[i] = getRandomNumber(30);
        NX[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        NY[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        QX[i] = getRandomNumber(500);
        QY[i] = getRandomNumber(600);
        QD[i] = getRandomNumber(30);
        BX[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        BY[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        LX[i] = getRandomNumber(500);
        LY[i] = getRandomNumber(600);
        LD[i] = getRandomNumber(30);
    }
}

function draw() {
    background(225,225,255);
 
    createBorders(10);

    //Hills
    fill(255,255,255)
    triangle(10,425,1393,20,1683,850)
    triangle(1392,20,1683,850,1683,50)
    rect(10,425,1673,425);

    fill(225,225,255)
    textSize(60);
    text("M",1150,150)
    //building
    fill(170,110,96)
    rect(470,500,280,350)
    rect(200,500,280,350)
    rect(60,500,140,350)
    rect(890,500,280,350)
    rect(1170,500,280,350)
    rect(1450,500,140,350)
    rect(750,160,140,690);
    fill(0,0,0)
    circle(820,225,110);
    fill(255,255,255)
    rect(820,225,50,5)
    rect(820,225,5,35)
    //spire
    fill(48,129,118)
    triangle(750,160,890,160,820,20);
    fill(225,225,225)
    triangle(785,90,820,20,855,90);
    fill(255, 215, 0)
    circle(820,30,30)
    //roofs
    fill(48,129,118)
    triangle(60,500,160,300,300,500);
    triangle(1450,500,1450,300,1590,500);
    rect(160,300,590,200)
    rect(890,300,560,200)
    fill(170,110,96)
    rect(275,425,125,75)
    triangle(335,350,400,425,275,425)
    rect(550,425,125,75)
    triangle(610,350,675,425,550,425)
    rect(968,425,125,75)
    triangle(1030,350,1093,425,968,425)
    rect(1242,425,125,75)
    triangle(1030+274,350,1093+274,425,968+274,425)
    //stone
    fill(121,123,130)
    rect(470,800,280,50)
    rect(200,800,280,50)
    rect(60,800,140,50)
    rect(890,800,280,50)
    rect(1170,800,280,50)
    rect(1450,800,140,50)
    rect(750,650,140,200);
    fill(160,169,171)
    rect(750,600,140,50)


    fill(255,255,255);
  
    for (var i = 0; i < FsnowX.length; i++) {
        circle(FsnowX[i], FsnowY[i], FsnowD[i]);
        SsnowX[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        SsnowY[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);

        FsnowX[i] += SsnowX[i];
        FsnowY[i] += SsnowY[i];

        if (FsnowX[i] > width) {
            FsnowX[i] = 0;
        }
        if (FsnowX[i] < 0) {
            FsnowX[i] = width;
        }
        if (FsnowY[i] > height) {
            FsnowY[i] = 0;
        }
        if (FsnowY[i] < 0) {
            FsnowY[i] = height;
        }
    }

    for (var i = 0; i < FSX.length; i++) {
        circle(FSX[i], FSY[i], FSD[i]);
        FXS[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        FYS[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);


        FSX[i] += FXS[i];
        FSY[i] += FYS[i];
        if (FSX[i] > width) {
            FSX[i] = 0;
        }
        if (FSX[i] < 0) {
            FSX[i] = width;
        }
        if (FSY[i] > height) {
            FSY[i] = 0;
        }
        if (FSY[i] < 0) {
            FSY[i] = height;
        }
    }

    for (var i = 0; i < snowX.length; i++) {
        circle(snowX[i], snowY[i], snowD[i]);
        FallX[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        FallY[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);

        snowX[i] += FallX[i];
        snowY[i] += FallY[i];

        if (snowX[i] > width) {
            snowX[i] = 0;
        }
        if (snowX[i] < 0) {
            snowX[i] = width;
        }
        if (snowY[i] > height) {
            snowY[i] = 0;
        }
        if (snowY[i] < 0) {
            snowY[i] = height;
        }
    }

   
    for (var i = 0; i < SX.length; i++) {
        circle(SX[i], SY[i], SD[i]);
        FSXS[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        FSYS[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);


        SX[i] += FSXS[i];
        SY[i] += FSYS[i];
        if (SX[i] > width) {
            SX[i] = 0;
        }
        if (SX[i] < 0) {
            SX[i] = width;
        }
        if (SY[i] > height) {
            SY[i] = 0;
        }
        if (SY[i] < 0) {
            SY[i] = height;
        }
    }

  
    for (var i = 0; i < moreX.length; i++) {
        circle(moreX[i], moreY[i], moreD[i]);
        againX[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        againY[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);

        moreX[i] += againX[i];
        moreY[i] += againY[i];

        if (moreX[i] > width) {
            moreX[i] = 0;
        }
        if (moreX[i] < 0) {
            moreX[i] = width;
        }
        if (moreY[i] > height) {
            moreY[i] = 0;
        }
        if (moreY[i] < 0) {
            moreY[i] = height;
        }
    }


    for (var i = 0; i < MX.length; i++) {
        circle(MX[i], MY[i], MD[i]);
        AX[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        AY[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);


        MX[i] += AX[i];
        MY[i] += AY[i];
        if (MX[i] > width) {
            MX[i] = 0;
        }
        if (MX[i] < 0) {
            MX[i] = width;
        }
        if (MY[i] > height) {
            MY[i] = 0;
        }
        if (MY[i] < 0) {
            MY[i] = height;
        }
    }

    for (var i = 0; i < ZX.length; i++) {
        circle(ZX[i], ZY[i], ZD[i]);
        YX[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        YY[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);

        ZX[i] += YX[i];
        ZY[i] += YY[i];

        if (ZX[i] > width) {
            ZX[i] = 0;
        }
        if (ZX[i] < 0) {
            ZX[i] = width;
        }
        if (ZY[i] > height) {
            ZY[i] = 0;
        }
        if (ZY[i] < 0) {
            ZY[i] = height;
        }
    }

  
    for (var i = 0; i < XX.length; i++) {
        circle(XX[i], XY[i], XD[i]);
        WX[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        WY[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);


        XX[i] += WX[i];
        XY[i] += WY[i];
        if (XX[i] > width) {
            XX[i] = 0;
        }
        if (XX[i] < 0) {
            XX[i] = width;
        }
        if (XY[i] > height) {
            XY[i] = 0;
        }
        if (XY[i] < 0) {
            XY[i] = height;
        }
    }

             

    for (var i = 0; i < VX.length; i++) {
        circle(VX[i], VY[i], VD[i]);
        UX[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        UY[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);

        VX[i] += UX[i];
        VY[i] += UY[i];

        if (VX[i] > width) {
            VX[i] = 0;
        }
        if (VX[i] < 0) {
            VX[i] = width;
        }
        if (VY[i] > height) {
            VY[i] = 0;
        }
        if (VY[i] < 0) {
            VY[i] = height;
        }
    }

  
    for (var i = 0; i < TX.length; i++) {
        circle(TX[i], TY[i], TD[i]);
        RX[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        RY[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);


        TX[i] += RX[i];
        TY[i] += RY[i];
        if (TX[i] > width) {
            TX[i] = 0;
        }
        if (TX[i] < 0) {
            TX[i] = width;
        }
        if (TY[i] > height) {
            TY[i] = 0;
        }
        if (TY[i] < 0) {
            TY[i] = height;
        }
    }

 
    for (var i = 0; i < QX.length; i++) {
        circle(QX[i], QY[i], QD[i]);
        NX[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        NY[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);

        QX[i] += NX[i];
        QY[i] += NY[i];

        if (QX[i] > width) {
            QX[i] = 0;
        }
        if (QX[i] < 0) {
            QX[i] = width;
        }
        if (QY[i] > height) {
            QY[i] = 0;
        }
        if (QY[i] < 0) {
            QY[i] = height;
        }
    }

   
    for (var i = 0; i < LX.length; i++) {
        circle(LX[i], LY[i], LD[i]);
        BX[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        BY[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);


        LX[i] += BX[i];
        LY[i] += BY[i];
        if (LX[i] > width) {
            LX[i] = 0;
        }
        if (LX[i] < 0) {
            LX[i] = width;
        }
        if (LY[i] > height) {
            LY[i] = 0;
        }
        if (LY[i] < 0) {
            LY[i] = height;
        }
    }
}

function getRandomNumber(number) {
    return Math.floor(Math.random() * number) + 10;
}

function createBorders(thickness) {
    fill(0,0,0)
    rect(0, 0, width, thickness);
    rect(0, 0, thickness, height);
    rect(0, height - thickness, width, thickness);
    rect(width - thickness, thickness, height);
}



