import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | about/san-diego', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:about/san-diego');
    assert.ok(route);
  });
});
