<template>
  <div>
<div class="container-fluid my-5">
    <div class="row justify-content-center">
        <div class="col-xl-10">
            <div class="card shadow-lg">
               <div class="row justify-content-around">
                 <div class="col-md-5">
                    <div class="card border-0">
                      <div class="card-header card-2">
                        <p class="card-text text-muted mt-md-4 mb-2 space">WHAT'S IN YOUR CART</p>
                         <hr class="my-2">
                       </div>
                       <div class="card-body pt-0">
                       <div class="row  justify-content-between" v-for="order in orders" :key= "order.orderID">
                        <div class="col-auto col-md-7">
                         <div class="media flex-column flex-sm-row">                                       
                            <div class="media-body  my-auto">
                               <div class="row ">
                                 <div class="col"><small class="mb-0"> <b> {{order.prodName }} </b> </small> 
                                    <img :src="order.prodUrl" class="img-fluid" width="62" height="62" ></div>
                                 </div>
                                </div>
                              </div>
                             </div>
                           <div class="pl-0 flex-sm-col col-auto my-auto"><p><b>{{order.prodPrice}}</b></p> x</div>
                         </div>
                       </div>
                    </div>
                  </div>
                  <!-- CHECKOUT INFORMATION -->
  <div class="col-md-5">
   <div class="card border-0">
     <div class="card-header pb-0">
       <p class="card-text text-muted mt-4 space">SHIPPING DETAILS</p>
         <hr class="my-0">
          </div>
          <div class="card-body">
           <div class="row justify-content-between">
             <div class="form-group">
              <label for="NAME" class="small text-muted mb-1">FULL ADDRESS</label>
              <input type="text" class="form-control form-control-sm" name="NAME" id="NAME" aria-describedby="helpId" placeholder="12 Main str, Bendor, Limpopo">
             </div>
            </div>
            <div class="row mt-4">
             <div class="col"><p class="text-muted mb-2">PAYMENT</p><hr class="mt-0"></div>
             </div>
              <!-- cardtyps -->
          <a href="#!" type="submit" class="text-white"><i
           class="fab fa-cc-mastercard fa-2x me-2"></i></a>
          <a href="#!" type="submit" class="text-white"><i
          class="fab fa-cc-visa fa-2x me-2"></i></a>
         <a href="#!" type="submit" class="text-white"><i
          class="fab fa-cc-amex fa-2x me-2"></i></a>
         <a href="#!" type="submit" class="text-white"><i class="fab fa-cc-paypal fa-2x"></i></a>
          <div class="form-group">
            <label for="NAME" class="small text-muted mb-1">NAME ON CARD</label>
            <input type="text" class="form-control form-control-sm" name="NAME" id="NAME" aria-describedby="helpId" placeholder="">
          </div>
         <div class="form-group">
          <label for="NAME" class="small text-muted mb-1">CARD NUMBER</label>
            <input type="text" class="form-control form-control-sm" name="NAME" id="NAME" aria-describedby="helpId" placeholder="">
          </div>
                                    <div class="row no-gutters">
                                    <div class="col-sm-6 pr-sm-2">
                                    <div class="form-group">
                                    <label for="NAME" class="small text-muted mb-1">Expiry </label>
                                    <input type="text" class="form-control form-control-sm" name="NAME" id="NAME" aria-describedby="helpId" placeholder="06/21">
                                    </div>
                                    </div>
                                    <div class="col-sm-6">
                                    <div class="form-group">
                                  <label for="NAME" class="small text-muted mb-1">CVV</label>
                                  <input type="text" class="form-control form-control-sm" name="NAME" id="NAME" aria-describedby="helpId" placeholder="183">
                                  </div>
                                </div>
                               </div>
                              <div class="row mb-md-5">
                             <div class="col">
                            <button type="button" name="" id="" class="btn">Checkout</button>
                         </div>
                       </div>
                     </div>
                  </div>
                </div>
             </div>
         </div>
       </div>
     </div>
    </div>
  </div>
</template>

<script>
export default{
    computed:{
    orders(){
            return this.$store.state.orders
        },
        products(){
            return this.$store.state.products
        }
    },
    mounted(){
        this.$store.dispatch('fetchOrder'),
        this.$store.dispatch('fetchOrder')
    }
}

</script>

<style scoped>

</style>