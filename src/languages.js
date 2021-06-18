"use strict";

// We need to list the parsers and getters so we can load them only when necessary.
module.exports = [
  // JS
  require("./language-js"),
  // CSS
  require("./language-css"),
  // Markdown
  require("./language-markdown"),
  // HTML
  require("./language-html"),
  // YAML
  require("./language-yaml"),
];
