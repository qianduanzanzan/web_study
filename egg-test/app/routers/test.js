'use strict';

module.exports = app => {
  const { router, controller } = app;
  router.get('/test', controller.test.test);
};
