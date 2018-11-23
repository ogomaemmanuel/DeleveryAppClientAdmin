<template>
<tr>
  
    <td>
        <input type="checkbox">
        <i class="fa fa-power-off"></i>
        </td>
    <td>{{country.name}}</td>
    <td>{{country.code}}</td>
    <td>
        <a @click.prevent="goToStateList()" href="">
{{country.stateCount>0?"Edit States ("+country.stateCount+")":"Add States"}}
        </a>

    </td>
</tr>
</template>

<script>
export default {
    props: ["country"],
    data() {
        return {

        }
    },
      methods:{
        goToStateList(){
             this.$router.push("state-list");
            // this.$router.push("user-create");
        }
    }
}
</script>
