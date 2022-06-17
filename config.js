const {cp, rm} = require('shelljs');
console.log("environment variables is", process.env.VUE_APP_NODESHL)
rm('-rf',['./dist','./dist.*']);
//路由
if (process.env.VUE_APP_NODESHL === 'PROD') {
    cp('-R', './src/router/__import_prod.js', './src/router/index.js')
}else {
    cp('-R', './src/router/__import_dev.js', './src/router/index.js')
}
