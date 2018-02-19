const webpack = require('webpack');
const config = require('./webpack.config.js');
const compiler = webpack(config);

const http = require('http');
const express = require('express');
const app = express();

app.use(require("webpack-dev-middleware")(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));
app.use(require("webpack-hot-middleware")(compiler, {
  log: console.log, path: '/__webpack_hmr', heartbeat: 10 * 1000
}));

app.listen(3000, function () {
  console.log('Listening on port 3000!');
});
