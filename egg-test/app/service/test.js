'use strict';

const Service = require('egg').Service;

class TestService extends Service {
  index() {
    return '最喜欢月月了';
  }
  async selectAll(){
    const lists = await this.app.mysql.select('table1')
    return {
        data: lists
    }
  }
}

module.exports = TestService;
