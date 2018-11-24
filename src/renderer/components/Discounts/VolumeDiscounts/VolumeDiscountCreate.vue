<template>
<div>
    <b-btn :class="'btn btn-primary add-button'" @click="showDialog=true">Add Discount</b-btn>
    <el-dialog title="Create Role" :visible.sync="showDialog" width="30%" center>
        <form action="">
            <div class="form-group ">
                <label for="name">Sub Total</label>
                <input class="form-control" name="name" type="number">
          </div>
                <div class="form-group ">
                    <label for="name">Dicount Type</label>
                    <select class="form-control" name="discountType">
<option v-for="discountType in discountTypes" :key="discountType.value" :value="discountType.value">
   {{discountType.text}} 
</option>
                    </select>
                </div>
                <div class="form-group ">
                    <label for="name">Dicount</label>
                    <input class="form-control" name="name" type="number">
          </div>
                    <div class="form-group ">
                        <label for="name">Membership Type</label>
                        <!-- <input class="form-control" name="name" type="number"> -->
                        <select class="form-control">
                            <option value=""></option>
                        </select>
          </div>
        </form>
    </el-dialog>
</div>
</template>

<script>
export default {
    data() {
        return {
            showDialog: false,
            membershipTypes: [{
                    "id": "1",
                    "text": "all members",

                },
                {
                    "id": "2",
                    "text": "Wholesaler",
                }
            ],
            discountTypes: [{
                    "value": "percentage",
                    "text": "%",

                },
                {
                    "value": "flatRate",
                    "text": "$",
                }
            ]
        }

    }
}
</script>
