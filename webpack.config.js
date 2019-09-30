var path = require("path");
module.exports = {
    devServer: {
        contentBase: path.resolve(__dirname + '/src'),
        port: 9000
    }
};