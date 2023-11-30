// .eleventy.js

module.exports = function(eleventyConfig) {
    eleventyConfig.addLayoutAlias('base', 'layouts/base.njk');

    // Other configurations...
};

module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("styles/*");
    eleventyConfig.addPassthroughCopy("images/*");
    eleventyConfig.addPassthroughCopy("scripts/*");
  };