/**
 * 随着浏览器的刷新，存储在auex中的数据会被自动清除。vuex中的数据持久化，实现vuex数据同步到本地。
 * 系统非公开信息，同步保存在session中，退出应被清除
 * 出于安全考虑，store中的数据按使用类别，应存储在不同类型的本地存储介质中，建议手动编写处理方法，虽然麻烦，但自由度高。
 * sessionStorage.setItem("token", token);
 * sessionStorage.removeItem("token");
 */
/**
 * 初始值。
 * sessionStorage不为空时，填写该值
 * @param key
 * @return {string}
 */
function parseInitState(key:any) {
    return sessionStorage.getItem(key) !=null? sessionStorage.getItem(key) : "";
}
export default {
    countVuex: 0,
}
