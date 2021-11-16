const net = require("net");

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541,
  });

  conn.on('connect', () => {
    console.log("Successfully connected to game server");
    conn.write('Name: YHN');
  });

  conn.on('connect', () => {
    setTimeout(() => {
      conn.write('Move: up');
      // conn.write('Move: down');
      // conn.write('Move: left');
      // conn.write('Move: right');
    }, 1000);
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on('data', () => {
    console.log('you ded cuz you idled');
  });

  return conn;
};

module.exports = { connect };