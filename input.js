const { movements, messages } = require('./constants');

let connection;

const handleUserInput = function(key) {
  if (key === '\u0003') {
    process.exit();
  }
  
  if (Object.keys(movements).includes(key)) {
    connection.write(movements[key]);
  }

  if (Object.keys(messages).includes(key)) {
    connection.write(messages[key]);
  }
};

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

module.exports = { setupInput };