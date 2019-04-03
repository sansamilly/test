<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h1>{{count}}</h1>
  </div>
</template>
<script>
import store from "@/store";
export default {
  name: "about",
  data: () => {
    return {
      count: store.state.count
    }
  }
}
</script>
>