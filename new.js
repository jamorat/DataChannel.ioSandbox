var options = {
  nameSpace: "dataChannel",
  redis: {host: "192.168.99.111", port: 1337},
  cookie: {name: "datachannel.io", secret: "thisismysecretkey"}
};


var server = require('http').createServer()
  , connect = require('connect')
  , RedisStore = require("connect-redis")(connect)
  , redis = require("redis");


var dc = require('dataChannel.io').listen(server, {
  nameSpace: options.nameSpace,
  redis: {port: options.redis.port, host: options.redis.host, options: {}},
  static: true
});

server.listen(8081);

/*var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}).listen(1337, '192.168.99.111');
console.log('Server running at http://192.168.99.111:1337/');*/