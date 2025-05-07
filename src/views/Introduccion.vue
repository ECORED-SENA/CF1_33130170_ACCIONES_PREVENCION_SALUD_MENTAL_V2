<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido.mb-0(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.bg-c1
      .col-12
        .p-5
          p.mb-4(data-aos="fade-down") Este componente abordará los conceptos de salud mental desde una perspectiva positiva y el enfoque de derechos.
          .row.mb-4
            .col-12(data-aos="fade-right")
              .p-4.bg-c2
                .row.align-items-center
                  .col-md-auto.mb-4.mb-md-0
                    figure
                      img(src="@/assets/curso/intro/img1.svg", alt="", style="width: 180px").m-auto
                  .col
                    p.mb-0 Al hablar de salud mental desde una perspectiva positiva, se refiere a la preservación de un auténtico estado de bienestar que permite a las personas afrontar la vida, relacionarse con su entorno y contribuir a su desarrollo. Sin embargo, este estado de bienestar puede verse afectado por múltiples factores internos y externos. No obstante, con estrategias de afrontamiento adecuadas, es posible mitigar su impacto y evitar que afecten negativamente la salud mental.
          .row.align-items-center
            .col-lg-7.mb-4.mb-lg-0(data-aos="fade-right")
              p Pero, si no se logra manejar de manera apropiada, la salud mental puede verse comprometida, desencadenando trastornos mentales. Para prevenir y manejar estas afectaciones, es necesario contar con información, conocer y hacer valer los derechos que, en materia de salud mental, poseen los colombianos.   
              p.mb-0 Asimismo, es fundamental tener claridad sobre los factores que inciden en el desarrollo de diferentes trastornos o enfermedades. Para ello, se tomará como referencia el concepto de salud mental establecido por la Organización Mundial de la Salud (OMS) y contemplado en los planes y programas delimitados por el Plan Decenal de Salud Pública 2022-2031 en la dimensión de convivencia social y salud mental. Se abordará la Ley 1616 de 2013, la cual establece la perspectiva de derechos en esta materia, y se conocerán los beneficios y el acceso al sistema en caso de requerir atención en salud mental.
            .col-lg-5(data-aos="fade-left")
              figure
                img(src="@/assets/curso/intro/img2.png", alt="", style="width: 480px").m-auto

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
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
