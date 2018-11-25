<template>
  <tr>
    <td>
      <i class="fa fa-arrows-alt"/>
    </td>
    <td>
      show/hide toggle button
    </td>
    <td>
      Tab name
    </td>
    <td>
      action/Delete/View/Edit
    </td>
  </tr>
</template>

<script>
export default {
  data() {
    return {
      dragSrcEl: null
    };
  },
  methods: {
    onDragOver(e) {
      if (e.preventDefault) {
        e.preventDefault();
      }
      e.dataTransfer.dropEffect = "move";
      return false;
    },
    onDragStart(e) {
      // e.target.style.opacity = '0.9';
      e.target.style.opacity = "0.4";
      this.dragSrcEl = e.target;
      e.dataTransfer.effectAllowed = "move";
      e.dataTransfer.setData("text/html", e.target.innerHTML);
    },
    onDragEnter(e) {
      e.target.parentElement.classList.add("drag-over");
    },
    onDragLeave(e) {
      e.target.parentElement.classList.remove("drag-over");
    },

    onDragEnd(e) {
      e.target.style.opacity = "1";
      let cols = document.querySelectorAll(".drag-over");
      [].forEach.call(cols, function(col) {
        col.classList.remove("drag-over");
      });
    },

    onDrop(e) {
      // this/e.target is current target element.

      if (e.stopPropagation) {
        e.stopPropagation(); // Stops some browsers from redirecting.
      }
      // this.dragSrcEl.innerHTML = e.target.innerHTML;
      e.target.innerHTML = e.dataTransfer.getData("text/html");
      return false;
    }
  }
};
</script>

<style lang="scss">
.drag-over {
  border: 2px dashed #000;
}
</style>
