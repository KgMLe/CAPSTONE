<template>
  <div class="container-fluid">
    <div class="container rounded bg-white mt-5 mb-5">
    <div class="row">
        <div class="col-md-3 border-right">
            <div class="d-flex flex-column align-items-center text-center p-3 py-5">
              <img class="rounded-circle mt-5" width="150px" src="https://i.postimg.cc/fRD3CqrR/user-icon-150670-removebg-preview.png">
              <span class="font-weight-bold">user.firstName</span>
              <span class="text-black-50">user.userEmail</span><span> </span>
            </div>
        </div>
        <div class="col-md-5 border-right">
            <div class="p-3 py-5">
                <div class="d-flex justify-content-between align-items-center mb-3">
                    <h1 class="text-right">My Profile</h1>
                </div>
                <div class="row mt-2">
                    <div class="col-md-6"><label class="labels">Name</label><input type="text" class="form-control" placeholder="first name" value=""></div>
                    <div class="col-md-6"><label class="labels">Surname</label><input type="text" class="form-control" value="" placeholder="surname"></div>
                </div>
                <div class="row mt-3">
                    <div class="col-md-12"><label class="labels">Mobile Number</label><input type="text" class="form-control" placeholder="Phone number" value=""></div>
                    <div class="col-md-12"><label class="labels">Email ID</label><input type="text" class="form-control" placeholder="enter email id" value=""></div>
                    <div class="col-md-12"><label class="labels">Address</label><input type="text" class="form-control" placeholder="123 Main St,Wynberg, Cape Town" value=""></div>
                </div>
                <div class="mt-5 text-center"><button class="btn btn-primary profile-button" type="button">Update Profile</button> <button class="btn btn-primary profile-button" type="button">Delete Profile</button>
                    <br>
                    
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
</script>

<style scoped>
/* user profile styling */
.form-control:focus {
    box-shadow: none;
    border-color:#BC6C25;
}
.profile-button {
    background: #BC6C25;
    box-shadow: none;
    border: none
}
.profile-button:hover {
    background: #BC6C25;
}
.profile-button:focus {
    background: #BC6C25;
    box-shadow: none
}
.profile-button:active {
    background: #BC6C25;
    box-shadow: none
}
.labels {
    font-size: 11px
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