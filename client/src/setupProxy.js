const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "http://ec2-52-78-9-158.ap-northeast-2.compute.amazonaws.com/",
      changeOrigin: true,
    })
  );
};
