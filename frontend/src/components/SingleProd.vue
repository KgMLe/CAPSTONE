<template>
  <div>
    <div class="card">
      <div class="image">
        <!-- <img :src="$route.query.prodURL" class="card-img-top" :alt="product.prodName" /> -->
      </div>
      <div class="card-body">
        <h5 class="card-title">{{$route.query.prodName}}</h5>
        <p class="card-text">
          {{ $route.query.prodDesc }}</p>
        <p class="card-text">
          {{ $route.query.amount}}</p>
      </div>
      <ul class="list-group list-group-flush">
    <li class="list-group-item"> {{ $route.query.prodCat  }}</li>
    <li class="list-group-item"> <button type="button" class="btn btn-outline-dark">XS</button>
      <button type="button" class="btn btn-outline-dark">S</button>
      <button type="button" class="btn btn-outline-dark">M</button>
      <button type="button" class="btn btn-outline-dark">L</button>
      <button type="button" class="btn btn-outline-dark">XL</button>
      <button type="button" class="btn btn-outline-dark">XL</button></li>
    <li class="list-group-item">Color Radio</li>
  </ul>
  <div class="card-body">
    <button  class="btn card-link">Add to Cart</button>
  </div>
    </div>
  </div>  
  </template>
  
  
  <script>

  </script>
  <style scoped>

  </style>