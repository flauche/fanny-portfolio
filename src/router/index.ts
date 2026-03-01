import Personalbio from "@/pages/bio/PersonalBio.vue";
import ProfessionalBio from "@/pages/bio/ProfessionalBio.vue";
import Contact from "@/pages/contact/Contact.vue";
import Home from "@/pages/home/Home.vue";
import Animation from "@/pages/portfolios/Animation.vue";
import Dibujos from "@/pages/portfolios/Dibujos.vue";
import Editorial from "@/pages/portfolios/Editorial.vue";
import Illustration from "@/pages/portfolios/Illustration.vue";
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
      path: '/animation',
      name: 'animation',
      component: Animation
    },
    {
      path: '/illustration',
      name: 'illustration',
      component: Illustration
    },
    {
      path: '/editorial',
      name: 'editorial',
      component: Editorial
    },
    {
      path: '/dibujos',
      name: 'dibujos',
      component: Dibujos
    },
    {
      path: '/personalbio',
      name: 'personalbio',
      component: Personalbio
    },
    {
      path: '/professionalbio',
      name: 'professionalbio',
      component: ProfessionalBio
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