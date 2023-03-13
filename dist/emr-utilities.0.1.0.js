class Patient {
  constructor(firstName, lastName, dateOfBirth) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dateOfBirth = dateOfBirth;
  }

  name() {
    return this.firstName + " " + this.lastName;
  }

  age() {
    let date = new Date();
    let dateOfBirthYear = new Date(this.dateOfBirth).getFullYear();
    return date.getFullYear() - dateOfBirthYear;
  }
}

function createMedicalRecordNumber(patient) {
  let firstName = patient.firstName.trim();
  let lastName = patient.lastName.trim();

  try {
    let firstNameSubstr = firstName.substring(0, 1);
    let lastNameSubstr = lastName.substring(0, 4);
    let newDateOfBirth = getDateStringForMRN(new Date(patient.dateOfBirth)).toString();

    return (lastNameSubstr + firstNameSubstr + newDateOfBirth).toUpperCase();
  }
  catch(err) {
    console.error(err);
  }
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

function validateName(name) {
  let regName = /^[a-zA-Z]+ [a-zA-Z]+$/;
  return regName.test(name);
}

let p = new Patient("Braeden", "Sellers", "02-02-1999");
console.log(createMedicalRecordNumber(p));
