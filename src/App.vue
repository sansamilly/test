<template>
  <div id="app">
    <v-header v-show="showHeader"></v-header>
    <router-view/>
  </div>
</template>

<script>

import vHeader from './views/VHeader';

export default {
  name: 'app',
  data () {
    return {
      showHeader: false
    }
  },
  components:{
    vHeader
  },
  watch: {
    '$route' () {
      this.routeChange();
    }
  },
  methods: {
    routeChange() {
      this.showHeader = this.$route.path !== '/login' &&  this.$route.path !== '/';
    }
  },
  created () {
    this.routeChange();
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
