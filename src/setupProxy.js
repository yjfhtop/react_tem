// 这里属于配置代理  建议在这里进行配置， 而不是在json 文件

const proxy = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(proxy('/api', {target: 'http://localhost:5000/'}));
};
