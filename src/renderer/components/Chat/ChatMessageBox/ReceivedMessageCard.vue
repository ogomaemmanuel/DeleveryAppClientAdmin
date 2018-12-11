<template>
  <div 
    class="received-message" 
    @click="alertSomething">
    <img 
      height="32px" 
      width="32px" 
      src="~@/assets/profile.jpg" 
      alt="">
    <div class="received-message-body">
      {{ message.message }}
    </div>
   
  </div>
</template>

<script>
export default {
  props: {
    message: {
      type: Object,
      default: null
    }
  },
  methods: {
    alertSomething() {
      // window.alert("Hey There");
    }
  }
};
</script>

<style lang="scss">
.received-message {
  display: flex;
  align-items: center;
  img {
    border-radius: 50%;
  }
  .received-message-body {
    min-height: 25px;
    min-width: 0px;
    max-width: 170px;
    margin: 10px;
    border-radius: 16px;
    overflow-wrap: break-word;
    background-color: #919090;
    padding: 16px;
  }
}
</style>
