const expect = require('chai').expect;
const feathers = require('@feathersjs/feathers');
const process = require('../../src/hooks/process');

describe('\'process\' hook', () => {
  let app;

  beforeEach(() => {
    app = feathers();

    app.use('/recipes', {
      async create(data) {
        return {data};
      }
    });

    app.service('recipes').hooks({
      before: process()
    });
  });

  it('process create hook', async () => {
    const result = await app.service('recipes').create(
      {
        name: 'e',
        ingredients: ['Brocoli', 'Olive oil'],
        directions: 'Cook for 10 minuties'
      });
    expect(result.data).to.have.property('createAt');
  });
});
