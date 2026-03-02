import Bio from "@/pages/bio/Bio.vue";
import Contact from "@/pages/contact/Contact.vue";
import Home from "@/pages/home/Home.vue";
import Portfolio from "@/pages/portfolios/Portfolio.vue";
import { createRouter, createWebHashHistory } from "vue-router";



export const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: Portfolio
    },
    {
      path: '/bio',
      name: 'bio',
      component: Bio
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/'
    }
    
  ]
})