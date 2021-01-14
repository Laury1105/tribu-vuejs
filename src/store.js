import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

import getDefaultState from "@/store/state";
import mutations from "@/store/mutations";

export default new Vuex.Store({
    state: getDefaultState(),
    mutations,
    
});