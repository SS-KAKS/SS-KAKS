
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(createProxyMiddleware('../server/server.js', { target: 'http://localhost:5000/' }));
}