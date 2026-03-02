<script setup lang="ts">
import Button from '@/components/ui/button/Button.vue';
import { ref } from 'vue';
import type {DateValue} from 'reka-ui';
import { Mail } from 'lucide-vue-next';
import LayoutPrincipal from '@/layout/LayoutPrincipal.vue';

const dies = ref<DateValue>()

</script>

<template>
    <LayoutPrincipal>
        <div id="contactus" class="container mx-auto max-w-5xl px-4">

            <h2 class="text-3xl font-bold text-rgb(209, 172, 0) mb-8 text-center">Contáctame</h2>
                
            <div class="flex flex-col lg:flex-row gap-8 items-center">

            <!-- Mapa de Google Maps -->
            <div class="lg:block w-full lg:w-1/2 rounded-lg overflow-hidden shadow-lg">
                <div class="aspect-square">
                    <Mail />
                </div>
            </div>

                    <!-- Formulario -->
            <div class="w-full max-w-md mx-auto lg:max-w-none lg:w-1/2 ">
                <form  class="space-y-6 bg-white p-8 rounded-lg shadow-lg aspect-square">
                <div class="space-y-2">
                        
                    <Label for="nomen">Nombre</Label>
                    <Input type="nomen" required />

                </div>
                        
                <div class="space-y-2">
                    <Label for="cognomen">Apellidos</Label>
                    <Input type="cognomen" required />
                </div>

                <div class="space-y-2">

                    <Select required >
                    <SelectTrigger class="border-gray-200 bg-white text-gray-900">
                        <SelectValue placeholder="Seleccione una misión" />
                    </SelectTrigger >

                    <SelectContent class="bg-white">
                        <SelectItem value="rescatare">
                            Rescate de rehenes
                        </SelectItem>
                        <SelectItem value="investigare">
                            Investigación criminal
                        </SelectItem>
                        <SelectItem value="persequi">
                            Persecución de villanos
                        </SelectItem>
                        <SelectItem value="defendere">
                            Defensa de Gotham
                        </SelectItem>
                    </SelectContent>
                    </Select>
                </div>

                <div class="space-y-2">

                    <Label>Fecha de la misión</Label>
                    <Popover>
                    <PopoverTrigger asChild>
                        <Button variant="outline">
                        <span v-if="dies">
                            {{dies.day}}/{{ dies.month }}/{{ dies.year }}
                        </span>
                        <span v-else>
                            Seleccione una fecha
                        </span>
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent>
                        <Calendar v-model="dies" />
                    </PopoverContent>
                    </Popover>
                </div>

                <Button
                    type="submit"
                    class="w-full bg-[rgb(106,90,205)] hover:bg-[rgb(88,75,161)] text-white text-md mt-4"
                >
                    Enviar solicitud
                </Button>
                    
                </form>
            </div>
            </div>
        </div>
    </LayoutPrincipal>
</template>



<style scoped>

.fondo-home {
    background-color: rgb(250, 244, 211);
    height: 100vh;
    color: rgb(209, 172, 0);
}

.titulus-icon {
    width: 15%;
}

.botones > Button {
    margin-right: 0.5rem;
    background-color: rgb(209, 172, 0);
}

.botones > Button:hover {
    background-color: rgba(209, 172, 0, 0.7);
}

</style>