const projects = [
    { project_name: 'Lambda Sprint', 'project_description': 'End of Sprint Assignment Due Sunday Night', 'project_completed': 0 },
    { project_name: 'Pandora Liners', 'project_description': 'Record Commercial Liners for Between Pandora Songs for TLATW', 'project_completed': 0 },
    { project_name: 'Finish Mastering A New Light', 'project_description': null, 'project_completed': 0 },
    { project_name: 'Get First Mix of Love and Lore', 'project_description': 'Open Logic file and access what needs done then get to work', 'project_completed': 0 },
]

exports.projects = projects

exports.seed = function (knex) {
    return knex('projects').insert(projects)
}


//   - [ ] A **project** is what needs to be done and is stored in a `projects` table with the following columns:

//   - [ ] `project_id` - primary key
//   - [ ] `project_name` - required
//   - [ ] `project_description` - optional
//   - [ ] `project_completed` - the database defaults it to `false` (integer 0) if not provided