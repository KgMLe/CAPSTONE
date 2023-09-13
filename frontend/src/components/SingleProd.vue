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