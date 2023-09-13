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

          <!-- edit button -->
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#fullHeightModalRight">
          Edit
</button> <br>

<!-- Full Height Modal Right -->
<div class="modal fade right" id="fullHeightModalRight" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
  <!-- Add class .modal-full-height and then add class .modal-right (or other classes from list above) to set a position to the modal -->
  <div class="modal-dialog modal-dialog-right" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title w-100" id="myModalLabel">Update Your Details</h4>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form class="pb-modalreglog-form-reg" form @submit.prevent="updatedUser">
            <div class="mb-3">
              <div id="pb-modalreglog-progressbar"></div>
                </div>
                  <div class="mb-3">
                   <label for="inputEmail" class="form-label">Firstname</label>
                        <div class="input-group pb-modalreglog-input-group">
                           <span class="input-group-text"><span class="glyphicon glyphicon-user"></span></span>
                            <input type="email" class="form-control" id="firstName" placeholder="Firstname" v-model="editUser.firstName">
                         </div>
                         </div>
                                <div class="mb-3">
                                    <label for="inputEmail" class="form-label">Lastname</label>
                                    <div class="input-group pb-modalreglog-input-group">
                                        <span class="input-group-text"><span class="glyphicon glyphicon-user"></span></span>
                                        <input type="email" class="form-control" id="lastName" placeholder="Lastname"  v-model="editUser.lastName">
                                    </div>
                                </div>
                                <div class="mb-3">
                                    <label for="inputEmail" class="form-label">Email address</label>
                                    <div class="input-group pb-modalreglog-input-group">
                                        <span class="input-group-text"><span class="glyphicon glyphicon-user"></span></span>
                                        <input type="email" class="form-control" id="inputEmail" placeholder="Email" v-model="editUser.userEmail">
                                    </div>
                                </div>
                                <div class="mb-3">
                                    <label for="countries" class="form-label">User Role</label>
                                    <div class="input-group pb-modalreglog-input-group">
                                        <span class="input-group-text"><span class="glyphicon glyphicon-globe"></span></span>
                                        <input type="text" class="form-control" id="userRole" placeholder="user" v-model="editUser.userRole">
                                    </div>
                                </div>
                                <div class="mb-3">
                                    <label for="age" class="form-label">Address</label>
                                    <div class="input-group pb-modalreglog-input-group">
                                        <input id="userAdd" class="form-control" 
                                        placeholder="12 Street, Wynberg, WC" v-model="editUser.userAdd">
                                    </div>
                                </div>
                                <div class="mb-3">
                                    <label for="inputEmail" class="form-label">Mobile Number</label>
                                    <div class="input-group pb-modalreglog-input-group">
                                        <span class="input-group-text"><span class="glyphicon glyphicon-user"></span></span>
                                        <input type="mobile" class="form-control" id="userMobile" placeholder="+234567890" v-model="editUser.userMobile">
                                    </div>
            </div>
        </form>
      </div>
      <div class="modal-footer justify-content-center">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="submit" class="btn btn-primary" @click="updateUser(updatedUser)">Save changes</button>
      </div>
    </div>
  </div>
</div>
<!-- DELETE THE USER PROFILE -->
        <button @click="delUser(user.userID)">Delete Profile</button>
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
                    <div class="col">
                    <p class="m-b-10 f-w-600">Address</p>
                     <h6 class="text-muted f-w-400">{{user.userAdd}}</h6>
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

    data(){
    return {
       editUser:{
       firstName: "",
       lastName: "",
       userEmail: "",
       userRole: "user",
       userAdd: "",
       userMobile: ""
        }
        }
      },
       
       computed: {
        user() {
          return this.$store.state.user || cookies.get('user').result;
      },

      updatedUser(){
    return this.$store.dispatch ('updateUser', this.editUser) || cookies.get('user').result;
   },


    },

    methods:{
      async updateUser (userID) {
    console.log("clicked");
      try {
        const response = await this.$store.dispatch(userID) || cookies.get('user').result;
        
        if (response.msg) {
          alert("Oops something seems wrong")
        } else {
          alert("Profile Updated")
        }
      } catch (error) {
        this.errorMsg = "An error occurred while updating the user."
      }
    },

    async delUser() {
    try {
      await this.$store.dispatch("deleteUser") || cookies.get('user').result;
      alert("User Deleted")
    } catch (error) {
      this.errorMsg = "An error occurred "
    }
  },
    }

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
    background: linear-gradient(to right, #fdad61, #e96a2a);
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