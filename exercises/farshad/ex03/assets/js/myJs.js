"use strict"


function myFunction() {

    let myPrimeArray = [1, 2];
    let reminder;
    let myTable = "";

    for (let i = 3; i < 100; i++) {

        for (let j = 2; j < i; j++) {

            reminder = i % j;

            if (reminder == 0) {

                break;

            } else if (j == (i - 1)) {

                myPrimeArray.push(i);
            }

        }

    }

    for (let i = 0; i < myPrimeArray.length; i += 2) {

        myTable += "<tr> <td>" + myPrimeArray[i] + "</td>" +
            "<td>" + myPrimeArray[i + 1] + "</td> </tr> "
    }

    document.getElementById("myDemo").innerHTML = myTable;
}