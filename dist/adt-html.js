/*
 * adt-html.js - Algebraic Data Types for JavaScript
 * adt-html.js is free, public domain software (http://creativecommons.org/publicdomain/zero/1.0/)
 * Originally created by Rehno Lindeque of http://www.mischievousmeerkat.com
 */
var html = (function() {
"use strict";
  // Define a local copy of adt
  var html = {
    cons: adt('div', 'span', 'p'),
    eval: adt({
      _: function(attributes) {
        var el = document.createElement(this._key);
        for (var i = 0; i < arguments.length; ++i)
          // Check if the argument is a DOM node
          if (arguments[i].nodeType)
            el.appendChild(arguments[i]);
          else if (typeof arguments[i] === 'string')
            el.appendChild(document.createTextNode(arguments[i]));
        if (attributes && typeof arguments[i].nodeType === 'undefined') {
          for (var key in attributes)
            element.setAttribute(key, attributes[key]);
        }
        return el;
      }
    })
  };
  // Export html to a CommonJS module if exports is available
  if (typeof(exports) !== "undefined" && exports !== null)
    exports.html = html;
  return html;
})();

