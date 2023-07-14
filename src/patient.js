/**
 * Class representing a patient.
 */
class Patient {
    /**
     * Create a patient.
     * @param {string} firstName - The patient's first name.
     * @param {string} lastName - The patient's last name.
     * @param {string} dateOfBirth - The patient's date of birth.
     * @param {number} idFirstNameCharCount - The number of characters of the first name to substring for the patient's ID.
     */
    constructor(firstName, lastName, dateOfBirth, idFirstNameCharCount = 1) {
        this.firstName = firstName.toString().trim();
        this.lastName = lastName.toString().trim();
        this.dateOfBirth = dateOfBirth;

        this.id = this.generateId(idFirstNameCharCount, 4);
    }

    /**
     * Prints the patient's full name and date of birth to the console. For debugging.
     */
    say = () => console.log(`Patient: ${this.firstName} ${this.lastName} - ${this.dateOfBirth.toString()}`);

    /**
     * Prints the patient's ID to the console. For debugging.
     */
    sayId = () => console.log(`Patient ID: ${this.id}`);

    /**
     * Gets the patient's full name.
     * @returns {string} The patient's full name.
     */
    name = () => this.firstName + " " + this.lastName;

    /**
     * Get's the patient's age.
     * @returns {number} The patient's age.
     */
    age = () => new Date().getFullYear() - new Date(this.dateOfBirth).getFullYear();

    /**
     * Generates the patient's ID. This is done automatically when creating a new patient.
     * @param {number} firstNameChars - The number of characters from the patient's first name to include in the ID.
     * @param {number} lastNameChars - The number of characters from the patient's last name to include in the ID.
     * @returns {string} The patient's generated ID.
     */
    generateId(firstNameChars = 4, lastNameChars = 4) {
        try {
            let idFirstName = (this.firstName.substring(0, firstNameChars)).fillWithCharacter("X", firstNameChars);
            let idLastName = (this.lastName.substring(0, lastNameChars)).fillWithCharacter("X", lastNameChars);
            let idDateOfBirth = formatDateStringForId(new Date(this.dateOfBirth));

            return (idLastName + idFirstName + idDateOfBirth).toUpperCase();
        }
        catch(err) {
            console.error(err);
        }
    }
}

/**
 * Formats a date into the expected format for the patient's id. MMDDYY
 * @param {date} date - The date to format.
 * @returns {string} The formatted date for the patient's ID.
 */
function formatDateStringForId(date) {
    date = new Date(date);

    const month = (date.getMonth() + 1);
    const day = date.getDate();
    const year = date.getFullYear().toString().substring(2);

    return `${month.toString().padStart(2, "0")}${day.toString().padStart(2, "0")}${year}`;
}

module.exports = {
    Patient
}

window.Patient = Patient;
