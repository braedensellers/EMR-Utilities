/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/patient.js":
/*!************************!*\
  !*** ./src/patient.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Patient)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Patient = /*#__PURE__*/function () {
  function Patient(firstName, lastName, dateOfBirth) {
    var _this = this;
    var mrnFirstNameCharCount = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
    _classCallCheck(this, Patient);
    _defineProperty(this, "say", function () {
      return console.log("Patient: ".concat(_this.firstName, " ").concat(_this.lastName, " - ").concat(_this.dateOfBirth.toString()));
    });
    _defineProperty(this, "sayID", function () {
      return console.log("Patient MRN: ".concat(_this.medicalRecordNumber));
    });
    _defineProperty(this, "name", function () {
      return _this.firstName + " " + _this.lastName;
    });
    _defineProperty(this, "age", function () {
      return new Date().getFullYear() - new Date(_this.dateOfBirth).getFullYear();
    });
    this.firstName = firstName.toString().trim();
    this.lastName = lastName.toString().trim();
    this.dateOfBirth = dateOfBirth;
    this.medicalRecordNumber = this.generateMedicalRecordNumber(mrnFirstNameCharCount, 4);
  }
  _createClass(Patient, [{
    key: "generateMedicalRecordNumber",
    value: function generateMedicalRecordNumber() {
      var firstNameChars = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 4;
      var lastNameChars = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 4;
      try {
        var mrnFirstName = this.firstName.substring(0, 4).fillWithCharacter("X", firstNameChars);
        var mrnLastName = this.lastName.substring(0, 4).fillWithCharacter("X", lastNameChars);
        var mrnDateOfBirth = getDateStringForMRN(new Date(this.dateOfBirth));
        return (mrnLastName + mrnFirstName + mrnDateOfBirth).toUpperCase();
      } catch (err) {
        console.error(err);
      }
    }
  }]);
  return Patient;
}();

function getDateStringForMRN(date) {
  date = new Date(date);
  var month = date.getMonth() + 1;
  var day = date.getDate();
  var year = date.getFullYear().toString().substring(2);
  return "".concat(month.toString().padStart(2, "0")).concat(day.toString().padStart(2, "0")).concat(year);
}

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
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!******************************!*\
  !*** ./src/emr-utilities.js ***!
  \******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createPatient": () => (/* binding */ createPatient)
/* harmony export */ });
/* harmony import */ var _patient_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./patient.js */ "./src/patient.js");


// Regular expressions
var regexName = /^[a-zA-Z]+ [a-zA-Z]+$/;
var regexMedicalRecordNumber = /^[a-zA-Z]+ [a-zA-Z]+$/;
String.prototype.fillWithCharacter = function (character, desiredLength) {
  var newStr = this;
  if (newStr.length < desiredLength) newStr = newStr.padEnd(desiredLength, character);
  return newStr;
};
function validate(regex, value) {
  return regex.test(value);
}
function createPatient(_firstName, _lastName, _dateOfBirth) {
  var patient = new _patient_js__WEBPACK_IMPORTED_MODULE_0__["default"](_firstName, _lastName, _dateOfBirth);
  return patient;
}
})();

/******/ })()
;
//# sourceMappingURL=emrutil.eb8edbeb066bbbbaf933.js.map