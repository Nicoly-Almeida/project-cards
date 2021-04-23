// const bcrypt = require('bcrypt');
const crypto = require('crypto');

const conn = require('../database/connection');
const saltRounds = 10;
const md5sum = crypto.createHash('md5');

async function create(data) {

  const { name, email, password } = data;

  // const hash = await bcrypt.hash(password, saltRounds);
  var hash = crypto.createHash('md5').update(password).digest('hex');

  const insertedRows = await conn('users').insert({ email: email, name: name, password: hash })

  return insertedRows;
}

async function login(data) {


  // const db = await conn();

  const { email, password } = data;

  // const hash = await bcrypt.hash(password, saltRounds);
  var hash = crypto.createHash('md5').update(password).digest('hex');
  console.log(email, hash)
  const lastID = await conn.from("users").where({ "email": email, "password": hash })
  console.log(lastID)
  // const { lastID } = await db.run(sql, [email, hash]);

  return lastID;
}



module.exports = { create, login, };
