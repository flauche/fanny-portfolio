<script setup lang="ts">
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { ilustraciones, type Ilustracion } from './data';
import LayoutPrincipal from '@/layout/LayoutPrincipal.vue';

const route = useRoute()

const router = useRouter()

const ilustracion = ref<Ilustracion | undefined>(
    ilustraciones.find(ilus => ilus.id === Number(route.params.id))
)

</script>

<template>
  <LayoutPrincipal>
    <div v-if="ilustracion" class="flex w-full md:mx-auto my-6 gap-8">

        <div
          class="titulus max-w-[279px] ml-3"
          @click="router.push('/ilustracion')">
            <small class="quote"> 
              {{ ilustracion.quote }}
            </small>
        </div>

        <div>
            <h1 class="titulus-quote"> 
            {{ ilustracion.nomen }}
             </h1>

             <figure class="figure-quote mr-6">
              <img :src="`/imagines/illust/${ ilustracion?.imago }`" alt="" />
            </figure>

            <p class="descriptione">
                {{ ilustracion.descriptione }} 
            </p>
        </div>
      </div>

      <div class="info-quote justify-center">
              
            </div>

  </LayoutPrincipal>
</template>



<style scoped>

@media (min-width: 640px) {
  .titulus {
    text-align: right;
  }
}

@media (min-width: 1024px) {
  .titulus {
    flex-direction: row;
  }
}


    .titulus-quote {
  font-weight: 400;
  font-size: 1.875rem;
  line-height: 1.5rem;
  margin-bottom: 1.25rem;
  color: rgba(0,0,0,0.5);
  font-style: italic;
}

.quote {
  color: #519061;
  font-weight: 600;
  font-size: 1rem;
  line-height: 1.5rem;
}
 
@media (min-width: 1024px) {
  .quote {
    font-size: 1rem;
    line-height: 1.5rem;
  }
}
 
.descriptione {
  font-size: 1.25rem;
  line-height: 1.75rem;
  font-weight: 300;
  margin-bottom: 2.5rem;
  max-width: 43rem;
  color: rgba(0,0,0,0.6);
}
 
@media (min-width: 1024px) {
  .descriptione {
    font-size: 1.25rem;
    line-height: 1.75rem;
  }
}
 
@media (min-width: 1024px) {
  .info-quote {
    max-width: 48rem;
  }
}

.figure-quote {
  display: flex;
  margin-bottom: 1.25rem;
}

.figure-quote > img {
  object-fit: contain;
}

</style>