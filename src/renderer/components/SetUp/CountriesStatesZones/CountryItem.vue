<template>
<tr>
    <td><input type="checkbox"></td>
    <td><i class="fa fa-power-off"></i></td>
    <td>{{country.name}}</td>
    <td>{{country.code}}</td>
    <td>{{country.stateCount>0?"Edit States ("+country.stateCount+")":"Add States"}}</td>
</tr>
</template>
<script>
export default {
    props: ["country"],
    data() {
        return {

        }
    }
}
</script>
