var baseConfig = require("./webpack.base.config")
// var devConfig = require("./webpack.dev")
// var proConfig = require("./webpack.pro")
var serConfig = require("./webpack.server.config")
var libConfig = require("./webpack.lib.config")

module.exports = (env) => {
    console.log("module.exports env ==", env);
    if(env && env.prod){
        const config = {
            ...baseConfig,
        }
        return config
    } else if(env && env.dev) {
        // const config = {
        //     ...baseConfig,
        //     ...devConfig
        // }
        // config.plugins = [...baseConfig.plugins, ...devConfig.plugins]
        // config.plugins = [...baseConfig.plugins, ...devConfig.plugins]
        // return config
    } else if(env && env.lib)  {
        console.log("===lib===", serConfig);
        const config = {
            ...baseConfig,
            ...libConfig
        }
        console.log("lib config =", config);
        return config
    } else  {
        console.log("===server===", serConfig);
        const config = {
            ...baseConfig,
            ...serConfig
        }
        config.plugins = [...baseConfig.plugins, ...serConfig.plugins]
        return config
    }

}