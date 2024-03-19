<template>
  <div class="container">
    <div class="containerdentro">
      <div class="contato-container">
    <h1 class="titulo">Contato</h1>
    <div class="formulario">
      <div class="campo">
        <label for="nome">Nome:</label>
        <input type="text" id="nome" v-model="nome" placeholder="Seu nome" />
      </div>
      <div class="campo">
        <label for="email">E-mail:</label>
        <input
          type="email"
          id="email"
          v-model="email"
          placeholder="Seu e-mail"
        />
      </div>
      <div class="campo">
        <label for="mensagem">Mensagem:</label>
        <textarea
          id="mensagem"
          v-model="mensagem"
          placeholder="Sua mensagem"
        ></textarea>
      </div>
      <button class="enviar">Enviar</button>
    </div>
  </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Contato",
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
  text-align: center;
  padding-bottom: 10px;
}
.contato-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}

.titulo {
  font-size: 24px;
  text-align: center;
  margin-bottom: 20px;
}

.formulario {
  display: flex;
  flex-direction: column;
}

.campo {
  margin-bottom: 10px;
}

.campo label {
  display: block;
  margin-bottom: 5px;
}

.campo input,
.campo textarea {
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
}

.enviar {
  width: 100%;
  padding: 10px;
  background-color: #3498db;
  color: white;
  border: none;
  cursor: pointer;
}

.enviar:hover {
  background-color: #2980b9;
}
</style>

