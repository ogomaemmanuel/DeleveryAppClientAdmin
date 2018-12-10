<template>
  <div class="sent-message">
    <div class="sent-message-body">
      ERTYUIKL:xkzncnzlkcnzlcnlzxnzlxzllxznlxnlzlxz 
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
  }
};
</script>

<style lang="scss">
.sent-message {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  img {
    border-radius: 50%;
  }
  .sent-message-body {
    min-height: 25px;
    min-width: 0px;
    max-width: 170px;
    margin: 10px;
    border-radius: 16px;
    overflow-wrap: break-word;
    background-color: #3578e5;
    color: #ffffff;
    padding: 16px;
  }
}
</style>
