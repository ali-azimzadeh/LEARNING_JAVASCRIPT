"use strict"


/* ------    تعریف متغییر های Global
            ----------------*/

var wantToStopMove = false;

var myCircleRadius = 0;

var Global_Rectangle_Width;
var Global_Rectangle_Height;

var Global_TriangleBase;


var Global_xPos = 300;
var Global_yPos = 175;

var Global_step = 2;

/* ------- تعریف کلاس پدر
            -------*/

class Shape {

    constructor(shapeName, color, speed) {

        this._shapeName = shapeName;

        this._color = color;

        this._speed = speed;

        this.dx = 1 * this._speed;

        this.dy = 1 * this._speed;
    }

    get shapeName() {
        return this._shapeName;
    }

    set shapeName(x) {

        this._shapeName = x;
    }

    get color() {
        return this._color;
    }

    set color(y) {

        this._color = y;
    }

    get speed() {
        return this._speed;
    }

    set speed(z) {

        this._speed = z;
    }


    draw(myCommand) {

        var canvas = document.getElementById("myCanvas");
        var c = canvas.getContext("2d");

        c.beginPath();
        c.fillStyle = this._color;

        // سطر متغییر در شکل ها
        eval(myCommand);

        c.fill();

        c.closePath();
    }

    stop(element) {

        debugger
        clearInterval(element);
    }

}



/*----- تعریف کلاسهای فرزند
        --------*/


class myRectangle extends Shape {

    constructor(width, height, color) {

        super("Rectangle", color);

        this._width = parseInt(width);

        this._height = parseInt(height);

        Global_Rectangle_Width = this._width;

        Global_Rectangle_Height = this._height;

    }

    get width() {
        return this._width;
    }

    set width(x) {

        this._width = parseInt(x);
    }

    get height() {
        return this._height;
    }

    set height(x) {

        this._height = parseInt(x);
    }

    area() {

        let recArea = this._width * this._height;

        return recArea;
    }

    circumference() {

        let circum = 2 * (this._width + this.height);

        return circum;
    }


    moveRectangle(wantToMoveShape, xPos, yPos, firstTime, wantToStopMove) {

        var canvas = document.getElementById("myCanvas");

        var w = canvas.width;
        var h = canvas.height;

        let step = Global_step;
        debugger

        let movingElement = setInterval(function() {

            wantToStopMove = myStopFunction();

            if (xPos + Global_Rectangle_Width > w) {

                step = -step;
            }

            if (xPos < 0) {

                step = -step;
            }

            if (yPos < 0) {

                step = -step;
            }

            if (yPos + Global_Rectangle_Height > h) {

                step = -step;
            }

            xPos += step;
            yPos += step;

            Global_xPos = xPos;

            Global_yPos = yPos;

            Global_step = step;

            eraseShapeF();

            shapeSelector(wantToMoveShape, xPos, yPos, firstTime, wantToStopMove, movingElement);

        }, 50);

    }

}



class myCircle extends Shape {

    constructor(radius, color) {

        super("Circle", color);

        this._radius = parseInt(radius);
        myCircleRadius = this._radius;

    }


    get radius() {

        return this._radius;
    }

    set radius(x) {

        this._radius = parseInt(x);
    }

    area() {

        let circleArea = Math.round(Math.PI * (Math.pow(this._radius, 2)));

        return circleArea;
    }


    circumference() {


        let circum = Math.round(2 * Math.PI * this._radius);
        return circum;
    }


    moveCircle(wantToMoveShape, xPos, yPos, firstTime, wantToStopMove) {

        var canvas = document.getElementById("myCanvas");

        var w = canvas.width;
        var h = canvas.height;

        let step = Global_step;

        let movingElement = setInterval(function() {

            wantToStopMove = myStopFunction();

            if (xPos + myCircleRadius > w) {

                step = -step;
            }

            if (xPos - myCircleRadius < 0) {

                step = -step;
            }

            if (yPos + myCircleRadius > h) {

                step = -step;
            }

            if (yPos - myCircleRadius < 0) {

                step = -step;
            }

            xPos += step;
            yPos += step;

            Global_xPos = xPos;

            Global_yPos = yPos;

            Global_step = step;

            eraseShapeF();

            shapeSelector(wantToMoveShape, xPos, yPos, firstTime, wantToStopMove, movingElement);

        }, 50);
    }

}




class myTriangle extends Shape {

    constructor(base, color) {

        super("Triangle", color);

        this._base = parseInt(base);

        Global_TriangleBase = this._base;
    }


    get base() {

        return this._base;
    }

    set base(x) {

        this._base = parseInt(x);
    }

    area() {

        let triangleArea = (Math.round((this._base * this._base) / 2));

        return triangleArea;
    }


    circumference() {

        let triangleCircum = (Math.round(this._base * (2 + Math.sqrt(2))));

        return triangleCircum;
    }


    moveTriangle(wantToMoveShape, xPos, yPos, firstTime, wantToStopMove) {

        var canvas = document.getElementById("myCanvas");

        var w = canvas.width;
        var h = canvas.height;

        let step = Global_step;

        let movingElement = setInterval(function() {

            wantToStopMove = myStopFunction();

            if (xPos + Global_TriangleBase > w) {

                step = -step;
            }

            if (xPos < 0) {

                step = -step;
            }

            if (yPos + Global_TriangleBase > h) {

                step = -step;
            }

            if (yPos < 0) {

                step = -step;
            }

            xPos += step;
            yPos += step;

            Global_xPos = xPos;

            Global_yPos = yPos;

            Global_step = step;

            eraseShapeF();

            shapeSelector(wantToMoveShape, xPos, yPos, firstTime, wantToStopMove, movingElement);


        }, 50);
    }

}



