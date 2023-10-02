import { PatientContact } from './patient-contact';

/**
 * Class representing a patient's personal information.
 */
export default class PatientInfo {
    /**
     * Create a patient's info.
     * @param {string} gender - The patient's gender.
     * @param {PatientContact} contact - The patient's contact information.
     * @param {string} referredBy - The person whom the patient was referred by.
     */
    constructor(gender, contact, referredBy) {
        this.gender = gender;
        this.contact = contact;
        this.referredBy = referredBy;
    }
}
