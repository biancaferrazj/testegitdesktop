import { createRouter, createWebHashHistory } from "vue-router";

// importar os componentes de telas
import Home from "./components/telas/Home";
import Detalhes from "./components/telas/Detalhes";
import Sobre from "./components/telas/Sobre";
import Contato from "./components/telas/Contato";
import Social from "./components/telas/Social";
import Assine from "./components/telas/Assine";

const rotas = [
  {
    path: "/",
    name: "Inicio",
    component: Home
  },
  {
    path: "/sobre",
    name: "sobre",
    component: Sobre
  },
  {
    path: "/contato",
    name: "contato",
    component: Contato
  },
  {
    path: "/detalhes/:id",
    name: "detalhes",
    component: Detalhes
  },
  {
    path: "/Social",
    name: "Social",
    component: Social
  },
  {
    path: "/Assine",
    name: "Assine",
    component: Assine
  }
];

const caminhos = createRouter({
  history: createWebHashHistory(),
  routes: rotas
});

export default caminhos;
