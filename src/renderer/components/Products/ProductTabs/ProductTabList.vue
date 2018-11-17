<template>
<div class="product-tab-list">
    <el-switch
    v-model="value3"
    on-color="#13ce66"
    off-color="#ff4949"
    on-value="100"
    active-text="enabled"
    inactive-text="disabled"
    off-value="0">
  </el-switch>
    <table>
        <thead>
            <tr>
                <th>
                    <i class="fa fa-arrows-alt"></i>
                </th>
                <th>status</th>
                <th>Name</th>
                <th>Delete</th>
            </tr>
        </thead>
        <tbody>
            <tr draggable="true" @dragend="onDragEnd" @drop="onDrop" @dragleave="onDragLeave" @dragenter="onDragEnter" @dragover="onDragOver" @dragstart="onDragStart" v-for="n in 10" :key="n" is="product-tab"></tr>
        </tbody>
    </table>
</div>
</template>

<script>
import ProductTab from "./ProductTab"
export default {
    components: {
        "product-tab": ProductTab,
    },
    data() {
        return {
value3:"100"
        }
    },
     methods: {
        onDragOver(e) {
            if (e.preventDefault) {
                e.preventDefault(); 
            }
            e.dataTransfer.dropEffect = 'move'; 
            return false;
        },
        onDragStart(e) {
            // e.target.style.opacity = '0.9';
            e.target.style.opacity = '0.4';
            this.dragSrcEl = e.target;
            e.dataTransfer.effectAllowed = 'move';
            e.dataTransfer.setData('text/html', e.target.innerHTML);
        },
        onDragEnter(e) {
            e.target.parentElement.classList.add("drag-over")
        },
        onDragLeave(e) {
            e.target.parentElement.classList.remove('drag-over');
        },

        onDragEnd(e) {
            e.target.style.opacity = '1';
            let cols = document.querySelectorAll('.drag-over');
            [].forEach.call(cols, function (col) {
                col.classList.remove('drag-over');
            });
        },

        onDrop(e) {
            // this/e.target is current target element.

            if (e.stopPropagation) {
                e.stopPropagation(); // Stops some browsers from redirecting.
            }
                // this.dragSrcEl.innerHTML = e.target.innerHTML;
                e.target.innerHTML = e.dataTransfer.getData('text/html');
            return false;
        }
    }
   
}
</script>

<style lang="scss">
@import "../../../assets/sass/_mixins.scss";

.product-tab-list {
    table {
        @include tableFormat;
    }

}
</style>
