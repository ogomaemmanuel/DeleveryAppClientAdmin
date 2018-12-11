<template>
  <div class="chat-message-box">
    <ChatMessageBoxHeader 
      :show-body.sync="showBody" 
      :online-user="onlineUser.user"/>
    <div 
      v-if="showBody" 
      class="chat-message-box-body">
      <div class="messages">
        <div 
          v-for="filtedMessage in fiteredChatMessages" 
          :key="filtedMessage.id">
          <ReceivedMessage 
            v-if="filtedMessage.toId==auth.userDetails.id" 
            :message="filtedMessage"/>
          <SentMessageCard 
            v-if="filtedMessage.fromId==auth.userDetails.id" 
            :message="filtedMessage"/>
        </div>
      </div>
      <MessageBoxFooter
        :online-user="onlineUser.user"/>
    </div>
  </div>
  
</template>

<script>
import ChatMessageBoxHeader from "./ChatMessageBoxHeader";
import MessageBoxFooter from "./MessageBoxFooter";
import ReceivedMessage from "./ReceivedMessageCard";
import SentMessageCard from "./SentMessageCard";
import { mapGetters } from "vuex";
export default {
  components: {
    ChatMessageBoxHeader,
    MessageBoxFooter,
    ReceivedMessage,
    SentMessageCard
  },
  props: {
    onlineUser: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      showBody: true
    };
  },
  computed: {
    ...mapGetters(["chatMessages", "auth"]),
    fiteredChatMessages() {
      let vm = this;
      return this.chatMessages
        .filter(message => {
          return (
            (message.toId == vm.onlineUser.user.id &&
              message.fromId == vm.auth.userDetails.id) ||
            (message.toId == vm.auth.userDetails.id &&
              message.fromId == vm.onlineUser.user.id)
          );
        })
        .sort(function(messageA, messageB) {
          return messageA.updatedAt == messageB.updatedAt
            ? 0
            : +(messageA.updatedAt > messageB.updatedAt) || -1;
        });
    }
  }
};
</script>
<style lang="scss">
.chat-message-box {
  background-color: #ffffff;
  min-width: 400px;
  // max-height: 816px;
  border-top-right-radius: 10px;
  position: relative;
  padding-top: 0px;
  border-top-left-radius: 10px;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.3);
  .chat-message-box-body {
    .messages {
      width: 100%;
      display: flex;
      flex-flow: column;
    }
  }
}
</style>
