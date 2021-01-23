<template>
    <section class="poema">
        <img src="@/assets/menstruacao.jpg" alt="">
        <div class="text">
            <h1>A Menstruação</h1>
            <h2>Poema e Foto-performance</h2>
            <h3>2020</h3>
            <p>Choro na maior parte das noites <br>
            Há sempre uma agitação <br>
            Um passado que me deixa inquieta <br>
            Uma vontade de desfazer tudo <br>
            Ou pelo menos quase tudo <br>
            Há sempre um sentimento de culpa <br>
            Uma ideia errada <br>
            Uma fama suja e indesejada <br>
            Noites que fazem os olhos ficar abertos <br>
            São janelas nas quais deixo o sol entrar <br>
            Mas onde entra também o vento <br>
            Tanto seca como molha o olhar <br>
            Há linhas escuras e longas <br>
            Logo depois das pestanas <br>
            São fruto de noites como esta <br>
            Que me fazem ficar acordada <br>
            Apesar de saber que <br>
            É só mais um daqueles dias do mês.</p>
           
        </div>
    </section>
</template>

<script>
export default {

}
</script>

<style>

.poema {
    display: flex;
    justify-content: center;
    text-align: left;
    margin-top: 15px;
}

.poema img {
    height: 80vh;
}

.poema .text {
    margin: 0 0 0 50px;
    
}

.poema h1 {
    margin: 0;
    font-size: 45px;
}

.poema h2 {
    font-size: 20px;
}

.poema h3 {
    font-size: 15px;
}

.poema p {
    font-size: 18px;
    line-height: 29px
}


</style>