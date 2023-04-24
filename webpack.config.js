var baseConfig = require("./webpack.base")
var devConfig = require("./webpack.dev")
var proConfig = require("./webpack.pro")
var serConfig = require("./webpack.server")
var dllConfig = require("./webpack.dll.config")

module.exports = (env) => {
    console.log("module.exports env ==", env);
    if(env && env.prod){
        const config = {
            ...baseConfig,
            ...proConfig
        }
        config.plugins = [...baseConfig.plugins, ...proConfig.plugins]
        return config
    } else if(env && env.dev) {
        const config = {
            ...baseConfig,
            ...devConfig
        }
        config.plugins = [...baseConfig.plugins, ...devConfig.plugins]
        config.plugins = [...baseConfig.plugins, ...devConfig.plugins]
        return config
    } else if(env && env.dll)  {
        console.log("===dll===", serConfig);
        const config = {
            ...baseConfig,
            ...dllConfig
        }
        config.plugins = [...baseConfig.plugins, ...dllConfig.plugins]
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