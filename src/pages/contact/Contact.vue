<script setup lang="ts">
import Button from '@/components/ui/button/Button.vue';
import LayoutPrincipal from '@/layout/LayoutPrincipal.vue';

import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input'

import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';

import { ref } from 'vue';

const imagoCirca = ref<string>('fotitoYo1.jpg')

</script>

<template>
    <LayoutPrincipal>
        <div class="contactus flex flex-col lg:flex lg:flex-row">
<div class="photo-section">
        <figure class="contact-photo">
          <img 
            :src="`/imagines/contact/${ imagoCirca }`" 
            alt="Foto de Fanny"
            @mouseenter="imagoCirca='fotitoYo2.jpg'"
            @mouseleave="imagoCirca='fotitoYo1.jpg'"
          />
        </figure>
      </div>

      <div class="tabs-section">
        <Tabs default-value="form" class="tabs-container">
          <TabsList class="tabs-list">
            <TabsTrigger value="form" class="text-[rgb(209,172,0)]">Contáctame</TabsTrigger>
            <TabsTrigger value="redes" class="text-[rgb(209,172,0)]">Redes</TabsTrigger>
          </TabsList>

          <TabsContent value="form" class="tab-content">
            <form class="contact-form">
              <div class="form-field">
                <Label for="nombre" class="form-label">Nombre</Label>
                <Input 
                  id="nombre" 
                  type="text" 
                  required 
                  class="input-visible"
                />
              </div>

              <div class="form-field">
                <Label for="apellidos" class="form-label">Apellidos</Label>
                <Input 
                  id="apellidos"
                  type="text" 
                  required 
                  class="input-visible"
                />
              </div>

              <div class="form-field">
                <Label for="comentario" class="form-label">Comentarios</Label>
                <textarea 
                  id="comentario"
                  required 
                  class="input-long"
                ></textarea>
              </div>

              <Button
                type="submit"
                class="submit-button"
              >
                Enviar
              </Button>
            </form>
          </TabsContent>

          <TabsContent value="redes" class="tab-content">
            <div class="redes-content">
              <h3 class="redes-title">Sígueme en mis redes</h3>
              <div class="redes-links">
                <a href="https://www.behance.net" target="_blank" class="red-link">
                  Behance
                </a>
                <a href="https://www.instagram.com/fannylau.art/" target="_blank" class="red-link">
                  Instagram
                </a>
                <a href="https://www.linkedin.com/in/fanny-lau" target="_blank" class="red-link">
                  Linkedin
                </a>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  </LayoutPrincipal>
</template>

<style scoped>
.contactus {
  width: 100%;
  max-width: 1200px;
  margin: 3rem auto;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

@media (min-width: 1024px) {
  .contactus {
    flex-direction: row;
    gap: 4rem;
    align-items: center;
  }
}

.photo-section {
  flex: 1;
  display: flex;
  justify-content: center;
}

@media (min-width: 1024px) {
  .photo-section {
    justify-content: flex-start;
  }
}

.contact-photo {
  width: 100%;
  max-width: 400px;
  aspect-ratio: 1;
  margin: 0;
  overflow: hidden;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.contact-photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.tabs-section {
  flex: 1;
  width: 100%;
  display: flex;
  justify-content: center;
  
}

@media (min-width: 1024px) {
  .tabs-section {
    justify-content: flex-end;
  }
}

.tabs-container {
  width: 100%;
  max-width: 500px;
}

.tabs-list {
  width: 100%;
  background-color: white;
  border-radius: 0.5rem;
  padding: 0.25rem;
  margin-bottom: 1.5rem;
}

.tab-content {
  width: 100%;
}

.contact-form {
  width: 100%;
  background-color: white;
  padding: 2rem;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-field {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
}

.form-label {
  color: rgb(209, 172, 0);
  font-weight: 500;
  font-size: 0.95rem;
}

.input-visible {
  border: 1px solid rgb(209, 172, 0) !important;
  background-color: white !important;
  padding: 0.5rem 0.75rem;
  border-radius: 0.375rem;
  font-size: 0.95rem;
  width: 100%;
}

.input-visible:focus {
  border-color: rgb(209, 172, 0) !important;
  outline: none;
  box-shadow: 0 0 0 2px rgba(209, 172, 0, 0.2);
}

.input-long {
  border: 1px solid rgb(209, 172, 0) !important;
  background-color: white !important;
  border-radius: 0.375rem;
  padding: 0.75rem;
  font-size: 0.95rem;
  font-family: inherit;
  width: 100%;
  min-height: 150px;
  resize: vertical;
}

.input-long:focus {
  border-color: rgb(209, 172, 0) !important;
  outline: none;
  box-shadow: 0 0 0 2px rgba(209, 172, 0, 0.2);
}

.submit-button {
  width: 100%;
  background-color: rgb(209, 172, 0);
  color: white;
  font-size: 1rem;
  padding: 0.75rem;
}

.submit-button:hover {
  background-color: rgba(209, 172, 0, 0.7);
}

.redes-content {
  background-color: white;
  padding: 2rem;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.redes-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: rgb(209, 172, 0);
  text-align: center;
}

.redes-links {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
}

.red-link {
  font-size: 1.25rem;
  font-weight: 600;
  color: rgb(209, 172, 0);
  text-decoration: none;
  transition: opacity 0.2s;
}

.red-link:hover {
  opacity: 0.7;
}

@media (min-width: 768px) {
  .contactus {
    padding: 0 2rem;
  }
}

@media (min-width: 1024px) {
  .contactus {
    padding: 0 3rem;
  }
}
</style>