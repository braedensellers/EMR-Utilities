import Patient from './data/patient';
import Medication from './data/medication';
import { formatMedicationsForEmr } from './data/medication';

const regexName = /^[a-zA-Z]+ [a-zA-Z]+$/;
const regexMedicalRecordNumber = /^[a-zA-Z]+ [a-zA-Z]+$/;

function validate(regex, value) {
  return regex.test(value);
}

export const createPatient = (firstName, lastName, dateOfBirth) => {
  return new Patient(firstName, lastName, dateOfBirth);
};

export const createMedication = (medication, reason) => {
  return new Medication(medication, reason);
};
