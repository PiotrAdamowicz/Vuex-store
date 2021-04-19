import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

const access_key = "31417285af16596aeed9e5a3d3e2e460";
const url = "latest";
// const start_date =

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    data: [],
  },
  mutations: {
    SET_DATA(state, paylode) {
      let res = [];
      console.log(paylode);
      for (let i in paylode) {
        res.push({ [i]: paylode[i] });
      }
      console.log(res);
      state.data = res;
    },
  },
  actions: {
    getData({ commit }) {
      axios
        .get(
          `http://api.exchangeratesapi.io/v1/${url}?access_key=${access_key}`
        )
        .then((res) => {
          commit("SET_DATA", res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  getters: {
    getData: (state) => state.data,
  },
});
