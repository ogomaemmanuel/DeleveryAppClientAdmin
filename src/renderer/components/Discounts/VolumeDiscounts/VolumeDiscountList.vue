<template>
    <div class="volume-discount-list">
      <volume-discount-create></volume-discount-create>
<table>
    <thead>
        <tr>
            <th>Subtotal</th>
            <th>Discount</th>
            <th>Membership</th>
            <th></th>
        </tr>
    </thead>
    <tbody>
        <tr v-for="volumeDiscount in volumeDiscounts" :volumeDiscount="volumeDiscount" :key="volumeDiscount.id" is="volume-discount-item"></tr>
    </tbody>
</table>
    </div>
</template>
<script>
import VolumeDiscountItem from "./VolumeDiscountItem"
import VolumeDiscountCreate from "./VolumeDiscountCreate"
export default {
    components:{
        "volume-discount-item":VolumeDiscountItem,
        "volume-discount-create":VolumeDiscountCreate
    },
    data(){
        return{
            volumeDiscounts:[
                {
                    "id":"1",
                    "subTotal":"30000",
                     "discountAmount":"20",
                     "membershipType":"WholeSalers"
                }
            ]

        }
    }
}
</script>
<style lang="scss">
.volume-discount-list{
    .btn-add-item{
        margin-bottom: 30px;
    }
}

</style>


