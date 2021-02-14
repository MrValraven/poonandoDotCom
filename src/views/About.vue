<template>
  <div class="about">
    <div class="introducao">
      <div class="informacoes">
        <p>Joana M. Calhau (n.1997) é uma jovem artista natural de Évora, Portugal.
        <br>
        O seu trabalho tenta responder a necessidades pessoais de experimentar, 
        conhecer novos métodos e formas de se envolver com a arte, nos diversos ramos artísticos:
        ​Música, Artes Plásticas e Visuais, Teatro, Escrita, Performance e Fotografia.</p>
        <div class="socials">
          <p class="Email">
            <a href="mailto:joanacalhau97@gmail.com"><i class="fa fa-envelope-o"></i></a>
            <span><a class="links" href="mailto:joanacalhau97@gmail.com">joanacalhau97@gmail.com</a></span> 
          </p>
          <p>
            <a href="https://www.instagram.com/poonando/"><i class="fa fa-instagram"></i></a> 
            <span><a class="links" href="https://www.instagram.com/corpo.inquieto/">@corpo.inquieto</a> | <a class="links" href="https://www.instagram.com/poonando/">@poonando</a></span>
          </p>
        </div>
        
      </div>
      <img class="profilePic" src="../assets/profilepic.jpg" alt="Fotografia por: Francisco Projeto">
    </div>
      
    <div class="container">
      <div class="indice">
        <ul>
          <li @click="showEducation"><a>🏫 Educação</a></li>
          <li @click="showWorkshops"><a >Formação 📜</a></li>
          <li @click="showWork"><a>🎭 Trabalhos / Projetos </a></li>
        </ul>
      </div>

      <div v-if="showingEducation" class="educacao info">
        <h1>Educação</h1>
          <ul v-for="educaçao in educacao" :key="educaçao.id">
            <li>
              <p>{{ educaçao.curso }} | {{ educaçao.ano }}</p>
              <p class="local">{{ educaçao.local }}</p>
            </li>
          </ul>
      </div>

      <div v-if="showingWorkshop" class="formacao info">
        <h1>Formação</h1>
           <ul v-for="formacao in formacoes" :key="formacao.id">
            <li>
              <p>{{ formacao.nome }}</p>
              <p class="local">{{ formacao.local }} | {{ formacao.ano }}</p>
            </li>
         </ul>
      </div>

      <div v-if="showingWork" class="trabalho info">
        <h1>Trabalhos / Projetos</h1>
          <ul v-for="trabalho in trabalhos" :key="trabalho.id">
            <li>
              <p>{{ trabalho.nome }}</p>
              <p class="local">{{ trabalho.local }} | {{ trabalho.ano }}</p>
            </li>
          </ul>
      </div>

    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {

      showingEducation: true,
      showingWorkshop: false,
      showingWork: false,

      educacao: [
        {ano: '2019 - Presente', curso: 'Mestrado em Estudos Artísticos', local: 'FLUC - Faculdade de Letras da Universidade de Coimbra, Portugal'},
        {ano: '2018', curso: 'Erasmus no curso de Puppetry', local: 'VŠMU - Vysoká Škola Múzických Umení (Academia de Artes Performativas de Bratislava), Eslováquia'},
        {ano: '2016 - 2019', curso: 'Licenciatura em Teatro', local: 'EAUE - Escola de Artes da Universidade de Évora, Portugal'},
      ],
      formacoes: [
        {id: 9,ano: 2020, nome:  'Masterclass "Casa aberta da ideia ao traço (criar o espaço)", com Fernando Ribeiro e Maria João Brilhante', local: ' Oficina Municipal do Teatro (Coimbra)'},
        {id: 8,ano: 2020, nome:  '1ª Etapa - Laboratório END (Encontro de Novas Dramaturgias) "Processos de criação literária para palco: dramaturgia, teatralidade e materialidade", com Mickaël de Oliveira, Fernando Matos Oliveira, Lígia Soares, Patrícia Portela, Rui Pina Coelho e Mafalda Lencastre', local: 'Teatro Académico Gil Vicente (Coimbra)'},
        {id: 7,ano: 2020, nome:  'Workshop na Exposição: "A E I O U: Os Espacialistas em Pro(ex)cesso", com Luís Maria Baptista', local: 'Colégio das Artes, Universidade de Coimbra (Coimbra)'},
        {id: 6,ano: 2019, nome:  '"Participar e Pesquisar, Um encontro sobre Artes na Universidade"', local: ' Oficina Municipal do Teatro (Coimbra)'},
        {id: 5,ano: 2018, nome:  'Colóquio Internacional Performance e Intimidade, Grupo de Investigação em Estudos Artísticos da Universidade do Minho', local: 'Em parceria com a Oficina e o Festival Guimarães Noc Noc '},
        {id: 4,ano: 2018, nome:  'Workshop Prático de Fotografia pelas Capitais de Distrito, com Sandra Ribeiro', local: ' Instituto Português de Fotografia (Évora)'},
        {id: 3,ano: 2016, nome:  'Campanha de Escavações Arqueológicas na Encosta do Castelo', local: 'Mértola'},
        {id: 2,ano: 2015, nome:  'Workshop de Improvisação, com Isabel Bezelga', local: 'Universidade de Évora (Évora)'},
        {id: 1,ano: 2015, nome:  '"III Residência Cisterciense - Vida privada, quotidianos e cultura material",', local: 'Cultural do Alentejo, CIDEHUS (Évora).'},
      ],
      trabalhos: [
        {id: 10,ano: 2021, nome: 'Exposição de Fotografia "D E T U R P A D O"', local: 'Igreja de São Vicente, Évora.'},
        {id: 9,ano: 2020, nome: 'Performance "A E I O U: Os Espacialistas em Pro(ex)cesso", com Maria Rodrigues,', local:'Colégio das Artes, UC, Coimbra'},
        {id: 8,ano: 2020, nome: 'Exposição de Fotografia "D E T U R P A D O(work in progress)"', local: 'Festival Guimarães Noc Noc, Guimarães'},
        {id: 7,ano: 2020, nome: '"THEY CAN´T ERASE THAT" - Inauguração Galeria Urtiga, co-criação com João Kendall, interpretação Joana Calhau e Tomás Gomes', local: 'Galeria Urtiga, Porto'},
        {id: 6,ano: 2019, nome: 'Assistente de Produção na Performance/ Instalação/ Percurso "Às portas da Cidade", Malvada Associação Artística, direção artística Ana Luena', local: 'Festival Artes À Rua, Évora'},
        {id: 5,ano: 2019, nome: 'Fotógrafa/Performer, em co-criação com Helena Baronet, Mestre André, Sérgio Diogo Matias, Telma João Santos e Tomás Gomes na Performance "Sunset Party {$}HIT{$}"', local: 'Festival Artes À Rua, Évora.'},
        {id: 4,ano: 2019, nome: 'Exposição de Fotografia "D E T U R P A D O(work in progress)"', local: 'Festival Artes À Rua, Évora.'},
        {id: 3,ano: 2019, nome: 'Fotógrafa da peça de teatro "Stand By", criação/interpretação: Rúben Jaulino e Tiago Miguel Carrasco', local: 'Festival Artes À Rua, Évora'},
        {id: 2,ano: 2019, nome: 'Fotógrafa da peça de teatro documental "Sem Rosto", criação/interpretação: Matilde Magalhães e Tomás Gomes', local: 'A Bruxa Teatro, Évora'},
        {id: 1,ano: 2019, nome: 'Exposição de Fotografia "DISFORME",', local: 'Dia da Escola das Artes, Universidade de Évora'},
      ]
    }
  },
  methods: {
    showEducation() {
       this.showingEducation = true;
       this.showingWorkshop = false;
       this.showingWork = false;
    },
    showWorkshops() {
      this.showingWorkshop = true;
      this.showingEducation = false;
      this.showingWork = false;
    },
    showWork() {
      this.showingWork = true;
      this.showingWorkshop = false;
      this.showingEducation = false;
    }
  }
}
</script>

