<template>
<div class="chip">

    {{chip.text}} <i @click.prevent="removeChip" class="fa fa-times"></i>

</div>
</template>

<script>
export default {
    props: ["chip"],
    data() {
        return {

        }
    },
    methods: {
        removeChip() {
            this.$emit("chipRemoved", this.chip);
        }
    }
}
</script>
<style lang="scss">
.chip {
    display: flex;
    border-radius: 5px;
    background: #e0e0e0;
    margin: 4px;
    min-width: 80px;
    min-height: 1rem;
    border: 1px solid #ccc;
    margin-bottom: 2px;
    align-content: space-between;
    align-items: center;
    padding: 0px 4px;

    i {
        cursor: pointer;
        opacity: .56;
        margin-left: 8px;
    }
}
</style>
