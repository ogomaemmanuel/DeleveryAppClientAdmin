import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login-page',
      component: require('@/components/Auth/LoginPage').default
    },

    
    {
      path: '/home',
      name: 'home-page',
      component: require('@/components/LandingPage/HomePage').default,
      //Order routes
      children:[
        {
          path: '/order_list',
          name: 'order_list',
          component: require('@/components/Orders/OrderList/OrderItemList').default
        },
        {
          path: '/order_statuses',
          name: 'order_statuses',
          component: require('@/components/Orders/OrderStatuses/OrderStatusList').default
        },
        {
          path: '/order_statistics',
          name: 'order_statistics',
          component: require('@/components/Orders/Statistics/StatisticItemList').default
        },
        {
          path: '/payment-transaction',
          name: 'payment-transaction',
          component: require('@/components/Orders/PaymentTransaction/PaymentTransactionList').default
        },
        //Catalog Routes
        {
          path: '/product-list',
          name: 'product-list',
          component: require("@/components/Products/ProductList").default,
        },
        {
          path: '/category-list',
          name: 'category-list',
          component: require("@/components/Products/Categories/CategoryList").default,
        },
        {
          path: '/review-list',
          name: 'review-list',
          component: require("@/components/Products/Reviews/ReviewList").default,
        },
        {
          path: '/tag-list',
          name: 'tag-list',
          component: require("@/components/Products/Tags/TagList").default,
        },
        {
          path: '/product-tab-list',
          name: 'product-tab-list',
          component: require("@/components/Products/ProductTabs/ProductTabList").default,
        },
       //Discounts routes
        {
          path: '/coupon-create',
          name: 'coupon-create',
          component: require("@/components/Discounts/Coupons").default,
        },
        {
          path: '/coupon-list',
          name: 'coupon-list',
          component: require("@/components/Discounts/Coupons/CouponList").default,
        },
         //Users routes
        {
          path: '/user-list',
          name: 'user-list',
          component: require("@/components/Users/UserList").default,
        },
        {
          path: '/user-create',
          name: 'user-create',
          component: require("@/components/Users/UserCreate").default,
        },
        {
          path: '/permission_list',
          name: 'permission_list',
          component: require("@/components/Users/Permissions/PermissionList").default,
        },
        {
          path: '/role_list',
          name: 'role_list',
          component: require("@/components/Users/Roles/RoleList").default,
        },
        //SetUp Routes
        {
          path: '/country_list',
          name: 'country_list',
          component: require("@/components/SetUp/CountriesStatesZones/CountryList").default,
        },
        {
          path: '/state-list',
          name: 'state-list',
          component: require("@/components/SetUp/CountriesStatesZones/States/StateList").default,
        },
        {
          path: '/zone-list',
          name: 'zone-list',
          component: require("@/components/SetUp/CountriesStatesZones/Zones/ZoneList").default,
        },
      ]
    },
   
    {
      path: '*',
      redirect: '/'
    }
  ],
  mode:"history",
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})
