<template>
  <div class="container-fluid">

    <div class="row" :user = "user">
        <div class="page-content page-container" id="page-content">
    <div class="padding">
        <div class="row container d-flex justify-content-center">
<div class="col-xl-6 col-md-12">
     <div class="card user-card-full">
      <div class="row m-l-0 m-r-0">
       <div class="col-sm-4 bg-c-lite-green user-profile">
         <div class="card-block text-center text-white">
          <div class="m-b-25"><img src="https://us.123rf.com/450wm/tifani1/tifani11801/tifani1180100032/93016694-user-icon-vector-illustration-on-black-background.jpg?ver=6" class="img-radius" alt="User-Profile-Image">
          </div>
          <h6>{{user.firstName}} {{ user.lastName }}</h6>
        <button>Edit</button> <br>
        <button>Delete</button>
          </div>
           </div>
            <div class="col-sm-8">
              <div class="card-block">
                <h6 class="m-b-20 p-b-5 b-b-default f-w-600">Your Details</h6>
                <div class="row">
                    <div class="col-sm-6">
                    <p class="m-b-10 f-w-600">First Name</p>
                     <h6 class="text-muted f-w-400">{{user.firstName}}</h6>
                    </div>
                    <div class="col-sm-6">
                    <p class="m-b-10 f-w-600">Last Name</p>
                    <h6 class="text-muted f-w-400">{{user.lastName}}</h6>
                    </div>
                    </div>
                   <div class="row">
                    <div class="col-sm-6">
                    <p class="m-b-10 f-w-600">Email</p>
                     <h6 class="text-muted f-w-400">{{user.userEmail}}</h6>
                    </div>
                    <div class="col-sm-6">
                    <p class="m-b-10 f-w-600">Mobile Number</p>
                    <h6 class="text-muted f-w-400">{{user.Mobile}}</h6>
                    </div>
                    </div>
                    <div class="row">
                    <div class="col-sm-6">
                    <p class="m-b-10 f-w-600">Address</p>
                     <h6 class="text-muted f-w-400">{{user.userAdd}}</h6>
                    </div>
                    <div class="col-sm-6">
                    <p class="m-b-10 f-w-600">Mobile Number</p>
                    <h6 class="text-muted f-w-400">{{user.userMobile}}</h6>
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
<div class="container-fluid">
    <div class="row">
    <table class="table">
  <h1 class="text-align center">Orders Summary</h1>
  <thead>
    <tr>
      <th scope="col">Order ID</th>
      <th scope="col"> Product</th>
      <th scope="col">Price</th>
      <th scope="col">Shipping Address</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="orderID">orderID</td>
      <td data-label="prodName">prodID.prdName6</td>
      <td data-label="prodPrice">prodID.prodprice</td>
      <td data-label="userAdd">userID.userAdd</td>
    </tr>
  </tbody>
</table>
</div>
</div>
</div>
</template>

<script>
import { useCookies } from "vue3-cookies";
const { cookies } = useCookies();
export default {
       computed: {
        user() {
          return this.$store.state.user || cookies.get('user').result;
      },
    },
    }
</script>

<style scoped>
/* user profile styling */

.padding {
    padding: 3rem !important
}

.user-card-full {
    overflow: hidden;
    width: 100%;
}

.card {
    border-radius: 5px;
    -webkit-box-shadow: 0 1px 20px 0 rgba(69,90,100,0.08);
    box-shadow: 0 1px 20px 0 rgba(69,90,100,0.08);
    border: none;
    margin-bottom: 30px;
}

.m-r-0 {
    margin-right: 0px;
}

.m-l-0 {
    margin-left: 0px;
}

.user-card-full .user-profile {
    border-radius: 5px 0 0 5px;
}

.bg-c-lite-green {
        background: -webkit-gradient(linear, left top, right top, from(#f29263), to(#040404));
    background: linear-gradient(to right, #000000, #f29263);
}

.user-profile {
    padding: 20px 0;
}

.card-block {
    padding: 1.25rem;
}

.m-b-25 {
    margin-bottom: 25px;
}

.img-radius {
    border-radius: 5px;
    width: 5rem;
}


 
h6 {
    font-size: 14px;
}

.card .card-block p {
    line-height: 25px;
}

@media only screen and (min-width: 1400px){
p {
    font-size: 14px;
}
}

.card-block {
    padding: 1.25rem;
}

.b-b-default {
    border-bottom: 1px solid #e0e0e0;
}

.m-b-20 {
    margin-bottom: 20px;
}

.p-b-5 {
    padding-bottom: 5px !important;
}

.card .card-block p {
    line-height: 25px;
}

.m-b-10 {
    margin-bottom: 10px;
}

.text-muted {
    color: #919aa3 !important;
}

.b-b-default {
    border-bottom: 1px solid #e0e0e0;
}

.f-w-600 {
    font-weight: 600;
}

.m-b-20 {
    margin-bottom: 20px;
}

.m-t-40 {
    margin-top: 20px;
}

.p-b-5 {
    padding-bottom: 5px !important;
}

.m-b-10 {
    margin-bottom: 10px;
}

.m-t-40 {
    margin-top: 20px;
}

.user-card-full {
    display: inline-block;
}

.user-card-full {
    font-size: 20px;
    margin: 0 10px 0 0;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
}



/* orders table styling  */

table {
  border: 1px solid #ccc;
  border-collapse: collapse;
  margin: 0;
  padding: 0;
  width: 100%;
  table-layout: fixed;
  padding: 3%;
}

table caption {
  font-size: 1.5em;
  margin: .5em 0 .75em;
}
thead{
    background-color: #DDA15E;
}
table tr {
  background-color: #FEFAE0;
  border: 1px solid #ddd;
  padding: .35em;
}

table tr:hover{
    color: #DDA15E;
}
table th,
table td {
  padding: .625em;
  text-align: center;
}

table th {
  font-size: .85em;
  letter-spacing: .1em;
  text-transform: uppercase;
}

@media screen and (max-width: 600px) {
  table {
    border: 0;
  }

  table caption {
    font-size: 1.3em;
  }
  
  table thead {
    border: none;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }
  
  table tr {
    border-bottom: 3px solid #ddd;
    display: block;
    margin-bottom: .625em;
  }
  
  table td {
    border-bottom: 1px solid #ddd;
    display: block;
    font-size: .8em;
    text-align: right;
  }
  
  table td::before {
    content: attr(data-label);
    float: left;
    font-weight: bold;
    text-transform: uppercase;
  }
  
  table td:last-child {
    border-bottom: 0;
  }


}


</style>