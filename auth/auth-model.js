  
const db = require("../database/dbConfig");

function find() {
  return db("users");
}

function findBy(username) {
  return db("users").where(username);
}

 async function add(payload) {
   const result = db("users").insert(payload);
   return result;
}


module.exports = {
  find,
  findBy,
  add
};