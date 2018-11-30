<template>
  <div class="chat-user-card">
    <div class="chat-user-avatar">
      {{ user.imageUrl }}
    </div>
    <div class="chat-user-name">
      {{ user.userName }}
    </div>
    <div class="user-online-status-indicator"> 
      <span 
        :class="{'positive-indicator':user.isOnline}"/> 
    </div>
  </div>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      default: null
    }
  }
};
</script>
<style lang="scss">
.chat-user-card {
  min-height: 40px;
  padding: 4px 0;
  display: block;

  &:hover {
    background-color: #e9ebee;
  }
  .chat-user-avatar {
    float: left;
    border-radius: 50%;
    height: 34px;
    overflow: hidden;
    top: -1px;
    width: 34px;
  }
  .chat-user-name {
    line-height: 32px;
    overflow: hidden;
    padding-left: 8px;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .user-online-status-indicator {
    float: right;
    line-height: 32px;
    margin: 0 1px 0 4px;
    text-align: right;
    padding-right: 12px;
    span {
      height: 6px;
      width: 6px;
      margin-left: 4px;
      display: inline-block;
      border-radius: 50%;
    }
    .positive-indicator {
      background-color: rgb(66, 183, 42);
    }
  }
}
</style>
