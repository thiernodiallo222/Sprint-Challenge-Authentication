const server = require('./api/server.js');
// const jwt = require("jsonwebtoken");
const PORT = process.env.PORT || 3300;
// if (!module.parent) {
  server.listen(PORT, () => {
    console.log(`\n=== Server listening on port ${PORT} ===\n`);
  });
// }
module.exports = server;