<style scoped>

.about {
  /* position: absolute;
  top: 0;
  width: 100vw;
  min-height: 100vh;
  padding: 16px;
  background-color: #ffffff;
  transition: .3s all ease-in-out; */
  text-align: initial;
  margin-top: 30px;
  color: #2c3e50;
}

.about .introducao {
  display: flex;
}

.about .introducao .informacoes {
  text-align: center;
  justify-content: center;
}

.about .introducao .informacoes .socials {
  display: flex;
  justify-content: space-around;
}

.about .introducao .informacoes .socials img {
  width: 40px;
}

.about .introducao .informacoes .socials p {
  display: flex;
  flex-direction: column;
}

.about .introducao .informacoes .socials span {
  margin-top: 15px;
  text-decoration: none;
}

.about .introducao .informacoes .socials .links {
  color: black;
}

.about .introducao .informacoes .socials .Email p {
  margin: 0 10px;
}

.about .container {
  display: flex;
  flex-direction: row;
  margin: 0;
  padding: 0;
  width: 100%;
}

.about .container .indice {
  display: flex;
  flex-direction: row;
  justify-content: center;
  min-width: 45%;
  margin: 10px;
  border: 2px solid aquamarine;
}

.about .container .indice ul {
  border: 2px solid blue;
  width: 80%;
  list-style-type: none;
}

.about .container .indice li {
  text-align: center;
  margin: 25px;
  width: 350px;
  height: 70px;
	padding: 30px 30px;
  cursor: pointer;
	border-radius: 10px;
	background-color: #f5f5f5;
	box-shadow: -7px -7px 20px 0px #fff9,
              -4px -4px 5px 0px #fff9,
              7px 7px 20px 0px #0002,
              4px 4px 5px 0px #0001,
              inset 0px 0px 0px 0px #fff9,
              inset 0px 0px 0px 0px #0001,
              inset 0px 0px 0px 0px #fff9,
              inset 0px 0px 0px 0px #0001;
  transition:box-shadow 0.6s cubic-bezier(.79,.21,.06,.81);
}  

.about .container .indice li:hover {
	box-shadow: 0px 0px 0px 0px #fff9,
	0px 0px 0px 0px #fff9,
	0px 0px 0px 0px #0001,
	0px 0px 0px 0px #0001,
	inset -7px -7px 20px 0px #fff9,
	inset -4px -4px 5px 0px #fff9,
	inset 7px 7px 20px 0px #0003,
	inset 4px 4px 5px 0px #0001;
}

.about .container .indice a {
	height: 45px;
	font-size: 30px;
	color: #555;
  display: inline-block;
	position: relative;
	padding: 10px;
}

.about .container .indice a::before {
    content: '';
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    background-color:  #42b983;;
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
}

.about .container .indice a:hover::before {
  color: #000000;
  transform: scaleX(1);
	transform-origin: bottom left;
}

.about .container .info {
  width: 55%;
  margin: 10px;
  border: 2px solid yellow;
}

.about .container .info h1  {
  font-size: 50px;
  padding-left: 20px;
  font-weight: lighter;
}

.about .container .info p {
  font-size: 25px;
}

.about .container .info .local {
  font-size: 20px;
}

</style>
