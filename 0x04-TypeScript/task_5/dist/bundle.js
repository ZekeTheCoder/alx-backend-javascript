/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/main.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/main.ts":
/*!********************!*\
  !*** ./js/main.ts ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

// Function to sum MajorCredits
function sumMajorCredits(subject1, subject2) {
    var totalCredits = subject1.credits + subject2.credits; // Calculate total
    console.log("Summing Major Credits: " + subject1.credits + " + " + subject2.credits + " = " + totalCredits);
    return {
        credits: totalCredits,
        _MajorCreditsBrand: undefined,
    };
}
// Function to sum MinorCredits
function sumMinorCredits(subject1, subject2) {
    var totalCredits = subject1.credits + subject2.credits;
    console.log("Summing Minor Credits: " + subject1.credits + " + " + subject2.credits + " = " + totalCredits);
    return {
        credits: totalCredits,
        _MinorCreditsBrand: undefined,
    };
}
// Test implementation
var major1 = { credits: 3, _MajorCreditsBrand: undefined };
var major2 = { credits: 4, _MajorCreditsBrand: undefined };
var minor1 = { credits: 2, _MinorCreditsBrand: undefined };
var minor2 = { credits: 1, _MinorCreditsBrand: undefined };
var majorSum = sumMajorCredits(major1, major2);
var minorSum = sumMinorCredits(minor1, minor2);
console.log(majorSum);
console.log(minorSum);


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vanMvbWFpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUN2RUEsK0JBQStCO0FBQy9CLFNBQVMsZUFBZSxDQUFDLFFBQXNCLEVBQUUsUUFBc0I7SUFDckUsSUFBTSxZQUFZLEdBQUcsUUFBUSxDQUFDLE9BQU8sR0FBRyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsa0JBQWtCO0lBQzVFLE9BQU8sQ0FBQyxHQUFHLENBQUMsNEJBQTBCLFFBQVEsQ0FBQyxPQUFPLFdBQU0sUUFBUSxDQUFDLE9BQU8sV0FBTSxZQUFjLENBQUMsQ0FBQztJQUNsRyxPQUFPO1FBQ0wsT0FBTyxFQUFFLFlBQVk7UUFDckIsa0JBQWtCLEVBQUUsU0FBUztLQUM5QixDQUFDO0FBQ0osQ0FBQztBQUVELCtCQUErQjtBQUMvQixTQUFTLGVBQWUsQ0FBQyxRQUFzQixFQUFFLFFBQXNCO0lBQ3JFLElBQU0sWUFBWSxHQUFHLFFBQVEsQ0FBQyxPQUFPLEdBQUcsUUFBUSxDQUFDLE9BQU8sQ0FBQztJQUN6RCxPQUFPLENBQUMsR0FBRyxDQUFDLDRCQUEwQixRQUFRLENBQUMsT0FBTyxXQUFNLFFBQVEsQ0FBQyxPQUFPLFdBQU0sWUFBYyxDQUFDLENBQUM7SUFDbEcsT0FBTztRQUNMLE9BQU8sRUFBRSxZQUFZO1FBQ3JCLGtCQUFrQixFQUFFLFNBQVM7S0FDOUIsQ0FBQztBQUNKLENBQUM7QUFFRCxzQkFBc0I7QUFDdEIsSUFBTSxNQUFNLEdBQWlCLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxrQkFBa0IsRUFBRSxTQUFTLEVBQUUsQ0FBQztBQUMzRSxJQUFNLE1BQU0sR0FBaUIsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLGtCQUFrQixFQUFFLFNBQVMsRUFBRSxDQUFDO0FBQzNFLElBQU0sTUFBTSxHQUFpQixFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsa0JBQWtCLEVBQUUsU0FBUyxFQUFFLENBQUM7QUFDM0UsSUFBTSxNQUFNLEdBQWlCLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxrQkFBa0IsRUFBRSxTQUFTLEVBQUUsQ0FBQztBQUUzRSxJQUFNLFFBQVEsR0FBRyxlQUFlLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQ2pELElBQU0sUUFBUSxHQUFHLGVBQWUsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDakQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUN0QixPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vanMvbWFpbi50c1wiKTtcbiIsIi8vIE1ham9yQ3JlZGl0cyBhbmQgTWlub3JDcmVkaXRzIGludGVyZmFjZXNcbmludGVyZmFjZSBNYWpvckNyZWRpdHMge1xuICBjcmVkaXRzOiBudW1iZXI7XG4gIF9NYWpvckNyZWRpdHNCcmFuZDogdm9pZDsgLy8gQnJhbmQgcHJvcGVydHkgZm9yIG5vbWluYWwgdHlwaW5nXG59XG5cbmludGVyZmFjZSBNaW5vckNyZWRpdHMge1xuICBjcmVkaXRzOiBudW1iZXI7XG4gIF9NaW5vckNyZWRpdHNCcmFuZDogdm9pZDsgXG59XG5cbi8vIEZ1bmN0aW9uIHRvIHN1bSBNYWpvckNyZWRpdHNcbmZ1bmN0aW9uIHN1bU1ham9yQ3JlZGl0cyhzdWJqZWN0MTogTWFqb3JDcmVkaXRzLCBzdWJqZWN0MjogTWFqb3JDcmVkaXRzKTogTWFqb3JDcmVkaXRzIHtcbiAgY29uc3QgdG90YWxDcmVkaXRzID0gc3ViamVjdDEuY3JlZGl0cyArIHN1YmplY3QyLmNyZWRpdHM7IC8vIENhbGN1bGF0ZSB0b3RhbFxuICBjb25zb2xlLmxvZyhgU3VtbWluZyBNYWpvciBDcmVkaXRzOiAke3N1YmplY3QxLmNyZWRpdHN9ICsgJHtzdWJqZWN0Mi5jcmVkaXRzfSA9ICR7dG90YWxDcmVkaXRzfWApO1xuICByZXR1cm4ge1xuICAgIGNyZWRpdHM6IHRvdGFsQ3JlZGl0cyxcbiAgICBfTWFqb3JDcmVkaXRzQnJhbmQ6IHVuZGVmaW5lZCwgLy8gTWFpbnRhaW4gdGhlIGJyYW5kXG4gIH07XG59XG5cbi8vIEZ1bmN0aW9uIHRvIHN1bSBNaW5vckNyZWRpdHNcbmZ1bmN0aW9uIHN1bU1pbm9yQ3JlZGl0cyhzdWJqZWN0MTogTWlub3JDcmVkaXRzLCBzdWJqZWN0MjogTWlub3JDcmVkaXRzKTogTWlub3JDcmVkaXRzIHtcbiAgY29uc3QgdG90YWxDcmVkaXRzID0gc3ViamVjdDEuY3JlZGl0cyArIHN1YmplY3QyLmNyZWRpdHM7XG4gIGNvbnNvbGUubG9nKGBTdW1taW5nIE1pbm9yIENyZWRpdHM6ICR7c3ViamVjdDEuY3JlZGl0c30gKyAke3N1YmplY3QyLmNyZWRpdHN9ID0gJHt0b3RhbENyZWRpdHN9YCk7ICBcbiAgcmV0dXJuIHtcbiAgICBjcmVkaXRzOiB0b3RhbENyZWRpdHMsXG4gICAgX01pbm9yQ3JlZGl0c0JyYW5kOiB1bmRlZmluZWQsXG4gIH07XG59XG5cbi8vIFRlc3QgaW1wbGVtZW50YXRpb25cbmNvbnN0IG1ham9yMTogTWFqb3JDcmVkaXRzID0geyBjcmVkaXRzOiAzLCBfTWFqb3JDcmVkaXRzQnJhbmQ6IHVuZGVmaW5lZCB9O1xuY29uc3QgbWFqb3IyOiBNYWpvckNyZWRpdHMgPSB7IGNyZWRpdHM6IDQsIF9NYWpvckNyZWRpdHNCcmFuZDogdW5kZWZpbmVkIH07XG5jb25zdCBtaW5vcjE6IE1pbm9yQ3JlZGl0cyA9IHsgY3JlZGl0czogMiwgX01pbm9yQ3JlZGl0c0JyYW5kOiB1bmRlZmluZWQgfTtcbmNvbnN0IG1pbm9yMjogTWlub3JDcmVkaXRzID0geyBjcmVkaXRzOiAxLCBfTWlub3JDcmVkaXRzQnJhbmQ6IHVuZGVmaW5lZCB9O1xuXG5jb25zdCBtYWpvclN1bSA9IHN1bU1ham9yQ3JlZGl0cyhtYWpvcjEsIG1ham9yMik7XG5jb25zdCBtaW5vclN1bSA9IHN1bU1pbm9yQ3JlZGl0cyhtaW5vcjEsIG1pbm9yMik7XG5jb25zb2xlLmxvZyhtYWpvclN1bSk7XG5jb25zb2xlLmxvZyhtaW5vclN1bSk7XG4iXSwic291cmNlUm9vdCI6IiJ9