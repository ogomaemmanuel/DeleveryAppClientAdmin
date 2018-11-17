<template>
<div class="home-page-wrapper">
    <slot name="sidemenu">
        <i slot="side-menu-hider" class="el-icon-arrow-left menu-arrow"></i>
    </slot>
    <div class="delivery-app-body" :style="homeWidth">
        <slot name="top-nav-bar"></slot>
        <div class="delivery-app-body-content">
            <router-view></router-view>
        </div>
    </div>
</div>
</template>

<script>
import {
    EventBus
} from '../../event-bus.js'
import ProductList from "../Products/ProductList"
export default {
    components: {
        "product-list": ProductList
    },
    data() {
        return {
            homeWidth: {
                "margin-left": "255px",
            }
        };
    },
    created() {
        let vm = this;
        EventBus.$on('sideNavClosed', function () {
            vm.homeWidth["margin-left"] = "0px";
        });
        EventBus.$on("showSideNav", function(){
           vm.homeWidth["margin-left"] = "255px";
        })
    }
};
</script>

<style lang="scss">
.home-page-wrapper {
    .delivery-app-body {
        margin-left: 255px;
         transition: all 2s;
         background-color: #f3f3f3;
         min-height: 100%;
         transition-timing-function: ease-in-out;
        .delivery-app-body-content {
            min-height: 100vh;
            margin-top: 36px;
            margin-left: 28px;
            margin-right: 90px;
        }
    }
}
</style>
