import Patient from "./patient.js";

// Regular expressions
const regexName = /^[a-zA-Z]+ [a-zA-Z]+$/;
const regexMedicalRecordNumber = /^[a-zA-Z]+ [a-zA-Z]+$/;

String.prototype.fillWithCharacter = function(character, desiredLength) {
  let newStr = this;

  if(newStr.length < desiredLength)
    newStr = newStr.padEnd(desiredLength, character);

  return newStr;
}

function validate(regex, value) {
  return regex.test(value);
}

export function createPatient(_firstName, _lastName, _dateOfBirth) {
  let patient = new Patient(_firstName, _lastName, _dateOfBirth);

  return patient;
}
