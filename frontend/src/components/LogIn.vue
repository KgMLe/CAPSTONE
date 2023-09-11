<template>
  <div>
    <div class="container pb-modalreglog-container">
    <div class="row">
        <div class="col-12 col-md-4 offset-md-4">
            <h2 class="pb-modalreglog-legend">Login /Register to continue</h2>
            <div class="input-group pb-modalreglog-input-group" style="padding: 5%;">
                <button class="btn btn-primary pb-modalreglog-submit" data-bs-toggle="modal" data-bs-target="#myModal">Login</button>
                <br>
                <button class="btn btn-primary pb-modalreglog-submit" data-bs-toggle="modal" data-bs-target="#myModal2">Register</button>
            </div>
            <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="myModalLabel">Login form</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <form>
                                <div class="mb-3">
                                    <label for="email" class="form-label">Email address</label>
                                    <div class="input-group pb-modalreglog-input-group">
                                        <input type="email" class="form-control" id="email" placeholder="Email">
                                        <span class="input-group-text"><span class="glyphicon glyphicon-user"></span></span>
                                    </div>
                                </div>
                                <div class="mb-3">
                                    <label for="password" class="form-label">Password</label>
                                    <div class="input-group pb-modalreglog-input-group">
                                        <input type="password" class="form-control" id="pws" placeholder="Password">
                                        <span class="input-group-text"><span class="glyphicon glyphicon-lock"></span></span>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Log in</button>
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
                            <form class="pb-modalreglog-form-reg" @submit.prevent="newUser">
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
                                        <input type="email" class="form-control" id="userMobile" placeholder="+234567890" v-model="addUser.userMobile">
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="submit" class="btn btn-primary" @click="newUser(addUser)">Sign up</button>
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
      }
    }
  },

  computed:{
  },

  mounted(){
    this.$store.dispatch('fetchUsers')
  },

  methods: {
    newUser(){
    this.$store.dispatch('addUser', this.addUser)
   },

  }
}
</script>

<style scoped>

</style>