<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido.mb-0(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Concepto de salud mental positiva
    .row.bg-c3
      .col-12
        .p-5
          p.mb-4(data-aos="fade-down") La Organización Mundial de la Salud (OMS) define la salud mental como:
          .row.mb-4
            .col-lg-9.order-2.order-lg-1(data-aos="fade-right")
              .bloque-texto-c.color-primario.p-4.p-lg-5.mb-5
                i.fas.fa-quote-right
                p.mb-4 #[b Un estado de bienestar en el que el individuo desarrolla sus capacidades, puede afrontar las tensiones normales de la vida, trabajar de manera productiva y fructífera, y es capaz de contribuir a su comunidad.]
                span #[em (Organización Mundial de la Salud, 2022).]
              figure.mb-4
                img(src="@/assets/curso/tema1/img1.svg", alt="", style="width: 100px")
              p En la siguiente figura se resume el concepto de salud mental.
            .col-lg-3.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-left")
              figure
                img(src="@/assets/curso/tema1/img2.png", alt="", style="width: 300px").m-auto
          .row.justify-content-center
            .col-lg-8(data-aos="fade-down")
              .titulo-sexto.color-acento-contenido.mb-3
                p.mb-0 #[b Figura 1.] Concepto de salud mental
              figure
                img(src="@/assets/curso/tema1/img2.svg", alt="Imagen que presenta el concepto de salud mental.", style="width: 700px").m-auto
    p(data-aos="fade-right") La salud debe concebirse de manera integral, considerando que los aspectos biológicos, psicológicos y sociales forman parte del bienestar y convergen constantemente. 
    p.mb-4(data-aos="fade-right") Ampliemos la información sobre cada uno de estos aspectos:
    .row.justify-content-center.mb-5
      .col-lg-10(data-aos="fade-down")
        .titulo-sexto.color-acento-contenido.mb-3
          p.mb-0 #[b Figura 2.] Aspectos biológicos
        .row
          .col-12
            .p-4.bg-c4
              figure
                img(src="@/assets/curso/tema1/img3.svg", alt="magen que presenta los aspectos biológicos de la salud mental.", style="width: 800px").m-auto
    .row.justify-content-center.mb-5
      .col-lg-10(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido.mb-3
          p.mb-0 #[b Figura 3.] Aspectos psicológicos
        .row
          .col-12
            .p-4.bg-c4
              figure
                img(src="@/assets/curso/tema1/img4.svg", alt="Imagen que presenta los aspectos psicológicos de la salud mental.", style="width: 900px").m-auto
    .row.justify-content-center
      .col-lg-10(data-aos="fade-left")
        .titulo-sexto.color-acento-contenido.mb-3
          p.mb-0 #[b Figura 4.] Aspectos sociales
        .row
          .col-12
            .p-4.bg-c4
              figure
                img(src="@/assets/curso/tema1/img5.svg", alt="Imagen que presenta los aspectos sociales de la salud mental.", style="width: 820px").m-auto

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
