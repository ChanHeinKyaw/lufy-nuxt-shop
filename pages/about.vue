<template>
  <div>
    <h2>About</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut placeat in
      nisi laudantium culpa adipisci rerum expedita nemo saepe voluptatum.
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut placeat in
      nisi laudantium culpa adipisci rerum expedita nemo saepe voluptatum.
    </p>
    <div>{{ data }}</div>
  </div>
</template>

<script setup>
  //  const { data } = await useFetch('/api/ninja?name=mario',{
  //   method: "post",
  //   body: {age: 30},
  //  })

     const { data } = await useFetch('/api/currency/ADA')
</script>

<style scoped>
h2 {
    margin-bottom: 20px;
    font-size: 36px;
}

p{
    margin: 20px 0;
}
</style>
