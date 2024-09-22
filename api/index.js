const app = require('./server');

// VercelのServerless FunctionとしてExpressアプリをエクスポート
module.exports = (req, res) => {
    app(req, res);
};

