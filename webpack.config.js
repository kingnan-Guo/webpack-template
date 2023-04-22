var baseConfig = require("./webpack.base")
var devConfig = require("./webpack.dev")
var proConfig = require("./webpack.pro")
var serConfig = require("./webpack.server")
module.exports = (env) => {
    console.log("module.exports env ==", env);
    if(env && env.prod){
        return {
            ...baseConfig,
            ...proConfig
        }
    } else if(env && env.dev) {
        return {
            ...baseConfig,
            ...devConfig
        }
    } else {
        console.log("===server===", serConfig);
        return {
            ...baseConfig,
            ...serConfig
        }
    }

}