<template>
  <div>
  <nav class="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
  <div class="container-fluid justify-content-between">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="material-symbols-outlined">menu_open</span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <!-- <router-link to="/">
<img src="https://i.postimg.cc/prwPd5L6/blacklogo-removebg-preview.png" alt="logo">
     </router-link> -->
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
               <router-link class="nav-link" to="/products"><span class="material-symbols-outlined" style="padding-left: 5%;">
local_mall
</span></router-link>
             </li>
     </ul>
        <!-- Center elements -->
        <ul class="navbar-nav flex-row d-none d-md-flex">
              <router-link to="/">
<img src="https://i.postimg.cc/prwPd5L6/blacklogo-removebg-preview.png" alt="logo">
     </router-link>
            </ul>
      <form class="d-flex" role="search">
        <input class="form-control" type="search" placeholder="Search" aria-label="Search" v-model="search">
        <span class="btn" type="submit"><span class="material-symbols-outlined">search
      </span></span>
      </form>
      <ul class="navbar-nav">
             <li class="nav-item">
               <router-link class="nav-link" to="/cart"><span class="material-symbols-outlined">shopping_cart</span>
              </router-link>
             </li>
             <li class="nav-item dropdown me-3 me-lg-1">
                    <a class="nav-link dropdown-toggle hidden-arrow"
                        href="#"
                        id="navbarDropdownMenuLink"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false">
                        <span class="material-symbols-outlined">account_circle</span>
                    </a>
                    <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuLink">
                      <router-link class="dropdown-item" to="/profile">Login/SignUp User</router-link>
                      <router-link class="dropdown-item" to="/admin">Login Admin</router-link>
                    </ul>
                </li>
        <!-- <li class="nav-item me-3 me-lg-1"
          add a logout button here for when admin or user is logged in
       </li> -->
     </ul>
    </div>
  </div>
</nav>

  </div>
</template>

<script>
export default{
  components:{

  },




}
</script>

<style>

.nav-bar{
  background-color: black;
  padding: 50%;
}
.nav-item{
  padding-left: 5%;
}

span .material-symbols-outlined{
  font-variation-settings:
  'FILL' 5,
  'wght' 500,
  'GRAD' 5,
  'opsz' 44
}

input{
  border: 0px !important;
}

img[alt= "logo"]{
    width: 15rem;
    padding-right: 5px !important;
}

</style>

