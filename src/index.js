import { createPatient } from "./emr-utilities.js";
import './styles/main.scss';
import exphs from './assets/exphs.png';

var $ = require('jquery');

const exphsImg = document.getElementById('exphsLogoImg');
exphsImg.src = exphs;

const createNewPatient = document.getElementById("createNewPatientBtn");

let patient;

createNewPatient.addEventListener('click', function () {
    let firstNameInput = document.getElementById("firstName");
    let lastNameInput = document.getElementById("lastName");
    let dateOfBirthInput = document.getElementById("dateOfBirth");

    patient = createPatient(firstNameInput.value, lastNameInput.value, dateOfBirthInput.value);

    $("#patientNameLabel").html(`${patient.firstName} ${patient.lastName}`);
    $("#patientDateOfBirthLabel").html(patient.dateOfBirth);
    $("#patientMedicalRecordNumberLabel").html(patient.medicalRecordNumber);

    console.log(patient);
});
