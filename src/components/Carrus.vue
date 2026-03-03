<script setup lang="ts">
import { Card, CardContent } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'

interface Props {
    photos: string[]
    basePath: string
    autoPlayDelay?: number
    loop?: boolean
    dragFree?: boolean
    links?: string[]
}

const props = withDefaults(defineProps<Props>(), {
    autoPlayDelay: 2000,
    loop:true,
    dragFree: true,
    links: () => []
}) 

</script>

<template>
    <Carousel 
    class="carousel-full-width"
    :opts="{
      loop: props.loop,
      dragFree: props.dragFree
    }"
    :plugins="[Autoplay({
      delay: props.autoPlayDelay,
    })]"
  >

    <CarouselContent>
        <CarouselItem v-for="(photo, index) in props.photos" :key="index">
            <div class="p-1">
            <Card class="border-none shadow-none bg-transparent">
                <CardContent class="flex items-center justify-center p-0">
                    <RouterLink 
                        :to="props.links[index] || '#'" 
                        class="block w-full h-full group"
                    >
                        <img 
                            :src="`${props.basePath}/${ photo }.jpg`" 
                            alt="`Imagen ${ index + 1 } `"
                            class="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-70"
                        >
                    </RouterLink>
                </CardContent>
            </Card>
            </div>
        </CarouselItem>
        </CarouselContent>
        <CarouselPrevious class="bg-gray-900 text-white hidden md:flex justify-center items-center"/>
        <CarouselNext class="bg-gray-900 text-white hidden md:flex justify-center items-center"/>
    </Carousel>
</template>



<style scoped>

</style>