<template>
  <div class="login p-20">
    <el-row>
      <el-col :span="24" class="mb-30">
        <div class="welcome"> Welcom to Emily's site</div>
      </el-col>
      <el-col :span="24" class="mb-20">
        <el-input v-model="username" prefix-icon="iconfont myIconnickname" placeholder="Username" ></el-input>
      </el-col>
      <el-col :span="24" class="mb-20">
        <el-input v-model="password" prefix-icon="iconfont myIconlocking" placeholder="Password" show-password></el-input>
      </el-col>
      <el-col :span="24" class="mb-20">
        <span class="f-right c-lightGreen">No account? Register now.</span>
      </el-col>
      <el-col :span="24">
        <el-button @click="login" type="success" class="width-full" round>Login</el-button>
      </el-col>
    </el-row>
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
    login ()  {
      sessionStorage.setItem('username', this.username);
      console.log(this.bus);
      this.bus.$emit("login", this.username);
      this.$router.push("/home");
    },
    add: () => {
      store.commit("flying");
    }
  }
}
</script>
<style lang="scss" scoped>


</style>


