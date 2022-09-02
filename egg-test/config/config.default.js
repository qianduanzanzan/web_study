/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1660873834850_7804';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };
  config.security = {
    csrf: {
      enable: false
    },
    domainWhiteList: ["*"]
  };
  config.cors = {
    origin: "http://localhost:3000", //允许哪些域名可以进行接口访问.也可以使用*
    credentials: true, //允许cookie可以跨域.对应的axios的withCredentials:true。而且orgin为指定地址。
    allowMethods: "GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS"
  };

  config.mysql = {
    client: {
      host: '124.70.25.229',
      port: '3306',
      user: 'root',
      password: '123456',
      database: 'test'
    },
    app: true,
    agent: false
  }

  return {
    ...config,
    ...userConfig,
  };
};
