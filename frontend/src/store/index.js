import { createStore } from 'vuex'
import axios from 'axios'
const anchored = "https://anchored.onrender.com/"



export default createStore({
  state: {
    users: null,
    user: null,
    products: null,
    product: null,
    orders: null,
    order: null,
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
    categoryHoodies(state, category){
      state.categoryHoodies = category
    },
    categoryGraphicT(state, category){
      state.categoryGraphicT = category
    },
    categoryAccessories(state, category){
      state.categoryAccessories = category
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
    addToCart(state, item) {
      state.cartItems.push(item);
    },
    delFromCart(state, index) {
      state.cartItems.splice(index, 1);
    },
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
      //fetch categories
      // fetch hoodies
      async fetchHoodies(context){
        try{
            const {data} = await axios.get(`${anchored}products/categories/hoodies`)
            context.commit("categoryHoodies", data.results )
        }catch(e){
          context.commit("setMsg", "An error occured")
        }
      },
       // fetch shirts
       async fetchGraphicT(context){
        try{
            const {data} = await axios.get(`${anchored}products/categories/graphictee`)
            context.commit("categoryGraphicT", data.results )
        }catch(e){
          context.commit("setMsg", "An error occured")
        }
      },
       // fetch accessories
       async fetchAccessories(context){
        try{
            const {data} = await axios.get(`${anchored}products/categories/accessories`)
            context.commit("categoryAccessories", data.results )
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
        // addUser
        async addUser(context, payload) {
          try {
            const response = await axios.post(`${anchored}register`, payload);
            const { msg, user } = response.data;
      
            if (msg) {
              context.commit("setMsg", msg);
            } else {
              context.commit("newUser", user); // Update the users array in the state
              context.commit("setMsg", "User added successfully");
            }
          } catch (e) {
            context.commit("setMsg", "An error occurred while adding the user");
          }
        },
      // cart stuff
      // add to cart
      addToCart({ commit, state }, item) {
        const existingItemIndex = state.cartItems.findIndex(cartItem => cartItem.id === item.id);
    
        if (existingItemIndex !== -1) {
          // Handle item already in the cart (e.g., increment quantity)
        } else {
          commit('addToCart', item);
        }
      },
      // remove from cart
      removeFromCart({ commit }, index) {
        commit('removeFromCart', index);
      },

      // checkout
      checkout({ commit, state }) {
        const order = {
          items: state.cartItems,
      } 
      commit('newOrder', order);
      commit('clearCart'); // Clear the cart after creating an order
    },
      // fetch orders
      async fetchOrders(context){
        try{
            const {data} = await axios.get(`${anchored}orders`)
            context.commit("setOrders", data.results )
        }catch(e){
          context.commit("setMsg", "An error occured")
        }  
  },
      // fetch order
      async fetchOrder(context, id){
        try{
            const {data} = await axios.get(`${anchored}order/${id}`)
            context.commit("setOrder", data.results )
        }catch(e){
          context.commit("setMsg", "An error occured")
        }  
      },

      // add order
      async registerOrder(context, payload) {
        try {
          const response = await axios.post(`${anchored}order/new`, payload);
          const { msg, order } = response.data;
  
          if (msg) {
            context.commit("setMsg", msg);
          } else {
            context.commit("newOrder", order);
            context.commit("setMsg", "Order added successfully");
          }
        } catch (e) {
          context.commit("setMsg", "An error occurred while adding the order");
        }
      
      },
      // delete order
      async deleteOrder(context, id) {
        try {
          const response = await axios.delete(`${anchored}order/${id}`);
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
},
  modules: {
  },
})
