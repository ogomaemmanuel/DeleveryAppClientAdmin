<template>
<div class="country-list">
    <h2>Contries</h2>
    <table>
        <thead>
            <tr>
                <th></th>
                <th>Country</th>
                <th>Code</th>
                <th>State</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="country in countries" :country="country" :key="country.id" is="country-item">
            </tr>
        </tbody>
    </table>
</div>
</template>

<script>
import CountryItem from "./CountryItem"
export default {
    components: {
        "country-item": CountryItem
    },
    data() {
        return {
            countries: [{
                    "id": 1,
                    "name": "Hungary",
                    "code": "HU",
                    "stateCount": 6
                },
                {
                    "id": 2,
                    "name": "IceLand",
                    "code": "IS",
                    "stateCount": 0
                },
                {
                    "id": 3,
                    "name": "India",
                    "code": "IN",
                    "stateCount": 0
                },
                {
                    "id": 4,
                    "name": "Indonesia",
                    "code": "ID",
                    "stateCount": 6
                }
            ]

        }
    }
}
</script>

<style lang="scss">
@import "../../../assets/sass/_mixins.scss";

table {
    @include tableFormat;
}
</style>
