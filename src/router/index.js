

import Vue from "vue";
import VueRouter from "vue-router";
import ProductDetails from "@/views/ProductDetails.vue";
import CartList from "@/views/CartList.vue";
import Home from "@/views/Home.vue";


Vue.use(VueRouter);


const routes=[
  {
    path:'/',
    name:'Home',
    component:Home
  },
  {
    path:'/cart',
    name:'Cart',
    component:CartList
  },
  {
    path:'/product-details',
    name:'ProductDetails',
    component:ProductDetails
  }
];

const router= new VueRouter({
  mode:'history',
  routes

});
export default router