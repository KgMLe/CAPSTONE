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
               <router-link class="nav-link dropdown-toggle" id="aboutDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false" to="/about"><span class="material-symbols-outlined">description</span>
              </router-link>
              <ul class="dropdown-menu" aria-labelledby="aboutDropdownMenuLink">
                <li><router-link class="dropdown-item" to="/about">About Us</router-link></li>
                <li><a class="dropdown-item" href="#">Blog</a></li>
                <li><a class="dropdown-item" href="#">Contact us</a></li>
              </ul>
             </li>
             <li class="nav-item">
               <router-link class="nav-link mx-2" to="/products"><span class="material-symbols-outlined" style="padding-left: 5%;">
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
                      <router-link class="dropdown-item" to="/profile">User</router-link>
                      <router-link class="dropdown-item" to="/admin">Admin</router-link>
                      <a class="dropdown-item btn-danger" data-bs-toggle="modal" data-bs-target="#modalConfirmDelete" >Logout</a>
                    </ul>
                </li>
                <div class="modal fade" id="modalConfirmDelete" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-sm modal-danger">
    <div class="modal-content text-center">
      <!--Header-->
      <div class="modal-header d-flex justify-content-center">
        <h5 class="modal-title">You are about to logout</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>

      <!--Body-->
      <div class="modal-body">
    <p>Please confrim below to logout</p>
      </div>

      <!--Footer-->
      <div class="modal-footer justify-content-center">
        <a href="#" class="btn btn-outline-danger" @click="logOut">Confirm</a>
        <button type="button" class="btn btn-danger" data-bs-dismiss="modal">No</button>
      </div>
    </div>
  </div>
</div>
     </ul>
    </div>
  </div>
</nav>
</div>
</template>

<script>
export default{

  methods:{
logOut(){
  this.$store.dispatch ('logOut')
}
  },
}
</script>

<style>

.nav-bar{
  background-color: black !important;
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

@media screen and (min-width:992px){
  .nav-item {
   line-height:80px;
    }
}
/* second one */

</style>

