<script setup lang="ts">
import { ref, computed } from 'vue';
import LayoutPrincipal from '@/layout/LayoutPrincipal.vue';
import {
  NumberField,
  NumberFieldContent,
  NumberFieldDecrement,
  NumberFieldIncrement,
  NumberFieldInput,
} from '@/components/ui/number-field'

import { Badge } from '@/components/ui/badge'

import { educaciones, experiencias, habilidades } from './data';

const añoSeleccionado = ref(2018);

const educacionFiltrada = computed(() => 
  educaciones.filter(item => item.año <= añoSeleccionado.value)
  .reverse()
);

const experienciaFiltrada = computed(() => 
  experiencias.filter(item => item.año <= añoSeleccionado.value)
  .reverse()
);

</script>

<template>
  <LayoutPrincipal>
    <div class="bio-container">

      <div class="barra-año">
          <NumberField 
            v-model="añoSeleccionado"
            :min="2018"
            :max="2030"
            :format-options="{ useGrouping: false }"
            class="año-field"
          >
            <NumberFieldContent>
              <NumberFieldDecrement />
              <NumberFieldInput />
              <NumberFieldIncrement />
            </NumberFieldContent>
          </NumberField>
          </div>

        <div class="contenido-grid">
        
        <div class="sección-cv">
          <h2>Educación</h2>
          <div v-if="educacionFiltrada.length > 0" class="cv-items">
            <div 
              v-for="item in educacionFiltrada" 
              :key="item.año + item.titulo"
              class="cv-item"
            >
              <div class="cv-año">{{ item.año }}</div>
              <div class="cv-detalles">
                <h3>{{ item.titulo }}</h3>
                <p class="cv-institucion">{{ item.institucion }}</p>
              </div>
            </div>
          </div>
          <p v-else class="no-data">No hay educación registrada hasta {{ añoSeleccionado }}</p>
        </div>

        <div class="sección-cv">
          <h2>Experiencia</h2>
          <div v-if="experienciaFiltrada.length > 0" class="cv-items">
            <div 
              v-for="item in experienciaFiltrada" 
              :key="item.año + item.puesto"
              class="cv-item"
            >
              <div class="cv-año">{{ item.año }}</div>
              <div class="cv-detalles">
                <h3>{{ item.puesto }}</h3>
                <p class="cv-institucion">{{ item.empresa }}</p>
              </div>
            </div>
          </div>
          <p v-else class="no-data">No hay experiencia registrada hasta {{ añoSeleccionado }}</p>
        </div>

        <div class="sidebar">
          <div class="foto-container">
            <figure class="fotito">
              <img 
                src="/imagines/bio/fannyCV1.jpg" 
                alt="Fanny" 
              />
            </figure>
          </div>

          <h3 class="habilidades">Habilidades</h3>

          <div class="badges-container">
            <Badge 
              v-for="habilidad in habilidades" 
              :key="habilidad"
              variant="golden"
            >
              {{ habilidad }}
            </Badge>
          </div>
        </div>
      </div>
    </div>
  </LayoutPrincipal>
</template>

<style scoped>
.bio-container {
  width: 100%;
  max-width: 1400px;
  margin: 2rem auto;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.barra-año {
  width: 100%;
  padding-bottom: 1.5rem;
  color: #519061;
}

.año-field {
  width: 100%;
  max-width: 250px;
}

.contenido-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2.5rem;
}

@media (min-width: 768px) {
  .contenido-grid {
    grid-template-columns: 1fr 1fr;
  }

  .sidebar {
    order: 0;
    grid-column: 1 / -1;
  }

  .cv-section:nth-child(1) {
    order: 0;
  }

  .cv-section:nth-child(2) {
    order: 0;
  }
}

@media (min-width: 1024px) {
  .contenido-grid {
    grid-template-columns: 1fr 1fr 300px;
    gap: 3rem;
  }

  .sidebar {
    order: 0;
    grid-column: auto;
  }

  .barra-año {
    display: flex;
    align-items: center;
  }

  .year-field {
    max-width: calc(100% - 350px);
  }
}

.sección-cv {
  width: 100%;
}

.sección-cv h2 {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: #222;
}

.cv-items {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.cv-item {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid #e5e5e5;
}

.cv-item:last-child {
  border-bottom: none;
}

.cv-año {
  font-size: 1rem;
  font-weight: 700;
  color: #519061;
}

.cv-detalles h3 {
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 0.25rem;
  color: #222;
}

.cv-institucion {
  font-size: 0.95rem;
  color: #666;
  margin-bottom: 0.5rem;
  font-style: italic;
}

.no-data {
  color: #999;
  font-style: italic;
  padding: 2rem 0;
}

.sidebar {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
}

@media (min-width: 320px) {
  .sidebar {
    order: -1;
  }

  .cv-section:nth-child(1) {
  order: 1;
  }

  .cv-section:nth-child(2) {
  order: 2; 
  }
}

@media (min-width: 1024px) {
  .sidebar {
    align-items: flex-start;
  }
}

.foto-container {
  width: 100%;
  max-width: 250px;
}

@media (min-width: 1024px) {
  .foto-container {
    max-width: 100%;
  }
}

.fotito {
  width: 100%;
  aspect-ratio: 1;
  margin: 0;
  overflow: hidden;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.fotito img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.habilidades {
  font-size: 1.25rem;
  font-weight: 600;
  color: #222;
  margin: 0;
  width: 100%;
  text-align: left;
}

@media (max-width: 1024px) {
  .habilidades {
    text-align: center;
  }
}

.badges-container {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: center;
  width: 100%;
}

@media (min-width: 1024px) {
  .badges-container {
    justify-content: flex-start;
  }
}

@media (min-width: 768px) {
  .bio-container {
    padding: 0 2rem;
  }
}

@media (min-width: 1024px) {
  .bio-container {
    padding: 0 3rem;
  }
}
</style>