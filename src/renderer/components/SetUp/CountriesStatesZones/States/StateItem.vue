<template>
<tr>
    <td>
        <input type="checkbox">
        </td>
    <td>
        {{state.name}}
    </td>
    <td>
        {{state.code}}
    </td>
    <td>
        <a  href="">
                <i class="fa fa-trash"></i>
        </a>
    </td>
</tr>
</template>
<script>
export default {
    props: ["state"],
    data() {
        return {
          
        }
        
    },
  
}
</script>
