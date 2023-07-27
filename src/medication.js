/**
 * Class representing a medication.
 */
export default class Medication {
    /**
     * Create a medication.
     * @param {string} name - The name of the medication.
     * @param {string} reason - The reason for taking this medication.
     */
    constructor(name, reason) {
        this.name = name.toString().trim();
        this.reason = reason.toString().trim();
    }

    /**
     * Prints the medication's name and reason.
     */
    say = () => console.log(`Medication: ${this.name}: ${this.reason}`);
}

/**
 * Formats an array of medication objects for usage in the EMR.
 * @param {Medication[]} medications - An array of medication objects.
 * @returns {string} The formatted string of medication objects.
 */
export function formatMedicationsForEmr(medications) {
    const formattedStrings = medications.map((medicationData) => {
        return `${medicationData.medication}:${medicationData.reason}`;
    });

    return formattedStrings.join(',');
}
