<template>
  <section class="escrita">
    <div class="container">
      <ul class="textos">
        <div v-for="texto in textos" :key="texto.id">
          <router-link class="title" :to="{ name: 'Texto', params: { titulo: texto.titulo, ano: texto.ano, conteudo: texto.conteudo, nome: texto.nome, filename: texto.filename } }"><span>{{ texto.titulo }}</span> </router-link>
        </div>
        <router-link class="title" :to="{ name: 'Poema' }"><span>"Tempo"</span></router-link>
        <router-link class="title" :to="{ name: 'Menstruacao' }"><span>"A Menstruação"</span></router-link>
      </ul>
      
      
    </div>
    <img class="bg" src="../assets/fotoescrita2.jpg" alt="">
  </section>
</template>

<script>
export default {
  data() {
    return {
      textos: [
        {id: 1, ano: 2020, nome: 'andar-com-a-cabeça-nas-nuvens', filename: 'nuvens', titulo: 'Andar com a cabeça nas Nuvens', conteudo: 'O verdadeiro significado de andar com a cabeça nas nuvens é olhar para cima e pensar o que estarão elas a fazer. Se saboreiam o vento. Se dão permissão ao sol para brilhar. Andar com a cabeça nas nuvens. Imaginar ovelhas no céu, Algodão doce gigante, daquele que derrete na boca. Arbustos descolorados, talvez. Acompanha-las com o olhar e pensar que nos seguem enquanto andamos de carro. Mas sentir tristeza quando num dia de muito sol elas quase que desaparecem. Não deu para dizer adeus. Apenas continuamos a ter esperança que um dia voltem e tragam chuva com elas.' },
        {id: 2, ano: 2020, nome: 'tanto-sangue-no-alcool', filename: 'alcool', titulo: 'Tanto Sangue no Álcool', conteudo: 'Vi o reflexo de um passado não muito longe numa garrafa de cerveja. Alguns dias mais tarde voltei a ver esse mesmo reflexo numa garrafa de absinto. Continuou a aparecer em diferentes garrafas. Vinho, licor, sidra, bagaço. O reflexo deixou de ser turvo e passou a ser bem mais claro. Estava a conseguir ver o passado com claridade. Só havia um problema, cada vez que quase via na perfeição a garrafa acabava e lá tinha de começar tudo de novo. Foi uma atrás da outra. Até que na última quase vivi o passado, estava tudo tão fresco, tudo tão claro. Era como uma droga. Um vicio que se apoderava de mim. Só pensava no antes e esquecia completamente o presente. Andei alguns anos assim. Até que numa noite depois de muitas garrafas. Vi o passado como nunca tinha visto antes, uma alucinação. Uma sensação poderosa. Nunca tinha sido tão explícito. Mas depois disso só me lembro de acordar deitada numa maca de hospital. Havia vomitado a noite toda. Todos os meus pecados estavam desejosos de sair. E foi assim que aconteceu. Desde esse dia, sempre que o passado se acumula na minha mente, o que ajuda é o álcool. Tanto álcool. Demasiado álcool. O que antes me prendia, agora ajuda-me a esquecer. Hoje olho-me ao espelho. O que vejo são apenas garrafas vazias.' },
        {id: 3, ano: 2017, nome: 'o-girassol', filename: 'nuvens', titulo: 'O Girassol', conteudo: 'Divago por entre vazios. Não há rumo. Só escuridão. Uma certa escuridão que prevalece em todos os cantos. O olhar, que parece fechado, desliza por entre esses espaços vagos. Quiçá me tenha enganado no caminho! Um girassol cresce. Ilumina a passagem. A teimosia continua. Ficar? ou Ir? Existe toda uma possibilidade de me perder outra vez. Saber e não saber. Querer e não querer. Tilintando entre pensamentos que me esgotam a cabeça. Tal preciosa flor murcha. Fico incrédula. Não percebo. Volto a forçar um pensamento. Não está lá nada. Rego a flor com as próprias lágrimas. Não deixa de morrer mais ainda com tais gotas salgadas. Está bem. Deixei de saber o que fazer. Tento controlar as emoções. Mas, pergunto: Porquê? A cabeça gira. Anda à roda. Continua a rodopiar. Uma opinião para aqui, um pensamento para ali. Um gesto descontrolado para outro lado. E fico na mesma.  Deixei de saber lidar com a minha cabeça. Pego nela e deixo a cair. Escavo um buraco. Enterro-a. Faço-lhe um funeral. Soa o hino da alegria. Pobre coitada que dali não vai crescer mais nada.' },
      ]
    }
  },
}
</script>

<style>

body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.bg {
  position: relative; 
  overflow: hidden;
  right: 10px; 
  width: 450px;
  z-index: 1;

}

.escrita {
  background: linear-gradient(rgb(0, 0, 0), rgb(0, 0, 0))  center center;
  background-size: cover;

  color: white;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-x: hidden;
  margin: 0;
  padding: 0;
}

.escrita .container {
  display: flex;
  justify-content: center;
  
}

.escrita .container .textos {
  display: flex;
  flex-direction: column;
  height: 550px;
  margin-top: 79px;
  
}

.escrita .container .title {
  margin: 20px 0;
  padding: 20px;
  color: #e2ac0b;
  transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
  z-index: 5;
}

.escrita .container .textos .title span {
  width: 100%;
  padding: 20px;
}

.escrita .container img {
  height: 100vh;
  z-index: -3;
}

.title {
	display: inline-block;
	position: relative;
	border-radius: 20px;
	background-color:  #000;
	text-decoration: none;
	text-transform: uppercase;
	transition: 0.5s;
	overflow: hidden;
  border: 1px solid #e2ac0b;
  box-shadow: 0px 6px  #222121;
}

.escrita .container .title:hover {
  color: #000;
	background-color:  #ffc824;
	box-shadow: 0px 6px  #e2ac0b;
  border: 1px solid #000000;
	top: 2px;
}

.title:active {
	box-shadow: 0px 4px  #ffc824;;
	top: 4px;
}

.title::before {
	content: '';
	position: absolute;
	top: 0;
	left: -100%;
	width: 100%;
	height: 100%;
	background: linear-gradient(90deg, transparent,#fff, transparent);
	transition: 0.5s;
}

.title:hover::before {
	left: 100%;
}


</style>