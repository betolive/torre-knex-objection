const personsData = require('../data/persons');

exports.seed = function(knex, Promise) {
  return knex('persons')
    .del()
    .then(() => {
      personsData.forEach ((person) => {
        console.log ("store: " + person.subjectId);
        knex('persons').insert({
          subjectId: person.subjectId,
          username: person.username,
          name: person.name,
          locationName: person.locationName,
          professionalHeadline: person.professionalHeadline,
          weight: person.weight,
          verified: person.verified,
          remoter: person.remoter,
          picture: person.picture
        }).then(function(ret){
          res.json({ success: true, message: 'ok'/*,ret:ret*/});
        })
      })
    })
};
