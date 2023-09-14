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
    <!-- <div id="menuHolder">
      <div role="navigation" class="sticky-top border-bottom border-top" id="mainNavigation">
        <div class="flexMain">
          <div class="flex2">
            <button class="whiteLink siteLink" style="border-right:1px solid #eaeaea" onclick="menuToggle()"><i class="fas fa-bars me-2"></i> MENU</button>
          </div>
          <div class="flex3 text-center" id="siteBrand">
            <router-link to="/">
<img src="https://i.postimg.cc/prwPd5L6/blacklogo-removebg-preview.png" alt="logo">
     </router-link>
          </div>
    
          <div class="flex2 text-end d-block d-md-none">
            <button class="whiteLink siteLink"><i class="fas fa-search"></i></button>
          </div>
    
          <div class="flex2 text-end d-none d-md-block">
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
          </div>
        </div>
      </div>
    
      <div id="menuDrawer">
        <div class="p-4 border-bottom">
          <div class='row'>
            <div class="col text-end ">
              <i class="fas fa-times" role="btn" onclick="menuToggle()"></i>
            </div>
          </div>
        </div>
        <div>
          <a href="#" class="nav-menu-item"><i class="fas fa-home me-3"></i>Home</a>
          <a href="#" class="nav-menu-item"><i class="fab fa-product-hunt me-3"></i>Products</a>
          <a href="#" class="nav-menu-item"><i class="fas fa-search me-3"></i>Explore</a>
          <a href="#" class="nav-menu-item"><i class="fas fa-wrench me-3"></i>Services</a>
          <a href="#" class="nav-menu-item"><i class="fas fa-dollar-sign me-3"></i>Pricing</a>
          <a href="#" class="nav-menu-item"><i class="fas fa-file-alt me-3"></i>Blog</a>
          <a href="#" class="nav-menu-item"><i class="fas fa-building me-3"></i>About Us</a>
        </div>
      </div>
    </div> -->
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
/* second one */
.flexMain {
      display:flex;
      align-items: center
  }

    .flex1 { flex:1 }
    .flex2 { flex:2 }
    .flex3 { flex:3 }
    
    button.siteLink {
      margin-left:-5px;
      border:none;
      padding:24px;
      display:inline-block;
      min-width:115px;
    }

    /* .whiteLink {
      background : #fff;
    } */
    .whiteLink:active {
      /* background : #000; */
      color: #fff;
    }
    .blackLink {
      color: #fff;
      /* background:#232323;
      transition: all 300ms linear; */
    }    
    /* .blackLink:active {
      color: #000;
      background:#fff
    } */
    #siteBrand {
      font-family: impact;
      letter-spacing : -1px;
      font-size:32px;
      color:#252525;
      line-height : 1em;
    }
    #menuDrawer {
      background:black;
      position:fixed;
      height:100vh;
      overflow:auto;
      z-index:12312;
      top:0;
      left:0;
      border-right:1px solid #eaeaea;
      min-width:25%;
      max-width:320px;
      width:100%;
      transform : translateX(-100%);
      transition : transform 200ms linear;
    }
    #mainNavigation {
      transition : transform 200ms linear;
      /* background : black; */
    }
    .drawMenu > #menuDrawer {
      transform : translateX(0%);
    }
    .drawMenu > #mainNavigation {
      transform : translateX(25%);
    }
    .fa-times {
      cursor : pointer
    }
    a.nav-menu-item:hover {
      margin-left:2px;
      border-left:10px solid black;
    }
    a.nav-menu-item{
      transition:border 200ms linear;
      text-decoration:none;
      display:block;
      padding:18px;
      padding-left:32px;
      border-bottom:1px solid #eaeaea;
      font-weight:bold;
      color:#343434
    }
    select.noStyle {
      border:none;
      outline:none
    }
</style>

