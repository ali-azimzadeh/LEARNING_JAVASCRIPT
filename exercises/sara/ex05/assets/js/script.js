let shapeColor = "Green";  // Global variable

//*******************************************//  
// change width by user
//*******************************************// 

function changeWidth(){
    
    let widthShape = document.getElementById('widthShape').value;

    var ss = document.getElementById('widthShape');
    
    if(widthShape > 650 || widthShape <50){    //Invalid values
        
        document.getElementById('btnShow').disabled = true;
        
        document.getElementById('widthShape').style.backgroundColor = "#f23e3ea1";
       
        document.getElementById('lblErrWidth').innerHTML = "Input a number between 50 and 650!";

    }else{

        document.getElementById('btnShow').disabled = false;

        document.getElementById('widthShape').style.backgroundColor = "white";

        document.getElementById('lblErrWidth').innerHTML = "";
    }

}

//*******************************************//  
// determin a specific color for each shape
//*******************************************//

function selectColor(){

    let typShape = document.getElementById('selectShp').value;

    switch(typShape){

        case "rectangle":
            
            shapeColor = "Green";
            document.getElementById('lblColor').innerHTML = shapeColor;
            break;
        
        case "circle":
            shapeColor = "Yellow"
            document.getElementById('lblColor').innerHTML = shapeColor;
            break;
        
        case "square":
            shapeColor = "Purple";
            document.getElementById('lblColor').innerHTML = shapeColor;
            break;

        case "triangle":
            shapeColor = "Red"
            document.getElementById('lblColor').innerHTML = shapeColor;
            break;
    }
}

//*******************************************//  
// Parent class for all of shapes
//*******************************************//

class Shape{

    constructor(shapeType , width){

        this.shapeType = shapeType;
        
        this.width = width;
    }

    // write name of shape
    shapeText(){

        let result = "This is a " + this.shapeType;

        return result;

    }

    // dimension for showing a shape
    dimension(){ 

        document.getElementById('divImg').style.width = this.width + "px";

        document.getElementById('divImg').style.height = this.width + "px";

    }
}

//*******************************************//  
// Circle class Inherited of Shape
//*******************************************//

class Circle extends Shape{

    constructor(shapeType , width , color){

        super(shapeType , width);
         
        this.color = color.toLowerCase();

        this.dimension();
    }

    // determin url address for showing shape
    imageUrl(){
        
        if(document.getElementById('blackWhite').checked == true){
            
            document.getElementById('imgShape').src="assets/images/circle-w.jpg"; 

        }else{

            document.getElementById('imgShape').src="assets/images/circle.jpg"; 

        }
    }

    // write the color of shape
    colorText(){

        return this.shapeText() + " and it\'s color is "+ this.color + " ."; 
    }
}

//*******************************************//  
// Rectangle class Inherited of Shape
//*******************************************//

class Rectangle extends Shape{

    constructor(shapeType , width , color){

        super(shapeType , width);

        this.color = color.toLowerCase();

        this.dimension();
    }       

    imageUrl(){

        if(document.getElementById('blackWhite').checked == true){
            
            document.getElementById('imgShape').src="assets/images/rectangle-w.jpg"; 

        }else{

            document.getElementById('imgShape').src="assets/images/rectangle.jpg"; 

        }
    }

    colorText(){

        return this.shapeText() + " and it\'s color is "+ this.color + " ."; 
    }
}

//*******************************************//  
// Square class Inherited of Shape
//*******************************************//

class Square extends Shape{

    constructor(shapeType , width , color){

        super(shapeType , width);

        this.color = color.toLowerCase();

        this.dimension();
    }       

    imageUrl(){

        if(document.getElementById('blackWhite').checked == true){

            document.getElementById('imgShape').src="assets/images/square-w.jpg"; 

        }else{

         document.getElementById('imgShape').src="assets/images/square.jpg"; 

        }
    }

    colorText(){

        return this.shapeText() + " and it\'s color is "+ this.color + " ."; 
    }
}

//*******************************************//  
// Triangle class Inherited of Shape
//*******************************************//

class Triangle extends Shape{

    constructor(shapeType , width , color){

        super(shapeType , width);
         
        this.color = color.toLowerCase();

        this.dimension();
    }       

    imageUrl(){

        if(document.getElementById('blackWhite').checked == true){

            document.getElementById('imgShape').src="assets/images/triangle-w.jpg"; 

        }else{

            document.getElementById('imgShape').src="assets/images/triangle.jpg"; 

        }
    }

    colorText(){

        return this.shapeText() + " and it\'s color is "+ this.color + " ."; 
    }
}

//*******************************************//  
// when user presses 'show button' for a shape
//*******************************************//

function btnShow(){

    let typShape = document.getElementById('selectShp').value;      // get type of shape

    let widthShp = document.getElementById('widthShape').value;     //get width of shape

    let blackShp = document.getElementById('blackWhite').checked;       //get color of shape       
    
    let colorShp;

    if(blackShp){

        colorShp = "Black & White";

    }else{

        colorShp = shapeColor;
    }
    
    // build a shape class for a shape and show it
    switch(typShape){
        
        case "rectangle":

            let shapeRectangle = new Rectangle(typShape , widthShp , colorShp);

            shapeRectangle.imageUrl();

            document.getElementById('shapeTxt').innerHTML = shapeRectangle.colorText();

            break;
        
        case "circle":

            let shapeCircle = new Circle(typShape , widthShp , colorShp);

            shapeCircle.imageUrl();

            document.getElementById('shapeTxt').innerHTML = shapeCircle.colorText();

            break;
        
        case "square":

            let shapeSquare = new Square(typShape , widthShp , colorShp);

            document.getElementById('shapeTxt').innerHTML = shapeSquare.colorText();

            shapeSquare.imageUrl();

            break;

        case "triangle":

            let shapeTriangle = new Triangle(typShape , widthShp , colorShp);

            document.getElementById('shapeTxt').innerHTML = shapeTriangle.colorText();

            shapeTriangle.imageUrl();

            break;
        
    }
}
//********************************************* */
/////////////////////////////////////////////////