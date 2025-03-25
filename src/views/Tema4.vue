<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Crisis
    .row.bg-c15.mb-4
      .col-12
        .px-5
          p.mb-4(data-aos="fade-right") Una crisis es un período intenso de tensión que una persona experimenta debido a un evento o situación significativa. Puede desencadenarse por uno o varios factores de riesgos y/o determínate social.
          .row.mb-5
            .col-lg-3.bg-c7(data-aos="fade-right")
              .p-4
                figure
                  img(src="@/assets/curso/tema4/img1.svg", alt="", style="width: 150px").m-auto
            .col-lg-9.bg-c6(data-aos="fade-left")
              .row.h-100.align-items-center
                .col-12
                  .p-4
                    p Durante una crisis, una persona puede sentir que su capacidad para hacer frente a la situación está sobrepasada, lo que afecta su bienestar físico, cognitivo y emocional. Las crisis pueden manifestarse en forma de problemas mentales o diagnósticos mentales.
                    figure
                      img(src="@/assets/curso/tema4/img3.svg", alt="", style="width: 100px")
          p.mb-4(data-aos="fade-down") #[b Para identificar una crisis, debe observar signos como:]
          .row.align-items-center
            .col-lg-8(data-aos="fade-right")
              AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul2")
                .row(titulo="Reacciones físicas")
                  .col-12
                    ul.lista-ul--color
                      li.d-flex
                        i.fas.fa-circle-check
                        |
                        p.mb-0 Fatiga.
                      li.d-flex
                        i.fas.fa-circle-check
                        |
                        p.mb-0 Cansancio.
                      li.d-flex
                        i.fas.fa-circle-check
                        |
                        p.mb-0 Incremento del ritmo cardiaco.
                      li.d-flex
                        i.fas.fa-circle-check
                        |
                        p.mb-0 Hiperventilación.
                      li.d-flex
                        i.fas.fa-circle-check
                        |
                        p.mb-0 Sudoración.
                      li.d-flex
                        i.fas.fa-circle-check
                        |
                        p.mb-0 Alteraciones del apetito.
                      li.d-flex
                        i.fas.fa-circle-check
                        |
                        p.mb-0 Alteraciones del sueño.
                      li.d-flex
                        i.fas.fa-circle-check
                        |
                        p.mb-0 Sensación de opresión en el pecho y el estómago.
                      li.d-flex
                        i.fas.fa-circle-check
                        |
                        p.mb-0 Empeoramiento de condiciones crónicas: diabetes, hipertensión.
                .row(titulo="Reacciones cognitivas")
                  .col-12
                    ul.lista-ul--color
                      li.d-flex
                        i.fas.fa-circle-check
                        |
                        p.mb-0 Confusión mental.
                      li.d-flex
                        i.fas.fa-circle-check
                        |
                        p.mb-0 Desorientación espacial.
                      li.d-flex
                        i.fas.fa-circle-check
                        |
                        p.mb-0 Pérdida de conciencia de la realidad.
                      li.d-flex
                        i.fas.fa-circle-check
                        |
                        p.mb-0 Dificultad para tomar decisiones.
                      li.d-flex
                        i.fas.fa-circle-check
                        |
                        p.mb-0 Duda frente a sus propias creencias.
                      li.d-flex
                        i.fas.fa-circle-check
                        |
                        p.mb-0 Dificultad para concentrarse.
                      li.d-flex
                        i.fas.fa-circle-check
                        |
                        p.mb-0 Pérdida de memoria.
                      li.d-flex
                        i.fas.fa-circle-check
                        |
                        p.mb-0 Exageración y sobrevaloración de la situación.
                .row(titulo="Reacciones emocionales")
                  .col-12
                    ul.lista-ul--color
                      li.d-flex
                        i.fas.fa-circle-check
                        |
                        p.mb-0 Miedo incontrolado.
                      li.d-flex
                        i.fas.fa-circle-check
                        |
                        p.mb-0 Duda frente a sí mismo.
                      li.d-flex
                        i.fas.fa-circle-check
                        |
                        p.mb-0 Baja autoestima.
                      li.d-flex
                        i.fas.fa-circle-check
                        |
                        p.mb-0 Culpa.
                      li.d-flex
                        i.fas.fa-circle-check
                        |
                        p.mb-0 Rabia.
                      li.d-flex
                        i.fas.fa-circle-check
                        |
                        p.mb-0 Irritabilidad.
                      li.d-flex
                        i.fas.fa-circle-check
                        |
                        p.mb-0 Sensación de desesperanza.
                      li.d-flex
                        i.fas.fa-circle-check
                        |
                        p.mb-0 Llanto incontenido.
                      li.d-flex
                        i.fas.fa-circle-check
                        |
                        p.mb-0 Aislamiento.
                      li.d-flex
                        i.fas.fa-circle-check
                        |
                        p.mb-0 Dificultad para expresar emociones.
                      li.d-flex
                        i.fas.fa-circle-check
                        |
                        p.mb-0 Hipervigilancia y sobresalto.
                      li.d-flex
                        i.fas.fa-circle-check
                        |
                        p.mb-0 Incremento de conflictos con la familia.
                      li.d-flex
                        i.fas.fa-circle-check
                        |
                        p.mb-0 Dependencia.
            .col-lg-4(data-aos="fade-left")
              figure
                img(src="@/assets/curso/tema4/img2.svg", alt="", style="width: 400px").m-auto
    p.mb-5(data-aos="fade-down") #[b Las crisis pueden clasificarse en:]
    .row.bg-c9
      .col-12
        .p-5
          .tarjeta.tarjeta--azul1.p-4(data-aos="fade-left")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center.my-lg-4
                .col-lg-7.mb-4.mb-lg-0
                  p #[b Crisis circunstanciales]
                  p.mb-0 Son aquellas provocadas por eventos inesperados o situaciones externas, como la muerte de un ser querido, accidentes, enfermedades, desastres naturales o eventos violentos. Estos sucesos alteran de manera abrupta la estabilidad emocional de la persona, generando una crisis temporal debido al impacto inesperado de estas circunstancias en la vida cotidiana.
                .col-lg-4
                  figure
                    img(src="@/assets/curso/tema4/img2.png", alt="", style="width: 400px").m-auto
              .row.justify-content-center.align-items-center.my-lg-4
                .col-lg-7.mb-4.mb-lg-0
                  p #[b Crisis del desarrollo]
                  p.mb-0 A lo largo del desarrollo humano, las personas atraviesan cambios psicológicos, fisiológicos y anatómicos que pueden afectar su estabilidad mental. Estos cambios, que son naturales en diferentes etapas de la vida, pueden generar momentos críticos como la adolescencia, edad media y la tercera edad. Están relacionadas con los desafíos naturales del desarrollo personal y social.
                .col-lg-4
                  figure
                    img(src="@/assets/curso/tema4/img3.png", alt="", style="width: 400px").m-auto
    Separador
    #t_4_1
    .titulo-segundo.color-acento-contenido
      h2 4.1 Consumo de Sustancias Psicoactivas (SPA)
    .row.align-items-center.mb-5
      .col-lg-8.order-2.order-lg-1(data-aos="fade-right")
        p Reconocer aquello que se debe evitar es un rasgo distintivo de las personas que practican el autocuidado. Llevar un estilo de vida saludable se sostiene en gran medida sobre la autodeterminación y el cuidado personal. La fragilidad en estas áreas incrementa la vulnerabilidad a los riesgos en ambientes nocivos. La transición de un consumo esporádico a la dependencia y abuso de sustancias psicoactivas puede ser sutil, y aquellos que comienzan por curiosidad y encuentran placer, a menudo se ven atrapados en una situación complicada.
        p.mb-4 #[b La adicción a las sustancias psicoactivas] se clasifica como una enfermedad mental y debe abordarse en consecuencia. Constituye un tema grave que requiere atención significativa. Es esencial identificar los factores que promueven el consumo. Los programas de tratamiento más eficaces ofrecen una combinación de terapias y servicios para atender las necesidades específicas de cada individuo. Tales necesidades pueden estar relacionadas con la #[b edad, etnia, cultura, orientación sexual, género, embarazo, uso de otras drogas, condiciones de salud concomitantes como la depresión o el VIH, crianza de los hijos, situaciones de vivienda y empleo, y antecedentes de abuso físico o sexual].
        .row
          .col-12
            .p-3.bg-c16
              .row.align-items-center
                .col-md-auto.mb-4.mb-md-0
                  figure
                    img(src="@/assets/curso/tema4/img4.svg", alt="", style="width: 100px").m-auto
                .col
                  p.text-white.mb-0 Reconocer la raíz del consumo es clave para implementar un tratamiento adecuado y a tiempo.
      .col-lg-4.order-1.order-lg-2.mb-4.mb-lg-0(data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema4/img4.png", alt="", style="width: 400px").m-auto
    p.mb-5(data-aos="fade-down") #[b El consumo de SPA puede clasificarse en diferentes tipos según el uso que se le dé. Los más comunes son:]
    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-md-6.col-lg-4.mb-4.mb-lg-0
        .p-4.bg-c17
          figure.mb-3
            img(src="@/assets/curso/tema4/img5.png", alt="", style="width: 150px").m-auto
          p.text-center.mb-3 #[b Consumo recreativo]
          p.text-center.mb-0 Uso de substancias como alcohol o drogas en contextos de ocio.
      .col-md-6.col-lg-4.mb-4.mb-lg-0
        .p-4.bg-c17
          figure.mb-3
            img(src="@/assets/curso/tema4/img6.png", alt="", style="width: 150px").m-auto
          p.text-center.mb-3 #[b Consumo experimental]
          p.text-center.mb-0 Ingreso ocasional, a menudo sin intención de dependencia.
      .col-md-6.col-lg-4
        .p-4.bg-c17
          figure.mb-3
            img(src="@/assets/curso/tema4/img7.png", alt="", style="width: 150px").m-auto
          p.text-center.mb-3 #[b Consumo habitual]
          p.text-center.mb-0 Uso excesivo o dañino que afecta la salud física o mental.
    p.mb-0(data-aos="fade-right") Cada tipo tiene implicaciones distintas para la salud y el bienestar de las personas. El consumo en exceso de SPA puede llevar a problemas graves de salud y adicción.
    Separador
    #t_4_2
    .titulo-segundo.color-acento-contenido
      h2 4.2 Trastornos mentales comunes
    .row.bg-c18
      .col-12
        .px-5
          p.mb-4(data-aos="fade-right") En el marco de la Política Pública en Salud mental: las personas con trastornos mentales presentan tasas elevadas de discapacidad y mortalidad. En Colombia, la depresión mayor unipolar (13,17), los trastornos mentales y del comportamiento debidos al uso de alcohol (8,06), los trastornos de ansiedad (6,16) y la epilepsia (3,35), se encuentran entre las primeras veinte causas por Años Vividos con Discapacidad AVD (tasa x 1.000) (Ministerio de Salud y Protección Social, 2018, p. 9).
          .row.justify-content-center.mb-5
            .col-lg-8(data-aos="fade-down")
              .row
                .col-lg-7.bg-c7.mb-4.mb-lg-0
                  .row.h-100.align-items-center
                    .col-12
                      .p-4
                        p #[b En el marco de los factores de riesgo se encuentran asociados algunos:]
                        ul.lista-ul--color
                          li.d-flex
                            i.fas.fa-circle-check
                            |
                            p.mb-0 Trastornos depresivos.
                          li.d-flex
                            i.fas.fa-circle-check
                            |
                            p.mb-0 Trastornos ansiosos.
                          li.d-flex
                            i.fas.fa-circle-check
                            |
                            p.mb-0 Trastornos de estrés.
                          li.d-flex
                            i.fas.fa-circle-check
                            |
                            p.mb-0 Trastornos de abuso de sustancias psicoactivas.
                .col-lg-5.px-0
                  figure
                    img(src="@/assets/curso/tema4/img9.png", alt="", style="width: 400px").m-auto
          p.mb-5(data-aos="fade-right") #[b Ampliemos la información sobre algunos de ellos:]
          .row.justify-content-center
            .col-md-6.col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
              .bg-c19.h-100
                figure
                  img(src="@/assets/curso/tema4/img10.png", alt="", style="width: 400px").m-auto
                .row
                  .col-12
                    .p-4
                      p.text-center.text-white.mb-3 #[b Trastornos depresivos]
                      p.text-white.mb-0 El DSM-5 define los trastornos depresivos como un grupo de afecciones caracterizadas principalmente por una tristeza persistente, pérdida de interés o placer en casi todas las actividades, alteraciones del apetito y del sueño, fatiga, sentimientos de inutilidad y dificultad para concentrarse.
            .col-md-6.col-lg-4.mb-4.mb-lg-0(data-aos="fade-down")
              .bg-c19.h-100
                figure
                  img(src="@/assets/curso/tema4/img11.png", alt="", style="width: 400px").m-auto
                .row
                  .col-12
                    .p-4
                      p.text-center.text-white.mb-3 #[b Trastornos de ansiedad]
                      p.text-white.mb-0 El DSM-5 clasifica los trastornos de ansiedad como afecciones caracterizadas por una preocupación excesiva, miedos o temores intensos que son difíciles de controlar y que interfieren con las actividades cotidianas.
            .col-md-6.col-lg-4(data-aos="fade-left")
              .bg-c19.h-100
                figure
                  img(src="@/assets/curso/tema4/img12.png", alt="", style="width: 400px").m-auto
                .row
                  .col-12
                    .p-4
                      p.text-center.text-white.mb-3 #[b Trastornos de estrés]
                      p.text-white.mb-0 El DSM-5 define los trastornos de estrés como respuestas emocionales y físicas que surgen tras la exposición a un evento traumático o estresante.
    Separador
    #t_4_3
    .titulo-segundo.color-acento-contenido
      h2 4.3 Redes sociales y salud mental
    p.mb-4(data-aos="fade-right") Los seres humanos somos propensos por naturaleza a buscar la formación de redes de apoyo y la convivencia con otros, un impulso fundamental de protección y cuidado. Desde el nacimiento, establecemos nuestra primera red social: #[b la familia], seguida por la escuela, los amigos y finalmente el #[b entorno laboral]. La interacción con otras personas es crucial para mantener una buena salud mental.
    .row.mb-5(data-aos="fade-down")
      .col-lg-auto.px-0.d-none.d-lg-block
        figure
          img(src="@/assets/curso/tema4/img13.png", alt="", style="width: 400px").m-auto
      .col.bg-c7
        .row.h-100.align-items-center
          .col-12
            .p-4
              p La salud mental depende del tipo de relaciones y de las personas con quienes formamos lazos afectivos, de amistad o de apoyo, así como de la calidad de estas conexiones. #[b Las presiones grupales] pueden causar #[b estrés elevado] o incitar a las personas a comportamientos que no adoptarían por sí solas, como el consumo de drogas, prácticas sexuales irresponsables, el abuso de alcohol o incluso poner en riesgo su vida.
              p.mb-0 En el contexto actual, el ámbito social, junto con el progreso tecnológico, ha dado paso a plataformas que a menudo ofrecen una versión distorsionada de #[b las relaciones interpersonales]. Actualmente, la gente se comunica con personas que #[b no conoce en la vida] real, crea vínculos con ilusiones y esto ha desencadenado una búsqueda constante de reconocimiento y un interés excesivo por proyectar una vida idílica. Además, existe una tendencia a #[b asumir riesgos] imprudentemente al contactar a desconocidos en línea para entablar relaciones.
    .row.mb-4(data-aos="fade-right")
      .col-auto
        .px-4.py-3.bg-c20
          h3.mb-0 Conductas anormales derivadas de las redes sociales por internet
    p.mb-5(data-aos="fade-right") Los riesgos y amenazas que conlleva el mal uso de las redes sociales son significativos y requieren ser gestionados con responsabilidad y buen juicio para minimizar los factores de riesgo.
    .row.align-items-center.mb-5
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src="@/assets/curso/tema4/img14.png", alt="", style="width: 400px").m-auto
      .col-lg-8(data-aos="fade-left")
        .row.justify-content-center.mb-3
          .col-auto
            .p-3.bg-c21
              p.mb-0 Cibersexo
          .col-auto
            .p-3.bg-c21
              p.mb-0 Adicción a internet
          .col-auto
            .p-3.bg-c21
              p.mb-0 Ciberacoso
        p.mb-0 Es posible caer en cualquiera de estas conductas debido a nuestra constante exposición y participación en diversas redes sociales, sumergiéndonos en esta realidad. Lo esencial es discernir cuáles son verdaderamente nuestras redes de apoyo, identificar dónde se encuentra el afecto genuino, los lazos reales y determinar en quién podemos confiar realmente.
    .row.bg-c22
      .col-12
        .p-5
          .row.align-items-center
            .col-lg-7(data-aos="fade-right")
              .p-4.bg-white
                p #[b Los factores de protección son:]
                ul.lista-ul--color
                  li.d-flex
                    i.fas.fa-circle-check
                    |
                    p.mb-0 Fortalecer la estima.
                  li.d-flex
                    i.fas.fa-circle-check
                    |
                    p.mb-0 Apego a la familia.
                  li.d-flex
                    i.fas.fa-circle-check
                    |
                    p.mb-0 Estudiar y capacitarse para comprender otras formas de hacer las cosas.
                  li.d-flex
                    i.fas.fa-circle-check
                    |
                    p.mb-0 Desarrollar hábitos de vida saludables.
                  li.d-flex
                    i.fas.fa-circle-check
                    |
                    p.mb-0 Autocontrol.
                  li.d-flex
                    i.fas.fa-circle-check
                    |
                    p.mb-0 Evitar malas compañías, personas nocivas.
                  li.d-flex
                    i.fas.fa-circle-check
                    |
                    p.mb-0 Denunciar cualquier tipo de violencia.
                  li.d-flex
                    i.fas.fa-circle-check
                    |
                    p.mb-0 Enseñar a amar desde el hogar.
                  li.d-flex
                    i.fas.fa-circle-check
                    |
                    p.mb-0 Solución efectiva de conflictos.
                  li.d-flex
                    i.fas.fa-circle-check
                    |
                    p.mb-0 Buen trato en todas las instancias de la vida.
            .col-lg-5(data-aos="fade-left")
              figure
                img(src="@/assets/curso/tema4/img5.svg", alt="", style="width: 600px").m-auto

</template>

<script>
export default {
  name: 'Tema4',
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
