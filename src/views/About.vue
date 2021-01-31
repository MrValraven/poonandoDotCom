<template>
  <div class="about">
    <div class="introducao">
      <img class="profilePic" src="../assets/profilepic.jpg" alt="Fotografia por: Francisco Projeto">
      <div class="informacoes">
        <p>Joana M. Calhau (n.1997) é uma jovem artista natural de Évora, Portugal.
        <br>
        O seu trabalho tenta responder a necessidades pessoais de experimentar, 
        conhecer novos métodos e formas de se envolver com a arte, nos diversos ramos artísticos:
        ​Música, Artes Plásticas e Visuais, Teatro, Escrita, Performance e Fotografia.</p>
        <div class="socials">
          <p class="Email">
            <a href="mailto:joanacalhau97@gmail.com"><img src="../assets/gmail.svg" alt=""></a>
            <span><a class="links" href="mailto:joanacalhau97@gmail.com">joanacalhau97@gmail.com</a></span> 
          </p>
          <p>
            <a href="https://www.instagram.com/poonando/"><img src="../assets/instagram.svg" alt=""></a> 
            <span><a class="links" href="https://www.instagram.com/corpo.inquieto/">@corpo.inquieto</a> | <a class="links" href="https://www.instagram.com/poonando/">@poonando</a></span>
          </p>
        </div>
        
      </div>
    </div>
      

      <div class="container">
        <div class="indice">
          <ul>
            <li @click="showEducation">Educação</li>
            <li @click="showWorkshops">Formação</li>
            <li @click="showWork">Trabalhos / Projetos</li>
          </ul>
        </div>

        <div v-if="showingEducation" class="educacao info">
          <h1>Educação</h1>
            <ul v-for="educaçao in educacao" :key="educaçao.id">
              <li>
                <p>{{ educaçao.curso }} | {{ educaçao.ano }}</p>
                <p>{{ educaçao.local }}</p>
              </li>
            </ul>
        </div>

        <div v-if="showingWorkshop" class="formacao info">
          <h1>Formação</h1>
            <ul v-for="formacao in formacoes" :key="formacao.id">
              <h3 class="data">{{ formacao.ano }}</h3>
              <li>
                <p>{{ formacao.nome }}</p>
                <p>{{ formacao.local }}</p>
              </li>
          </ul>
        </div>

        <div v-if="showingWork" class="trabalho info">
          <h1>Trabalhos / Projetos</h1>
            <ul v-for="trabalho in trabalhos" :key="trabalho.id">
              <h3>{{ trabalho.ano }} </h3>
              <li>
                <p>{{ trabalho.nome }}</p>
                <p>{{ trabalho.local }}</p>
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

<style >

.about {
  text-align: initial;
  color: black;
  margin-top: 30px;
}

.introducao {
  display: flex;
}

.informacoes {
  text-align: center;
  justify-content: center;
}

.socials {
  display: flex;
  justify-content: space-around;
}

.socials img {
  width: 40px;
}

.socials p {
  display: flex;
  flex-direction: column;
}

.socials span {
  margin-top: 15px;
  text-decoration: none;
}

.links {
  color: black;
}

.Email p {
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
  min-width: 40%;
  margin: 10px;
  border: 2px solid aquamarine;
}

.about .container .indice ul {
  border: 2px solid blue;
  list-style-type: none;
}

.about .container .indice li {
  justify-content: center;
  align-content: center;
  text-align: center;
  border: 2px solid red;
  margin: 10px;
  min-width: 40%;
  height: 150px;
  cursor: pointer;
}

.about .container .info {
  width: 60%;
  margin: 10px;
  border: 2px solid yellow;
}

</style>
