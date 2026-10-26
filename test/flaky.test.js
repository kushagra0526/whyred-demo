const test = require('node:test')
const assert = require('node:assert')

test('coin flip', () => {
  assert.ok(Math.random() < 0.5)
})
