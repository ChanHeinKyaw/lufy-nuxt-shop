<template>
  <div>
    <div class="grid grid-cols-4 gap-5">
      <div v-for="p in products" :key="p.id">
        <ProductCart :product="p" />
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "products",
});

const {data: products} =await useFetch("https://fakestoreapi.com/products")

useHead({
  title: 'Lufy Nuxt',
  meta: [
    {name: 'description',content: 'Nuxt 3 Lufy'}
  ]
})
</script>
