var EMRUtilities;
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/medication.js":
/*!***************************!*\
  !*** ./src/medication.js ***!
  \***************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "formatMedicationsForEmr": () => (/* binding */ formatMedicationsForEmr)
/* harmony export */ });
/* module decorator */ module = __webpack_require__.hmd(module);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * Class representing a medication.
 */
var Medication = /*#__PURE__*/_createClass(
/**
 * Create a medication.
 * @param {string} name - The name of the medication.
 * @param {string} reason - The reason for taking this medication.
 */
function Medication(name, reason) {
  var _this = this;
  _classCallCheck(this, Medication);
  /**
   * Prints the medication's name and reason.
   */
  _defineProperty(this, "say", function () {
    return console.log("Medication: ".concat(_this.name, ": ").concat(_this.reason));
  });
  this.name = name.toString().trim();
  this.reason = reason.toString().trim();
});
/**
 * Formats an array of medication objects for usage in the EMR.
 * @param {Medication[]} medications - An array of medication objects.
 * @returns {string} The formatted string of medication objects.
 */
function formatMedicationsForEmr(medications) {
  var formattedStrings = medications.map(function (medicationData) {
    return "".concat(medicationData.medication, ":").concat(medicationData.reason);
  });
  return formattedStrings.join(',');
}
module.exports = {
  Medication: Medication
};
window.Medication = Medication;

/***/ }),

/***/ "./src/patient.js":
/*!************************!*\
  !*** ./src/patient.js ***!
  \************************/
/***/ ((module) => {

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * Class representing a patient.
 */
var Patient = /*#__PURE__*/function () {
  /**
   * Create a patient.
   * @param {string} firstName - The patient's first name.
   * @param {string} lastName - The patient's last name.
   * @param {string} dateOfBirth - The patient's date of birth.
   * @param {number} idFirstNameCount - The number of characters of the first name to use for the patient's ID.
   * @param {number} idLastNameCount - The number of characters of the last name to use for the patient's ID.
   */
  function Patient(firstName, lastName, dateOfBirth) {
    var _this = this;
    var idFirstNameCount = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
    var idLastNameCount = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 4;
    _classCallCheck(this, Patient);
    /**
     * Prints the patient's full name and date of birth to the console. For debugging.
     */
    _defineProperty(this, "say", function () {
      return console.log("Patient: ".concat(_this.firstName, " ").concat(_this.lastName, " - ").concat(_this.dateOfBirth.toString()));
    });
    /**
     * Prints the patient's ID to the console. For debugging.
     */
    _defineProperty(this, "sayId", function () {
      return console.log("Patient ID: ".concat(_this.id));
    });
    /**
     * Gets the patient's full name.
     * @returns {string} The patient's full name.
     */
    _defineProperty(this, "name", function () {
      return _this.firstName + " " + _this.lastName;
    });
    /**
     * Get's the patient's age.
     * @returns {number} The patient's age.
     */
    _defineProperty(this, "age", function () {
      return new Date().getFullYear() - new Date(_this.dateOfBirth).getFullYear();
    });
    this.firstName = firstName.toString().trim();
    this.lastName = lastName.toString().trim();
    this.dateOfBirth = new Date(dateOfBirth);
    this.id = this.generateId(idFirstNameCount, idLastNameCount);
  }
  _createClass(Patient, [{
    key: "generateId",
    value:
    /**
     * Generates the patient's ID. This is done automatically when creating a new patient.
     * @param {number} firstNameChars - The number of characters from the patient's first name to include in the ID.
     * @param {number} lastNameChars - The number of characters from the patient's last name to include in the ID.
     * @returns {string} The patient's generated ID.
     */
    function generateId() {
      var firstNameChars = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 4;
      var lastNameChars = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 4;
      var sanitizedFirstName = this.firstName.replace(/[^a-zA-Z]/g, '').toUpperCase();
      var sanitizedLastName = this.lastName.replace(/[^a-zA-Z]/g, '').toUpperCase();
      var truncatedFirstName = sanitizedFirstName.slice(0, firstNameChars).padEnd(firstNameChars, 'X');
      var truncatedLastName = sanitizedLastName.slice(0, lastNameChars).padEnd(lastNameChars, 'X');
      var formattedDateOfBirth = formatDateStringForId(this.dateOfBirth);
      var newId = "".concat(truncatedLastName).concat(truncatedFirstName).concat(formattedDateOfBirth);
      return newId;
    }
  }]);
  return Patient;
}();
/**
 * Formats a date into the expected format for the patient's id. MMDDYY
 * @param {date} date - The date to format.
 * @returns {string} The formatted date for the patient's ID.
 */
function formatDateStringForId(date) {
  var dateParts = dateString.split('/');
  if (dateParts.length !== 3) throw new Error('Invalid date format. The input should be in the format mm/dd/yyyy.');
  var month = dateParts[0].padStart(2, '0');
  var day = dateParts[1].padStart(2, '0');
  var year = dateParts[2].slice(-2);
  return month + day + year;
}
module.exports = {
  Patient: Patient
};
window.Patient = Patient;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/harmony module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.hmd = (module) => {
/******/ 			module = Object.create(module);
/******/ 			if (!module.children) module.children = [];
/******/ 			Object.defineProperty(module, 'exports', {
/******/ 				enumerable: true,
/******/ 				set: () => {
/******/ 					throw new Error('ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: ' + module.id);
/******/ 				}
/******/ 			});
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!******************************!*\
  !*** ./src/emr-utilities.js ***!
  \******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createMedication": () => (/* binding */ createMedication),
/* harmony export */   "createPatient": () => (/* binding */ createPatient)
/* harmony export */ });
/* harmony import */ var _patient_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./patient.js */ "./src/patient.js");
/* harmony import */ var _patient_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_patient_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _medication_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./medication.js */ "./src/medication.js");



var regexName = /^[a-zA-Z]+ [a-zA-Z]+$/;
var regexMedicalRecordNumber = /^[a-zA-Z]+ [a-zA-Z]+$/;
function validate(regex, value) {
  return regex.test(value);
}
function createPatient(_firstName, _lastName, _dateOfBirth) {
  return new (_patient_js__WEBPACK_IMPORTED_MODULE_0___default())(_firstName, _lastName, _dateOfBirth);
}
function createMedication(_medication, _reason) {
  return new _medication_js__WEBPACK_IMPORTED_MODULE_1__["default"](_medication, _reason);
}
})();

EMRUtilities = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=emrutil.53658c38cf4c534c3025.js.map