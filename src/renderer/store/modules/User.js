import EndPoint from "../../config/endPoint";
import axios from "axios";
import router from "../../router/index";
const state = {
  auth: {}
};
const mutations = {
  SET_AUTH(state, newAuth) {
    state.auth = newAuth;
  }
};
const getters = {
  auth: state => state.auth
};
const actions = {
  login(store, userCredetials) {
    axios
      .post(
        `${EndPoint.APP_END_POINT.API_HOST}/api/account/login`,
        userCredetials
      )
      .then(({ data }) => {
        store.commit("SET_AUTH", data);
        router.push("/home");
      });
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};
