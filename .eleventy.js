
module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("styles/*");
    eleventyConfig.addPassthroughCopy("images/*");
    eleventyConfig.addPassthroughCopy("scripts/*");
    
    return { 
      passthroughFileCopy:true,
        dir:{
          input: "src",
          output: "_site",
          include: "include"
        }
    }
  };