<template>
  <div class="detalhes-produto">
    <h1 class="titulo">Noticias</h1>
    <div class="info">
      <p class="nome-produto">{{ produto.tituloNoticia }}</p>

      <figure class="imagem is-4by3">
        <img :src="produto.imagemNoticia" />
      </figure>

      <p>{{ produto.subtituloNoticia }}</p>

      <p class="nota">{{ produto.daraHoraNoticia }}</p>
      <p>{{ produto.textoNoticia }}</p>
    </div>
  </div>
</template>

<script>
import API from "../../api";

export default {
  name: "Detalhes",
  data() {
    return {
      produto: {},
    };
  },
  methods: {
    async getProdutoById(id) {
      try {
        let response = await API.get("/Noticias/" + id);
        this.produto = response.data;
      } catch (error) {
        console.error("Erro ao obter detalhes do produto:", error);
      }
    },
  },
  mounted() {
    let id = this.$route.params.id;
    this.getProdutoById(id);
  },
};
</script>

<style scoped>
.detalhes-produto {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.titulo {
  font-size: 24px;
  text-align: center;
  margin-bottom: 20px;
}

.info {
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
</style>
