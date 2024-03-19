<template>
  <HeaderNav />
  <router-view></router-view>
</template>

<script>
import HeaderNav from "./components/HeaderNav";

export default {
  name: "App",
  components: {
    HeaderNav,
  },
};
</script>
