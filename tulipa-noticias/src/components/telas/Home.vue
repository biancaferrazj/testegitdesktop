<template>
  <div class="columns is-multiline">
    <div
      v-for="pacote in produtos"
      :key="pacote.id"
      class="column is-one-quarter-desktop is-half-tablet is-full-mobile"
    >
      <div class="produto-item">
        <CartProduto :info="pacote" />
      </div>
    </div>
  </div>
</template>

<script>
import CartProduto from "../CartProduto";

import API from "../../api";

export default {
  name: "App",
  components: {
    CartProduto,
  },
  data() {
    return {
      produtos: [],
    };
  },
  methods: {
    async getProdutos() {
      let prod = await API.get("/noticias");
      console.log(prod.data);
      this.produtos = prod.data;
    },
  },
  mounted() {
    this.getProdutos();
  },
};
</script>

<style scoped>
.produto-item {
  margin: 20px;
}
</style>




