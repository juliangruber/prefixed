/**
 * Supported prefixes.
 */

var prefixes = [
  '-webkit-', '-moz-', '-o-', '-ms-', ''
];

/**
 * Expose `prefixed`.
 */

module.exports = prefixed;

/**
 * Set a style with all the vendor prefixes.
 *
 * @param {Object} style
 * @param {String} attribute
 * @param {String} value
 */

function prefixed (style, attribute, value) {
  for (var i = 0; i < prefixes.length; i++) {
    style[prefixes[i] + attribute] = value;
  }
};

/**
 * Get a (possibly prefixed) value.
 *
 * @param {Object} style
 * @param {String} attribute
 * @return {String}
 */

prefixed.get = function (style, attribute) {
  for (var i = 0; i < prefixes.length; i++) {
    var value = style[prefixes[i] + attribute];
    if (value && value != '') return value;
  }
  return '';
};

