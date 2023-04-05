//! emr-utilities.js
//! version: 0.1.2
//! authors: Braeden Sellers

// #region Code Style & Conventions
//! Style Guide
//* camelCase for identifier names (variable and functions)
//* all names start with a letter
//* spaces around operators ( = + - * / ), and after commas
//* one empty line between code groups
//* otherwise follow W3Schools JS Coding Conventions
//* https://www.w3schools.com/js/js_conventions.asp
// #endregion

// Regular expressions
const regexName = /^[a-zA-Z]+ [a-zA-Z]+$/;
const regexMedicalRecordNumber = /^[a-zA-Z]+ [a-zA-Z]+$/;

class Patient {
  constructor(firstName, lastName, dateOfBirth) {
    this.firstName = firstName.toString().trim();
    this.lastName = lastName.toString().trim();
    this.dateOfBirth = dateOfBirth;

    this.medicalRecordNumber = this.createMedicalRecordNumber();
  }

  say = () => console.log(`Patient: ${this.firstName} ${this.lastName} - ${this.dateOfBirth.toString()}`);

  sayMedicalRecordNumber = () => console.log(`Patient MRN: ${this.medicalRecordNumber}`);

  name = () => this.firstName + " " + this.lastName;

  age = () => new Date().getFullYear() - new Date(this.dateOfBirth).getFullYear();

  createMedicalRecordNumber() {
    try {
      let mrnFirstName = (this.firstName.substring(0, 4)).fillWithCharacter("X", 4);
      let mrnLastName = (this.lastName.substring(0, 4)).fillWithCharacter("X", 4);
      let mrnDateOfBirth = getDateStringForMRN(new Date(this.dateOfBirth));

      return (mrnLastName + mrnFirstName + mrnDateOfBirth).toUpperCase();
    }
    catch(err) {
      console.error(err);
    }
  }
}

String.prototype.fillWithCharacter = function(character, desiredLength) {
  let newString = this;

  while(newString.length < desiredLength)
    newString += character;

  return newString;
}

function getDateStringForMRN(date) {
  date = new Date(date);

  let month = (date.getMonth() + 1).toString();
  let day = date.getDate().toString();
  let year = date.getFullYear().toString().substring(2, 4);

  if(month.length < 2)
    month = "0" + month;

  if(day.length < 2)
    day = "0" + day;

  return month + day + year;
}

function validate(regex, value) {
  return regex.test(value);
}

function fillStringWithCharacter(str, character, desiredLength = 0) {
  while(str.length < desiredLength)
    str += character;

  return str;
}

//let p = new Patient("Braeden", "Sellers", "02-02-1999");
//p.say();
//p.sayMedicalRecordNumber();
