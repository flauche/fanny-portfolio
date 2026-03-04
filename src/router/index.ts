import Bio from "@/pages/bio/Bio.vue";
import Contact from "@/pages/contact/Contact.vue";
import Dibujos from "@/pages/dibujos/dibujos.vue";
import Editorial from "@/pages/editorial/Editorial.vue";
import Home from "@/pages/home/Home.vue";
import Detalle from "@/pages/illust/Detalle.vue";
import Gallery from "@/pages/illust/Gallery.vue";
import Illust from "@/pages/illust/Illust.vue";
import Portafolios from "@/pages/Portafolios/Portafolios.vue";
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
      path: '/portafolios',
      name: 'portafolios',
      component: Portafolios
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
      path: '/ilustracion',
      component: Illust,
      children: [
            {
              path: '',
              name: 'ilustracion-gallery',
              component: Gallery
            },
            {
              path: ':id',
              name: 'ilustracion-detalle',
              component: Detalle
            }
          ]
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
      path: '/:pathMatch(.*)*',
      redirect: '/'
    }
    
  ]
})