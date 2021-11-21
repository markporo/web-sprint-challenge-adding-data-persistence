
exports.up = async function (knex) {
    await knex.schema
        .createTable('projects', table => {
            table.increments('project_id')
            table.text('project_name', 256)
                .notNullable()
                .unique()
            table.text('project_description', 1024)
            table.integer('project_completed')
                .notNullable()
                .defaultTo('0')
            //table.boolean('project_completed').notNullable().defaultTo(false);
        })
        .createTable('resources', table => {
            table.increments('resource_id')
            table.string('resource_name', 256)
                .notNullable()
                .unique()
            table.text('resource_description', 1024)
        })
        .createTable('tasks', table => {
            table.increments('task_id')
            table.text('task_description', 1024)
            table.text('task_notes', 1024)
            table.integer('task_completed')
            //.notNullable()
            // // foreign key that points to projects
            table.integer('project_id') // forces integer to be positive
                .unsigned()
                .notNullable()
                .references('project_id') // refers to id from other table
                .inTable('projects') //must match this table
                .onDelete('RESTRICT')
                .onUpdate('RESTRICT')
        })
        .createTable('project_resources', table => {
            table.increments('resource_assignment_id')
            // // foreign key that points to projects
            table.integer('project_id') // forces integer to be positive
                .unsigned()
                .notNullable()
                .references('project_id') // refers to id from other table
                .inTable('projects') //must match this table
                .onDelete('RESTRICT')
                .onUpdate('RESTRICT')
            // // foreign key that points to projects
            table.integer('resource_id') // forces integer to be positive
                .unsigned()
                .notNullable()
                .references('resource_id') // refers to id from other table
                .inTable('resources') //must match this table
                .onDelete('RESTRICT')
                .onUpdate('RESTRICT')
        })
};

exports.down = async function (knex) {
    await knex.schema
        .dropTableIfExists('project_resources')
        .dropTableIfExists('tasks')
        .dropTableIfExists('resources')
        .dropTableIfExists('projects')

};


// - [ ] A **project** is what needs to be done and is stored in a `projects` table with the following columns:

//   - [ ] `project_id` - primary key
//   - [ ] `project_name` - required
//   - [ ] `project_description` - optional
//   - [ ] `project_completed` - the database defaults it to `false` (integer 0) if not provided

// - [ ] A **resource** is anything needed to complete a project and is stored in a `resources` table with the following columns:

//   - [ ] `resource_id` - primary key
//   - [ ] `resource_name` - required and unique
//   - [ ] `resource_description` - optional

// - [ ] A **task** is one of the steps needed to complete a project and is stored in a `tasks` table with the following columns:

//   - [ ] `task_id` - primary key
//   - [ ] `task_description` - required
//   - [ ] `task_notes` - optional
//   - [ ] `task_completed` - the database defaults it to `false` (integer 0) if not provided
//   - [ ] `project_id` - required and points to an actual `project_id` in the `projects` table

// - [ ] A **resource assignment** connects a resource and a project, and is stored in a `project_resources` table. You decide what columns to use.

// -resource_assignment_id
// -project_id - foreign key
// -resource_id - foreign key
