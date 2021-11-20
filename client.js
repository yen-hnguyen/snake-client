const net = require("net");
const { IP, PORT, NAME } = require('./constants');

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  conn.on('connect', () => {
    console.log("Successfully connected to game server");
    conn.write(NAME);
    conn.write('Say: hello!');
  });

  conn.on('data', () => {
    console.log('you ded cuz you idled');
  });
  
  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

module.exports = { connect };