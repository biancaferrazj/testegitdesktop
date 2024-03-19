<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <img
        class="logo"
        src="https://cdn-icons-png.flaticon.com/512/5304/5304115.png"
      />
      <div class="navbar-start">
        <a class="navbar-item" href="/">
          <h2 class="titulo">Tulipa Noticias</h2>
        </a>
      </div>

      <a
        role="button"
        class="navbar-burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-center">
        <div class="navbar-start">
          <router-link to="/#" class="navbar-item"> Home </router-link>
          <router-link to="/Sobre" class="navbar-item"> Sobre </router-link>
          <router-link to="/Contato" class="navbar-item"> Contato </router-link>
          <router-link to="/Social" class="navbar-item"> Social </router-link>
          <router-link to="/Assine" class="navbar-item"> Assine! </router-link>
        </div>
      </div>

      <div class="navbar-end">
        <div class="field">
          <div class="pesquisa">
            <input class="input" type="text" placeholder="Pesquisar" />
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "HeaderNav",
};
</script>

<style scoped>
.navbar {
  padding: 15px;
  background-color: #56CBF9;
  display: flex;
  justify-content: space-between;
}

.navbar-brand {
  display: flex;
  align-items: center;
}

.navbar-center {
  display: flex;
  justify-content: center;
}

.navbar-item {
  font-family: Arial;
  font-weight: bold;
  font-size: 1.3em;
  color: black;
}

.titulo {
  font-family: Arial, sans-serif;
  font-weight: bold;
  color: black;
  font-size: 1.5em;
}
.logo {
  width: 80px;
  background-color: #56CBF9;
}
.pesquisa {
  margin-top: 20px;
  margin-right: 100px;
}
</style>



