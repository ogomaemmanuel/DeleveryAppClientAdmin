<template>
  <div class="message-box">
    <div class="message-box-head">
      <ChatFlyOutHeader @click.native="toggleBody"/>
    </div> 
    <div 
      :class="{'message-box-content':bodyHidden}"
      class="message-box-body">
      <ChatUserCard 
        v-for="(user,index) in users" 
        :user="user" 
        :key="index"/>
    </div>
    <div
      :class="{'message-box-content':bodyHidden}">
      <ChatFlyOutSearchInput/>
    </div>
  </div>
</template>
<script>
import ChatFlyOutSearchInput from "./ChatFlyOutSearchInput";
import ChatFlyOutHeader from "./ChatFlyOutHeader";
import ChatUserCard from "./ChatUserCard";
export default {
  components: {
    ChatFlyOutSearchInput,
    ChatFlyOutHeader,
    ChatUserCard
  },
  data() {
    return {
      bodyHidden: true,
      users: [
        {
          imageUrl: "TTT",
          userName: "Emmanuel Ogoma",
          isOnline: false
        },
        {
          imageUrl: "TTT",
          userName: "Emmanuel Ogoma",
          isOnline: true
        },
        {
          imageUrl: "TTT",
          userName: "Emmanuel Ogoma",
          isOnline: false
        },
        {
          imageUrl: "TTT",
          userName: "Emmanuel Ogoma",
          isOnline: true
        }
      ]
    };
  },
  methods: {
    toggleBody() {
      this.bodyHidden = !this.bodyHidden;
    }
  }
};
</script>

<style lang="scss">
.message-box {
  max-height: 400px;
  min-width: 400px;
  bottom: -3px;
  right: 15px;
  // border-style: solid;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.3);
  background-color: #f3f3f3;
  position: fixed;
  .message-box-head {
    position: relative;
  }
  .message-box-content {
    display: none;
  }
}
</style>
