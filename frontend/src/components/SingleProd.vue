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
        <li class="list-group-item"> R{{ $route.query.prodPrice  }}</li>
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

<!-- modal for single product -->
  
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

  </style>