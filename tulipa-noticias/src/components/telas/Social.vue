<template>
  <div class="container">
    <h1>Nossas Redes Sociais!</h1>
    <div class="containerdentro">
      <div class="redes">
        <div class="coluna">
          <h1>Daniel Carpes</h1>
          <div class="colunadentro">
            <img
              src="https://imagepng.org/wp-content/uploads/2017/08/instagram-icone-icon-1.png"
            />
            <a href="https://www.instagram.com/daniel.bcarpes/"
              ><p>@daniel.bcarpes</p></a
            >
          </div>
          <div class="colunadentro">
            <img
              src="https://i0.wp.com/www.multarte.com.br/wp-content/uploads/2018/11/whatsapp-logo-png-transparent.png?resize=696%2C696&ssl=1"
            />
            <a href="https://wa.me/5567984665869"><p>Daniel Carpes</p></a>
          </div>
          <div class="colunadentro">
            <img
              src="https://static.vecteezy.com/system/resources/previews/018/930/745/original/twitter-logo-twitter-icon-transparent-free-free-png.png"
            />
            <a href="https://x.com/DanielCarpes_?t=WItDPHi2uOUmk1a6YzbAQw&s=08"
              ><p>@DanielCarpes_</p></a
            >
          </div>
        </div>

        <div class="coluna">
          <h1>Bianca Ferraz</h1>
          <div class="colunadentro">
            <img
              src="https://imagepng.org/wp-content/uploads/2017/08/instagram-icone-icon-1.png"
            />
            <a href="https://www.instagram.com/zj.bia/"><p>@zj.bia</p></a>
          </div>

          <div class="colunadentro">
            <img
              src="https://i0.wp.com/www.multarte.com.br/wp-content/uploads/2018/11/whatsapp-logo-png-transparent.png?resize=696%2C696&ssl=1"
            />
            <a href="https://wa.me/5567996487345"><p>Bianca Ferraz</p></a>
          </div>
          <div class="colunadentro">
            <img
              src="https://static.vecteezy.com/system/resources/previews/018/930/745/original/twitter-logo-twitter-icon-transparent-free-free-png.png"
            />
            <a
              href="https://x.com/biancaferrazzjs?t=S8IM7Bd5EeGcZmbCY838NQ&s=08"
              ><p>@biancaferrazzjs</p></a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Social",
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
.redes {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
}
.coluna {
  padding: 20px;
}
.colunadentro {
  display: flex;
  align-items: center;
  padding-bottom: 20px;
}
.colunadentro img {
  width: 35px;
}
.colunadentro a {
  text-decoration: none;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1.3em;
  padding-left: 10px;
  color: black;
}
</style> 