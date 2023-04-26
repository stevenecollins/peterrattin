const eleventySass = require("@11tyrocks/eleventy-plugin-sass-lightningcss");
const { EleventyHtmlBasePlugin } = require("@11ty/eleventy");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(eleventySass);
  eleventyConfig.addPlugin(EleventyHtmlBasePlugin);
  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);
  eleventyConfig.addPassthroughCopy('./src/assets');
  eleventyConfig.addWatchTarget("./src/js/*");
  eleventyConfig.addPassthroughCopy('./src/js/**/*');

  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};
