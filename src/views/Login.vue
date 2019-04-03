<template>
  <div>
    <div class="pb-10">
      <el-input v-model="username" placeholder="Username" class="width-200"></el-input>
    </div>
    <div class="pb-10">
      <el-input v-model="password" placeholder="Password" class="width-200" show-password></el-input>
    </div>
    <el-button type="success">Login</el-button>
  </div>
</template>
<script>

import store from '@/store';
export default {
  name: "login",
  data () {
    return {
      username: "",
      password: "",
    }
  },
  methods: {
    add: () => {
      store.commit("flying");
    }
  }
}
</script>
<style lang="scss" scoped>


</style>


