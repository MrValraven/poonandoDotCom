<template>
  <section class="poema">
        <img :src="require(`@/assets/img/${filename}`)" alt="">
        <div class="text">
            <h1> {{titulo }}</h1>
            <h3> {{ ano }} </h3>
            <p> {{ conteudo }}</p>
        </div>
  </section>
</template>

<script>
export default {
    props: ['filename', 'titulo', 'ano', 'conteudo', 'nome'],
}

</script>

<style>

.texto {
    display: flex;
    justify-content: center;
    text-align: left;
}

.texto img {
    width: 40%;
}

.texto .text {
    margin: 50px;
}

.texto h1 {
    font-size: 45px;
}

.texto h2 {
    font-size: 20px;
}

.texto h3 {
    font-size: 15px;
}

.texto p {
    font-size: 18px;
}


</style>