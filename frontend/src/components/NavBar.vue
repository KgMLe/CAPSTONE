<template>
  <div>
  <nav class="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="material-symbols-outlined">menu_open</span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
       <li class="nav-item">
             <router-link class="nav-link" to="/"><span class="material-symbols-outlined">home</span>
            </router-link>
             </li>
             <li class="nav-item">
               <router-link class="nav-link" to="/about"><span class="material-symbols-outlined">description</span>
              </router-link>
             </li>
             <li class="nav-item">
               <router-link class="nav-link" to="/products"><span class="material-symbols-outlined">
local_mall
</span></router-link>
             </li>
     </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <span class="btn" type="submit"><span class="material-symbols-outlined">search
      </span></span>
      </form>
      <ul class="navbar-nav">
             <li class="nav-item">
               <router-link class="nav-link" to="/cart"><span class="material-symbols-outlined">shopping_cart</span>
              </router-link>
             </li>
             <li class="nav-item">
               <router-link class="nav-link" to="/profile"><span class="material-symbols-outlined">account_circle</span>
              </router-link>
             </li>
     </ul>
    </div>
  </div>
</nav>
  </div>
</template>

<script>
</script>

<style>
.nav-item{
  padding-left: 5%;
}

.material-symbols-outlined{
  font-variation-settings:
  'FILL' 5,
  'wght' 500,
  'GRAD' 5,
  'opsz' 44
}
</style>

