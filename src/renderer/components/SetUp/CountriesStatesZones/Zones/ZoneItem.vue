<template>
<tr>
    <td>
        {{zone.name}}
    </td>
    <td>
        <a @click.prevent href="">
<i class="fa fa-trash"></i>
        </a>
    </td>
</tr>
</template>
<script>
export default {
    props: ["zone"],
    data() {
        return {

        }
    }
}
</script>
