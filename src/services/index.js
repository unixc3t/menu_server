const recipes = require('./recipe/recipe.service.js');
const users = require('./user/user.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(recipes);
  app.configure(users);
};
