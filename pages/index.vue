<template>
  <div>
    <header>
      <nav>
        <NuxtLink to="/">Lufy Shop</NuxtLink>
        <ul>
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li><NuxtLink to="/about">About</NuxtLink></li>
          <li><NuxtLink to="/products">Products</NuxtLink></li>
        </ul>
        <a href="/about">normal link -- about page</a>
      </nav>
    </header>
    <h2>Home</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut placeat in
      nisi laudantium culpa adipisci rerum expedita nemo saepe voluptatum.
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut placeat in
      nisi laudantium culpa adipisci rerum expedita nemo saepe voluptatum.
    </p>
  </div>
</template>

<script setup></script>

<style scoped>
h2 {
    margin-bottom: 20px;
    font-size: 36px;
}

p{
    margin: 20px 0;
}
</style>
