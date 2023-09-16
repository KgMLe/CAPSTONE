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
         <form @submit.prevent="adminLogin">
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
        </div>
    </div>


<div class="card text-center">
  <div class="card-header">
    <h5 class="modal-title">Sorry, You're have to be logged in to access this page</h5>
  </div>
  <div class="modal-content" style="padding: 1.5%;">
      <!-- Body -->
      <div class="modal-body text-center">
        <i class="fas fa-bell fa-4x animated rotateIn mb-4"></i>
        <p>Please Login to continue</p>
      </div>

      <!-- Footer -->
      <div class="modal-footer justify-content-center">
        <button class="btn btn-primary pb-modalreglog-submit" data-bs-toggle="modal" data-bs-target="#myModal">Login</button>
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
 adminLogin() {
  this.$store.dispatch("adminLogin", this.userLogin),
  router.push('/admin');
  },
  beforeCreate() {
    this.$store.dispatch("fetchUsers");
  }
}
}
</script>

<style scoped>

</style>