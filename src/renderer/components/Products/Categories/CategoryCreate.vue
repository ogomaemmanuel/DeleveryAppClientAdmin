<template>
<tr>
    <td></td>
    <td></td>
    <td colspan="2">
        <form action="">
            <input placeholder="Enter Category Name" type="text">
        </form>
    </td>
    <td></td>
    <td></td>

    <slot name="delete-action-slot"></slot>
</tr>
</template>

<script>
export default {
    data() {
        return {

        }
    }
}
</script>

<style>

</style>
