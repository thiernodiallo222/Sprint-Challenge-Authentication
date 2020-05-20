
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { username: 'rowValue1' , password: 'Password1'},
        { username: 'rowValue2' , password: 'Password2'},
        { username: 'rowValue3', password: 'Password3' },
        { username: 'rowValue4' , password: 'Password4'},
        { username: 'rowValue5' , password: 'Password5'},
        { username: 'rowValue6' , password: 'Password6'},
        { username: 'rowValue7', password: 'Password7' },
        { username: 'rowValue8' , password: 'Password8'},
        { username: 'rowValue9' , password: 'Password9'},
       { username: 'rowValue10' , password: 'Password10'},
      ]);
    });
};
