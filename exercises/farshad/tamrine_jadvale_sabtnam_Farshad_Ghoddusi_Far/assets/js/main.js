$(document).ready(function() {

    $('#submit').click(checkFunction);


    $(document).on('click', ".delete", removeStudent);




    $("#fname").keypress(function(event) {
        $("#lname").focus();
    })

    $("#lname").keypress(function(event) {
        $("#age").focus();
    })

    $("#age").keypress(function(event) {
        $("#submit").focus();
    })


    $("#enrolment").click(myAcardeon);

    // debugger
    striped();


});

function checkFunction() {

    var insert = true;

    // Remove Classes
    // برای پاک کردن تگ های اسپن با کلاس ردنوت
    $("span").remove(".redNote");

    $("input").removeClass("redBorder");

    // debugger

    let myFirstName =
        $.trim($('#fname').val());

    insert = checkEmptiness($('#fname'), myFirstName, insert);



    let myLastName =
        $.trim($('#lname').val());
    // debugger
    insert = checkEmptiness($('#lname'), myLastName, insert);


    let myAge =
        $.trim($('#age').val());

    insert = checkEmptiness($('#age'), myAge, insert);


    // debugger
    insert = myIsNumber($('#age'), myAge, insert);
    // debugger

    if (insert) {

        addStudent(myFirstName, myLastName, myAge);
        // debugger
        removeFieldContent($('#fname'));

        removeFieldContent($('#lname'));

        removeFieldContent($('#age'));

    }




}


function checkEmptiness(myObject, myInputField, insert) {

    // let newObj = $(myObject).is(':empty');

    // alert(myInputField);
    let newObj = (myInputField == "");

    let myPlaceHolder = $(myObject).attr('placeholder');
    // debugger

    if (newObj) {

        alert(" فیلد مربوط به " + myPlaceHolder + " خالی است ");

        borderRed(myObject);

        insert = false;
        // debugger
    }

    // debugger
    return (insert);

}

function borderRed(myObject) {


    // debugger
    $(myObject).addClass('redBorder');
    addNote(myObject);

}

function addNote(myObject) {


    // debugger
    $(myObject).after('<span class="redNote" id="myWarning"> ** لطفا ' + $(myObject).attr('placeholder') + ' را به درستی وارد کنید.  </span>');


}


function myIsNumber(myObject, myAge, insert) {


    let old = $.isNumeric(myAge);
    // debugger

    if (!old) {

        $(myObject).after('<span class="redNote" id="myWarning"> ** لطفا مقادیر عددی وارد کنید. </span>');

        alert('لطفا برای سن مقادیر عددی وارد کنید.');

        insert = false;

    }

    return (insert);

}




function addStudent(myFirstName, myLastName, myAge) {

    $('#myEnrollTable').append('<tr><th>' +
        myFirstName + '</th><th>' +
        myLastName + '</th><th>' +
        myAge + '</th><th>' +
        '<button class="myButton2 delete">حذف</button>' +
        '</th></tr></table>');
    // debugger;
    striped();

}


function removeStudent() {

    $(this).parentsUntil("tbody").remove();
}


function removeFieldContent(myObj) {

    $(myObj).val('');

}


function striped() {



    $('table.data tr:nth-child(odd)').addClass('myOdd');
    $('table.data tr:nth-child(even)').addClass('myEven');
    $('table.data tr:first').addClass('firstHeader');


    $('table.data tr').on('mouseenter', addHighlight);
    $('table.data tr').on('mouseleave', removeHighlight);
}


function addHighlight(e) {

    // debugger;
    $(this).addClass('highlighted')
}

function removeHighlight(e) {

    // debugger;
    $(this).removeClass('highlighted')
}

function myAcardeon() {
    $("#myEnrollTable").slideToggle("slow");
}