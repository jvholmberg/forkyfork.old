const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const path = require('path');
const express = require('express');
const config = require('./webpack.config.js');

const compiler = webpack(config);
const app = express();

app.use(webpackDevMiddleware(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath,
}));
app.use(webpackHotMiddleware(compiler, {
  log: console.log, path: '/__webpack_hmr', heartbeat: 10 * 1000, // eslint-disable-line
}));

app.use('*', (req, res) => {
  const fileName = path.join(compiler.outputPath, 'index.html');
  compiler.outputFileSystem.readFile(fileName, (err, result) => {
    res.set('content-type', 'text/html');
    res.send(result);
    res.end();
  });
});

app.listen(3000, () => {
  console.log('Listening on port 3000!'); // eslint-disable-line
});
