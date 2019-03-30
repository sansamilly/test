<template>
  <div>
      <div>{{msg}}</div>
      <button type="button" @click="add()">飞天吧</button>
  </div>
</template>
<script>
import store from '@/store';
export default {
  name: "test",
  data () {
    return {
      msg: "Hello, this is test page."
    }
  },
  methods: {
    add: () => {
      store.commit("flying");
    }
  }
}
</script>

