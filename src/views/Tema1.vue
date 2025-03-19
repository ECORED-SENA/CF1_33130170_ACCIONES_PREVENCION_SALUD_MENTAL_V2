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
                img(src="@/assets/curso/tema1/img2.svg", alt="Estado de bienestar que permita afrontar la vida, relacionarse, trabajar y aportar al desarrollo de la comunidad. Debe entenderse como un proceso dinámico e integral, donde lo biológico, psicológico y social confluyan de forma permanente. Los determinantes sociales afectan de manera directa la salud mental de las personas: violencia, pobreza, exclusión. Factores como la soledad, la carencia afectiva y las débiles redes de apoyo, inciden negativamente en el bienestar de las personas en el ámbito individual y colectivo.", style="width: 700px").m-auto
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
                img(src="@/assets/curso/tema1/img3.svg", alt="Los factores biológicos se dividen en factores genéticos y estilos de vida no saludables. Dentro de los factores genéticos se encuentran los trastornos mentales hereditarios y las enfermedades crónicas. Por otro lado, los estilos de vida no saludables incluyen dietas estrictas, poca o nula actividad física, consumo de SPA, consumo de alcohol y cambios en el estado del sueño.", style="width: 800px").m-auto
    .row.justify-content-center.mb-5
      .col-lg-10(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido.mb-3
          p.mb-0 #[b Figura 3.] Aspectos psicológicos
        .row
          .col-12
            .p-4.bg-c4
              figure
                img(src="@/assets/curso/tema1/img4.svg", alt="Las estrategias psicológicas de afrontamiento y resiliencia ante un problema incluyen mantener un control activo en el problema, intentar no hacer más grave la situación, analizar la situación desde diferentes perspectivas, confiar en nuestros mismos y en nuestras capacidades, admitir nuestros límites y pedir ayuda a las personas más íntimas cuando reconocemos que necesitamos un apoyo. Además, se recomienda buscar ayuda especializada en caso de tener un problema en salud mental, buscar terapia convencional desde el área de psicología y/o psiquiatría, así como seguir las indicaciones psicofarmacológicas cuando sea necesario.", style="width: 900px").m-auto
    .row.justify-content-center
      .col-lg-10(data-aos="fade-left")
        .titulo-sexto.color-acento-contenido.mb-3
          p.mb-0 #[b Figura 4.] Aspectos sociales
        .row
          .col-12
            .p-4.bg-c4
              figure
                img(src="@/assets/curso/tema1/img4.svg", alt="Las relaciones sociales deben basarse en tener relaciones cálidas y positivas, lo que implica aislarse de pares de riesgo, poner límites con familiares poco saludables, crear rutinas sociales, tener redes de apoyo, evitar cargas laborales y evitar relaciones de pareja donde exista algún tipo de violencia.", style="width: 900px").m-auto

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
