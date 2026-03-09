<script lang="ts" setup>
import Carrus from '@/components/Carrus.vue';
import LayoutPrincipal from '@/layout/LayoutPrincipal.vue';

const photos = ["miloa2", "letras2", "eJS2", "postcard2", "comicZiper2"];

const photoLinks = [
  "/portfolio/1",
  "/portfolio/2", 
  "/portfolio/3",
  "/portfolio/4",
  "/portfolio/5"
];

</script>

<template>
  <LayoutPrincipal>

    <main class="flex flex-col items-center px-4 pt-18 md:pt-16 pb-12">
      <div class="relative flex justify-center mb-8 md:mb-12">
        <div class="relative">
        <!-- Video -->
        <video 
          controls
          loop
          class="w-full max-w-[355px] md:max-w-[500px] lg:max-w-[600px] h-auto relative z-10"
        >
          <source src="/videos/bailecito2.mp4" type="video/mp4" />
        </video>
        
        <!-- Marco dorado -->
        <img 
          class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0 scale-130"

          src="/imagines/home/cuadro7.png"
          alt="Marco"
        />
      </div>
      </div>

      <!-- Texto -->
      <div class="text-center max-w-2xl px-4 py-6">
        <h1 class="text-7xl md:text-8xl lg:text-9xl text-[rgb(209,172,0)] font-imperial mb-2 text-center">
          Hola, buenas!
        </h1>

        <div class="text-center max-w-xl md:max-w-2xl px-4">
        <p class="text-base md:text-lg text-[rgb(58,50,56)] font-mont">
          Soy Fanny, una chica de República Dominicana estudiando Diseño y Tecnologías Creativas en la UPV.
        </p>
        </div>
      </div>

    <!-- Carousel -->
      <div class="w-full max-w-xl md:max-w-2xl px-4 mb-8">
      <Carrus
          :photos="photos"
          :links="photoLinks"
          basePath="/imagines/home"
          :auto-play-delay="2000"
          class="carousel-contained"
        />
        </div>

    <!-- Botón Ver portafolios -->
     <div class="flex gap-5 items-center">
       <Button class="bg-[rgb(209,172,0)] hover:bg-[rgba(209,172,0,0.7)] text-white px-15 py-4 text-5xl font-imperial rounded-4xl">
          <RouterLink to="/portafolio">Ver portafolios</RouterLink>
        </Button>
      </div>
    </main>
  </LayoutPrincipal>
</template>

<style scoped>
@font-face {
  font-family: 'imperial';
  src: url('/fonts/imperial.woff2') format('woff2');
}

@font-face {
  font-family: 'mont';
  src: url('/fonts/mont.woff2') format('woff2');
}

.font-imperial {
  font-family: 'imperial', serif;
}

.font-mont {
  font-family: 'mont', sans-serif;
}


</style>