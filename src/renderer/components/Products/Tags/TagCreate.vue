<template>
<div>
    <b-btn  :class="'btn btn-primary add-button'"  v-b-modal.review-creaate-modal>Add Tag</b-btn>
    <b-modal id="review-creaate-modal" title="Review">
        <form action="">
          <div class="form-group">
              <label for="productTagName">Tag Name</label>
              <input class="form-control" name="productTagName" type="text">
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