function rectangularButton(xPos, yPos, width, height, color) {

    let mostatil = new myRectangle(width, height, color);
    let myCommand = `c.rect(${xPos}, ${yPos}, this._width, this._height);`

    mostatil.draw(myCommand);

    textRender(mostatil.shapeName, mostatil.area(), mostatil.circumference());
    return (mostatil);

}


function circleButton(xPos, yPos, radius, color) {
    let dayereh = new myCircle(radius, color);

    // سطر متغییر در شکل ها
    let myCommand = "c.arc(" + xPos + "," + yPos + ", this._radius, 0, 2*Math.PI);"
    dayereh.draw(myCommand);


    textRender(dayereh.shapeName, dayereh.area(), dayereh.circumference());
    return (dayereh);
}


function triangleButton(xPos, yPos, base, color) {
    let mosalas = new myTriangle(base, color);
    debugger
    // سطر متغییر در شکل ها
    let myCommand = `c.moveTo(${xPos}, ${yPos});
    let base = ${base};
    let newX = ${xPos} + base;
    let newY = ${yPos} + base;
    c.lineTo(${xPos}, newY);
    c.lineTo(newX, newY);`

    mosalas.draw(myCommand);

    textRender(mosalas.shapeName, mosalas.area(), mosalas.circumference());
    return (mosalas);

}


function textRender(shapeName, shapeArea, shapeCircumference) {

    let myText = `The area of this <span class="redText">${shapeName}  </span> is <span class="redText">${shapeArea}</span> 
    and its circumference is <span class="redText">${shapeCircumference}</span>`;


    document.getElementById("shapeInformation")
        .innerHTML = myText;
}


function shapeSelector(wantToMoveShape, xPos, yPos, firstTime, wantToStopMove, movingElement) {


    let mySelectedShape = document.getElementById("shape").value;

    let SelectedColor = document.getElementById("shapeColor").value;

    let insertedLengthValue = document.getElementById("length").value;


    switch (mySelectedShape) {


        case "Circle":

            let dayereh = circleButton(xPos, yPos, insertedLengthValue, SelectedColor);

            if ((wantToMoveShape === true) && (firstTime == 0)) {
                debugger
                firstTime++;

                dayereh.moveCircle(wantToMoveShape, xPos, yPos, firstTime, wantToStopMove);
            }
            if (wantToStopMove) {
                debugger;

                dayereh.stop(movingElement);
            }

            break;


        case "Rectangle":


            let insertedLengthValue_2 = document.getElementById("length2").value

            let mostatil = rectangularButton(xPos, yPos, insertedLengthValue, insertedLengthValue_2, SelectedColor)


            if ((wantToMoveShape === true) && (firstTime == 0)) {
                debugger
                firstTime++;

                mostatil.moveRectangle(wantToMoveShape, xPos, yPos, firstTime, wantToStopMove);
            }
            if (wantToStopMove) {
                debugger;

                mostatil.stop(movingElement);
            }

            break;


        case "Triangle":
            debugger
            let mosalas = triangleButton(xPos, yPos, insertedLengthValue, SelectedColor);

            if ((wantToMoveShape === true) && (firstTime == 0)) {
                debugger
                firstTime++;

                mosalas.moveTriangle(wantToMoveShape, xPos, yPos, firstTime, wantToStopMove);
            }
            if (wantToStopMove) {
                debugger;

                mosalas.stop(movingElement);
            }

            break;

    }

}



function eraseShapeF() {

    var canvas = document.getElementById("myCanvas");
    var c = canvas.getContext("2d");

    c.clearRect(0, 0, canvas.width, canvas.height);

}

function changeLabelText() {

    let mySelectedShape = document.getElementById("shape").value;

    switch (mySelectedShape) {
        case "Circle":

            document.getElementById("myShapeTypeLabel").innerHTML = "Radius:";

            document.getElementById("myShapeTypeLabel_2").style.display = "none";

            document.getElementById("length2").style.display = "none";
            break;

        case "Rectangle":
            document.getElementById("myShapeTypeLabel").innerHTML = "Width:";

            document.getElementById("myShapeTypeLabel_2").style.display = "inline";

            document.getElementById("length2").style.display = "inline";
            break;


        case "Triangle":

            document.getElementById("myShapeTypeLabel").innerHTML = "Base:";

            document.getElementById("length").value = 120;
            document.getElementById("myShapeTypeLabel_2").style.display = "none";

            document.getElementById("length2").style.display = "none";
            break;

    }

}


document.getElementById("shape")
    .addEventListener("change", changeLabelText);


document.getElementById("drawShape")
    .addEventListener("click", function() {
        shapeSelector(false, 300, 175, 1);
    });


document.getElementById("eraseShape")
    .addEventListener("click", eraseShapeF);


document.getElementById("moveShape")
    .addEventListener("click", function() {

        wantToStopMove = false;
        shapeSelector(true, Global_xPos, Global_yPos, 0, false);
    });


document.getElementById("stop")
    .addEventListener("click", counter)

function counter() {
    debugger
    wantToStopMove = true;
}



//برای چک کردن دایمی اینکه آیا دکمه استاپ زده شده است یا نه
function myStopFunction() {



    return wantToStopMove;

}