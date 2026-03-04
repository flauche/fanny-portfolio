<script setup lang="ts">
import LayoutPrincipal from '@/layout/LayoutPrincipal.vue';

interface Portafolio {
  id: string;
  title: string;
  image: string;
  route: string;
}

const portafolios: Portafolio[] = [
  {
    id: '1',
    title: 'Ilustración',
    image: '/imagines/portafolios/illustPort2.jpg',
    route: '/ilustracion'
  },
  {
    id: '2',
    title: 'Editorial',
    image: '/imagines/portafolios/editPort.jpg',
    route: '/editorial'
  },
  {
    id: '3',
    title: 'Dibujos',
    image: '/imagines/portafolios/dibujosPort.jpg',
    route: '/dibujos'
  }
];

</script>

<template>
    <LayoutPrincipal>
    <main class="min-h-screen py-12 md:py-20 px-4 md:px-8 lg:px-16">
      <!-- Grid de proyectos -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-16 max-w-7xl mx-auto">
        <RouterLink
          v-for="portafolio in portafolios"
          :key="portafolio.id"
          :to="portafolio.route"
          class="group cursor-pointer"
        >
          <!-- Contenedor de imagen -->
          <div class="relative overflow-hidden bg-gray-200 aspect-square mb-4">
            <img
              :src="portafolio.image"
              :alt="portafolio.title"
              class="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
            />
          </div>
          
          <!-- Título -->
          <h3 class="text-xl md:text-2xl font-semibold text-center text-[rgb(209,172,0)] group-hover:text-[rgb(209,172,0)] transition-colors duration-300">
            {{ portafolio.title }}
          </h3>
        </RouterLink>
      </div>
    </main>
  </LayoutPrincipal>
</template>



<style scoped>

</style>