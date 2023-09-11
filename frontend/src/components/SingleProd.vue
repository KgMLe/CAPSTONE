<template>
  <div>
  <div class="container">
  <div class="row" style="padding-top: 3%;">
    <div class="col-4"><img :src="$route.query.prodURL" class="card-img-top" :alt="$route.query.prodName"/>
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
    <li class="list-group-item">Color Radio</li>
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
  width: 20rem;
 }
  </style>