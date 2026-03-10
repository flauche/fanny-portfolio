<script setup lang="ts">
import LayoutPrincipal from '@/layout/LayoutPrincipal.vue';
import { computed, onMounted, ref, watch } from 'vue';
import { trabajos } from './data';
import { useRouter, useRoute } from 'vue-router'
import { Slider } from '@/components/ui/slider'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'

const router = useRouter()
const route = useRoute();

// const años = [2020, 2021, 2025, 2026];

const categoriaSeleccionada = ref(
  route.query.categoria ? String(route.query.categoria) : 'todo'
);

watch(() => route.query.categoria, (nuevaCategoria) => {
  categoriaSeleccionada.value = nuevaCategoria ? String(nuevaCategoria) : 'todo';
});

watch(categoriaSeleccionada, (nuevaCategoria) => {
  router.replace({
    query: {
      categoria: nuevaCategoria,
      year: route.query.year
    }
  });
});


const añosDisponibles = computed(() => {
  let trabajosFiltrados = trabajos;

  if (categoriaSeleccionada.value !== 'todo') {
    trabajosFiltrados = trabajos.filter(trab => 
      trab.categoria.includes(categoriaSeleccionada.value as any)
    );
  }

  const años = [...new Set(trabajosFiltrados.map(trab => trab.año))];
  return años.sort((a, b) => a - b);
});

const añoSeleccionadoIndex = ref([añosDisponibles.value.length - 1]);

watch(() => route.query.year, (nuevoAño) => {
  if (nuevoAño) {
    const numAño = Number(nuevoAño);
    const index = añosDisponibles.value.indexOf(numAño);
    if (index >= 0) {
      añoSeleccionadoIndex.value = [index];
    }
  }
}, { immediate: true });

const añoSeleccionado = computed(() => {
  const index = añoSeleccionadoIndex.value[0] as number;
  if (index >= añosDisponibles.value.length) {
    añoSeleccionadoIndex.value = [añosDisponibles.value.length - 1];
    return añosDisponibles.value[añosDisponibles.value.length - 1];
  }
  return añosDisponibles.value[index];
});

const filtroTrabajos = computed(() => {
  let filtro = trabajos.filter(trabajo => trabajo.año === añoSeleccionado.value);
  
  if (categoriaSeleccionada.value !== 'todo') {
    filtro = filtro.filter(trab => 
      trab.categoria.includes(categoriaSeleccionada.value as any)
    );
  }
  
  return filtro;
});

const cambioAño = (value: number[] | undefined) => {
  if (value && value.length > 0) {
    añoSeleccionadoIndex.value = value;
  }
};

const irDetalle = (id: number) => {
  router.push({ 
    name: 'portafolio-detalle', 
    params: { id },
    query: { 
      year: String(añoSeleccionado.value),
      categoria: categoriaSeleccionada.value
    }
  });
};

onMounted(() => {
  router.afterEach(() => {

    if (route.query.categoria) {
      categoriaSeleccionada.value = String(route.query.categoria);
    } else {
      categoriaSeleccionada.value = 'todo';
    }
    
    if (route.query.year) {
      const numAño = Number(route.query.year);
      const index = añosDisponibles.value.indexOf(numAño);
      if (index >= 0) {
        añoSeleccionadoIndex.value = [index];
      }
    }
  });
});

</script>

<template>
  <LayoutPrincipal>
    <div class="gallery" :class="{ 'sin-slider': añosDisponibles.length <= 1 }">

      <div v-if="añosDisponibles.length > 1" class="slider-sidebar">
        <div class="slider-wrapper">
          <h1 class="slider-title">Año</h1>
          
          <div class="slider-container">
              <Slider
              :model-value="añoSeleccionadoIndex"
              @update:model-value="cambioAño"
              :min="0"
              :max="añosDisponibles.length - 1"
              :step="1"
              orientation="vertical"
              :inverted="true"
              class="año-slider año-slider-vertical"
              />

              <Slider
                :model-value="añoSeleccionadoIndex"
                @update:model-value="cambioAño"
                :min="0"
                :max="añosDisponibles.length - 1"
                :step="1"
                orientation="horizontal"
                class="año-slider año-slider-horizontal"
              />
            
            <div class="year-labels">
              <span 
                v-for="(año, index) in añosDisponibles" 
                :key="año"
                :class="['año-label', { 'active': añoSeleccionadoIndex[0] === index }]"
              >
                {{ año }}
              </span>
            </div>
          </div>
        </div>
      </div>
        
      <div class="contenido-principal">
          <div class="filtro-categoria">
            <RadioGroup v-model="categoriaSeleccionada" class="radio-group">
              <div class="radio-item">
                <RadioGroupItem id="r1" value="todo" />
                <Label for="r1">Todo</Label>
              </div>
              <div class="radio-item">
                <RadioGroupItem id="r2" value="ilustracion" />
                <Label for="r2">Ilustración</Label>
              </div>
              <div class="radio-item">
                <RadioGroupItem id="r3" value="editorial" />
                <Label for="r3">Editorial</Label>
              </div>
              <div class="radio-item">
                <RadioGroupItem id="r4" value="dibujos" />
                <Label for="r4">Dibujos</Label>
              </div>
            </RadioGroup>
          </div>

          <div v-if="añosDisponibles.length === 1" class="year-single">
            <span class="año-label active">{{ añosDisponibles[0] }}</span>
          </div>

          <div v-if="filtroTrabajos.length > 0" class="trabajos-grid">
            <div
              class="card-item"
              v-for="trabajo in filtroTrabajos"
              :key="trabajo.id"
              @click="irDetalle(trabajo.id)"
            >
              <img 
                :src="`/imagines/trabajos/${Array.isArray(trabajo.imago) ? trabajo.imago[0] : trabajo.imago}`"
                :alt="trabajo.nomen"
                class="card-image"
              />
            </div>
          </div>

        <div v-else class="no-works">
          <p>No hay trabajos en esta categoría y año.</p>
        </div>

        
      </div>
    </div>
  </LayoutPrincipal>
</template>

<style scoped>
.gallery {
  display: grid;
  grid-template-columns: 150px 1fr;
  gap: 3rem;
  width: 100%;
  max-width: 1400px;
  margin: 2rem auto;
  padding: 0 1rem;
  min-height: 70vh;
}

.gallery.sin-slider {
  grid-template-columns: 1fr;
}

.filtro-categoria {
  width: 100%;
}

.radio-group {
  display: flex;
  gap: 2rem;
  justify-content: flex-start;
  padding: 1rem;
  color: #1f6633;
}

.radio-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #1f6633;
}

.slider-sidebar {
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

.year-single {
  text-align: center;
  padding: 1rem;
}

.year-single .año-label {
  font-size: 1.5rem;
}

.no-works {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 300px;
  color: #666;
  font-size: 1.125rem;
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

.trabajos-contenedor {
  grid-area: trabajos;
}

.contenido-principal {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.trabajos {
  text-align: center;
  color: #666;
  margin-bottom: 1.5rem;
  font-size: 0.95rem;
}

.trabajos-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
}

@media (min-width: 1024px) {
  .trabajos-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

.card-item {
  cursor: pointer;
  width: 100%;
  aspect-ratio: 4/3;
  transition: transform 0.2s;
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

@media (max-width: 768px) {
  .gallery {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .slider-sidebar {
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
    display: flex;
  }
  
  .year-labels {
    flex-direction: row;
    width: 300px;
    height: auto;
    justify-content: space-between;
  }

    .trabajos-grid {
    grid-template-columns: 1fr;
  }
}
</style>