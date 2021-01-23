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
  border-radius: 25px;
  padding: 20px;
  margin: 10px;
  transition:box-shadow 0.6s cubic-bezier(.79,.21,.06,.81);
  cursor: pointer;
}

.fotografias:hover {
  box-shadow: 0 3px 8px rgba(0,0,0,0.3);
  }

.fotografias img:hover {
  opacity: 0.95;
}


</style>