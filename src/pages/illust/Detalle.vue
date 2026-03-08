<script setup lang="ts">
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { ilustraciones, type Ilustracion } from './data';
import LayoutPrincipal from '@/layout/LayoutPrincipal.vue';
import { SquareArrowLeft } from 'lucide-vue-next';

const route = useRoute()
const router = useRouter()

const ilustracion = ref<Ilustracion | undefined>(
    ilustraciones.find(ilus => ilus.id === Number(route.params.id))
)

const devolver = () => {
  const año = route.query.year;
  router.push({ 
    path: '/ilustracion',
    query: año ? { year: año.toString() } : undefined
  });
};

</script>

<template>
  <LayoutPrincipal>
    <div v-if="ilustracion" class="main">
      
      <div class="titulus" @click="devolver">
        <small class="quote"> 
          {{ ilustracion.quote }}
        </small>
        <h1 class="titulus-quote"> 
          {{ ilustracion.nomen }}
        </h1>
      </div>
      
      <div class="contenido">
        <figure class="figure-quote">
          <img 
            :src="`/imagines/illust/${ ilustracion?.imago }`" 
            :alt="ilustracion.nomen" 
          />
        </figure>
        <p class="descriptione">
          {{ ilustracion.descriptione }} 
        </p>
      </div>
      <SquareArrowLeft 
        class="text-[#519061] icon-back mb-3"
        @click="router.push('/ilustracion')"/>
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

@media (min-width: 1024px) {
  .contenido {
    flex-direction: row;
    align-items: flex-start;
    gap: 3rem;
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
    max-width: 50%;
  }
}

.descriptione {
  width: 100%;
  font-size: 1rem;
  line-height: 1.75rem;
  font-weight: 300;
  color: rgba(0, 0, 0, 0.6);
  margin: 0;
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
    text-align: right;
  }
}
</style>