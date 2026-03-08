<script setup lang="ts">
import LayoutPrincipal from '@/layout/LayoutPrincipal.vue';
import { computed, ref } from 'vue';
import { ilustraciones } from './data';
import { useRouter, useRoute } from 'vue-router'
import { Slider } from '@/components/ui/slider'

const router = useRouter()
const route = useRoute();

const años = [2020, 2021, 2025];
const añoInicial = route.query.year ? 
  años.indexOf(Number(route.query.year)) : 2;

const añoSeleccionadoIndex = ref([añoInicial >= 0 ? añoInicial : 2]);

const añoSeleccionado = computed(() => {
  const index = añoSeleccionadoIndex.value[0] as number;
  return años[index];
});

const filtroIlustraciones = computed(() => {
  return ilustraciones.filter(illust => illust.año === añoSeleccionado.value);
});

const inPagina = 4
const nuncPagina = ref(1)

const listaIllusts = computed(() => {
    const inicio = (nuncPagina.value - 1) * inPagina
    const fin = inicio + inPagina
    return filtroIlustraciones.value.slice(inicio, fin);
})

const cambioAño = (value: number[] | undefined) => {
  if (value && value.length > 0) {
    añoSeleccionadoIndex.value = value;
    nuncPagina.value = 1;
  }
};

const irDetalle = (id: number) => {
  router.push({ 
    name: 'ilustracion-detalle', 
    params: { id },
    query: { year: String(años[añoSeleccionadoIndex.value[0] as number])  }
  });
};

</script>

<template>
  <LayoutPrincipal>
    <div class="gallery">
      <div class="slider-sidebar">
        <div class="slider-wrapper">
          <h1 class="slider-title">Año</h1>
          
          <div class="slider-container">
            <Slider
              :model-value="añoSeleccionadoIndex"
              @update:model-value="cambioAño"
              :min="0"
              :max="años.length - 1"
              :step="1"
              orientation="vertical"
              :inverted="true"
              class="año-slider año-slider-vertical"
            />

            <Slider
              :model-value="añoSeleccionadoIndex"
              @update:model-value="cambioAño"
              :min="0"
              :max="años.length - 1"
              :step="1"
              orientation="horizontal"
              class="año-slider año-slider-horizontal"
            />
            
            <div class="year-labels">
              <span 
                v-for="(año, index) in años" 
                :key="año"
                :class="['año-label', { 'active': añoSeleccionadoIndex[0] === index }]"
              >
                {{ año }}
              </span>
            </div>
          </div>
        </div>
      </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mx-auto">
          <div
            class="card-item"
            v-for="ilustracion in listaIllusts"
            :key="ilustracion.id"
            @click="irDetalle(ilustracion.id)"
          >
            <img 
              :src="`/imagines/illust/${ ilustracion.imago}`"
              :alt="ilustracion.nomen"
              class="card-image"
            />
          </div>
        </div>
      
        </div>
  </LayoutPrincipal>
</template>

<style scoped>
.gallery {
  display: flex;
  gap: 3rem;
  width: 100%;
  max-width: 1400px;
  margin: 2rem auto;
  padding: 0 1rem;
  min-height: 70vh;
}

.slider-sidebar {
  flex-shrink: 0;
  width: 150px;
  position: sticky;
  top: 100px;
  height: fit-content;
}

.slider-wrapper {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-items: center;
}

.slider-title {
  font-size: 1.125rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 0.5rem;
  align-items: center;
  color: #1f6633;
}

.slider-container {
  display: flex;
  align-items: center;
  gap: 1rem;
  justify-content: center;
}

.año-slider :deep(span[data-orientation]) {
  position: absolute;
  background-color: #e5e5e5;
  border: 2px solid #1f6633;
}

.año-slider-vertical {
  height: 300px;
  display: block;
}

.año-slider-horizontal {
  width: 300px;
  display: none;
}

.year-labels {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 300px;
  padding: 0;
}

.año-label {
  font-size: 1rem;
  color: #519061;
  transition: all 0.3s;
  font-weight: 500;
  line-height: 1;
}

.año-label.active {
  color: #1f6633;
  font-weight: 700;
  font-size: 1.2rem;
}

.gallery-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.works-info {
  text-align: center;
  padding: 0.5rem;
}

.card-item {
  cursor: pointer;
  width: 100%;
  max-width: 403px;
  height: 262px;
  transition: transform 0.2s;
  margin: 0 auto;
  overflow: hidden;
  border-radius: 0.5rem;
}

.card-item:hover {
  transform: translateY(-8px);
}

.card-image {
  width: 100%;
  height: 262px;
  object-fit: cover;
  object-position: center;
  display: block;
}

.pagination {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 1rem;
}

.page-button {
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 0.375rem;
  border: none;
  background-color: #519061;
  color: white;
  cursor: pointer;
  transition: background-color 0.2s;
}

.page-button:hover {
  background-color: #1f6633;
}

.page-button.active {
  background-color: #1f6633;
}

@media (max-width: 768px) {
  .gallery {
    flex-direction: column;
    gap: 2rem;
  }
  
  .slider-sidebar {
    width: 100%;
    position: static;
  }
  
  .slider-container {
    flex-direction: column;
    gap: 1.5rem;
  }
  
  .año-slider-vertical {
    display: none;
  }
  
  .año-slider-horizontal {
    display: block;
  }
  
  .year-labels {
    flex-direction: row;
    width: 300px;
    height: auto;
    justify-content: space-between;
  }
}
</style>