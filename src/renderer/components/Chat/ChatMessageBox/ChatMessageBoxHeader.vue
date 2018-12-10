<template>
  <div class="chat-message-box-header">
    <div class="controls">
      <div class="title">
        {{ onlineUser.userName }}
      </div>
      <div class="controls-icons">
        <i class="fa fa-video-camera"/>
        <i class="fa fa-phone"/>
        <i class="fa fa-cog"/>
        <i class="fa fa-times"/>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    onlineUser: {
      type: Object,
      default: null
    }
  }
};
</script>
<style lang="scss">
.chat-message-box-header {
  // background-color: #3578e5;
  // width: 100%;
  background-color: #3578e5;
  // position: absolute;
  margin-top: 0px;
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
