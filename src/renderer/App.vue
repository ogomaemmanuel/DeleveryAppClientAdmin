<template>
  <div id="app">
    <router-view>
      <side-menu slot="sidemenu"/>
      <top-nav-bar slot="top-nav-bar"/>
    </router-view>
  </div>
</template>

<script>
import SideMenu from "../renderer/components/LandingPage/SideNav";
import TopNavBar from "../renderer/components/LandingPage/TopNav";
export default {
  name: "DeleveryApp",
  components: {
    "side-menu": SideMenu,
    "top-nav-bar": TopNavBar
  }
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
</style>
