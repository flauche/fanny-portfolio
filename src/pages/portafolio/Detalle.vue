<script setup lang="ts">
import { computed, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { trabajos, type Trabajo } from './data';
import LayoutPrincipal from '@/layout/LayoutPrincipal.vue';
import { SquareArrowLeft } from 'lucide-vue-next';

const route = useRoute()
const router = useRouter()

const trabajo = ref<Trabajo | undefined>(
    trabajos.find(trab => trab.id === Number(route.params.id))
)

const imagenes = computed(() => {
  if (!trabajo.value) return [];
  return Array.isArray(trabajo.value.imago) 
    ? trabajo.value.imago 
    : [trabajo.value.imago];
});

const devolver = () => {
  // Debug - check what queries we have
  console.log('All queries:', route.query);
  console.log('From query:', route.query.from);
  console.log('Type of from:', typeof route.query.from);
  
  // Check if coming from home
  if (route.query.from === 'home') {
    console.log('Going back to home');
    router.push('/');
  } else {
    console.log('Going back to gallery');
    router.push({ 
      name: 'portafolio-gallery',
      query: { 
        year: route.query.year,
        categoria: route.query.categoria
      }
    });
  }
};
</script>

<template>
  <LayoutPrincipal>
    <div v-if="trabajo" class="main">
      
      <div class="titulus" @click="devolver">
        <small class="quote"> 
          {{ trabajo.quote }}
        </small>
        <h1 class="titulus-quote"> 
          {{ trabajo.nomen }}
        </h1>
      </div>
      
      <div class="contenido">
        <div v-if="imagenes.length === 1" class="imagen-container">
          <figure class="figure-quote">
            <img 
              :src="`/imagines/trabajos/${imagenes[0]}`" 
              :alt="trabajo.nomen" 
            />
          </figure>
          <p class="descriptione">
          {{ trabajo.descriptione }} 
          </p>
        </div>
        
        <div v-else class="multi-container">
          <div class="gallery-images">
            <figure 
              v-for="(imagen, index) in imagenes" 
              :key="index"
              class="figure-multiple"
            >
              <img 
                :src="`/imagines/trabajos/${imagen}`" 
                :alt="`${trabajo.nomen} - ${index + 1}`" 
              />
            </figure>
          </div>
          <p class="descriptione">
          {{ trabajo.descriptione }} 
          </p>
        </div>
      </div>
      <SquareArrowLeft 
        class="text-[#519061] icon-back mb-3"
        @click="devolver"/>
    </div>
  </LayoutPrincipal>
</template>

<style scoped>
.icon-back {
  width: 2.5rem;
  height: 2.5rem;
}

.main {
  width: 100%;
  max-width: 1200px;
  margin: 1.5rem auto;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

@media (min-width: 768px) {
  .main {
    padding: 0 3rem;
  }
}

@media (min-width: 1024px) {
  .main {
    padding: 0 4rem;
  }
}

.titulus {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
  cursor: pointer;
}

@media (min-width: 540px) {
  .titulus {
    flex-direction: row;
    justify-content: space-between;
    align-items: baseline;
    gap: 2rem;
  }
}

.titulus-quote {
  font-weight: 400;
  font-size: 1.875rem;
  line-height: 2.25rem;
  color: rgba(0, 0, 0, 0.5);
  font-style: italic;
  margin: 0;
}

.quote {
  color: #519061;
  font-weight: 600;
  font-size: 0.875rem;
  line-height: 1.5rem;
}

@media (min-width: 768px) {
  .quote {
    font-size: 1rem;
    font-weight: 300;
  }
  
  .titulus-quote {
    font-weight: 600;
  }
}

.contenido {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
}

.imagen-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

@media (min-width: 1024px) {
  .imagen-container {
    flex-direction: row;
    align-items: flex-start;
  }
}

.figure-quote {
  width: 100%;
  max-width: 100%;
  flex-shrink: 0;
}

.figure-quote img {
  width: 100%;
  height: auto;
  object-fit: contain;
  display: block;
  max-height: 70vh;
}

@media (min-width: 1024px) {
  .figure-quote {
    max-width: 65%;
  }
}

@media (min-width: 1024px) {
  .figure-quote {
    max-width: 65%;
  }
}

.gallery-images {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}

@media (min-width: 768px) {
  .gallery-images {
    grid-template-columns: repeat(2, 1fr);
    gap: 2.5rem;
  }
}

.figure-multiple {
  width: 100%;
}

.figure-multiple img {
  width: 100%;
  height: auto;
  object-fit: cover;
  display: block;
  border-radius: 0.5rem;
  max-height: 600px;
}

.figure-multiple {
  width: 100%;
}

.figure-multiple img {
  width: 100%;
  height: auto;
  object-fit: cover;
  display: block;
  border-radius: 0.5rem;
}

.descriptione {
  width: 100%;
  font-size: 1rem;
  line-height: 1.75rem;
  font-weight: 300;
  color: rgba(0, 0, 0, 0.6);
  margin: 0;
  margin-top: 1rem;
}

@media (min-width: 768px) {
  .descriptione {
    font-size: 1.125rem;
    line-height: 1.875rem;
  }
}

@media (min-width: 1024px) {
  .descriptione {
    font-size: 1.25rem;
    line-height: 2rem;
  }

  .imagen-container .descriptione {
    text-align: right;
    max-width: 35%;
  }
}
</style>