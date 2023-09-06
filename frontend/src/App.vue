<template>
  <div>
    <NavBar/> <!--shows our navbar -->
  
  <main>
    <router-view/> <!--this shows our content-->
  </main>
 <FooTer/>
  </div>
</template>

<script>
 import NavBar from '@/components/NavBar.vue'
  import FooTer from '@/components/FooTer.vue'
  export default {
    components:{
      NavBar,
      FooTer
    }
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: black;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto minmax(0vh, 1fr) auto;
  }

  #app > *{
    grid-column: 1/-1;
  }

nav a {
  padding: 10px;
  font-weight: bold;
  color: white;
}

nav a.router-link-exact-active {
  background-color: #DDA15E;
  /* color: #DDA15E; */
}
</style>
