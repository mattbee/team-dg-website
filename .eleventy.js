require('dotenv').config();
const slugify = require("slugify");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("js");
  eleventyConfig.addFilter("slug", (input) => {
    const options = {
      replacement: "-",
      remove: /[&,+()$~%.'":*?<>{}]/g,
      lower: true
    };
    return slugify(input, options);
  });
};
