import { module, test } from 'qunit';
import { setupTest } from 'frontend-auth-demo/tests/helpers';

module('Unit | Route | books/show', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:books/show');
    assert.ok(route);
  });
});
