<template>
  <div class="container">
    <div class="containerdentro">
      <div><h1>Sobre nós</h1></div>
      <div class="pessoa">
        <img
          src="https://media-gru2-2.cdn.whatsapp.net/v/t61.24694-24/353737261_1742937982814255_6799512213380049977_n.jpg?ccb=11-4&oh=01_AdSpyHuAiPIACPqzJTkfd541L4glx8n5a4FBVBP6XYJkSA&oe=652488A2&_nc_sid=000000&_nc_cat=105"
        />
        <div class="pessoa-info">
          <h1>Daniel Carpes</h1>
          <p>Idade: 18 anos</p>
          <p>Formação: Ciencias da computação</p>
          <p>
            Daniel Carpes, aos 18 anos, é um entusiasta da tecnologia e
            apaixonado por Ciências da Computação desde cedo. Com sua formação
            nessa área, ele adquiriu habilidades sólidas e conhecimento extenso,
            impulsionando-o a enfrentar desafios complexos no mundo digital.
            Além de sua jornada profissional, Daniel compartilha uma bela
            história de amor com Bianca de Jesus Ferraz, uma talentosa designer.
            Essa união não apenas fortalece suas vidas pessoais, mas também cria
            uma sinergia única, onde a paixão pela tecnologia e pelo design se
            complementam, impulsionando-os mutuamente para um futuro brilhante e
            inovador.
          </p>
        </div>
      </div>
      <div class="pessoa">
        <img
          src="https://media-gru2-2.cdn.whatsapp.net/v/t61.24694-24/383390713_1327016311534159_1991123836619013679_n.jpg?ccb=11-4&oh=01_AdRwZoDAzJv2KpRIxcZ_b2b0lK5qgMKI82owtepuTSxl6A&oe=652474F4&_nc_sid=000000&_nc_cat=109"
        />
        <div class="pessoa-info">
          <h1>Bianca de Jesus Ferraz</h1>
          <p>Idade: 18 anos</p>
          <p>Formação: Design Grafico</p>
          <p>
            Bianca de Jesus Ferraz, 18 anos, é uma talentosa designer apaixonada
            por arte desde a infância. Formada em Design, ela se destaca na
            criação de projetos visuais envolventes, valorizando detalhes e
            inovação. Além de sua carreira brilhante, Bianca é casada com Daniel
            Carpes, um entusiasta da tecnologia, formando uma parceria única que
            une paixões e fortalece tanto o aspecto profissional quanto pessoal
            de suas vidas. Seu futuro no mundo do Design é promissor,
            impulsionado por sua dedicação e amor pela arte criativa.
          </p>
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
  max-width: 1000px;
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
.pessoa {
  display: flex;
  align-items: flex-start;
  width: 100%;
  margin: 20px;
  padding: 20px;

  border: 1px solid black;
  border-radius: 10px;
}

.pessoa img {
  width: 20%;
  border-radius: 50%;
  margin-right: 20px;
  border: 3px black solid;
}
.pessoa p {
  text-align: justify;
}
</style>