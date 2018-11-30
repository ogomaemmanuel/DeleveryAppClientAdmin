<template>
  <div class="message-input-wrapper">
    <input 
      class="message-input" 
      type="text">
    <div class="message-input-controls">
      <i class="fa fa-file"/>
      <i class="fa fa-trash"/>
    </div>
  </div>
</template>
<script>
export default {};
</script>

<style lang="scss">
.message-input-wrapper {
  min-height: 40px;
  margin-top: 70px;
  width: 100%;
  border-radius: 16px;
  position: absolute;
  display: flex;
  flex-wrap: wrap;
  bottom: 5px;
  align-items: center;
  .message-input {
    flex: 1 1 auto;
    min-height: 40px;
  }
  .message-input-controls {
    // align-self: flex-end;
    display: flex;
    i {
      margin-left: 5px;
    }
  }
}
</style>
