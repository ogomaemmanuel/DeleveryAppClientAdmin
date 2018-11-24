<template>
<div class="home-page-wrapper">
    <slot name="sidemenu">
        <i slot="side-menu-hider" class="el-icon-arrow-left menu-arrow"></i>
    </slot>
    <div class="delivery-app-body" :style="homeWidth">
        <slot name="top-nav-bar"></slot>
        <div class="delivery-app-body-content">
            <transition name="slide">
                <router-view></router-view>
            </transition>
        </div>
    </div>
</div>
</template>

<script>
import {
    EventBus
} from '../../event-bus.js'
import ProductList from "../Products/ProductList"
import ChipInput from "../common/ChipList"
export default {
    components: {
        "product-list": ProductList,
        "chip-input": ChipInput
    },
    data() {
        return {
            homeWidth: {
                "margin-left": "255px",
            },
            // chipData: [{
            //         "id": "1",
            //         "text": "test"
            //     },
            //     {
            //         "id": "2",
            //         "text": "test two"
            //     },
            //     {
            //         "id": "3",
            //         "text": "test three"
            //     },
            //     {
            //         "id": "4",
            //         "text": "test Four"
            //     },
            //     {
            //         "id": "5",
            //         "text": "test Five"
            //     },
            // ]

        };

    },
    created() {
        let vm = this;
        EventBus.$on('sideNavClosed', function () {
            vm.homeWidth["margin-left"] = "0px";
        });
        EventBus.$on("showSideNav", function () {
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
        background-color: #ffffff;
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
