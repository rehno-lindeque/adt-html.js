  // Export html to a CommonJS module if exports is available
  if (typeof module !== "undefined" && module !== null)
    module.exports = html;
  return html;
})();
