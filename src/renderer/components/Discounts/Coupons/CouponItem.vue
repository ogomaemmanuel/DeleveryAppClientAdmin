<template>
<tr>
    <td>
        <i class="fa fa-power-off"></i>
    </td>
    <td>{{coupon.code}}</td>
    <td>
        {{coupon.comment}}
    </td>
    <td>
        {{coupon.discount}}
    </td>
    <td>
        {{coupon.usesLeft}}
    </td>
    <td>
        {{coupon.usesCount}}
    </td>
    <td>
        <a @click.prevent href="">
            <i class="fa fa-trash"></i>
        </a>
    </td>
</tr>
</template>

<script>
export default {
    props: ["coupon"],
    data() {
        return {

        }
    }
}
</script>
