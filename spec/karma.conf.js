module.exports = function( config ) {
  config.set({
    browsers: ["Chrome"],
    frameworks: ["jasmine"],
    files: ["build/*spec.js"]
  });
};