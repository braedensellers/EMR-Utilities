/**
 * Class representing a patient.
 */
export default class Patient {
    /**
     * Create a patient.
     * @param {string} firstName - The patient's first name.
     * @param {string} lastName - The patient's last name.
     * @param {string} dateOfBirth - The patient's date of birth.
     * @param {number} idFirstNameCount - The number of characters of the first name to use for the patient's ID.
     * @param {number} idLastNameCount - The number of characters of the last name to use for the patient's ID.
     */
    constructor(firstName, lastName, dateOfBirth, idFirstNameCount = 1, idLastNameCount = 4) {
        this.firstName = firstName.toString().trim();
        this.lastName = lastName.toString().trim();
        this.dateOfBirth = new Date(dateOfBirth);
        this.id = this.generateId(idFirstNameCount, idLastNameCount);
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
        const sanitizedFirstName = this.firstName.replace(/[^a-zA-Z]/g, '').toUpperCase();
        const sanitizedLastName = this.lastName.replace(/[^a-zA-Z]/g, '').toUpperCase();

        const truncatedFirstName = sanitizedFirstName.slice(0, firstNameChars).padEnd(firstNameChars, 'X');
        const truncatedLastName = sanitizedLastName.slice(0, lastNameChars).padEnd(lastNameChars, 'X');

        const formattedDateOfBirth = formatDateStringForId(this.dateOfBirth);

        const newId = `${truncatedLastName}${truncatedFirstName}${formattedDateOfBirth}`;

        return newId;
    }
}

/**
 * Formats a date into the expected format for the patient's id. MMDDYY
 * @param {date} date - The date to format.
 * @returns {string} The formatted date for the patient's ID.
 */
function formatDateStringForId(date) {
    if (!(date instanceof Date) || isNaN(date))
        throw new Error("Invalid date object provided.");

    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const year = String(date.getFullYear()).slice(-2);

    return `${month}${day}${year}`;
}
