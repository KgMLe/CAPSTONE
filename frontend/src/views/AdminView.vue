<template>
  <div class="container fluid" >
    <div class="row">
      <center>
        <h1 style="padding 3%">
          <span class="material-symbols-outlined">
admin_panel_settings
</span>Welcome back XYZAWQG to the admin page 
        </h1>
      </center>
    </div>
    <br>
    <!-- USERS TABLE -->
    <div class="row">
      <h2>User Table</h2>
    <div style="overflow-x:auto;">
  <table class="striped-table">
    <tr>
      <th>User ID</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Email</th>
      <th>Mobile No.</th>
      <th>Address</th>
    </tr>
    <tbody  v-if="users">
      <tr v-for="user in users" :key= "user.userID">
      <td>{{user.userID}}</td>
      <td>{{ user.firstName }}</td>
      <td>{{ user.lastName }}</td>
      <td>{{ user.userEmail}}</td>
      <td>{{ user.userMobile}}</td>
      <td>{{ user.userAdd}}</td>
    </tr>
    </tbody>
    <div v-else class="row justify-content-center">
  <SpinnerComp/>
</div>
  </table>
</div>
    </div>
    <br>
    <!-- products table -->
    <div class="row">
      <h2>Products Table</h2>
    <div style="overflow-x:auto;">
  <table class="striped-table">
    <tr>
      <th>prodID</th>
      <th>Product Name</th>
      <th>Image</th>
      <th>Price</th>
      <th>Description</th>
      <th>Category</th>
    </tr>
    <tbody v-if = "products">
      <tr v-for="product in products" :key= "product.prodID">
      <td>{{ product.prodID }}</td>
      <td>{{ product.prodName }}</td>
      <td>{{ product.prodURL }}</td>
      <td>{{ product.prodPrice }}</td>
      <td>{{ product.prodDesc }}</td>
      <td>{{ product.prodCat }}</td>
    </tr>
    </tbody>
    <div v-else class="row justify-content-center">
  <SpinnerComp/>
</div>
  </table>
</div>
    </div>
    <br>
    <!-- orders -->
    <div class="row">
      <h2>Orders Table</h2>
    <div style="overflow-x:auto;">
  <table class="striped-table">
    <tr>
      <th>orderID</th>
      <th>First Name</th>
      <th>Product</th>
      <th>Image</th>
      <th>Price</th>
      <th>Shipping Address</th>
      <th>Delivery Status</th>
    </tr>
    <tbody v-if = "orders">
      <tr v-for="order in products" :key= "order.orderID">
      <td>{{ order.orderID }}</td>
      <td> {{ }}</td>
      <td>50</td>
      <td>50</td>
      <td>50</td>
      <td>50</td>
      <td></td>
    </tr>
    </tbody>
    <div v-else class="row justify-content-center">
  <SpinnerComp/>
</div>
  </table>
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

 computed:{
  users(){
    return this.$store.state.users
  },
  products(){
    return this.$store.state.products
  },
  orders(){
    return this.$store.orders
  }
 },


 mounted(){
this.$store.dispatch('fetchUsers'),
this.$store.dispatch('fetchProducts'),
this.$store.dispatch('fetchOrders')

  
} 
}       
</script>

<style scoped>
/* Striped Rows */
table, tbody, thead {
border-collapse: collapse;
width: 100%;
margin-bottom: 20px;
}

th, td {
border: 1px solid #ddd;
padding: 8px;
text-align: left;
}

tr:hover {
background-color: bisque;
}

table.striped-table th{
background-color: #DDA15E;
}

  
</style>