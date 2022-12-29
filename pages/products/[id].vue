<template>
    <div>
        <Head>
            <Title>Nuxt Lufy | {{ product.title }}</Title>
            <Meta name="description" :content="product.descriptioin"></Meta>
        </Head>
        <ProductDetail :product="product" />
    </div>
</template>

<script setup>
    definePageMeta({
        layout: "products",
    });

    const { id } = useRoute().params
    const url = "https://fakestoreapi.com/products/" + id;
    const {data: product} =await useFetch(url, {key: id})

    if(!product.value){
        throw createError({statusCode: 404, statusMessage: 'Product not found', fatal: true});
    }
</script>

<style scoped>

</style>