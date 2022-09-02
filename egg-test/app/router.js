'use strict';
const testRouter = require('./routers/test');
/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/xxx', controller.home.aaa);

  testRouter(app)
};
