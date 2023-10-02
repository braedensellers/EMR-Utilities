/**
 * A class representing promotion methods.
 */
export default class Promotions {
    /**
     * Create a list of preferred promotions.
     */
    constructor(methods = ["none"]) {
        this.methods = [];
        methods.forEach(method => {
            this.addMethod(method);
        });
    }

    /**
     * Adds a promotion method to the list.
     * @param {string} method - The promotion method to add.
     */
    addMethod(method) {
        if(this.isValidMethod(method))
            this.methods.push(method);
        else
            console.error("Invalid promotion method.");
    }

    /**
     * Removes all methods in the list.
     */
    clearMethods() {
        this.methods = [];
    }

    /**
     * Checks if the method is a valid promotion method.
     * @param {string} method - The promotion method.
     * @returns {bool} Whether or not the method is valid.
     */
    isValidMethod(method) {
        const validMethods = ["none", "email", "text", "mail"];
        return validMethods.includes(method.toLowerCase());
    }
}