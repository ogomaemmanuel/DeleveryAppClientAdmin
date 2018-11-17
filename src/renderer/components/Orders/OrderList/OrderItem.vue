<template>
<tr>
    <td>
        <input type="checkbox" name="" id="">
        </td>
    <td>#00005</td>
    <td>Jan 12, 2016. 08:18</td>
    <td>Customer Details</td>
    <td>
        <select name="" id="">
                <option v-for="paymentStatus in paymentStatuses" :key="paymentStatus.value" value="paymentStatus.value">
                    {{paymentStatus.text}}
                </option>
            </select>
    </td>
    <td>
        <select name="" id="">
                <option v-for="fullfilmentStatus in fullfilmentStatuses" :key="fullfilmentStatus.value" value="paymentStatus.value">
                    {{fullfilmentStatus.text}}
                </option>
            </select>
    </td>
    <td>
        <div>
            $352.81
        </div>
        <div>
            Qty: 19
        </div>
    </td>
    <td>
        <i class="fa fa-trash"></i>
    </td>

</tr>
</template>

<script>
export default {
    data() {
        return {
            paymentStatuses: [{
                    "text": "Partially Paid",
                    "value": "partially_paid"

                },
                {
                    "text": "Declined",
                    "value": "declined"
                },
                {
                    "text": "Refunded",
                    "value": "refunded"
                },
                {
                    "text": "Refunded",
                    "value": "refunded"
                },
                {
                    "text": "RefuPaidnded",
                    "value": "refunded"
                }
            ],

            fullfilmentStatuses: [{
                    "text": "Partially Paid",
                    "value": "partially_paid"

                },
                {
                    "text": "Declined",
                    "value": "declined"
                },
                {
                    "text": "Refunded",
                    "value": "refunded"
                },
                {
                    "text": "Refunded",
                    "value": "refunded"
                },
                {
                    "text": "RefuPaidnded",
                    "value": "refunded"
                }
            ]
        }
    }
}
</script>

<style lang="scss">

</style>
