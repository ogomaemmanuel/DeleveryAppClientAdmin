<template>
<tr>
    <td>{{role.status}}</td>
    <td>{{role.name}}</td>
    <td><a href=""><i class="fa fa-trash"></i></a></td>
</tr>
</template>
<script>
export default {
    props: ["role"],
    data() {
        return {

        }
    }
}
</script>
<style lang="scss">

</style>
