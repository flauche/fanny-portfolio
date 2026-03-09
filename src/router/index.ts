import Bio from "@/pages/bio/Bio.vue";
import Contact from "@/pages/contact/Contact.vue";
import Home from "@/pages/home/Home.vue";
import Detalle from "@/pages/portafolio/Detalle.vue";
import Gallery from "@/pages/portafolio/Gallery.vue";
import Portafolio from "@/pages/portafolio/Portafolio.vue";
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
      path: '/portafolio',
      component: Portafolio,
      children: [
            {
              path: '',
              name: 'portafolio-gallery',
              component: Gallery
            },
            {
              path: ':id',
              name: 'portafolio-detalle',
              component: Detalle
            }
          ]
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/'
    }
    
  ]
})