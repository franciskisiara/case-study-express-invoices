const { test } = require("@japa/runner");
const sequelize = require("../../database/connection");
const User = require("../../src/models/user")(sequelize);

test.group('Invoice API', (group) => {
  // group.each.setup(async () => {
  //   await Database.beginGlobalTransaction()
  //   return () => Database.rollbackGlobalTransaction()
  // })

  test('an invoice can be created', async ({ client, expect }) => {})
})