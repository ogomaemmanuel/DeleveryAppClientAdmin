import endPointConfig from "../../config/endPoint";
import axios from "axios";
const state = {
  usersToChatWith: [],
  messageSent: false,
  chatMessages: []
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
  },
  SET_MESSAGE_HAS_BEEN_SENT(state, status) {
    state.messageSent = status;
  },
  ADD_CHAT_MESSAGE(state, newMessage) {
    state.chatMessages.push(newMessage);
  }
};
const getters = {
  usersToChatWith: state => state.usersToChatWith,
  chatMessages: state => state.chatMessages
};
const actions = {
  addUserToChatlist({ commit }, newUser) {
    commit("ADD_USER_TO_CHAT_LIST", newUser);
  },
  removeUserFromChatlist({ commit }, userId) {
    commit("REMOVE_USER_FROM_CHAT_LIST", userId);
  },
  sendChatMessage({ dispatch, commit }, outGoingMessage) {
    axios
      .post(
        `${endPointConfig.APP_END_POINT.API_HOST}/api/chat`,
        outGoingMessage
      )
      .then(({ data }) => {
        commit("SET_MESSAGE_HAS_BEEN_SENT");
        dispatch("addChatMessage", data);
      });
  },
  addChatMessage({ commit }, newChatMessage) {
    commit("ADD_CHAT_MESSAGE", newChatMessage);
  }
};
export default {
  state,
  mutations,
  getters,
  actions
};
