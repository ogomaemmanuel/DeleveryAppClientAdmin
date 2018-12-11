</<template>
   <div class="message-box-footer">
       <input 
       v-model="message"
       placeholder="Type a message"
       @keyup.enter="sentMessage"
       type="text"
       />
       <div class="chat-message-icons">
          <div class="chat-message-icons-left">
           <i class="fa fa-file-image-o fa-2x"></i> 
          <i class="fa fa-paperclip fa-2x"></i> 
          <i class="fa fa-camera fa-2x"></i> 
          <i class="fa fa-smile-o fa-2x"></i> 
          </div>
           <div class="chat-message-icons-right">
           <i class="fa fa-thumbs-o-up fa-2x"></i>
            </div>  
    </div>
    </div> 
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  props: {
    onlineUser: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      message: ""
    };
  },
  computed: {
    ...mapGetters(["auth"])
  },
  methods: {
    ...mapActions(["sendChatMessage"]),
    sentMessage() {
      let vm = this;
      let outgoingMessage = {
        to: vm.onlineUser,
        from: vm.auth.userDetails,
        message: vm.message
      };
      vm.sendChatMessage(outgoingMessage).then(() => {
        vm.message = "";
      });
    }
  }
};
</script>
<style lang="scss">
.message-box-footer {
  z-index: 3;
  input {
    width: 100%;
    min-height: 40px;
    border-style: none;
  }
  .chat-message-icons {
    min-height: 20px;
    margin-bottom: 20px;
    margin-top: 10px;
    display: flex;
    .chat-message-icons-left {
      flex: 1;
      i {
        margin-left: 5px;
      }
    }
  }
}
</style>
