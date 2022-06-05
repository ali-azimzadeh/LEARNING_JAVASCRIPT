"use strict"

let clickAge = 0;
let clickName = 0;
let tableText;

const students = [{ firstName: "ali", age: 30 },
    { firstName: "reza", age: 22 },
    { firstName: "ahmad", age: 41 },
    { firstName: "leila", age: 25 }
];


function render(array) {

    tableText = ``;

    for (let i = 0; i < array.length; i++) {

        tableText += `<tr>
                    <th scope="row"> ${i+1} </th>
                    <td> ${students[i].firstName} </td>
                    <td> ${students[i].age} </td> 
                    </tr>`
    }

    return tableText;
}


function ageClicked() {

    let myClick = ++clickAge % 2;

    if (myClick == 1) {

        students.sort(function(a, b) {

            return a.age - b.age
        });

        let tableText = render(students);

        document.getElementById("sortAge").innerHTML = tableText;

        // to show table removing d-none class 
        document.getElementById("ageHiddenTable")
            .classList.remove("d-none")

    } else {
        students.sort(function(a, b) {

            return b.age - a.age
        });

        let tableText = render(students);

        document.getElementById("sortAge").innerHTML = tableText;

        // to show table removing d-none class 
        document.getElementById("ageHiddenTable")
            .classList.remove("d-none")
    }
}


function nameClicked() {

    let myClick = ++clickName % 2;

    if (myClick == 1) {

        students.sort(function(a, b) {
            if (a.firstName.toLocaleLowerCase() <
                b.firstName.toLocaleLowerCase()) {

                return -1;

            } else if (a.firstName.toLocaleLowerCase() >
                b.firstName.toLocaleLowerCase()) {

                return 1;

            } else {

                return 0;
            }
        });

        let tableText = render(students);

        document.getElementById("sortName").innerHTML = tableText;

        // to show table removing d-none class 
        document.getElementById("nameHiddenTable")
            .classList.remove("d-none")

    } else {

        students.sort(function(a, b) {
            if (a.firstName.toLocaleLowerCase() >
                b.firstName.toLocaleLowerCase()) {

                return -1;

            } else if (a.firstName.toLocaleLowerCase() <
                b.firstName.toLocaleLowerCase()) {

                return 1;

            } else {

                return 0;
            }
        });

        let tableText = render(students);

        document.getElementById("sortName").innerHTML = tableText;

        // to show table removing d-none class 
        document.getElementById("nameHiddenTable")
            .classList.remove("d-none")
    }
}