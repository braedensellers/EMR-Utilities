import Patient from './patient.js';
import Medication from './medication.js';
import exphsLogo from './assets/exphs.png';

const regexName = /^[a-zA-Z]+ [a-zA-Z]+$/;
const regexMedicalRecordNumber = /^[a-zA-Z]+ [a-zA-Z]+$/;

function validate(regex, value) {
  return regex.test(value);
}

export function createPatient(_firstName, _lastName, _dateOfBirth) {
  return new Patient(_firstName, _lastName, _dateOfBirth);
}

export function createMedication(_medication, _reason) {
  return new Medication(_medication, _reason);
}
