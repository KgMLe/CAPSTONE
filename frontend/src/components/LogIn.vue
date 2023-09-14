<template>
  <div>
    <div class="container-fluid" style="padding: 7%;">
    <div class="row">
        <div class="col-12 col-md-4 offset-md-4">

            
            <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="myModalLabel">Login form</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <form @submit.prevent="login">
                                <div class="mb-3">
                                    <label for="email" class="form-label">Email address</label>
                                    <div class="input-group pb-modalreglog-input-group">
                                        <input type="email" class="form-control" id="email" placeholder="Email" v-model="userLogin.userEmail" required>
                                        <span class="input-group-text"><span class="glyphicon glyphicon-user"></span></span>
                                    </div>
                                </div>
                                <div class="mb-3">
                                    <label for="password" class="form-label">Password</label>
                                    <div class="input-group pb-modalreglog-input-group">
                                        <input type="password" class="form-control" id="password" placeholder="Password" required v-model="userLogin.userPass">
                                        <span class="input-group-text"><span class="glyphicon glyphicon-lock"></span></span>
                                    </div>
                                </div>
                                <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="login" class="btn btn-primary">Log in</button>
                        </div>
                            </form>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div class="modal fade" id="myModal2" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-sm" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="myModalLabel">Registration form</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <!-- registration -->
                        <div class="modal-body">
                            <form class="pb-modalreglog-form-reg">
                                <div class="mb-3">
                                    <div id="pb-modalreglog-progressbar"></div>
                                </div>
                                <div class="mb-3">
                                <label for="inputEmail" class="form-label">Firstname</label>
                                    <div class="input-group pb-modalreglog-input-group">
                                        <span class="input-group-text"><span class="glyphicon glyphicon-user"></span></span>
                                        <input type="email" class="form-control" id="firstName" placeholder="Firstname" v-model="addUser.firstName">
                                    </div>
                                </div>
                                <div class="mb-3">
                                    <label for="inputEmail" class="form-label">Lastname</label>
                                    <div class="input-group pb-modalreglog-input-group">
                                        <span class="input-group-text"><span class="glyphicon glyphicon-user"></span></span>
                                        <input type="email" class="form-control" id="lastName" placeholder="Lastname"  v-model="addUser.lastName">
                                    </div>
                                </div>
                                <div class="mb-3">
                                    <label for="inputEmail" class="form-label">Email address</label>
                                    <div class="input-group pb-modalreglog-input-group">
                                        <span class="input-group-text"><span class="glyphicon glyphicon-user"></span></span>
                                        <input type="email" class="form-control" id="inputEmail" placeholder="Email" v-model="addUser.userEmail">
                                    </div>
                                </div>
                                <div class="mb-3">
                                    <label for="inputPws" class="form-label">Password</label>
                                    <div class="input-group pb-modalreglog-input-group">
                                        <span class="input-group-text"><span class="glyphicon glyphicon-lock"></span></span>
                                        <input type="password" class="form-control" id="inputPws" placeholder="Password" v-model="addUser.userPass">
                                    </div>
                                </div>
                                <div class="mb-3">
                                    <label for="countries" class="form-label">User Role</label>
                                    <div class="input-group pb-modalreglog-input-group">
                                        <span class="input-group-text"><span class="glyphicon glyphicon-globe"></span></span>
                                        <input type="text" class="form-control" id="userRole" placeholder="user" v-model="addUser.userRole">
                                    </div>
                                </div>
                                <div class="mb-3">
                                    <label for="age" class="form-label">Address</label>
                                    <div class="input-group pb-modalreglog-input-group">
                                        <input id="userAdd" class="form-control" 
                                        placeholder="12 Street, Wynberg, WC" v-model="addUser.userAdd">
                                    </div>
                                </div>
                                <div class="mb-3">
                                    <label for="inputEmail" class="form-label">Mobile Number</label>
                                    <div class="input-group pb-modalreglog-input-group">
                                        <span class="input-group-text"><span class="glyphicon glyphicon-user"></span></span>
                                        <input type="mobile" class="form-control" id="userMobile" placeholder="+234567890" v-model="addUser.userMobile">
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" @click="newUser" class="btn btn-primary"   >Sign up</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


<div class="card text-center">
  <div class="card-header">
    <h5 class="modal-title">Sorry, You're not logged in</h5>
  </div>
  <div class="modal-content" style="padding: 1.5%;">
      <!-- Body -->
      <div class="modal-body text-center">
        <i class="fas fa-bell fa-4x animated rotateIn mb-4"></i>
        <p>Please Login/ Register to continue</p>
      </div>

      <!-- Footer -->
      <div class="modal-footer justify-content-center">
        <button class="btn btn-primary pb-modalreglog-submit" data-bs-toggle="modal" data-bs-target="#myModal">Login</button>
                <br>
                <button class="btn btn-primary pb-modalreglog-submit" data-bs-toggle="modal" data-bs-target="#myModal2">Register</button>
      </div>
    </div>
</div>

</div>

</div>
</template>

<script>
import router from "@/router";
export default{
  data(){
    return{
      addUser:{
       firstName: "",
       lastName: "",
       userEmail: "",
       userPass: "",
       userRole: "user",
       userAdd: "",
       userMobile: ""
      },

      userLogin:{
       userEmail: "",
       userPass: ""
      }
    }
  },

  computed:{
    user() {
      return this.$store.state.user;
    },
  },

  mounted(){
    this.$store.dispatch('fetchUsers')
  },

  methods: {
    newUser(){
    this.$store.dispatch('addUser', this.addUser)
   },

   login() {
      this.$store.dispatch("login", this.userLogin),
      router.push('/products');
  },
  beforeCreate() {
    this.$store.dispatch("fetchUsers");
  }
}
}
</script>

<style scoped>

</style>