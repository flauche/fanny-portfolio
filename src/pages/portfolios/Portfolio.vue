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

.extra-nav {
    background-color: white;
    opacity: 0.7;
    box-shadow: rgba(0, 0, 0, 0.7);
    position: fixed;
    top: 0;
    width: 11rem;
    border-radius: 0 0 1rem 1rem;
    z-index: 1;
}

@media (min-width: 640px){
  .extra-nav {
    width: 100%;
    border-radius: 0;
    opacity: 1;
    left: 0;
  }
}

</style>