import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:hashtag', 'Unit | Controller | hashtag', {
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']
});

// Replace this with your real tests.
test('should grab tweets', function(assert) {

  const ctrl = this.subject()

  assert.equal(ctrl.get(this, 'tweets'), 100, 'Got 100 tweets')
})
