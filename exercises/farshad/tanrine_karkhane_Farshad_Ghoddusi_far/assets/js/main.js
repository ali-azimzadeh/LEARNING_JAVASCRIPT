/* ---------- Grand Father Class
                    ------------ */


class Person {

    constructor(fname, lname, IDNumber, birthDate, homeTell,
        homeAddress) {

        this._fname = fname;

        this._lname = lname;

        this._IDNumber = IDNumber;

        this._birthDate = birthDate;

        this._homeTell = homeTell;

        this._homeAddress = homeAddress;
    }

    get fname() {

        return this._fname;

    }

    set fname(x) {

        this._fname = x;
    }


    /*----------

                ----------*/
    get lname() {

        return this._lname;

    }

    set lname(x) {

            this._lname = x;
        }
        /*----------

                    ----------*/




    /*----------

                ----------*/
    get IDNumber() {

        return this._IDNumber;

    }

    set IDNumber(x) {

            this._IDNumber = x;
        }
        /*----------

                    ----------*/


    /*----------

                ----------*/

    get birthDate() {

        return this._birthDate;

    }

    set birthDate(x) {

        this._birthDate = x;
    }

    /*----------

            ----------*/



    /*----------

                ----------*/


    get homeTell() {

        return this._homeTell;

    }

    set homeTell(x) {

        this._homeTell = x;
    }


    /*----------

                ----------*/



    /*----------

                ----------*/


    get homeAddress() {

        return this._homeAddress;

    }

    set homeAddress(x) {

        this._homeAddress = x;
    }


    /*----------
            
                            ----------*/


    age(bYear) {

        let thisYear = new Date().getFullYear();
        let old = thisYear - bYear;

        let result;
        if (old >= 20 && old <= 45) {

            result = "با توجه به شرایط سنی شما مجاز به استخدام هستید."
        } else {
            result = "به علت شرایط سنی شما مجاز به استخدام نیستید."
        }

        let y = { old, result };
        return (y);
    }

}




/*---------- Father Class
                ---------*/

class Staff extends Person {

    constructor(fname, lname, IDNumber, birthDate, homeTell,
        homeAddress, factoryName, factoryManagerName, salary,
        factoryAddress) {

        super(fname, lname, IDNumber, birthDate, homeTell,
            homeAddress);



        this._factoryName = factoryName;

        this._factoryManagerName = factoryManagerName;

        this._salary = salary;

        this._factoryAddress = factoryAddress;

    }



    /*----------

            ----------*/
    get factoryName() {

        return this._factoryName;

    }

    set factoryName(x) {

            this._factoryName = x;
        }
        /*----------
                
                        ----------*/


    /*----------

            ----------*/
    get factoryManagerName() {

        return this._factoryManagerName;

    }

    set factoryManagerName(x) {

            this._factoryManagerName = x;
        }
        /*----------
                
                        ----------*/

    /*----------

            ----------*/

    get salary() {



        return this._salary;
    }


    set salary(x) {

        this.salary = x;
    }


    /*----------

        ----------*/


    /*----------

            ----------*/

    get factoryAddress() {



        return this._factoryAddress;
    }


    set factoryAddress(x) {

        this.factoryAddress = x;
    }


    /*----------
        
                ----------*/

    checkSalary(requestedSalary, old) {

        let result;

        if (old < 30 && requestedSalary > 3000000) {

            result = " برای افراد زیر 30 سال مجاز به درج حقوق بالای 3 میلیون نمی باشید."

            return result;

        } else {
            result = "شرایط سنی و میزان حقوق درخواستی متناسب است."

            this._salary = requestedSalary;

            return result;

        }


    }


}
/*---------- Child
                ---------*/

class Labor extends Staff {

    constructor(fname, lname, IDNumber, birthDate, homeTell,
        homeAddress, factoryName, factoryManagerName, salary,
        factoryAddress, placeOfService) {

        super(fname, lname, IDNumber, birthDate, homeTell,
            homeAddress, factoryName, factoryManagerName, salary,
            factoryAddress);

        this._post = "worker";

        this.placeOfService = placeOfService;
    }


}


class Employee extends Staff {

    constructor(fname, lname, IDNumber, birthDate, homeTell,
        homeAddress, factoryName, factoryManagerName, salary,
        factoryAddress, placeOfService) {

        super(fname, lname, IDNumber, birthDate, homeTell,
            homeAddress, factoryName, factoryManagerName, salary,
            factoryAddress);

        this.post = "employee";

        this.placeOfService = placeOfService;
    }


}


class VicePresident extends Staff {

