  
const db = require("../database/dbConfig");

function find() {
  return db("users").select("id", "username");
}

function findBy(username) {
  return db("users").where(username);
}

function findById(id) {
  return db("users")
    .where({ id })
    .first();
}

async function add(user) {
  const [id] = await db("users").insert(user, "id");

  return findById(id);
}

module.exports = {
  add,
  find,
  findBy,
  findById,
};