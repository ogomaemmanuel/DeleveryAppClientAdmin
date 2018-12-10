const state = {
  usersToChatWith: []
};
const mutations = {
  ADD_USER_TO_CHAT_LIST(state, newUser) {
    if (!state.usersToChatWith.find(user => user.id == newUser.id)) {
      state.usersToChatWith.push(newUser);
    }
  }
};
const getters = {
  usersToChatWith: state => state.usersToChatWith
};
const actions = {
  addUserToChatlist({ commit }, newUser) {
    commit("ADD_USER_TO_CHAT_LIST", newUser);
  }
};
export default {
  state,
  mutations,
  getters,
  actions
};
