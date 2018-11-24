<template>
<div class="coupon">
    <h2>Coupon</h2>
    <form class="coupon-form">
        <div class="coupon-form-control">
            <div class="coupon-form-control-label">
                <label for="coupon-code">Code</label>
            </div>
            <div class="coupon-form-control-input">
                <input id="coupon-code" class="form-control" name="code" type="text">
            </div>
            </div>
            <div class="coupon-form-control">
                <div class="coupon-form-control-label">
                    <label for="coupon-code">Comment</label>
                </div>
                <div class="coupon-form-control-input">
                    <input id="coupon-code" class="form-control" name="code" type="text">
            </div>
                </div>
                <div class="coupon-form-control">
                    <div class="coupon-form-control-label">
                        <label for="coupon-code">Enabled</label>
                    </div>
                    <div class="coupon-form-control-input">
                        <input id="coupon-code"  name="code" type="checkbox">
            </div>
                    </div>
                    <div class="coupon-form-control">
                        <div class="coupon-form-control-label">
                            <label for="coupon-code">Discount Type</label>
                        </div>
                        <div class="coupon-form-control-input">
                            <select class="form-control" name="discount-type" id="">
                                <option v-for="discountType in discountTypes" :key="discountType.id" value="discountTypes.id">
                                    {{discountType.text}}
                                </option>
                            </select>
                            <!-- <input id="coupon-code" class="form-control"  name="code" type="text"> -->
            </div>
                        </div>
                        <div class="coupon-form-control">
                            <div class="coupon-form-control-label">
                                <label for="coupon-code">Discount Amount</label>
                            </div>
                            <div class="coupon-form-control-input">
                                <input id="coupon-code" class="form-control"  name="code" type="number">
            </div>
                            </div>
                            <div class="coupon-form-control">
                                <div class="coupon-form-control-label">
                                    <label for="coupon-code">Active From</label>
                                </div>
                                <div class="coupon-form-control-input">
                                    <input id="coupon-code" class="form-control"  name="code" type="date">
            </div>
                                </div>
                                <div class="coupon-form-control">
                                    <div class="coupon-form-control-label">
                                        <label for="coupon-code">Active  Till</label>
                                    </div>
                                    <div class="coupon-form-control-input">
                                        <input id="coupon-code" class="form-control"  name="code" type="date">
            </div>
                                    </div>
                                    <div class="coupon-form-control">
                                        <div class="coupon-form-control-label">
                                            <label for="coupon-code">Subtotal range (begin)</label>
                                        </div>
                                        <div class="coupon-form-control-input">
                                            <input id="coupon-code" class="form-control"  name="code" type="number">
            </div>
                                        </div>
                                        <div class="coupon-form-control">
                                            <div class="coupon-form-control-label">
                                                <label for="coupon-code">Subtotal range (end)</label>
                                            </div>
                                            <div class="coupon-form-control-input">
                                                <input id="coupon-code" class="form-control"  name="code" type="number">
            </div>
                                            </div>
                                            <div class="coupon-form-control">
                                                <div class="coupon-form-control-label">
                                                    <label for="coupon-code">Limit the number of uses</label>
                                                </div>
                                                <div class="coupon-form-control-input">
                                                    <input id="coupon-code" v-model="coupon.limitNoOfUses" type="checkbox">
            </div>
                                                </div>
                                            <div v-if="coupon.limitNoOfUses" class="coupon-form-control">
                                                <div class="coupon-form-control-label">
                                                    <label for="coupon-code">The maximum number of uses</label>
                                                </div>
                                                <div class="coupon-form-control-input">
                                                    <input id="coupon-code" class="form-control" type="text" >
            </div>
                                                </div>
                                                <div v-if="coupon.limitNoOfUses" class="coupon-form-control">
                                                    <div class="coupon-form-control-label">
                                                        <label for="coupon-code">The maximum number of uses per user</label>
                                                    </div>
                                                    <div class="coupon-form-control-input">
                                                        <input id="coupon-code"  class="form-control"  type="number">
            </div>
                                                    </div>
                                                    <div class="coupon-form-control">
                                                        <div class="coupon-form-control-label">
                                                            <label for="coupon-code">Coupon cannot be combined with other coupons</label>
                                                        </div>
                                                        <div class="coupon-form-control-input">
                                                            <input id="coupon-code"   type="checkbox">
            </div>
                                                        </div>
                                                        <div class="coupon-form-control">
                                                            <div class="coupon-form-control-label">
                                                                <label for="coupon-code">Categories</label>
                                                            </div>
                                                            <div class="coupon-form-control-input">
                                                                <chip-input @click.native.stop :selectList="categories"></chip-input>
                                                            </div>
                                                        </div>
                                                        <div class="coupon-form-control">
                                                            <div class="coupon-form-control-label">
                                                                <label for="coupon-code">Product classes</label>
                                                            </div>
                                                            <div class="coupon-form-control-input">
                                                                <chip-input @click.native.stop :selectList="productClasses"></chip-input>
                                                            </div>
                                                        </div>
                                                        <div class="coupon-form-control">
                                                            <div class="coupon-form-control-label">
                                                                <label for="coupon-code">Membership</label>
                                                            </div>
                                                            <div class="coupon-form-control-input">
                                                                <chip-input @click.native.stop :selectList="membershipTypes"></chip-input>
                                                            </div>
                                                        </div>
                                                        <div class="coupon-form-control">
                                                       <button class="btn btn-create btn-primary">
                                                           Create
                                                       </button>
                                                        </div>
                                                        <!-- <chip-input @click.native.stop :selectList="permissions"></chip-input> -->
    </form>
</div>
</template>

<script>
import ChipInput from "../../components/common/ChipList"
export default {
    components: {
        "chip-input": ChipInput
    },
    data() {
        return {
            coupon:{
                limitNoOfUses:false
            },
            categories: [{
                    "id": "1",
                    "text": "Test Category"
                },
                {
                    "id": "2",
                    "text": "Test Category"
                },
                {
                    "id": "3",
                    "text": "Test Category"
                }

            ],
            productClasses: [
                {
                    "id": "1",
                    "text": "Test Category"
                },
                {
                    "id": "2",
                    "text": "Test Category"
                },
                {
                    "id": "3",
                    "text": "Test Category"
                }


            ],
            membershipTypes: [
                {
                "id":"1",
                "text":"wholesaler"
                }
            ],
            discountTypes:[
                {
                "id":"1",
                "text":"Percentage"
                },
                {
                "id":"2",
                "text":"% off"
                },
                {
                "id":"3",
                "text":"Free Shipping"
                }
            ]

        }
    }
}
</script>

<style lang="scss">
.coupon {
    .coupon-form {
        .coupon-form-control {
            display: flex;
            align-items: center;
            margin-bottom: 10px;
            justify-content: flex-start;
            .btn-create{
            justify-self: center;
            }

            .coupon-form-control-label {
                flex-basis: 25%;
            }
            .coupon-form-control-input{
                flex-basis: 300px;

            }
        }
    }
}
</style>
