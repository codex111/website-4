exports.grammar = require("./tmLanguage.json");
exports.grammarConfig = {};
exports.editorConfig = {
  comments: {
    lineComment: "#"
  },
  brackets: [
    ["{", "}"],
    ["[", "]"],
    ["(", ")"]
  ],
  autoClosingPairs: [
    ["{", "}"],
    ["[", "]"],
    ["(", ")"],
    { open: '"', close: '"', notIn: ["string"] },
    { open: "'", close: "'", notIn: ["string"] },
    { open: "`", close: "`", notIn: ["string"] }
  ],
  surroundingPairs: [
    ["{", "}"],
    ["[", "]"],
    ["(", ")"],
    ['"', '"'],
    ["'", "'"],
    ["`", "`"]
  ],
  folding: {
    markers: {
      start: new RegExp("^\\s*\\/\\*\\s*#region\\b\\s*(.*?)\\s*\\*\\/"),
      end: new RegExp("^\\s*\\/\\*\\s*#endregion\\b.*\\*\\/")
    }
  }
};
