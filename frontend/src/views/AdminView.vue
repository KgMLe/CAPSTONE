<template>
  <div class="container fluid" >
    <div class="row">
      <center>
        <h1 style="padding 3%">
          <span class="material-symbols-outlined">
admin_panel_settings
</span> Admin logged in as: {{user.firstName}} {{ user.lastName }}
        </h1>
      </center>
    </div>
    <br>
    <!-- USERS TABLE -->
    <div class="row">
      <h2>Users Table</h2>
    <div style="overflow-x:auto;">
  <table class="striped-table">
    <tr>
      <th>User ID</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>User Role</th>
      <th>Email</th>
      <th>Mobile No.</th>
      <th>Address</th>
    </tr>
    <tbody  v-if="users">
      <tr v-for="user in users" :key= "user.userID">
      <td>{{user.userID}}</td>
      <td>{{ user.firstName }}</td>
      <td>{{ user.lastName }}</td>
      <td>{{ user.userRole }}</td>
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
      <th>Update</th>
      <th>Delete</th>
    </tr>
    <tbody v-if = "products">
      <tr v-for="product in products" :key= "product.prodID">
      <td>{{ product.prodID }}</td>
      <td>{{ product.prodName }}</td>
      <td>{{ product.prodURL }}</td>
      <td>{{ product.prodPrice }}</td>
      <td>{{ product.prodDesc }}</td>
      <td>{{ product.prodCat }}</td>
      <td><button  data-bs-toggle="modal" data-bs-target="#editProd">
        Update
      </button></td>
      <!-- edit modal -->
      <div class="modal fade" id="editProd" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Update Product</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <!-- EDIT PRODUCT FORM -->
      <div class="modal-body">
    <form @submit.prevent="updatedProd" :key="product.prodID">   
  <!-- Profile image  -->
  <div class="mb-3">
  <label for="prodImage" class="form-label">Image Url</label>
  <input type="text" class="form-control" id="userImage" v-model="editProd.prodUrl">
  </div>
  <!-- name -->
  <div class="mb-3">
  <label for="prodName" class="form-label">Product Name</label>
  <input type="text" class="form-control" id="prodName" v-model="editProd.prodName">
  </div>
  <!-- pride -->
  <div class="mb-3">
    <label for="amount" class="form-label">Amount</label>
  <input type="number" class="form-control" id="amount" v-model="editProd.prodPrice">
  </div>
   <!-- Description  -->
   <div class="mb-3">
  <label for="quantity" class="form-label">Quantity</label>
  <input type="text" class="form-control" id="prodDesc" v-model="editProd.prodDesc">
  </div>
    <!-- category -->
    <div class="mb-3">
    <label for="category" class="form-label">Category</label>
  <input type="text" class="form-control" id="category" v-model="editProd.prodCat">
  </div>
  </form>
      </div>
      <div class="modal-footer">
        <!-- for update the product -->
        <button type="updatedProd" class="btn btn-primary" @click="updateProd(prodID)">Save changes</button>
      </div>
    </div>
  </div>
  </div>
  <!-- DELETE PRODUCT -->
      <td><button  @click="delProd(product.prodID)"> 
        Delete
      </button></td>

 </tr>
 <!-- ADD PRODUCT BUTTON -->
    <button class="btn btn-outline-dark" data-bs-toggle="modal" data-bs-target="#addProductModal"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bag-plus-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5v-.5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0zM8.5 8a.5.5 0 0 0-1 0v1.5H6a.5.5 0 0 0 0 1h1.5V12a.5.5 0 0 0 1 0v-1.5H10a.5.5 0 0 0 0-1H8.5V8z"/>