    constructor(fname, lname, IDNumber, birthDate, homeTell,
        homeAddress, factoryName, factoryManagerName, salary,
        factoryAddress, placeOfService) {

        super(fname, lname, IDNumber, birthDate, homeTell,
            homeAddress, factoryName, factoryManagerName, salary,
            factoryAddress);

        this.post = "vicePresent";
        this.placeOfService = placeOfService;
    }


}


class President extends Staff {

    constructor(fname, lname, IDNumber, birthDate, homeTell,
        homeAddress, factoryName, factoryManagerName, salary,
        factoryAddress, placeOfService) {

        super(fname, lname, IDNumber, birthDate, homeTell,
            homeAddress, factoryName, factoryManagerName, salary,
            factoryAddress);

        this.post = "president"
        this.placeOfService = placeOfService;
    }



}

/*----------
      کلاسی را هم برای ارباب رجوع در نظر گرفتم ------*/



class Client extends Person {

    constructor(reasonOfAttendence) {

        this._reasonOfAttendence = reasonOfAttendence;

    }


}



/*--------------- اتمام کلاس ها
                ----------------------*/



document.getElementById("submit").addEventListener("click", checkValidity);




function checkValidity() {


    let fname = document.getElementById("fname").value;
    checkEmptiness("fname");

    let lname = document.getElementById("lname").value;
    checkEmptiness("lname");

    let IDNumber = document.getElementById("kMelli").value;
    checkEmptiness("kMelli");

    let birthDate = document.getElementById("birthday").value;
    checkEmptiness("birthday");

    let homeTell = document.getElementById("tell").value;
    checkEmptiness("tell");

    let homeAddress = document.getElementById("address").value;
    checkEmptiness("address");

    let factoryName = document.getElementById("factoryName").value;
    checkEmptiness("factoryName");

    let placeOfService = document.getElementById("office").value;

    let factoryManagerName = document.getElementById("managerName").value;
    checkEmptiness("managerName");

    let salary = document.getElementById("salary").value;
    checkEmptiness("salary");

    let staffType = document.getElementById("staff").value;

    let factoryAddress = document.getElementById("factoryAddress").value;

    myFunction(fname, lname, IDNumber, birthDate, homeTell,
        homeAddress, factoryName, factoryManagerName, salary,
        factoryAddress, placeOfService, staffType);
}

function checkEmptiness(fieldID) {

    let x = document.getElementById(fieldID).value;

    let y = document.getElementById(fieldID).placeholder;

    let text = `فیلد مربوط به ${y} خالی است`
    if (x === "") {
        alert(text);

    }

}

/*----------- کنترل فیلد های عددی
                ------*/
let IDnumberField = document.getElementById("kMelli");
IDnumberField.addEventListener('keypress', numberControl);


let myHome = document.getElementById("tell");
myHome.addEventListener('keypress', numberControl);

function numberControl(e) {

    let x = e.keyCode;

    if (e.keyCode < 48 || e.keyCode > 57) {
        e.preventDefault()
    }

}

/*----------- 
                ------*/


function myFunction(fname, lname, IDNumber, birthDate, homeTell,
    homeAddress, factoryName, factoryManagerName, salary,
    factoryAddress, placeOfService, staffType) {

    let myPerson;

    switch (staffType) {
        case "کارگر":

            myPerson = new Labor(fname, lname, IDNumber, birthDate, homeTell,
                homeAddress, factoryName, factoryManagerName, salary,
                factoryAddress, placeOfService);


            break;


        case "کارمند":

            myPerson = new Employee(fname, lname, IDNumber, birthDate, homeTell,
                homeAddress, factoryName, factoryManagerName, salary,
                factoryAddress, placeOfService);
            break;


        case "معاون":

            myPerson = new VicePresident(fname, lname, IDNumber, birthDate, homeTell,
                homeAddress, factoryName, factoryManagerName, salary,
                factoryAddress, placeOfService);
            break;


        case "مدیر":

            myPerson = new President(fname, lname, IDNumber, birthDate, homeTell,
                homeAddress, factoryName, factoryManagerName, salary,
                factoryAddress, placeOfService);
            break;

    }


    bDate(myPerson);
}


function bDate(myPerson) {


    // با استفاده از getter 
    let x = myPerson.birthDate;

    let date = new Date(x);
    var bYear = date.getFullYear();

    let y = myPerson.age(bYear)
    let old = y.old;
    let pasokh1 = y.result;

    alert(pasokh1);
    if (old <= 45 && old >= 20) {
        let requestedSalary = myPerson.salary;
        let z = myPerson.checkSalary(requestedSalary, old);

        let pasokh2 = z;

        alert(pasokh2);
    }



}