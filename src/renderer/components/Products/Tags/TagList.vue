<template>
  <div class="tag-list">
    <h2>Product Tags</h2>
    <tag-create/>
    <table>
      <thead>
        <tr>
          <th/>
          <th>
            <input type="checkbox">
          </th>
          <th>Name</th>
          <th>Products</th>
          <th/>
        </tr>
      </thead>
      <tbody>
        <tag/>
      </tbody>
    </table>
  </div>
</template>

<script>
import Tag from "./Tag";
import TagCreate from "./TagCreate";
export default {
  components: {
    tag: Tag,
    "tag-create": TagCreate
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss">
@import "../../../assets/sass/_mixins.scss";

.tag-list {
  @include addButton;

  table {
    @include tableFormat;
  }
}
</style>
