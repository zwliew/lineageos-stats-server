const stats = require('lineageos-stats');

/**
 * Responds with the total installs.
 * @param {Object} ctx The Koa context.
 */
async function installs(ctx) {
  const installs = await stats.getTotalInstalls();
  ctx.body = installs;
}

/**
 * Responds with the time last updated.
 * @param {Object} ctx The Koa context.
 */
async function updated(ctx) {
  const updated = await stats.getLastUpdated();
  ctx.body = updated;
}

/**
 * Responds with the active models.
 * @param {Object} ctx The Koa context.
 */
async function models(ctx) {
  const models = await stats.getModels();
  ctx.body = models;
}

/**
 * Responds with the active countries
 * @param {Object} ctx The Koa context.
 */
async function countries(ctx) {
  const countries = await stats.getCountries();
  ctx.body = countries;
}

module.exports = {
  installs,
  updated,
  models,
  countries,
};
