const changeCase = require("change-case");
module.exports = {
  helpers: {
    toName: (s) =>
      changeCase.pascal(s.replace("component-", "").replace("style-", "")),
  },
};
