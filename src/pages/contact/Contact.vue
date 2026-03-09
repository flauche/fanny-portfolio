<script setup lang="ts">
import Button from '@/components/ui/button/Button.vue';
import LayoutPrincipal from '@/layout/LayoutPrincipal.vue';

</script>

<template>
    <LayoutPrincipal>
        <div id="contactus" class="contactus flex flex-col lg:flex lg:flex-row">

            <!-- Redes -->
            <div class="redes-section">
                <h2 class="section-title">Redes</h2>
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

                    <!-- Formulario -->
            <div class="form-section">
                <h2 class="text-3xl font-bold text-rgb(209, 172, 0) mb-8 text-center text-[rgb(209,172,0)]">Contáctame</h2>
                <form class="contact-form">
                <div class="form-field text-[rgb(209,172,0)]">
                        
                    <Label for="nomen">Nombre</Label>
                    <Input 
                        id="nombre" 
                        type="text" 
                        required 
                        class="input-visible"
                        />
                        
                    <Label for="cognomen">Apellidos</Label>
                    <Input 
                        id="cognomen" 
                        type="text" 
                        required 
                        class="input-visible"
                        />

                    <Label for="comentario">Comentarios</Label>
                    <textarea
                        id="comentario" 
                        type="text" 
                        required 
                        class="input-long"
                        ></textarea>
                </div>

                <Button
                    type="submit"
                    class="w-full bg-[rgb(209,172,0)] hover:bg-[rgba(209,172,0,0.7)] text-white text-md mt-4 max-w-[600px]"
                >
                    Enviar solicitud
                </Button>
                </form>
                

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
    align-items: flex-start;
  }
}

.redes-section {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 200px;
}

@media (max-width: 1024px) {
    .redes-section {
        align-self: center;
    }
}

.section-title {
  font-size: 2rem;
  font-weight: 700;
  color: rgb(209, 172, 0);
  text-align: center;
}

@media (min-width: 1024px) {
  .section-title {
    text-align: left;
  }
}

.redes-links {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  text-align: center;
}

@media (min-width: 1024px) {
  .redes-links {
    text-align: left;
  }
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

.form-section {
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.contact-form {
  width: 100%;
  max-width: 600px;
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
}

.input-visible {
  border: 1px solid rgb(209, 172, 0) !important;
  background-color: white !important;
  padding: 0.5rem 0.75rem;
  border-radius: 0.375rem;
  font-size: 0.95rem;
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
  height: 200px;
}

.input-long:focus {
  border-color: rgb(209, 172, 0) !important;
  outline: none;
  box-shadow: 0 0 0 2px rgba(209, 172, 0, 0.2);
}

</style>