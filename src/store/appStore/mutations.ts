function parseInitState(key:any) {
    return sessionStorage.setItem("token",key)
}
export default {
    ADD_ACOUNTVUEX(state: any, countVuex: Number) {
        state.countVuex = countVuex
    },
    SET_TOKEN(state: { token: string },token:string){
      state.token = token;
      parseInitState(token);
    }
}
