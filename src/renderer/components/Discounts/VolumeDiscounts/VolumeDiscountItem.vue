<template>
<tr>
    <td>{{volumeDiscount.subTotal|subTotal}}</td>
    <td>
        {{volumeDiscount.discountAmount|discountAmount("%")}}
    </td>
    <td>
        {{volumeDiscount.membershipType}}
    </td>
    <td>
     <a @click.prevent href=""><i class="fa fa-trash"></i></a>
     <a @click.prevent href=""><i class="fa fa-edit"></i></a>
    </td>
</tr>
</template>

<script>
export default {
    props: ["volumeDiscount"],
    data() {
        return {

        }
    },
    filters: {
        subTotal: function (value) {
            return `from $ ${value}`;
        },
        discountAmount: function (value,type) {
            type||"$"
            return `${value} ${type}`;
        }
    }
}
</script>
