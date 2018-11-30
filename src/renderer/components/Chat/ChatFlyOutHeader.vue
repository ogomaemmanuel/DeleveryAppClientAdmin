<template>
  <div class="message-box-header">
    <div class="controls">
      <div class="title">
        <h5>Chat</h5>
      </div>
      <div class="chat-icons">
        <i 
          class="fa fa-edit fa-2x" 
          @click.self="openNewChat"/>
        <i class="fa fa-user-plus fa-2x"/>
        <i class="fa fa-cog fa-2x"/>
      </div>
     
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    openNewChat() {}
  }
};
</script>

<style lang="scss">
.message-box-header {
  background-color: blue;
  min-height: 40px;
  width: 100%;
  color: #ffffff;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  z-index: 1;
  padding-right: 15px;
  padding-left: 15px;
  .controls {
    display: flex;
    width: 100%;
    align-items: center;
    .title {
      flex: 1;
    }
  }
}
</style>
