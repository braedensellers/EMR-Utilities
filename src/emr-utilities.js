import Patient from './data/patient';
import PatientInfo from './data/patient-info';
import PatientContact from './data/patient-contact';
import Medication from './data/medication';
import Address from './data/address';
import Promotions from './data/promotions';

import { formatMedicationsForEmr } from './data/medication';

const regexName = /^[a-zA-Z]+ [a-zA-Z]+$/;
const regexMedicalRecordNumber = /^[a-zA-Z]+ [a-zA-Z]+$/;

function validate(regex, value) {
  return regex.test(value);
}

export const createPatient = (firstName, lastName, dateOfBirth) => {
  return new Patient(firstName, lastName, dateOfBirth);
};

export const createPatientInfo = () => {
  return new PatientInfo(firstName, lastName, dateOfBirth);
};

export const createPatientContact = (address, phone, email, promotions) => {
  return new PatientContact(address, phone, email, promotions);
};

export const createMedication = (medication, reason) => {
  return new Medication(medication, reason);
};

export const createAddress = (street, unitNumber, city, state, county, postalCode, country) => {
  return new Address(street, unitNumber, city, state, county, postalCode, country);
};

export const createPromotions = (methods) => {
  return new Promotions(methods);
}
