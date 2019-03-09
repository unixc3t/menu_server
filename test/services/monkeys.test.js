const assert = require('assert');
const app = require('../../src/app');

describe('\'monkeys\' service', () => {
  it('registered the service', () => {
    const service = app.service('monkeys');

    assert.ok(service, 'Registered the service');
  });
});
