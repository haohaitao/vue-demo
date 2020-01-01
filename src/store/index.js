import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)
const state = {
    cateId:null, //默认值为null
}

//mutations是执行方法，点击分类存储分类id
const mutations={
    save(state,n){
        state.cateId=n;
    },
}
//实时监听state值的变化(最新状态)
const getters = {
    idChange(state) {  //方法名随意,
       return state.cateId
    },
};
export default new Vuex.Store({
    state,
    mutations,
    strict: true // 严格模式，只能通过 mutation 来更改状态
  })