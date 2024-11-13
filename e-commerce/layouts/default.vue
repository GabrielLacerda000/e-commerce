<script setup>
useHead({
  title: 'E-commerce',
  link: [{
     rel: 'stylesheet',
     href: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css'
  }],
  bodyAttrs: {
    class: 'bg-neutral-100 font-semibold font-poppins'
  },
})
</script>

<template>
    <NuxtLoadingIndicator />
    <div class="min-h-screen flex flex-col font-montserrat">
      <NavBar />

      <main class="flex-1 container mx-auto p-4">
        <slot />
      </main>
  
      <Footer />
    </div>
  </template>

<style>
.font-montserrat {
    font-family: Inter;
}
</style>