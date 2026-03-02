<script setup lang="ts">
import Button from '@/components/ui/button/Button.vue';
import LayoutPrincipal from '@/layout/LayoutPrincipal.vue';

</script>

<template>
        <LayoutPrincipal>

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