<script setup lang="ts">
import Button from '@/components/ui/button/Button.vue';
import { Instagram, Linkedin } from 'lucide-vue-next'

</script>

<template>
    <div class="min-h-screen bg-[rgb(250,244,211)] flex flex-col">
    <!-- Header con icono home y botones -->
    <header class="flex items-center justify-between px-4 md:px-6 py-3">
      <!-- Icono home -->
      <RouterLink to="/" class="shrink-0">
        <img 
          class="h-6 w-auto md:h-10" 
          src="/imagines/home/iconFanny.svg" 
          alt="Home"
        />
      </RouterLink>

      <!-- Botones de navegación -->
      <div class="flex gap-2">
        <Button class="bg-[rgb(209,172,0)] hover:bg-[rgba(209,172,0,0.7)]">
          <RouterLink to="/portfolio">Portfolio</RouterLink>
        </Button>
        <Button class="bg-[rgb(209,172,0)] hover:bg-[rgba(209,172,0,0.7)]">
          <RouterLink to="/bio">Bio</RouterLink>
        </Button>
        <Button class="bg-[rgb(209,172,0)] hover:bg-[rgba(209,172,0,0.7)]">
          <RouterLink to="/contact">Contact</RouterLink>
        </Button>
      </div>
    </header>

     <!-- Contenido de cada página -->
    <main class="flex-grow">
      <slot />
    </main>
    

    <footer class="bg-[rgb(209,172,0)] py-4 md:py-6 px-4 md:px-6 mt-auto">
        <div class="flex items-center justify-between max-w-7xl mx-auto">
	        <p class="text-sm md:text-base text-white">© Fanny 2026</p>

            <div class="flex items-center gap-3 md:gap-4">
              <a href="https://www.instagram.com/fannylau.art/" target="_blank" class="text-white hover:text-gray-200 transition-colors">
                <Instagram class="w-5 h-5 md:w-6 md:h-6" />
              </a>
              <a href="https://www.linkedin.com/in/fanny-lau" target="_blank" class="text-white hover:text-gray-200 transition-colors">
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