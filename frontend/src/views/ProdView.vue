<template>
  <div class="container-fluid">
  <div class="row" id="shoppinglanding">
    <div class="container">
      
    </div>
    <div class="col">

    </div>
    <div class="col" style="padding: 3%;">
      <p  id="collectionname">
      Collection Name ®
    </p>
  
    <p id="collection">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur nam quos aperiam! Corporis, dolores quae blanditiis nostrum hic facilis illum! Nobis libero saepe reprehenderit dolore amet nisi dolores, adipisci reiciendis. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque earum, placeat possimus obcaecati omnis quas ad at? Sequi, dolores quaerat, assumenda nihil quisquam consequatur delectus impedit maxime eius ab beatae?
    </p>
    </div>
   
  </div>
<br>
  <div id="options" style="padding: 3%;">
    <div class="d-grid gap-2 col-6 mx-auto" role="group">
  <button class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" type="button">Sort By</button>
  <ul class="dropdown-menu">
      <li><a class="dropdown-item" @click="sortAmount">Price (Low to High)</a></li>
      <li><a class="dropdown-item" href="#">Price (High to Low)</a></li>
      <li><a class="dropdown-item" @click="sortName">Name (A-Z) <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-sort-alpha-down" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M10.082 5.629 9.664 7H8.598l1.789-5.332h1.234L13.402 7h-1.12l-.419-1.371h-1.781zm1.57-.785L11 2.687h-.047l-.652 2.157h1.351z"/>
  <path d="M12.96 14H9.028v-.691l2.579-3.72v-.054H9.098v-.867h3.785v.691l-2.567 3.72v.054h2.645V14zM4.5 2.5a.5.5 0 0 0-1 0v9.793l-1.146-1.147a.5.5 0 0 0-.708.708l2 1.999.007.007a.497.497 0 0 0 .7-.006l2-2a.5.5 0 0 0-.707-.708L4.5 12.293V2.5z"/>
</svg></a></li>
      <li><a class="dropdown-item" href="#">Name (Z-A)</a></li>
    </ul>
  <button class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" type="button">Shop by Category</button>
  <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">Hoodies</a></li>
      <li><a class="dropdown-item" href="#">Graphic Tees</a></li>
      <li><a class="dropdown-item" href="#">Accessories</a></li>
    </ul>
</div>
  </div>

  <!-- search products -->
  <form class="d-flex" role="search">
        <input class="form-control" type="search" placeholder="Search" aria-label="Search" v-model="search">
      </form>
  <!-- DISPLAY PRODUCTS -->
  <div class="container-fluid">
    <div class="products" v-if="products">
      <div class="row row-cols-1 row-cols-md-3 g-4" style="padding: 5%;">
  <div class="col"  v-for="product in filteredProducts" :key= "product.prodID">
    <div class="card">
      <div class="card-body">
          <img :src="product.prodUrl" class="card-img-top" alt="...">
        <h5 class="card-title">{{ product.prodName }}</h5>
    <h6 class="card-subtitle mb-2 text-body-secondary">R{{ product.prodPrice }}</h6>
    <div class="button-contain">
          <router-link :to="{ name: 'singleProd', params: { id: product.prodID }, query: {
              prodName: product.prodName,
              prodPrice: product.prodPrice,
              prodURL: product.prodUrl,
              prodCat: product.prodCat,
              prodDesc: product.prodDesc,
            }
          }"
        >
        <button class="btn">
          View Details
        </button>
        </router-link>
        </div>
      </div> 
  </div>
  </div>
</div>
  </div>
  <div v-else class="row justify-content-center">
  <SpinnerComp/>
</div>
</div>

  </div>
</template>

<script>
import SpinnerComp from '@/components/SpinNer.vue'

export default {
       components:{
        SpinnerComp,
       },
       data(){
    return {
  search:""
};
  },
      computed:{
        products(){
            return this.$store.state.products
        },
        filteredProducts() {
         // Convert searchQuery to lowercase for case-insensitive search
    const search = this.search.toLowerCase();
  return this.products.filter((products) => {
  const prodName = products.prodName.toLowerCase(); //filter on accountname
  return (
    prodName.includes(search)
  );
});
    },

       },
       methods:{
    // sort amount Low to High
    sortAmount() {
      return this.$store.state.products.sort(
    (p2, p1) => (p2.prodPrice < p1.prodPrice) ? -1 : (p2.prodPrice > p1.prodPrice) ? 1 : 0);
     
      },
    // sort by name A-Z
    sortName() {
      return this.$store.state.products.sort(
    (p2, p1) => (p2.prodName < p1.prodName) ? -1 : (p2.prodName > p1.prodName) ? 1 : 0);
    }
   
    },

       mounted(){
        this.$store.dispatch('fetchProducts')
  
       } 
     }

   
  
  
</script>

<style scoped>
#shoppinglanding{
background-image: url("https://sacrize.com/cdn/shop/files/2775-1240-for-desktop-Transfiguration_2000x.jpg?v=1616039116");
background-position: center;
background-repeat: no-repeat;
background-size: cover;
}

#collectionname{
padding-left: 2px;
text-align: start;
font-size: 4rem;
color: white;
font-weight: bold;
}

#collection{
text-align: justify;

}

.card{
  /* width: 19rem; */
  border: none;
  /* margin: 5px; */
  /* border: 1px solid black; */
}
 .btn{
 color: #fff;
  font-weight: normal;
  font-size: 22px;
  background: #BC6C25;
  border-radius: 50px;
  padding: 5px 20px;
  border: none;
  transition: .5s ease;
}

.btn:hover {
  cursor: pointer;
}
</style>