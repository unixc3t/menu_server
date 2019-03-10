const assert = require('assert');
const app = require('../../src/app');

describe('recipes service', () => {
  it('registered the service', () => {
    const service = app.service('recipes');

    assert.ok(service, 'Registered the service');
  });

  it('get all data',async ()=>{
    let s = app.service('recipes');
    let data = await s.find();
    assert.ok(data,'get all recipes');
  });
});
