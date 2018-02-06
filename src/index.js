const Koa = require('koa');
const _ = require('koa-route');
const cache = require('koa-cache-lite');
const api = require('./api');
const config = require('./config');

const app = new Koa();

cache.configure({
  '/api/*': 3600000, // Cache responses for an hour
}, {
  debug: false,
});
app.use(cache.middleware());

app.use(_.get('/api/installs', api.installs));
app.use(_.get('/api/updated', api.updated));
app.use(_.get('/api/models', api.models));
app.use(_.get('/api/countries', api.countries));

app.listen(config.PORT);
