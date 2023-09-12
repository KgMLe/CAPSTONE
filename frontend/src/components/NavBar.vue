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
                      <!-- <router-link class="dropdown-item" >Logout</router-link> -->
                    </ul>
                </li>
     </ul>
    </div>
  </div>
</nav>
<!-- <nav class="navbar">
        <div class="container">
          
            <div class="logo">
              <router-link to="/">
<img src="https://i.postimg.cc/prwPd5L6/blacklogo-removebg-preview.png" alt="logo">
     </router-link>
            </div>
            <div class="search-bar">
                <input type="text" placeholder="Search...">
            </div>
            <ul class="nav-links">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Portfolio</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </div>
    </nav> -->

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

/* Reset some default styles for better consistency */
ul {
    margin: 0;
    padding: 0;
    list-style: none;
}

/* Navbar styles */
.navbar {
    background-color: black;
    color: #fff;
    padding: 10px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap; 
}

.logo {
    text-align: center !important;  /* Center the logo */
}


.search-bar {
    display: flex;
    align-items: center;
}

.search-bar input[type="text"] {
    padding: 10px;
    border: none;
    border-radius: 50px  #BC6C25;
}

.nav-links {
    margin-top: 20px;
    flex: 1; /* Take remaining horizontal space */
    display: flex;
    justify-content: center; /* Center the links on smaller screens */
}

.nav-links li {
    margin: 0 15px;
}

.nav-links a {
    text-decoration: none;
    color: #fff;
    font-size: 16px;
    transition: color 0.3s ease;
}

.nav-links a:hover {
    color:  #BC6C25;
}

/* Responsive styles */
@media (max-width: 768px) {
    .search-bar {
        margin-top: 20px;
        flex-basis: 100%; /* Take full width on smaller screens */
        justify-content: center; /* Center the search bar */
    }
}

</style>

