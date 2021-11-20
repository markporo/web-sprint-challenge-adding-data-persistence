//`{"resource_id":1,"resource_name":"foo","resource_description":null}`

const resources = [
    { resource_name: 'Computer', resource_description: 'box of hardware and software' },
    { resource_name: 'Microphone', resource_description: 'recording device that transmits audio signal to digital' },
    { resource_name: 'Ozone 8', resource_description: null },
    { resource_name: 'Logic Pro', resource_description: 'DAW for Music Production' },
]

exports.resources = resources

exports.seed = function (knex) {
    return knex('resources').insert(resources)
}
