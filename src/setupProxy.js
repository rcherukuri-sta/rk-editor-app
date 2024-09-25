const { createProxyMiddleware } = require('http-proxy-middleware');
const package = require('../package.json');

module.exports = function(app) {
  app.use(
    '/media/resources',
    createProxyMiddleware({
      target: package.proxy,
      changeOrigin: true,
    })
  );
}
