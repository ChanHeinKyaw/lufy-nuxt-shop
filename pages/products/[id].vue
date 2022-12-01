<template>
    <div>
        <p>{{ product.title }}</p>
        <p>{{ product.price }}</p>
        <p>{{ product.id }}</p>
    </div>
</template>

<script setup>
    definePageMeta({
        layout: "products",
    });

    const { id } = useRoute().params
    const url = "https://fakestoreapi.com/products/" + id;
    const {data: product} =await useFetch(url, {key: id})
</script>

<style scoped>

</style>