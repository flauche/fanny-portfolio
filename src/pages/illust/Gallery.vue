<script setup lang="ts">
import LayoutPrincipal from '@/layout/LayoutPrincipal.vue';
import { computed, ref } from 'vue';
import { ilustraciones } from './data';
import { CircleArrowRight, CircleArrowLeft } from 'lucide-vue-next';
import { useRouter } from 'vue-router'

const router = useRouter()

const inPagina = 4

const nuncPagina = ref(1)

const totalPaginae = Math.ceil(ilustraciones.length / inPagina)

const listaIllusts = computed(() => {
    const inicio = (nuncPagina.value - 1) * inPagina
    const fin = inicio + inPagina
    return ilustraciones.slice(inicio, fin)
})

const ireAdPaginam = (pagina: number) => {
    if(pagina >= 1 && pagina <= totalPaginae ) {
        nuncPagina.value = pagina
    }
}

const paginaNumeri: number[] = [ ...Array(totalPaginae)].map((_, i) => i + 1) // [1,2,3,4,5]

</script>

<template>
    <LayoutPrincipal>
        <div class="flex flex-col items-center justify-center w-full my-8 mx-auto gap-15">

        <div class="grid grid-cols-1 md:grid-cols-2 mx-auto gap-15">

            <Card 
             class="cursor-pointer w-105 h-80"
             v-for="ilustracion in listaIllusts"
             :key="ilustracion.id"
            >
                <CardContent 
                class="flex flex-col items-center gap-1 w-full px-0"
                @click="router.push({ name: 'ilustracion-detalle', params: { id: ilustracion.id } })"
                >
                    <img 
                    :src="`/imagines/illust/${ ilustracion.imago}`"
                    class="w-106 h-80 object-cover object-center mt-2"
                    />
                </CardContent>
            </Card> 
        </div>

        <div class="flex items-center justify-center gap-2">
            <CircleArrowLeft 
                @click="ireAdPaginam(nuncPagina - 1)"
                :class="['w-8 h-8 transition-colors',
                    nuncPagina === 1
                    ? 'text-gray-400 cursor-not-allowed'
                    : 'text-[#519061] cursor-pointer hover:text-green-700'
                ]"
            />

            <button
                :disabled="nuncPagina === totalPaginae"
                v-for="pagina in paginaNumeri"
                @click="ireAdPaginam(pagina)"
                :class="['w-10 h-10 rounded-md font-medium transition-colors ',
                    nuncPagina === pagina 
                    ? 'bg-[#1f6633] text-white'
                    : 'bg-[#519061] hover:bg-[#1f6633] hover:text-white'
                ]"
            >
                {{ pagina }}
            </button>

            <CircleArrowRight 
                @click="ireAdPaginam(nuncPagina + 1)"
                :class="['w-8 h-8 transition-colors',
                    nuncPagina === totalPaginae
                     ? 'text-gray-400 cursor-not-allowed'
                     : 'text-[#519061] cursor-pointer hover:text-green-700'
                ]"
            />

        </div>
   
   </div>
        
    </LayoutPrincipal>
</template>

<style scoped>

</style>
