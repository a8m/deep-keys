'use strict';

/**
 * @description
 * returns {boolean} True if `value` is an `Object` but not `null`
 * @param value
 * @returns {boolean}
 */
function isObject(value) {
  return value !== null && typeof value === 'object';
}

/**
 * @description
 * Determines if a reference is an `Array`.
 * @param {*} value Reference to check.
 * @returns {boolean} True if `value` is an `Array`.
 */
var isArray = Array.isArray;

/**
 * @description
 * Get an object, and return an array composed of it's properties names(nested too).
 * @param obj {Object}
 * @param stack {Array}
 * @param parent {String}
 * @returns {Array}
 * @example
 * parseKeys({ a:1, b: { c:2, d: { e: 3 } } }) ==> ["a", "b.c", "b.d.e"]
 */
module.exports = function deepKeys(obj, stack, parent) {
  stack = stack || [];
  var keys = Object.keys(obj);

  keys.forEach(function(el) {
    //if it's a nested object
    if(isObject(obj[el]) && !isArray(obj[el])) {
      //concatenate the new parent if exist
      var p = parent ? parent + '.' + el : parent;
      deepKeys(obj[el], stack, p || el);
    } else {
      //create and save the key
      var key = parent ? parent + '.' + el : el;
      stack.push(key)
    }
  });
  return stack
};