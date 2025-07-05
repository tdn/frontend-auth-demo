import { module, test } from 'qunit';
import { setupRenderingTest } from 'frontend-auth-demo/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | application-header', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<ApplicationHeader />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <ApplicationHeader>
        template block text
      </ApplicationHeader>
    `);

    assert.dom().hasText('template block text');
  });
});
