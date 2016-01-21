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

var deepKeysWithIntermediate = function(obj, stack, parent, intermediate) {
  stack = stack || [];
  var keys = Object.keys(obj);

  keys.forEach(function(el) {
    //if it's a nested object
    if(isObject(obj[el]) && !isArray(obj[el])) {
      //concatenate the new parent if exist
      var p = parent ? parent + '.' + el : parent;
      //Push intermediate parent key if flag is true
      intermediate && stack.push(parent ? p:el);
      deepKeysWithIntermediate(obj[el], stack, p || el, intermediate);
    } else {
      //create and save the key
      var key = parent ? parent + '.' + el : el;
      stack.push(key)
    }
  });
  return stack
};

/**
 * @description
 * Get an object, and return an array composed of it's properties names(nested too).
 * With intermediate equals to true, we include also the intermediate parent keys into the result
 * @param obj {Object}
 * @param intermediate {Boolean}
 * @returns {Array}
 * @example
 * deepKeys({ a:1, b: { c:2, d: { e: 3 } } }) ==> ["a", "b.c", "b.d.e"]
 * @example
 * deepKeys({ b: { c:2, d: { e: 3 } } }) ==> ["b", "b.c", "b.d", "b.d.e"]
 */
module.exports = function deepKeys(obj, intermediate) {
  return deepKeysWithIntermediate(obj, [], null, intermediate);
};