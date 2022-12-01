<template>
    <div>
        <h2>Products details for {{ id }}</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quam, maiores enim incidunt delectus autem omnis. Laboriosam ex aperiam nihil?</p>
    </div>
</template>

<script setup>
    const { id } = useRoute().params

    definePageMeta({
        layout: "products",
    });
</script>

<style scoped>

</style>