"use strict"

let myOddArray = [];
let myEvenArray = [];
let remainder;


for (let i = 101; i <= 200; i++) {

    remainder = (i % 2);

    switch (remainder) {

        case 0:

            myEvenArray.push(i);
            break;

        case 1:
            myOddArray.push(i);
            break;

    }

}

function drawTable(array) {

    let myText = ``;

    for (let i = 0; i < array.length; i += 5) {

        myText += `<tr> <td> ${array[i]} </td>
                      <td> ${array[i + 1]} </td> 
                      <td> ${array[i + 2]} </td> 
                      <td> ${array[i + 3]} </td> 
                      <td> ${array[i + 4]} </td> </tr>`

    }

    return myText;
}

document.getElementById("myOddTable").innerHTML =
    drawTable(myOddArray);

document.getElementById("myEvenTable").innerHTML =
    drawTable(myEvenArray);


function descendingArray(array) {

    let descendedArray = array.reverse();

    return drawTable(descendedArray);
}

function descendingOddText() {

    let newText = descendingArray(myOddArray);

    document.getElementById("myOddTable").innerHTML = newText;
}

function descendingEvenText() {

    let newText = descendingArray(myEvenArray);

    document.getElementById("myEvenTable").innerHTML = newText;
}