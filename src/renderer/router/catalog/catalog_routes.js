var routes =[{
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
]
export default routes;