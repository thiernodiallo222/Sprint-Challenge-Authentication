  
const db = require("../database/dbConfig");

function find() {
  return db("users");
}

function findBy(username) {
  return db("users").where(username);
}

 async function add(payload) {
   return db("users").insert(payload);
}

module.exports = {
  find,
  findBy,
  add
};