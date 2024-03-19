<template>
  <div class="card">
    <div class="card-image">
      <figure class="image is-4by3">
        <img :src="info.imagemNoticia" style="object-fit: contain" />
      </figure>
    </div>

    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <p class="title is-4">{{ info.tituloNoticia }}</p>
          <p class="subtitle is-6">{{ info.subtituloNoticia }}</p>
          <p>{{ info.dataHoraNoticia }}</p>
        </div>
      </div>
      <button @click="abrirNoticia()" class="button">Ler Mais</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "CartProduto",
  props: {
    info: Object,
  },
  methods: {
    abrirNoticia() {
      this.$router.push({ name: "detalhes", params: { id: this.info.id } });
    },
  },
};
</script>
<style scoped>
.title {
  color: black;
}
.button {
  width: 100%;
  background-color: #56CBF9;
}
</style>