import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | about/orange-county', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:about/orange-county');
    assert.ok(route);
  });
});
