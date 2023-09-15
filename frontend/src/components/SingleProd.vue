<template>
  <div>
  <div class="container-fluid">
    <div class="row">
      <div class="container" style="padding: 3%;">


<div class="col-6-sm">
  <img :src="$route.query.prodURL" class="card-img-top" :alt="$route.query.prodName"/>
</div>
<div class="col-6-sm">
  <ul class="list-group list-group-flush">
    <li class="list-group-item"><h5>{{$route.query.prodName}}</h5></li>
      <li class="list-group-item"><p>
      {{ $route.query.prodDesc}}</p></li>
<li class="list-group-item"> R{{ $route.query.prodPrice  }}</li>
<span class="product-size">
            <h4>Sizes available</h4>
            <ul class="ul-size">
              <li><a href="#">XS</a></li>
              <li><a href="#">S</a></li>
              <li><a href="#">M</a></li>
              <li><a href="#" class="active">L</a></li>
              <li><a href="#">XL</a></li>
              <li><a href="#">XXL</a></li>
            </ul>
          </span>
<li class="list-group-item"><button  class="btn card-link" data-toggle="modal" data-target="#modalAbandonedCart">Add to Cart</button></li>
</ul>

<!-- Modal: modalAbandonedCart-->
<div class="modal fade right" id="modalAbandonedCart" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
aria-hidden="true" data-backdrop="false">
<div class="modal-dialog modal-side modal-bottom-right modal-notify modal-info" role="document">
<!--Content-->
<div class="modal-content">
  <!--Header-->
  <div class="modal-header">
    <p class="heading">Product in the cart
    </p>

    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
      <span aria-hidden="true" class="white-text">&times;</span>
    </button>
  </div>

  <!--Body-->
  <div class="modal-body">

    <div class="row">
      <div class="col-3">
        <p></p>
        <p class="text-center"><i class="fas fa-shopping-cart fa-4x"></i></p>
      </div>

      <div class="col-9">
        <p>Do you need more time to make a purchase decision?</p>
        <p>No pressure, your product will be waiting for you in the cart.</p>
      </div>
    </div>
  </div>

  <!--Footer-->
  <div class="modal-footer justify-content-center">
    <a type="button" class="btn btn-info" >Go to cart</a>
    <a type="button" class="btn btn-outline-info waves-effect" data-dismiss="modal">Cancel</a>
  </div>
</div>
<!--/.Content-->
</div>
</div>
<!-- Modal: modalAbandonedCart-->
</div>
</div>
    </div>

</div>

<!-- modal for single product -->
<!-- <div class="container">
  <div class="images">
    <img :src="$route.query.prodURL" :alt="$route.query.prodName"/>  
  </div>
  <p class="pick">choose size</p>
  <div class="sizes">
    <div class="size">5</div>
    <div class="size">6</div>
    <div class="size">7</div>
    <div class="size">8</div>
    <div class="size">9</div>
    <div class="size">10</div>
    <div class="size">11</div>
    <div class="size">12</div>
  </div>
  <div class="product">
    <p>{{$route.query.prodCat}}</p>
    <h1>{{$route.query.prodName}}</h1>
    <h2>R{{ $route.query.prodPrice  }}</h2>
    <p class="desc">{{ $route.query.prodDesc}}</p>
    <div class="buttons">
      <button class="add">Add to Cart</button>
    </div>
  </div>
</div> -->
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

 .product-size h4 {
  font-size: 15px;
  padding: 0 21px;
  margin-top: 15px;
  padding-bottom: 10px;
  text-transform: uppercase;
}

.ul-size {
  margin-left: 15px;
}

.ul-size li {
  list-style: none;
  float: left;
  margin-right: 20px;
}

.ul-size li a {
  display: inline-block;
  text-decoration: none;
  font-size: 11px;
  width: 22px;
  height: 22px;
  border-radius: 100%;
  text-align: center;
  line-height: 23px;
  color: #000;
}

.ul-size li a.active {
  background:black;
  color: #fff;
}

.product-size:before,
.product-size:after {
  content: '';
  display: block;
  clear: both;
}
/* second one */
@import url('https://fonts.googleapis.com/css?family=Lato:400,700');
body {
  display: grid;
  background: #E0C9CB;
  font-family: 'Lato', sans-serif;
  text-transform: uppercase;
}

.container {
  position: relative;
  margin: auto;
  overflow: hidden;
  width: 70%;
  background: #F5F5F5;
  box-shadow: 5px 5px 5px rgb(156, 82, 3);;
  border-radius: 10px;
}

p {
  font-size: 0.6em;
  color: rgb(156, 82, 3);
  letter-spacing: 1px;
}

h1 {
  font-size: 1.2em;
  color: #4E4E4E;
  margin-top: -5px;
}

h2 {
  color: #C3A1A0;
  margin-top: -5px;
}

img {
  width: 290px;
  margin-top: 47px;
}




button {
  background: rgb(156, 82, 3);;
  padding: 10px;
  display: inline-block;
  outline: 0;
  border: 0;
  margin: -1px;
  border-radius: 2px;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #F5F5F5;
  cursor: pointer;
}

button:hover {
  background: #BA7E7E;
  transition: all 0.4s ease-in-out;
}


  </style>