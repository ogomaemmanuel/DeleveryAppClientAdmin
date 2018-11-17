<template>
<div>
    <b-btn :class="'btn btn-primary add-button'" v-b-modal.review-creaate-modal>Add Review</b-btn>
    <b-modal id="review-creaate-modal" title="Review">
        <form action="">
          <div class="form-group">
              <label for="productName">Product</label>
              <input class="form-control" name="ProductName" type="text">
          </div>
          <div class="form-group">
              <label for="productProfile">Profile</label>
              <input class="form-control" name="productProfile" type="text">
          </div>
          <div class="form-group">
              <label for="reviewerName">Reviewer Name</label>
              <input class="form-control" name="reviewerName" type="text">
          </div>
          <div class="form-group">
              <label for="reviewerName">Text Of Review</label>
              <textarea class="form-control" name="reviewerName"></textarea>
          </div>
        </form> 
    </b-modal>
</div>
</template>
<script>
export default {
    data(){
        return{

        }
    }
}
</script>

<style lang="scss">

</style>
