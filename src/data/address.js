/**
 * Class representing an address.
 */
export default class Address {
    /**
     * Create an address.
     * @param {string} street - The street of the address.
     * @param {string} unitNumber - The unit or suite number of the address.
     * @param {string} city - The city of the address.
     * @param {string} state - The state of the address.
     * @param {string} county - The county of the address.
     * @param {string} postalCode - The postal code of the address.
     * @param {string} country - The country of the address.
     */
    constructor(street, unitNumber, city, state, county, postalCode, country) {
        this.street = street;
        this.unitNumber = unitNumber;
        this.city = city;
        this.state = state;
        this.county = county;
        this.postalCode = postalCode;
        this.country = country;
    }

    /**
     * Gets the full address (street, unitNumber (if applicable), city, state, and postal code).
     * @returns {string} - The formatted full address.
     */
    fullAddress = () => `${street} ${unitNumber} ${city} ${state} ${postalCode}`;
}