<script setup lang="ts">
import Button from '@/components/ui/button/Button.vue';
import { Instagram, Linkedin } from 'lucide-vue-next'

</script>

<template>
    <div class="min-h-screen bg-[rgb(250,244,211)] flex flex-col">
    <!-- Header con icono home y botones -->
    <header class="fixed top-0 left-0 right-0 z-50 bg-[rgb(209,172,0)] flex items-center justify-between px-4 md:px-6 py-3 shadow-sm">
      <!-- Icono home -->
      <RouterLink to="/" class="shrink-0">
        <img 
          class="h-6 w-auto md:h-10" 
          src="/imagines/home/iconFanny1.svg" 
          alt="Home"
        />
      </RouterLink>

      <!-- Botones de navegación -->
      <div class="flex gap-2">
        <Button class="bg-[rgb(250,244,211)] hover:bg-[rgba(250,244,211,0.7)] text-[rgb(209,172,0)]">
          <RouterLink to="/portafolios">Portafolios</RouterLink>
        </Button>
        <Button class="bg-[rgb(250,244,211)] hover:bg-[rgba(250,244,211,0.7)] text-[rgb(209,172,0)]">
          <RouterLink to="/bio">Bio</RouterLink>
        </Button>
        <Button class="bg-[rgb(250,244,211)] hover:bg-[rgba(250,244,211,0.7)] text-[rgb(209,172,0)]">
          <RouterLink to="/contact">Contact</RouterLink>
        </Button>
      </div>
    </header>

    <div class="h-[60px] md:h-[100px]"></div>

     <!-- Contenido de cada página -->
    <main class="flex-grow">
      <slot />
    </main>
    

    <footer class="bg-[rgb(209,172,0)] py-4 md:py-6 px-4 md:px-6 mt-auto">
        <div class="flex items-center justify-between">
	        <p class="text-sm md:text-base text-[rgb(250,244,211)]">©2026 Fanny Lau Chen </p>

            <div class="flex items-center gap-3 md:gap-4">
              <a href="https://www.instagram.com/fannylau.art/" target="_blank" class="text-[rgb(250,244,211)] hover:text-[rgba(250,244,211,0.7)] transition-colors">
                <Instagram class="w-5 h-5 md:w-6 md:h-6" />
              </a>
              <a href="https://www.linkedin.com/in/fanny-lau" target="_blank" class="text-[rgb(250,244,211)] hover:text-[rgba(250,244,211,0.7)] transition-colors">
              <Linkedin />
              </a>
            </div>
        </div> 
     </footer>
    </div>
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