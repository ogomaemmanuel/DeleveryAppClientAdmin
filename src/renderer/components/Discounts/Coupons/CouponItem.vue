<template>
  <tr>
    <td>
      <i class="fa fa-power-off"/>
    </td>
    <td>{{ coupon.code }}</td>
    <td>
      {{ coupon.comment }}
    </td>
    <td>
      {{ coupon.discount }}
    </td>
    <td>
      {{ coupon.usesLeft }}
    </td>
    <td>
      {{ coupon.usesCount }}
    </td>
    <td>
      <a 
        href="" 
        @click.prevent>
        <i class="fa fa-trash"/>
      </a>
    </td>
  </tr>
</template>

<script>
export default {
  props: {
    coupon: {
      type: Object,
      default: null
    }
  },
  data() {
    return {};
  }
};
</script>
