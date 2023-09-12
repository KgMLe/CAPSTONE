<template>
  <div>
  <div class="container-fluid">
  <div class="container" style="padding: 3%;">


    <div class="col-6">
      <img :src="$route.query.prodURL" class="card-img-top" :alt="$route.query.prodName"/>
    </div>
    <div class="col-6"> <h5>{{$route.query.prodName}}</h5>
        <p>
          {{ $route.query.prodDesc }}</p>
        <p>
          {{ $route.query.amount}}</p>
      <ul class="list-group list-group-flush">
    <li class="list-group-item"> {{ $route.query.prodCat  }}</li>
    <li class="list-group-item"> <button type="button" class="btn btn-outline-dark">XS</button>
      <button type="button" class="btn btn-outline-dark">S</button>
      <button type="button" class="btn btn-outline-dark">M</button>
      <button type="button" class="btn btn-outline-dark">L</button>
      <button type="button" class="btn btn-outline-dark">XL</button>
      <button type="button" class="btn btn-outline-dark">XXL</button></li>
    <!-- <li class="list-group-item">Color Radio</li> -->
    <div >
            <span>Available colors</span>
            <div class="colors">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            
        </div>
    <li class="list-group-item"><button  class="btn card-link" >Add to Cart</button></li>
  </ul></div>
  </div>
</div>
  </div>
  </template>
  
  
  <script>
// add to cart
export default{
  methods:{

}
}

  </script>
  <style scoped>
 img{
  width: 15rem;
 }

 
.colors{
    display:flex;
    margin-top:2px;
}

.colors span{
    width:20px;
    height:20px;
    border-radius:50%;
    cursor:pointer;
    display:flex;
    margin-right:6px;
}

.colors span:nth-child(1) {
    
    background-color:black;
    
}

.colors span:nth-child(2) {
    
    background-color:orange;
    
}

.colors span:nth-child(3) {
    
    background-color:rgb(49, 17, 0);
    
}

.colors span:nth-child(4) {
    
    background-color:rgb(225, 221, 221);
    
}
  </style>