<template>
<tr>
    <td :class="role.active?'text-primary':''">
        <i  class="fa fa-power-off"></i>
    </td>

    <td>{{role.name}}</td>
    <td>
        <a href=""><i class="fa fa-eye"></i></a>
        <a href=""><i class="fa fa-edit"></i></a>
        <a href=""><i class="fa fa-trash"></i></a>
    </td>
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
