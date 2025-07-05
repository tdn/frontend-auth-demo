import { module, test } from 'qunit';
import { setupTest } from 'frontend-auth-demo/tests/helpers';

module('Unit | Controller | books/show', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let controller = this.owner.lookup('controller:books/show');
    assert.ok(controller);
  });
});