</svg>
      Add Product
    </button>
    <!-- ADD PRODUCT MODAL -->
    <div class="modal fade" id="addProductModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Add a Product</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form @submit.prevent="newProd">
  <!-- name -->
  <div class="mb-3">
  <label for="prodName" class="form-label">Product Name</label>
  <input type="text" class="form-control" id="prodName" v-model="addProd.prodName">
  </div>
    <!-- Profit image  -->
    <div class="mb-3">
  <label for="prodImage" class="form-label">Product Image</label>
  <input type="text" class="form-control" id="prodUrl" v-model="addProd.prodUrl">
  </div>
  <!-- Category -->
  <div class="mb-3">
    <label for="category" class="form-label">Category</label>
  <input type="text" class="form-control" id="prodCat" v-model="addProd.prodCat">
  </div>
  <!-- Price -->
  <div class="mb-3">
    <label for="amount" class="form-label">Price</label>
  <input type="number" class="form-control" id="prodPrice" v-model="addProd.prodPrice">
  </div>
   <!-- Description  -->
   <div class="mb-3">
  <label for="quantity" class="form-label">Description</label>
  <input type="text" class="form-control" id="prodDesc" v-model="addProd.prodDesc">
  </div>
  </form>
      </div>
      <div class="modal-footer">
        <button type="submit" class="btn btn-primary" @click="newProduct(addProd)">Save changes</button>
      </div>
    </div>
  </div>
</div>
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
      <th>Last name</th>
      <th>Product</th>
      <th>Image</th>
      <th>Price</th>
      <th>Shipping Address</th>
      <th>Delete</th>
    </tr>
    <tbody v-if = "orders">
      <tr v-for="order in orders" :key= "order.orderID">
      <td>{{ order.orderID }}</td>
      <td> {{ order.firstName}}</td>
      <td> [{{ order.lastName }}]</td>
      <td> {{ order.prodName }}</td>
      <td> {{ order.prodURL }}</td>
      <td> {{ order.prodPrice }}</td>
      <td> {{ order.userAdd }}</td>
      <td > <span class="btn" @click="delOrder(order.orderID)"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
  <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
</svg></span></td>

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
import { useCookies } from "vue3-cookies";
const { cookies } = useCookies();
export default {
components:{
        SpinnerComp,
  },
  data() {  
    return {
      addProd: {
      prodName: "",
      prodUrl: "",
      prodPrice: "",
      prodDesc:"",
      prodCat: ""
      },

      editProd :{
      prodName: "",
      prodCat: "",
      prodPrice: "",
      prodDesc: "",
      prodUrl: ""
      },

      // add admin
      // addUser:{
      //  userID : "",
      //  firstName: "",
      //  lastName: "",
      //  userRole: "Admin",
      //  emailAdd: "",
      //  userPass: "",
      // }
    }
  },

 computed:{
  user() {
    return this.$store.state.user || cookies.get('user').result;
    },

  users(){
    return this.$store.state.users
  },
  products(){
    return this.$store.state.products
  },
  newProd (){
   return this.$store.dispatch('addProduct', this.addProd)
   },
   orders(){
            return this.$store.state.orders
        },
  updatedProd(){
    return this.$store.dispatch ('updateProduct', this.editProd)
  },

 },

 methods:{
  // add a product
  async newProduct() {
    try {
      await this.$store.dispatch("addProduct",this.addProd);
      alert("Product Added")
    } catch (error) {
      this.errorMsg = "An error occurred."
    }
  },

  // edit product
  async updateProd(prodID) {
    console.log("clicked");
      try {
        const response = await this.$store.dispatch('updateProduct', prodID);
        
        if (response.msg) {
          alert("Oops something seems wrong")
        } else {
          alert("Prodcut Updated")
        }
      } catch (error) {
        this.errorMsg = "An error occurred while updating the user."
      }
    },

  // delete product
  async delProd(prodID) {
    try {
      await this.$store.dispatch("deleteProduct", prodID);
      alert("Product Deleted")
    } catch (error) {
      this.errorMsg = "An error occurred."
    }
  },

  async delOrder(orderID){
    try {
      await this.$store.dispatch('deleteOrder', orderID)
      alert('Order deleted')
    }catch(error){
      this.errorMsg = "An error has occured"
    }
  }

 },

 mounted(){
this.$store.dispatch('fetchUsers'),
this.$store.dispatch('fetchProducts'),
this.$store.dispatch('fetchOrders'),
this.$store.dispatch('updateProduct')
} 
}       
</script>

<style scoped>
/* Striped Rows */
table, tbody, thead {
border-collapse: collapse;
/* width: 100%; */
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