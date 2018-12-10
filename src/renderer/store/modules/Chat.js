const state = {
  usersToChatWith: []
};
const mutations = {
  ADD_USER_TO_CHAT_LIST(state, newUser) {
    if (!state.usersToChatWith.find(user => user.id == newUser.id)) {
      state.usersToChatWith.push(newUser);
    }
  },
  REMOVE_USER_FROM_CHAT_LIST(state, userId) {
    state.usersToChatWith = state.usersToChatWith.filter(
      userToChatWith => userToChatWith.user.id !== userId
    );
  }
};
const getters = {
  usersToChatWith: state => state.usersToChatWith
};
const actions = {
  addUserToChatlist({ commit }, newUser) {
    commit("ADD_USER_TO_CHAT_LIST", newUser);
  },
  removeUserFromChatlist({ commit }, userId) {
    console.log("hrhrh");
    commit("REMOVE_USER_FROM_CHAT_LIST", userId);
  }
};
export default {
  state,
  mutations,
  getters,
  actions
};
