<template>
<div class="permission-list">
    <table>
        <thead>
            <tr>
                <th></th>
                <th>slug</th>
                <th>Name</th>
                <th>Description</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="permission in permissions" :key="permission.id" :permission="permission" is="permission_item">
            </tr>
        </tbody>
    </table>
</div>
</template>

<script>
import PermissionItem from "./PermissionItem"
export default {
    components: {
        "permission_item": PermissionItem
    },
    data() {
        return {
            permissions: [{
                    "name": "Root Access",
                    "id": "1",
                    "slug": "root_access",
                    "description": "Test Desc"
                },
                {
                    "name": "Manage Catalog",
                    "id": "2",
                    "slug": "manage_catalog",
                    "description": "Test Desc"
                },
                {
                    "name": "Manage Reviews",
                    "id": "4",
                    "slug": "manage_reviews",
                    "description": "Test Desc"
                },
                {
                    "name": "Manage Users",
                    "id": "5",
                    "slug": "manage_users",
                    "description": "Test Desc"
                },
                {
                    "name": "Manage administrators",
                    "id": "6",
                    "slug": "manage_administrators",
                    "description": "Test Desc"
                },
                {
                    "name": "Manage orders",
                    "id": "7",
                    "slug": "manage_orders",
                    "description": "Test Desc"
                },
                {
                    "name": "Manage orders",
                    "id": "8",
                    "slug": "manage_orders"
                },
                {
                    "name": "Manage export",
                    "id": "9",
                    "slug": "manage_export",
                    "description": "Test Desc"
                },
                {
                    "name": "Manage import",
                    "id": "10",
                    "slug": "manage_import",
                    "description": "Test Desc"
                },
                {
                    "name": "Manage banners",
                    "id": "11",
                    "slug": "manage_banners",
                    "description": "Test Desc"
                },
                {
                    "name": "Allow Unfiltred HTML",
                    "id": "12",
                    "slug": "allow_unfiltred_html",
                    "description": "Test Desc"
                },
                {
                    "name": "Manage custom pages",
                    "id": "13",
                    "slug": "manage_custom_pages"
                },
                {
                    "name": "Manage menus",
                    "id": "14",
                    "slug": "manage_menus"
                },
                {
                    "name": "Manage news",
                    "id": "15",
                    "slug": "manage_news"
                },
                {
                    "name": "Manage coupons",
                    "id": "16",
                    "slug": "manage_coupons"
                },
                {
                    "name": "Manage coupons",
                    "id": "17",
                    "slug": "manage_coupons"
                },
                {
                    "name": "Manage volume discounts",
                    "id": "18",
                    "slug": "manage_volume_discounts"
                },

            ]
        }
    }
}
</script>

<style lang="scss">
@import '../../../assets/sass/_mixins.scss';
.permission-list {
    table {
        @include tableFormat;
    }
}
</style>
