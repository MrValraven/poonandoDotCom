<template>
  <div class="about">
    <h1>About</h1>
    <div class="introducao">
      <img src="../assets/logo.png" alt="Fotografia por: Francisco Projeto">
      <div class="informacoes">
        <p>Natural de Évora, Portugal, Joana M. Calhau (n.1997). 
        O seu trabalho tenta responder a necessidades pessoais de experimentar, 
        conhecer novos métodos e formas de se envolver com a arte, nos diversos ramos artísticos:
        ​Música, Artes Plásticas e Visuais, Teatro, Escrita, Performance e Fotografia.</p>
        <p>Email: <a href="mailto:joanacalhau97@gmail.com">joanacalhau97@gmail.com</a></p>
        <p>Instagram: <a href="https://www.instagram.com/corpo.inquieto/">@corpo.inquieto</a> e  <a href="https://www.instagram.com/poonando/">@poonando</a> </p>
      </div>
    </div>
      

      <div class="container">
        <div class="educacao">
          <h2>Educação</h2>
          <ul>
            <li>
              <p>Mestrado em Estudos Artísticos 2019 - Presente</p>
              <p>FLUC - Faculdade de Letras da Universidade de Coimbra, Portugal</p>
            </li>
            <li>
              <p>Erasmus no curso de Puppetry 2018</p>
              <p>VŠMU - Vysoká Škola Múzických Umení (Academia de Artes Performativas de Bratislava), Eslováquia</p>
            </li>
            <li>
              <p>Licenciatura em Teatro 2016 - 2019</p>
              <p>EAUE - Escola de Artes da Universidade de Évora, Portugal</p>
            </li>
          </ul>
        </div>
        <div class="formacao">
          <h2>Formação</h2>
          <h3 class="data">2020</h3>
          <ul>
            <li>
              <p>Masterclass "Casa aberta da ideia ao traço (criar o espaço)", com Fernando Ribeiro e Maria João Brilhante</p>
              <p>Oficina Municipal do Teatro (Coimbra).</p>
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
      educacao: [
        {ano: '2019 - Presente', curso: 'Mestrado em Estudos Artísticos', local: 'FLUC - Faculdade de Letras da Universidade de Coimbra, Portugal'},
        {ano: '2018', curso: 'Erasmus no curso de Puppetry', local: 'VŠMU - Vysoká Škola Múzických Umení (Academia de Artes Performativas de Bratislava), Eslováquia'},
        {ano: '2016 - 2019', curso: 'Licenciatura em Teatro', local: 'EAUE - Escola de Artes da Universidade de Évora, Portugal'},
      ],
      formacao: [
        {ano: 2020, nome:  'Masterclass "Casa aberta da ideia ao traço (criar o espaço)", com Fernando Ribeiro e Maria João Brilhante', local: ' Oficina Municipal do Teatro (Coimbra)'},
        {ano: 2020, nome:  '1ª Etapa - Laboratório END (Encontro de Novas Dramaturgias) "Processos de criação literária para palco: dramaturgia, teatralidade e materialidade", com Mickaël de Oliveira, Fernando Matos Oliveira, Lígia Soares, Patrícia Portela, Rui Pina Coelho e Mafalda Lencastre,', local: 'Teatro Académico Gil Vicente (Coimbra)'},
        {ano: 2020, nome:  'Workshop na Exposição: "A E I O U: Os Espacialistas em Pro(ex)cesso", com Luís Maria Baptista', local: 'Colégio das Artes, Universidade de Coimbra (Coimbra)'},
        {ano: 2019, nome:  '"Participar e Pesquisar, Um encontro sobre Artes na Universidade"', local: ' Oficina Municipal do Teatro (Coimbra)'},
        {ano: 2018, nome:  'Colóquio Internacional Performance e Intimidade, Grupo de Investigação em Estudos Artísticos da Universidade do Minho', local: 'Em parceria com a Oficina e o Festival Guimarães Noc Noc '},
        {ano: 2018, nome:  'Workshop Prático de Fotografia pelas Capitais de Distrito, com Sandra Ribeiro', local: ' Instituto Português de Fotografia (Évora)'},
        {ano: 2020, nome:  'Campanha de Escavações Arqueológicas na Encosta do Castelo', local: 'Mértola'},
        {ano: 2020, nome:  'Workshop de Improvisação, com Isabel Bezelga', local: 'Universidade de Évora (Évora)'},
        {ano: 2020, nome:  '"III Residência Cisterciense - Vida privada, quotidianos e cultura material",', local: 'Cultural do Alentejo, CIDEHUS (Évora).'},
      ],
      trabalhos: [
        {ano: 2021, nome: 'Exposição de Fotografia "D E T U R P A D O"', local: 'Igreja de São Vicente, Évora.'},
        {ano: 2020, nome: 'Performance "A E I O U: Os Espacialistas em Pro(ex)cesso", com Maria Rodrigues,', local:'Colégio das Artes, UC, Coimbra'},
        {ano: 2020, nome: 'Exposição de Fotografia "D E T U R P A D O(work in progress)"', local: 'Festival Guimarães Noc Noc, Guimarães'},
        {ano: 2020, nome: '"THEY CAN´T ERASE THAT" - Inauguração Galeria Urtiga, co-criação com João Kendall, interpretação Joana Calhau e Tomás Gomes', local: 'Galeria Urtiga, Porto'},
        {ano: 2019, nome: 'Assistente de Produção na Performance/ Instalação/ Percurso "Às portas da Cidade", Malvada Associação Artística, direção artística Ana Luena', local: 'Festival Artes À Rua, Évora'},
        {ano: 2019, nome: 'Fotógrafa/Performer, em co-criação com Helena Baronet, Mestre André, Sérgio Diogo Matias, Telma João Santos e Tomás Gomes na Performance "Sunset Party {$}HIT{$}"', local: 'Festival Artes À Rua, Évora.'},
        {ano: 2019, nome: 'Exposição de Fotografia "D E T U R P A D O(work in progress)"', local: 'Festival Artes À Rua, Évora.'},
        {ano: 2019, nome: 'Fotógrafa da peça de teatro "Stand By", criação/interpretação: Rúben Jaulino e Tiago Miguel Carrasco', local: 'Festival Artes À Rua, Évora'},
        {ano: 2019, nome: 'Fotógrafa da peça de teatro documental "Sem Rosto", criação/interpretação: Matilde Magalhães e Tomás Gomes', local: 'A Bruxa Teatro, Évora'},
        {ano: 2019, nome: 'Exposição de Fotografia "DISFORME",', local: 'Dia da Escola das Artes, Universidade de Évora'},
      ]
    }
  }
}
</script>

<style>

.about {
  text-align: initial;
}

.introducao {
  display: flex;
}

</style>
