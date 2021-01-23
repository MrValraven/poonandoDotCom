<template>
  <section class="fotografia">
    <div class="container">
      <div class="fotografias">
        <h1>FOTOGRAFIA DE CENA</h1>
        <img src="../assets/fotocena.jpg" alt="">
      </div>
      <div class="fotografias">
        <h1>PROJETOS FOTOGRÁFICOS PESSOAIS</h1>
        <img src="../assets/fotopessoal.jpg" alt="">
      </div>
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style>

.container {
  display: flex;
  align-items: center;
  justify-content: center;
}

.fotografias {
  padding: 20px;
  margin: 10px;
  transition:box-shadow 0.6s cubic-bezier(.79,.21,.06,.81);
  cursor: pointer;
}

.fotografias:hover {
  border-radius: 25px;
  background: #ffffff;
  box-shadow:  35px 35px 80px #999999,
              -35px -35px 80px #ffffff;
  }

.fotografias img {
  /* width: 250px; */
}


</style>