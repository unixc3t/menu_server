const recipes = require('./recipe/recipe.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(recipes);
};
