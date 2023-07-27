import Patient from "./patient.js";
import Medication from './medication.js';
import './styles/main.scss';
import exphsLogo from './assets/exphs.png';

var $ = require('jquery');

const exphsLogoImg = document.getElementById('exphsLogoImg');
exphsLogoImg.src = exphsLogo;

document.getElementById('createNewPatientBtn').addEventListener('click', (e) => {
    let firstname = $("#firstName").val();
    let lastname = $("#lastName").val();
    let dateofbirth = $("#dateOfBirth").val();

    let patient = new Patient(firstname, lastname, dateofbirth);
    console.log(patient);
});
