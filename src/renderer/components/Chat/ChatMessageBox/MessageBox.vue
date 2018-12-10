<template>
  <div class="chat-message-box">
    <ChatMessageBoxHeader :online-user="onlineUser.user"/>
    <div class="messages">
      <ReceivedMessage/>
      <SentMessageCard/>
      <ReceivedMessage/>
    </div>
    <MessageBoxFooter/>
  </div>
  
</template>

<script>
import ChatMessageBoxHeader from "./ChatMessageBoxHeader";
import MessageBoxFooter from "./MessageBoxFooter";
import ReceivedMessage from "./ReceivedMessageCard";
import SentMessageCard from "./SentMessageCard";
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
  .messages {
    width: 100%;
    display: flex;
    flex-flow: column;
  }
}
</style>
