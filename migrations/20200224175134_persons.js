
exports.up = function(knex) {
    return knex.schema.createTable("persons", table => {
        table.integer("subjectId").primary();
        table.string("username");
        table.string("name");
        table.string("locationName");
        table.string("professionalHeadline");
        table.float ("weight");
        table.boolean ("verified");
        table.boolean ("remoter");
        table.string ("picture");
        table.timestamps(false, true);
    });  
};

exports.down = function(knex) {
  return knex.schema.dropTable("persons");
};
