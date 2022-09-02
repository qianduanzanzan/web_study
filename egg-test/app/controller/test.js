'use strict';

const Controller = require('egg').Controller;

class TestController extends Controller {
  async test() {
    const { ctx } = this;
    const data = await this.service.test.selectAll();
    ctx.body = data
  }
}

module.exports = TestController;
