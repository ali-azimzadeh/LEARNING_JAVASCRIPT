$(document).ready(function() {
    myColorFunction();

    $("#redSlider").slider({

        animate: "slow",
        value: 0,
        min: 0,
        max: 255,
        step: 1,

        slide: function(event, ui) {

            let x = $("#redSlider").slider("option", "value")
            $("#redValue").text(x);
            // debugger
            myColorFunction();
        }
    });



    $("#greenSlider").slider({

        animate: "slow",
        value: 0,
        min: 0,
        max: 255,
        step: 1,

        slide: function(event, ui) {

            let y = $("#greenSlider").slider("option", "value");

            $("#greenValue").text(y);
            // debugger
            myColorFunction();
        }
    });


    $("#blueSlider").slider({

        animate: "slow",
        value: 0,
        min: 0,
        max: 255,
        step: 1,

        slide: function(event, ui) {

            let z = $("#blueSlider").slider("option", "value");

            $("#blueValue").text(z);

            myColorFunction();

        }
    });






});

function myColorFunction() {

    let myRed = $("#redValue").html();


    let myGreen = $("#greenValue").html();

    let myBlue = $("#blueValue").html();

    // debugger
    // alert(myRed + "," + myGreen + "," + myBlue);

    if (myRed === "") {
        myRed = 0;
    }

    if (myGreen === "") {
        myGreen = 0;
    }

    if (myBlue === "") {
        myBlue = 0;
    }

    let newColor = "rgb(" + myRed + "," + myGreen + "," + myBlue + ")";
    $("#colorBox").css('background-color', newColor);
}