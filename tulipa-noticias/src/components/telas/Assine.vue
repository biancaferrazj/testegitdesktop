<template>
  <div class="container">
    <div class="containerdentro">
      <div class="titulo">
        <div>
          <h1>Nos ajude a continuar com o jornal:</h1>
          <p>Faça um pix para para nos ajudar!</p>
          <h4>chave pix: 67984665869</h4>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Sobre",
};
</script>
<style scoped>
body {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
  background-color: #f0f0f0;
}

.container {
  max-width: 600px;
  padding-top: 40px;
}

.containerdentro {
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  text-align: center;
}
h1 {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1.5em;
  font-weight: bold;
}
.coluna {
  display: flex;
  align-items: center;
  padding-bottom: 20px;
}
</style>