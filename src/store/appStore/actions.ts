export default {
    ADD_ACOUNTVUEX(store: any, countVuex: Number) {
        store.commit('ADD_ACOUNTVUEX', countVuex)
    },
    SET_TOKEN(store:any,token:string){
        store.commit('SET_TOKEN', token)
    }
}
