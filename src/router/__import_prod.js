//懒加载，根据文件路径，将 views/下不同文件打包成不同的js
const _import = (file) => import(
    /* webpackChunkName: "[request]" */
    `../views/${file}`
    )

export default _import
