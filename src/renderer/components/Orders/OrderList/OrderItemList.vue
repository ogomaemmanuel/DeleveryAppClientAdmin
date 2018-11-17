<template>
<div class="order-list">
    <table>
        <thead>
            <tr>
                <th></th>
                <th>Order #</th>
                <th>Date</th>
                <th>Customer</th>
                <th>Payment status</th>
                <th>Fulfilment status</th>
                <th>Amount</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="n in 10" :key="n" is="order-item"></tr>
        </tbody>
    </table>

</div>
</template>

<script>
import OrderItem from "./OrderItem"
export default {
    components: {
        "order-item": OrderItem
    },
    data() {
        return {

        }
    }
}
</script>

<style lang="scss">
@import '../../../assets/sass/_mixins.scss';

.order-list {
    table {
        @include tableFormat;
        tbody{
            td{
                select{
                    min-height: 40px;
                    min-width: 100%;
                    border-radius: 5px;
                }
            }
        }
    }
}
</style>
