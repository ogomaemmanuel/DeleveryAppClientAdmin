<template>
  <tr>
    <td>{{ volumeDiscount.subTotal|subTotal }}</td>
    <td>
      {{ volumeDiscount.discountAmount|discountAmount("%") }}
    </td>
    <td>
      {{ volumeDiscount.membershipType }}
    </td>
    <td>
      <a 
        href="" 
        @click.prevent><i class="fa fa-trash"/></a>
      <a 
        href="" 
        @click.prevent><i class="fa fa-edit"/></a>
    </td>
  </tr>
</template>

<script>
export default {
  filters: {
    subTotal: function(value) {
      return `from $ ${value}`;
    },
    discountAmount: function(value, type) {
      type || "$";
      return `${value} ${type}`;
    }
  },
  props: {
    volumeDiscount: {
      type: Object,
      default: null
    }
  },
  data() {
    return {};
  }
};
</script>
