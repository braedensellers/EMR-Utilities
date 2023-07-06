export default class Patient {
    constructor(firstName, lastName, dateOfBirth) {
        this.firstName = firstName.toString().trim();
        this.lastName = lastName.toString().trim();
        this.dateOfBirth = dateOfBirth;

        this.medicalRecordNumber = this.generateMedicalRecordNumber(1, 4);
    }

    say = () => console.log(`Patient: ${this.firstName} ${this.lastName} - ${this.dateOfBirth.toString()}`);

    sayID = () => console.log(`Patient MRN: ${this.medicalRecordNumber}`);

    name = () => this.firstName + " " + this.lastName;

    age = () => new Date().getFullYear() - new Date(this.dateOfBirth).getFullYear();

    generateMedicalRecordNumber(firstNameChars = 4, lastNameChars = 4) {
        try {
            let mrnFirstName = (this.firstName.substring(0, 4)).fillWithCharacter("X", firstNameChars);
            let mrnLastName = (this.lastName.substring(0, 4)).fillWithCharacter("X", lastNameChars);
            let mrnDateOfBirth = getDateStringForMRN(new Date(this.dateOfBirth));

            return (mrnLastName + mrnFirstName + mrnDateOfBirth).toUpperCase();
        }
        catch(err) {
            console.error(err);
        }
    }
}

function getDateStringForMRN(date) {
    date = new Date(date);

    const month = (date.getMonth() + 1);
    const day = date.getDate();
    const year = date.getFullYear().toString().substring(2);

    return `${month.toString().padStart(2, "0")}${day.toString().padStart(2, "0")}${year}`;
}
