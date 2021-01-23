<template>
  <section class="escrita">
    <div class="container">
      <ul class="textos">
        <router-link class="title" :to="{ name: 'Escrita' }"><span>"Tempo"</span></router-link>
        <router-link class="title" :to="{ name: 'Escrita' }"><span>"Andar com a cabeça nas Nuvens"</span> </router-link>
        <router-link class="title" :to="{ name: 'Escrita' }"><span>"Tanto Sangue no Álcool"</span></router-link>
        <router-link class="title" :to="{ name: 'Escrita' }"><span>"A Menstruação"</span></router-link>
        <router-link class="title" :to="{ name: 'Escrita' }"><span>"O Girassol"</span></router-link>
      </ul>
      <img src="../assets/fotoescrita.jpg" alt="">
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style>

.textos {
  display: flex;
  flex-direction: column;
  height: 250px;
  border: 2px solid yellow;
}

.title {
  color: rebeccapurple;
  margin: 20px;
}

.textos span {
  padding: 20px;
  border: 2px solid red;
}

</style>