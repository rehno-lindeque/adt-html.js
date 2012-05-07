  // Export html to a CommonJS module if exports is available
  if (typeof(exports) !== "undefined" && exports !== null)
    exports.html = html;
  return html;
})();

