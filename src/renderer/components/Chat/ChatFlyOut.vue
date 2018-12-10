<template>
  <div class="message-box">
    <ChatFlyOutHeader 
      :online-user-count="users.length" 
      @click.native="toggleBody"/>
    <div 
      v-if="!bodyHidden" 
      class="message-box-content">
      <ChatUserCard
        v-for="(user,index) in users"
        :user="user"
        :key="index"
        class="online-user-list"
        @click.native="addToChatUserList(user)"
      />
      <ChatFlyOutSearchInput/>
    </div>
  </div>
</template>
<script>
import * as apiUrl from "../../config/endPoint.js";
import ChatFlyOutSearchInput from "./ChatFlyOutSearchInput";
import ChatFlyOutHeader from "./ChatFlyOutHeader";
import ChatUserCard from "./ChatUserCard";
import * as SignalR from "@aspnet/signalr";
import { mapGetters, mapActions } from "vuex";
export default {
  components: {
    ChatFlyOutSearchInput,
    ChatFlyOutHeader,
    ChatUserCard
  },
  data() {
    return {
      connection: null,
      bodyHidden: true,
      users: []
    };
  },
  computed: {
    ...mapGetters(["auth"])
  },
  created() {
    let vm = this;
    vm.connection = new SignalR.HubConnectionBuilder()
      .withUrl(`${apiUrl.APP_END_POINT}/signalr/notification-hub`)
      .configureLogging(SignalR.LogLevel.Information)
      .build();
    vm.connection.start().then(() => {
      vm.connection.invoke("RegisterUser", vm.auth.userDetails);
    });

    vm.connection.on("UpdatedUserList", function(users) {
      vm.users = users;
    });
  },
  methods: {
    ...mapActions(["addUserToChatlist"]),
    toggleBody() {
      this.bodyHidden = !this.bodyHidden;
    },
    addToChatUserList(user) {
      this.addUserToChatlist(user);
    }
  }
};
</script>

<style lang="scss">
.message-box {
  max-height: 400px;
  min-width: 400px;
  position: relative;
  bottom: -3px;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.3);
  background-color: #f3f3f3;
  .message-box-head {
    position: relative;
  }
  .message-box-content {
    position: relative;
    height: 100%;
  }
}
</style>
