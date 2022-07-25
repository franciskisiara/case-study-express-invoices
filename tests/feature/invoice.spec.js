import { test } from '@japa/runner'

test.group('', (_) => {
  test('add two numbers', ({ assert }) => {
    assert.equal(2 + 2, 4)
  })
})