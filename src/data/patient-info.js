import { PatientContact } from './patient-contact';

/**
 * Class representing a patient's personal information.
 */
export default class PatientInfo {
    /**
     * Create a patient's info.
     * @param {PatientContact} contact - The patient's contact information.
     * @param {string} gender - The patient's gender.
     * @param {string} referredBy - The person whom the patient was referred by.
     */
    constructor(contact, gender, referredBy) {
        this.contact = contact;
        this.gender = gender;
        this.referredBy = referredBy;
    }
}
