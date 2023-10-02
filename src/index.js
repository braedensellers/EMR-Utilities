import { createPatient, createMedication, createPatientInfo } from './emr-utilities';
import './styles/main.scss';
import exphsLogo from './assets/exphs.png';

var $ = require('jquery');

const exphsLogoImg = document.getElementById('exphsLogoImg');
exphsLogoImg.src = exphsLogo;

document.getElementById('createNewPatientBtn').addEventListener('click', (e) => {
    let firstname = $("#firstName").val();
    let lastname = $("#lastName").val();
    let dateofbirth = $("#dateOfBirth").val();

    let patient = createPatient(firstname, lastname, dateofbirth);
    console.log(patient);
});

document.getElementById('addNewMedicationBtn').addEventListener('click', (e) => {
    let name = $("#medication").val();
    let reason = $("#reason").val();

    let medication = createMedication(name, reason);
    console.log(medication);
});
