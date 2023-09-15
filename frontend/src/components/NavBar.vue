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
                      <router-link class="dropdown-item" to="/profile">User</router-link>
                      <router-link class="dropdown-item" to="/admin">Admin</router-link>
                      <router-link class="dropdown-item btn-danger" to ="/logout" data-bs-toggle="modal" data-bs-target="#modalConfirmDelete" >Logout</router-link>
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
<!-- new navbar -->

<!-- <nav class="slidemenu"> -->
  
  <!-- Item 1 -->
  <!-- <input type="radio" name="slideItem" id="slide-item-1" class="slide-toggle" checked/>
  <label for="slide-item-1"><p class="icon">♬</p><span>Home</span></label>
   -->
  <!-- Item 2 -->
  <!-- <input type="radio" name="slideItem" id="slide-item-2" class="slide-toggle"/>
  <label for="slide-item-2"><p class="icon">★</p><span>About</span></label> -->
  
  <!-- Item 3 -->
  <!-- <input type="radio" name="slideItem" id="slide-item-3" class="slide-toggle"/>
  <label for="slide-item-3"><p class="icon">✈</p><span>Folio</span></label> -->
  
  <!-- Item 4 -->
  <!-- <input type="radio" name="slideItem" id="slide-item-4" class="slide-toggle"/>
  <label for="slide-item-4"><p class="icon">✎</p><span>Blog</span></label> -->

  <!-- Item 5 -->
  <!-- <input type="radio" name="slideItem" id="slide-item-4" class="slide-toggle"/>
  <label for="slide-item-5"><p class="icon">✎</p><span>Blog</span></label>
  
  <div class="clear"></div> -->
  
  <!-- Bar -->
  <!-- <div class="slider">
    <div class="bar"></div>
  </div>
  
</nav> -->
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


.clear{
  clear: both;
}


.slide-toggle{
  display: none;
}

.slidemenu{
  font-family: arial, sans-serif;
  /* max-width: 600px; */
  margin: 50px auto;
  overflow: hidden;
}

.slidemenu label{
  width: 15%;
  text-align: center;
  display: block;
  float: left;
  color: #333;
  opacity: 0.2;

}

.slidemenu label:hover{
  cursor: pointer;
  color: #666;
}

/* .slidemenu label span{
  display: block;
  padding: 10px;    
} */

.slidemenu label .icon{
  font-size: 10px;
  border: solid 2px #333;
  text-align: center;
  height: 25px;
  width: 25px;
  /* background-color: white; */
  display: block;
  margin: 0 auto;
  line-height: 50px;
  border-radius: 50%;
}

/*Bar Style*/

.slider{
  width: 100%;
  height: 5px;
  display: block;
  background: #ccc;
  margin-top: 10px;
  border-radius: 5px;
}

.slider .bar{
  width: 10%;
  height: 5px;
  background: #333;
  border-radius: 5px;
}

/*Animations*/
.slidemenu label, .slider .bar {
  transition: all 500ms ease-in-out;
  -webkit-transition: all 500ms ease-in-out;
  -moz-transition: all 500ms ease-in-out;
}

/*Toggle*/

.slidemenu .slide-toggle:checked + label{
  opacity: 1;
}



.slidemenu #slide-item-1:checked ~ .slider .bar{ margin-left: 0; }
.slidemenu #slide-item-2:checked ~ .slider .bar{ margin-left: 25%; }
.slidemenu #slide-item-3:checked ~ .slider .bar{ margin-left: 50%; }
.slidemenu #slide-item-4:checked ~ .slider .bar{ margin-left: 75%; }
.slidemenu #slide-item-5:checked ~ .slider .bar{ margin-left: 100%; }

</style>

