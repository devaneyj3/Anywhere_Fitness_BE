
exports.up = function(knex) {
  knex.schema.createTable('people', table => {
    table.increments('id')
    table.text('name')
    table.text('username')
    table.text('password')
  })
};

exports.down = function(knex) {
  return kennex.schema.dropTableifExists('people')
};
