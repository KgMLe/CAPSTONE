import { createStore } from 'vuex'
import axios from 'axios'
import sweet from "sweetalert";
import router from "@/router";
import { useCookies } from "vue3-cookies";
import authenticateUser from '@/services/authenticateUser';
const { cookies } = useCookies();
const anchored = "https://anchored.onrender.com/"



export default createStore({
  state: {
    users: null,
    user: null,
    products: null,
    product: null,
    orders: [],
    order: null,
    userOrder: null,
    cartItems: null,
    category: null,
    categoryHoodies: null,
    categoryGraphicT:null,
    categoryAccessories:null,
    spinner: false,
    token: null,
    msg: null
  },
  getters: {
  },
  mutations: {
    setUsers(state, users){
      state.users = users
    },
    setUser(state, user){
      state.user = user
    },
    newUser(state, user){
      state.users.push(user)
    },
    deleteUser(state, userID) {
      state.users = state.users.filter(user => user.id !== userID);
    },
    updateUser(state, user){
      state.users = state.users.map(u => u.id === user.id ? user : u)
    },
    newProduct (state, product){
      state.users.push(product)
    },
    setProducts(state, products){
      state.products = products
    },
    setProduct(state, product){
      state.product = product
    },
    deleteProduct(state, prodID) {
    state.products = state.products.filter(product => product.id !== prodID);
    },
    updateProduct(state, product){
      state.products = state.products.map(p => p.id === product.id ? product : p)
    },
    // cart and order stuff
    // addToCart(state, item) {
    //   state.cartItems.push(item);
    // },
    // delFromCart(state, index) {
    //   state.cartItems.splice(index, 1);
    // },
    setOrders(state, orders){
      state.orders = orders
    },
    setOrder(state, order){
      state.order = order
    },
    newOrder(state, order){
      state.orders.push(order)
    },
    delOrder(state, orderID) {
      state.orders = state.orders.filter(order => order.id !== orderID);
    },
    setSpinner(state, value){
      state.spinner= value
    },
    setToken (state, token){
      state.token = token
    },
    setMsg (state, msg){
      state.msg = msg
    },
  },
  actions: {
      // fetch products
      async fetchProducts(context){
        try{
            const {data} = await axios.get(`${anchored}products`)
            context.commit("setProducts", data.results )
        }catch(e){
          context.commit("setMsg", "An error occured")
        }
      },
      // fetch product
      async fetchProduct(context, id){
        try{
            const {data} = await axios.get(`${anchored}product/${id}`)
            context.commit("setProduct", data.results )
        }catch(e){
          context.commit("setMsg", "An error occured")
        }
      },
// add Product
       async addProduct(context, payload) {
                try {
                  const response = await axios.post(`${anchored}product/new`, payload);
                  const { msg, product } = response.data;
            
                  if (msg) {
                    context.commit("setMsg", msg);
                  } else {
                    context.commit("newProduct", product);
                    context.commit("setMsg", "Product added successfully");
                  }
                } catch (e) {
                  context.commit("setMsg", "An error occurred while adding the product");
                }
      },
// deletProduct
      async deleteProduct(context, id) {
              try {
                const response = await axios.delete(`${anchored}product/${id}`);
                const { msg } = response.data;
          
                if (msg) {
                  context.commit("setMsg", msg);
                } else {
                  context.commit("deleteProduct", "Product deleted successfully");
                }
              } catch (e) {
                context.commit("setMsg", "An error occurred while deleting the product");
              }
      },
      // updateProduct
      async updateProduct(context, payload) {
              try {
                const response = await axios.patch(`${anchored}product/${payload.id}`, payload);
                const { msg } = response.data;
          
                if (msg) {
                  context.commit("setMsg", msg);
                } else {
                  context.commit("updateProduct", payload, "Product updated successfully");
                }
              } catch (e) {
                context.commit("setMsg", "An error occurred while updating the product");
              }
      },
      // fetch users
      async fetchUsers(context){
        try{
            const {data} = await axios.get(`${anchored}users`)
            context.commit("setUsers", data.results )
        }catch(e){
          context.commit("setMsg", "An error occured")
        }
      }, 
      // fetch user
      async fetchUser(context, id){
        try{
            const {data} = await axios.get(`${anchored}user/${id}`)
            context.commit("setUser", data.results )
        }catch(e){
          context.commit("setMsg", "An error occured")
        }
      },
      // update user
      async updateUser(context, payload) {
        try {
          const response = await axios.patch(`${anchored}user/${payload.id}`, payload);
          const { msg } = response.data;
    
          if (msg) {
            context.commit("setMsg", msg);
          } else {
            context.commit("newUser", payload, "User updated successfully"); // Update the users array;
          }
        } catch (e) {
          context.commit("setMsg", "An error occurred while updating the user");
        }
      }, 
        // deleteUser
        async deleteUser(context, id) {
          try {
            const response = await axios.delete(`${anchored}user/${id}`);
            const { msg } = response.data;
      
            if (msg) {
              context.commit("setMsg", msg);
            } else {
              context.commit("deleteUser", id, "User deleted successfully");
            }
          } catch (e) {
            context.commit("setMsg", "An error occurred while deleting the user");
          }
        },
        // addUser or register
        async addUser(context, payload) {
          try {
            const {msg} = (await axios.post(`${anchored}user/new`, payload)).data;
            //post request
        if (msg) { //if payload posted give us a sweet message
          sweet({
            title: "Registration",
            text: msg,
            icon: "success",
            timer: 4000,
          });
          context.dispatch("fetchUsers");
          router.push('/login');
        } else { //if not posted then give us this sweet error
          sweet({
            title: "Error",
            text: msg,
            icon: "error",
            timer: 4000
          });
        }
      } catch (e) {
        context.commit("setMsg", "An error has occured");
      }
        },

      // login
      async login(context, payload) {
        try {
          const { msg, token, result } = (
            await axios.post(`${anchored}login`, payload) //login request`
          ).data;
          // console.log( msg, token, result);
          if (result) {
            context.commit("setUser", { result, msg });
            cookies.set("user", { msg, token, result });
            authenticateUser.applyToken(token);
            sweet({
              title: msg,
              text: `Good to have you back`,
              icon: "success",
              timer: 4000,
            });
            router.push('/products' ); 
          } else {
            sweet({
              title: "Error",
              text: msg,
              icon: "error",
              timer: 4000,
            });
          }
        } catch (e) {
          context.commit("setMsg", "An error has occured");
        }
      },
      // admin login
      async adminLogin(context, payload) {
        try {
          const { msg, token, result } = (
            await axios.post(`${anchored}admin`, payload) 
          ).data;
          // console.log( msg, token, result);
          if (result) {
            context.commit("setUser", { result, msg });
            cookies.set('user', { msg, token, result });
            authenticateUser.applyToken(token);
            sweet({
              title: msg,
              text: `Welcome back, ${result?.FirstName} ${result?.LastName} , youre logged in as admin`,
              icon: "success",
              timer: 4000,
            });
            router.push('/admin'); //page i want to go after
          } else {
            sweet({
              title: "Error",
              text: msg,
              icon: "error",
              timer: 4000,
            });
          }
        } catch (e) {
          context.commit("setMsg", "An error has occured");
        }
      },
      // fetch orders
      async fetchOrders(context){
        try {
          const {data} = await axios.get(`${anchored}orders`)
          context.commit('setOrders', data )
        }catch(e){
          context.commit('setMsg', 'An error occured')
        }
      },

      // fetch order
      async fetchOrder(context, id){
        try {
          const {data} = await axios.get(`${anchored}order/${id}`)
          context.commit('setOrder', data )
        }catch(e){
          context.commit('setMsg', 'An error occured')
        }
      },

      // fetch user order
        async fetchUserOrders(context, id){
        try {
          const {msg,token, result} = await axios.get(`${anchored}/user/${id}/orders`)
          if (result) {
            context.commit("setOrder", { result, msg });
            cookies.set("user", { msg, token, result });
            authenticateUser.applyToken(token);
            sweet({	
              title: "msg",
              text: `Item added to cart ` ,
              icon: "success",
              timer: 4000,
            });
            context.dispatch("setOrder");
            router.push({ name: "cart" }); 
          } else {
            sweet({
              title: "Error",
              text: msg,
              icon: "error",
              timer: 4000
            });
          }
        }catch(e){
          context.commit('setMsg', 'An error occured')
        }
      },

      // new user order
      async addOrder(context, payload) {
        try {
            // console.log(payload);
              console.log('other side test');
          const { msg,token, result } = (await axios.post(`${anchored}order/new`, payload)).data;
          if (result) {
            context.commit("newOrder", { result, msg });
            cookies.set("user", { msg, token, result });
            authenticateUser.applyToken(token);
            sweet({	
              title: "msg",
              text: `Item added to cart ` ,
              icon: "success",
              timer: 4000,
            });
            context.dispatch("newOrder");
            router.push({ name: "cart" }); 
          } else {
            sweet({
              title: "Error",
              text: msg,
              icon: "error",
              timer: 4000
            });
          }
        } catch (e) {
          context.commit("setMsg", "An error has occured");
        }
      },
      // delete order
      async deleteOrder(context, id) {
        try {
          const response = await axios.delete(`${anchored}user/${id}/order/${id}`);
          const { msg } = response.data;
    
          if (msg) {
            context.commit("setMsg", msg);
          } else {
            context.commit("delOrder", "Order deleted successfully");
          }
        } catch (e) {
          context.commit("setMsg", "An error occurred while deleting the order");
        }
      
      },

      // logout
      async logOut(context) {
        context.commit('setUser')
        cookies.remove("user")
        router.push('/' ); 
    },
},
  modules: {
  },
})
