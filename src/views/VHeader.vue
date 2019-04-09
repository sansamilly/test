<template>
      <div class="header clear">
            <div class="f-left c-white">
                  <span v-text="username"></span>
            </div>
            <div class="f-right">
                 aaa
            </div>
      </div>
</template>
<script>
import store from '@/store';
export default {
      name: 'vHeader',
      data() {
            return {
                  username : sessionStorage.getItem('username')
            }
      },
      mounted() {
            let _this = this;
            this.bus.$on('login', function(data){
                  _this.username = data;
            })
      }
}
</script>
<style lang="scss" scoped>
@import  '../scss/color.scss';
      .header{
            height: 50px;
            line-height: 50px;
            width: 100%;
            background-color: $base-color;
            padding: 0 20px;
      }
</style>


