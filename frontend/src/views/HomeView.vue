<template>
 <div class="container-fluid">
  <div class="row">
    <div class="col" style="padding: 7%;">
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
  <!-- <div class="row text-center" style="padding: 5%;"> -->
    <!-- <h1>SOur Product Offerings</h1> -->
    <!-- <router-link to="/"></router-link>
    <div class="col" id="one" style="padding: 2%;">Hoodies</div>
    <div class="col" id="two" style="padding: 2%;">Graphic Tees</div>
    <div class="col" id="three" style="padding: 2%;">Headwear</div>
    <div class="col" id="four" style="padding: 2%;"><router-link to="/products">Shop Now</router-link></div> -->
  <!-- </div> -->
      
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

#one, #two, #three, #four{
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
border: 5px solid white;
}

#two{
background-image: url("https://i.postimg.cc/y8hNY9Xt/3-36a87608-30c3-473f-a365-e55a95b05ab6.png");
background-position: center;
background-repeat: no-repeat;
background-size: cover;
color: white;
text-decoration: none !important;
font-size: 2rem;
font-weight: bold;
}

#three{
background-image: url("https://anchored-music.com/cdn/shop/files/AM_HEADWEAR_ce4c3652-2759-419a-a8d5-2fd122aea6e9.webp?v=1689801966&width=1000");
background-position: center;
background-repeat: no-repeat;
background-size: cover;
color: white;
text-decoration: none !important;
font-size: 2rem;
font-weight: bold;
}

#four{
background-image: url("https://i.postimg.cc/k42yfGYM/242799370-407556254046476-2644836799754083763-n.jpg");
background-position: center;
background-repeat: no-repeat;
background-size: cover;
color: white;
text-decoration: none !important;
font-size: 2rem;
font-weight: bold;
}
</style>