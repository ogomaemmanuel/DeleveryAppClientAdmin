<template>
<div id="app">
    <router-view>
        <side-menu slot="sidemenu">
        </side-menu>
        <top-nav-bar slot="top-nav-bar"></top-nav-bar>
    </router-view>
</div>
</template>
<script>
import SideMenu from '../renderer/components/LandingPage/SideNav'
import TopNavBar from '../renderer/components/LandingPage/TopNav'
export default {
    name: 'delevery_app',
    components: {
        "side-menu": SideMenu,
        'top-nav-bar':TopNavBar,
    },
  
}
</script>
<style lang="scss">
  
</style>
