<template>
  <div class="coupon-list">
    <h2>Coupons</h2>
    <button 
      class="btn btn-primary" 
      @click="goToCreateCoupon()">New Discount Coupon</button>
    <table>
      <thead>
        <tr>
          <th/>
          <th>Coupon code</th>
          <th>Comment</th>
          <th>Discount</th>
          <th>Uses left</th>
          <th>Uses count</th>
          <th/>
        </tr>
      </thead>
      <tbody>
        <tr 
          is="coupon-item" 
          v-for="coupon in coupons" 
          :coupon="coupon" 
          :key="coupon.id"/>
      </tbody>
    </table>
  </div>
</template>

<script>
import CouponItem from "./CouponItem";
export default {
  components: {
    "coupon-item": CouponItem
  },
  data() {
    return {
      coupons: [
        {
          id: "1",
          code: "567890FGHJK",
          comment: "Black Friday",
          discount: "Discount",
          usesLeft: "3",
          usesCount: "0"
        }
      ]
    };
  },
  methods: {
    goToCreateCoupon() {
      this.$router.push("coupon-create");
    }
  }
};
</script>
<style lang="scss">
@import "../../../assets/sass/_mixins.scss";
.coupon-list {
  table {
    @include tableFormat;
  }
}
</style>
