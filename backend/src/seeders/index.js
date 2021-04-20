const fs = require('fs');
const path = require('path');

function up() {
  const content = fs.readFileSync(path.join(__dirname, 'data.json'));
  const data = JSON.parse(content);


  for (const user of data.users) {
    User.create(user);
  }
}

module.exports = { up };