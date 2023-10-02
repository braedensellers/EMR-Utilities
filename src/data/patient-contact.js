import { Address } from './address';
import { Promotions } from './promotions';

/**
 * Class representing a patient's contact info.
 */
export default class PatientContact {
    /**
     * Create a patient contact.
     * @param {Address} address - The patient's home address.
     * @param {string} phone - The patient's street address.
     * @param {string} email - The patient's unit or suite number.
     * @param {Promotions} promotions - The patient's preferred promotion methods.
     */
    constructor(address, phone, email, promotions) {
        this.address = address;
        this.phone = phone;
        this.email = email;
        this.promotions = promotions;
    }
}