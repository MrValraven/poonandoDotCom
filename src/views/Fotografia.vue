<template>
  <section class="fotografia">
    <div class="container">
      <div class="fotografias">
        <h1>FOTOGRAFIA DE CENA</h1>
        <img src="@/assets/fotocena.jpg" alt="">
      </div>
      <div class="fotografias">
        <h1>PROJETOS PESSOAIS</h1>
        <img src="@/assets/fotopessoal.jpg" alt="">
      </div>
      <div class="fotografias">
        <h1>FILM EM FOTOGRAFIA ANALÓGICA</h1>
        <img src="@/assets/fotocena.jpg" alt="">
      </div>
    </div>

    
  </section>
</template>

<script>
export default {

}
</script>

<style>

.fotografia .container {
  display: flex;
  align-items: center;
  justify-content: center;
}

.fotografias {
  border-radius: 25px;
  padding: 15px;
  margin: 0 30px 10px 30px;
  transition:box-shadow 0.6s cubic-bezier(.79,.21,.06,.81);
  cursor: pointer;
}

.fotografias:hover {
  box-shadow: 0 3px 8px rgba(0,0,0,0.3);
}

.fotografias img {
  height: 500px;
  opacity: 0.95;
  scale: 0.90;
  transition: all 0.6s cubic-bezier(.79,.21,.06,.81);
}

.fotografias img:hover {
  opacity: 1;
  scale: 200%;
}


</style>