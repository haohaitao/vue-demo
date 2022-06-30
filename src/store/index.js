import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)
const state = {
    cateId:null, //默认值为null
    articleId:null,
    mobile_menu:false,
}

//mutations是执行方法，点击分类存储分类id
const mutations={
    save(state,n){
        state.cateId=n;
    },
    article(state,n){
        state.articleId=n;
    },
    change_menu(state,n){
        state.mobile_menu=n;
    }

}
export default new Vuex.Store({
    state,
    mutations,
    strict: true // 严格模式，只能通过 mutation 来更改状态
  })