'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }
  async aaa() {
    const { ctx } = this;
    ctx.body = 'xxxxx';
  }
}

module.exports = HomeController;
