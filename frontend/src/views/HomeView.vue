<template>
 <div class="container-fluid">
  <div class="row">
    <div class="col">
      <h1 id="landingtext">Style that Inspires, Faith that Ignites.</h1>
      <br>
      <p>
        Step Into Fashion That Speaks To You
      </p>
      <br>

      <router-link to="/products"> <button id="btn"> Shop Now</button></router-link>
     
    </div>
    <div class="col">
    <img src="https://i.etsystatic.com/28379257/r/il/fa68cc/4560317533/il_fullxfull.4560317533_a1tv.jpg" alt="landing">
    </div>
  </div>
  <div class="row text-center" style="padding: 5%;">
    <!-- <h1>Shop by Category</h1> -->
    <router-link to="/"></router-link>
    <div class="col" id="one"><router-link to="/">Hoodies</router-link></div>
    <div class="col" id="two"><router-link to="/">Graphic Tees</router-link></div>
    <div class="col" id="three"><router-link to="/"> Headwear </router-link></div>
    <div class="col" id="four"><router-link to="/products">All Products</router-link></div>
  </div>

  </div>
</template>


<script>
export default {


}
</script>

<style scoped>
/* landing pic */
img[alt= "landing"]{
    width: 100%;
}

#landingtext{
  font-size: 4rem;
  font-weight: 900;

}

.col{
  padding: 3%;
}

#one{
/* padding: 2%;   */
background-image: url("https://i.postimg.cc/gcRbWpKB/il-794x-N-4157880140-i4gk.jpg");
background-position: center;
background-repeat: no-repeat;
background-size: cover;
/* background-attachment: fixed; */
color: white;
text-decoration: none !important;
font-size: 2rem;
font-weight: bold;
}

#two{
/* padding: 2%;   */
background-image: url("https://i.postimg.cc/y8hNY9Xt/3-36a87608-30c3-473f-a365-e55a95b05ab6.png");
background-position: center;
background-repeat: no-repeat;
background-size: cover;
/* background-attachment: fixed; */
color: white;
text-decoration: none !important;
font-size: 2rem;
font-weight: bold;
}

#three{
/* padding: 3%;   */
background-image: url("https://nhimapparel.com/cdn/shop/products/DSC02626.jpg?v=1687219701&width=950");
background-position: center;
background-repeat: no-repeat;
background-size: cover;
/* background-attachment: fixed; */
color: white;
text-decoration: none !important;
font-size: 2rem;
font-weight: bold;
}

#four{
/* padding: 2%;   */
background-image: url("https://i.postimg.cc/k42yfGYM/242799370-407556254046476-2644836799754083763-n.jpg");
background-position: center;
background-repeat: no-repeat;
background-size: cover;
/* background-attachment: fixed; */
color: white;
text-decoration: none !important;
font-size: 2rem;
font-weight: bold;
}
</style>