<template>
<div class="role-list">
    <table>
        <thead>
            <tr>
                <th></th>
                <th>Name</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="role in roles" :role="role" :key="role.id" is="role_item">
            </tr>
        </tbody>
    </table>
</div>
</template>
<script>
import RoleItem from "./RoleItem"
export default {
    components: {
        "role_item": RoleItem
    },
    data() {
        return {
            roles: [{
                    "active":true,
                    "id": "1",
                    "name": "Coupons management",
                    "slug": "coupons_management"
                },
                {
                    "active":true,
                    "id": "2",
                    "name": "Coupons management",
                    "slug": "coupons_management"
                },
                {
                    "active":false,
                    "id": "3",
                    "name": "Content management",
                    "slug": "content_management"
                },
                {
                    "active":true,
                    "id": "4",
                    "name": "Volume discounts management ",
                    "slug": "volume_discounts_management "
                }
            ]
        }
    }
}
</script>
<style lang="scss">
@import '../../../assets/sass/_mixins.scss';

.role-list {
    table {
        @include tableFormat;
    }
}
</style>
