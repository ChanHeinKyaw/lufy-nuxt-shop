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

      <!-- output the page content -->
      <div>
        <slot/>
      </div>
    </div>
  </template>
  
  <script setup></script>
  <style scoped>
  .router-link-exact-active{
    color: #12b488;
  }

  </style>
  