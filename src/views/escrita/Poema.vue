<template>
    <section class="poema">
        <img src="@/assets/tempo.jpg" alt="">
        <div class="text">
            <h1>Tempo</h1>
            <h2>Poema e Foto-performance</h2>
            <h3>2020</h3>
            <p>Summer flings that drive us crazy <br>
            They go on and on for a few months, <br>
            Until someone realises that Autumn is almost there.
            </p>
            <p>Things start to get a little fuzzy. <br>
            The two individuals look at themselves <br>
            And realise that it all went too fast <br>
            None had the courage to finish it sooner.</p>
            <p>They were blinded by the strong summer sun. <br>
            But when the clouds started to cover the blue sky, <br>
            Something wasn't so bright anymore.</p>
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
}

.poema img {
    width: 40%;
}

.poema .text {
    margin: 50px;
}

.poema h1 {
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
}

</style>