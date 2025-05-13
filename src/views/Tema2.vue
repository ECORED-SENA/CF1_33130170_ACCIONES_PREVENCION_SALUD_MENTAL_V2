<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido.mb-0(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Salud mental en Colombia
    .row.bg-c5
      .col-12
        .p-5
          .row
            .col-lg-9.bg-c6(data-aos="fade-left")
              .row.h-100.align-items-center
                .col-12
                  .p-4
                    p.mb-4 Colombia ha reconocido la importancia de la salud mental como elemento esencial para el desarrollo de la sociedad y ha establecido leyes, planes, programas y resoluciones que consolidan políticas públicas robustas, inclusivas y con un enfoque de derechos humanos. Esta normativa ha evolucionado y se ha adaptado a las necesidades de una sociedad en constante cambio.
                    figure
                      img(src="@/assets/curso/tema2/img2.svg", alt="", style="width: 100px")
            .col-lg-3.bg-c7(data-aos="fade-right")
              .p-4
                figure
                  img(src="@/assets/curso/tema2/img1.svg", alt="", style="width: 200px").m-auto
          Separador
          #t_2_1
          .titulo-segundo.color-acento-contenido
            h2 2.1 Ley 1566 de 2012
          p(data-aos="fade-right") Por la cual se dictan normas para garantizar la atención integral a personas que consumen sustancias psicoactivas y se crea el premio nacional "entidad comprometida con la prevención del consumo, abuso y adicción a sustancias" psicoactivas. Los aspectos claves de la Ley 1566 de 2012, son:
          p.mb-5(data-aos="fade-right") #[b Los aspectos claves de la Ley 1566 de 2012, son:]
          TabsB.color-primario(data-aos="fade-left")
            .p-4.p-lg-5(titulo="Normas para la atención integral" :icono="require('@/assets/curso/tema2/img3.svg')")
              .row.justify-content-center.align-items-center
                .col-lg-5.mb-4.mb-lg-0
                  p.mb-0 Establece directrices para la atención en salud, rehabilitación, y reintegración de las personas afectadas por el consumo de sustancias psicoactivas. Se centra en promover un enfoque integral, accesible y multidisciplinario para el tratamiento de las personas, abarcando aspectos médicos, psicológicos y sociales.
                .col-lg-5
                  figure
                    img(src="@/assets/curso/tema2/img2.png", alt="", style="width: 400px").m-auto
            .p-4.p-lg-5(titulo="Creación del Premio Nacional" :icono="require('@/assets/curso/tema2/img3.svg')")
              .row.justify-content-center.align-items-center
                .col-lg-5.mb-4.mb-lg-0
                  p.mb-0 La resolución introduce el Premio Nacional “Entidad Comprometida con la Prevención del Consumo, Abuso y Adicción a Sustancias Psicoactivas”. Este premio busca reconocer a las entidades públicas y privadas que implementen estrategias efectivas de prevención, educación y sensibilización en torno al consumo de sustancias psicoactivas. El premio tiene como fin incentivar el compromiso y la responsabilidad social para abordar este problema de salud pública.
                .col-lg-5
                  figure
                    img(src="@/assets/curso/tema2/img3.png", alt="", style="width: 400px").m-auto
            .p-4.p-lg-5(titulo="Fortalecimiento de programas de prevención y atención" :icono="require('@/assets/curso/tema2/img3.svg')")
              .row.justify-content-center.align-items-center
                .col-lg-5.mb-4.mb-lg-0
                  p.mb-0 Se resalta la importancia de fortalecer los programas de prevención y tratamiento, orientados no solo a las personas con problemas de consumo, sino también a la población general, en especial a jóvenes y comunidades vulnerables, para evitar el inicio en el consumo de sustancias psicoactivas.
                .col-lg-5
                  figure
                    img(src="@/assets/curso/tema2/img4.png", alt="", style="width: 400px").m-auto
    .row.justify-content-center
      .col-lg-10(data-aos="fade-down")
        .p-4.p-lg-5.bg-c8
          p.mb-0 En resumen, la #[b Ley 1566 de 2012] establece un marco normativo para la atención integral a las personas que consumen sustancias psicoactivas y promueve la participación activa de entidades para prevenir y reducir los riesgos asociados con su consumo. Además, se crea un mecanismo de reconocimiento, como el Premio Nacional, para fomentar el compromiso de las entidades en esta causa.
    Separador
    #t_2_2
    .titulo-segundo.color-acento-contenido
      h2 2.2 Ley 1616 de 2013
    p.mb-5(data-aos="fade-right") Conocida como Ley de Salud Mental, incorpora el enfoque de derechos en la concepción de la salud mental en Colombia.
    .row.bg-c9
      .col-12
        .p-5
          .tarjeta.tarjeta--azul1.p-4(data-aos="fade-down")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center.my-lg-4
                .col-lg-6.mb-4.mb-lg-0
                  ul.lista-ul--color
                    li.d-flex
                      i.fas.fa-circle-check
                      |
                      p.mb-0 Derecho a recibir una atención integral, integrada y humanizada por parte del equipo profesional y los servicios especializados en salud mental.
                    li.d-flex
                      i.fas.fa-circle-check
                      |
                      p.mb-0 Derecho a recibir información clara, oportuna, veraz y completa de las circunstancias relacionadas con su estado de salud, diagnóstico, tratamiento y pronóstico, incluyendo el propósito, método, duración probable y beneficios que se esperan, así como sus riesgos y las secuelas, de los hechos o situaciones causantes de su deterioro y de las circunstancias relacionadas con su seguridad social.
                .col-lg-4
                  figure
                    img(src="@/assets/curso/tema2/img6.png", alt="", style="width: 400px").m-auto
              .row.justify-content-center.align-items-center.my-lg-4
                .col-lg-6.mb-4.mb-lg-0
                  ul.lista-ul--color
                    li.d-flex
                      i.fas.fa-circle-check
                      |
                      p.mb-0 Derecho a recibir la atención especializada e interdisciplinaria y los tratamientos con la mejor evidencia científica de acuerdo con los avances científicos en salud mental.
                    li.d-flex
                      i.fas.fa-circle-check
                      |
                      p.mb-0 Derecho a que las intervenciones sean las menos restrictivas de las libertades individuales de acuerdo a la ley vigente.
                    li.d-flex
                      i.fas.fa-circle-check
                      |
                      p.mb-0 Derecho a tener un proceso psicoterapéutico, con los tiempos y sesiones necesarias para asegurar un trato digno para obtener resultados en términos de cambio, bienestar y calidad de vida.
                .col-lg-4
                  figure
                    img(src="@/assets/curso/tema2/img7.png", alt="", style="width: 400px").m-auto
              .row.justify-content-center.align-items-center.my-lg-4
                .col-lg-6.mb-4.mb-lg-0
                  ul.lista-ul--color
                    li.d-flex
                      i.fas.fa-circle-check
                      |
                      p.mb-0 Derecho a recibir psicoeducación a nivel individual y familiar sobre su trastorno mental y las formas de autocuidado.
                    li.d-flex
                      i.fas.fa-circle-check
                      |
                      p.mb-0 Derecho a recibir incapacidad laboral, en los términos y condiciones dispuestas por el profesional de la salud tratante, garantizando la recuperación en la salud de la persona.
                    li.d-flex
                      i.fas.fa-circle-check
                      |
                      p.mb-0 Derecho a ejercer sus derechos civiles y en caso de incapacidad que su incapacidad para ejercer estos derechos sea determinada por un juez de conformidad con la ley 1306 de 2009 y demás legislación vigente.
                .col-lg-4
                  figure
                    img(src="@/assets/curso/tema2/img8.png", alt="", style="width: 400px").m-auto
              .row.justify-content-center.align-items-center.my-lg-4
                .col-lg-6.mb-4.mb-lg-0
                  ul.lista-ul--color
                    li.d-flex
                      i.fas.fa-circle-check
                      |
                      p.mb-0 Derecho a no ser discriminado o estigmatizado, por su condición de persona sujeto de atención en salud mental.
                    li.d-flex
                      i.fas.fa-circle-check
                      |
                      p.mb-0 Derecho a recibir o rechazar ayuda espiritual o religiosa de acuerdo con sus creencias.
                    li.d-flex
                      i.fas.fa-circle-check
                      |
                      p.mb-0 Derecho a acceder y mantener el vínculo con el sistema educativo y el empleo, y no ser excluido por causa de su trastorno mental.
                    li.d-flex
                      i.fas.fa-circle-check
                      |
                      p.mb-0 Derecho a recibir el medicamento que requiera siempre con fines terapéuticos o diagnósticos.
                    li.d-flex
                      i.fas.fa-circle-check
                      |
                      p.mb-0 Derecho a exigir que sea tenido en cuenta el consentimiento informado para recibir el tratamiento.
                .col-lg-4
                  figure
                    img(src="@/assets/curso/tema2/img9.png", alt="", style="width: 400px").m-auto
              .row.justify-content-center.align-items-center.my-lg-4
                .col-lg-6.mb-4.mb-lg-0
                  ul.lista-ul--color
                    li.d-flex
                      i.fas.fa-circle-check
                      |
                      p.mb-0 Derecho a no ser sometido a ensayos clínicos ni tratamientos experimentales sin su consentimiento informado.
                    li.d-flex
                      i.fas.fa-circle-check
                      |
                      p.mb-0 Derecho a la confidencialidad de la información relacionada con su proceso de atención y respetar la intimidad de otros pacientes.
                    li.d-flex
                      i.fas.fa-circle-check
                      |
                      p.mb-0 Derecho al reintegro a su familia y comunidad.
                .col-lg-4
                  figure
                    img(src="@/assets/curso/tema2/img10.png", alt="", style="width: 400px").m-auto
    Separador
    #t_2_3
    .titulo-segundo.color-acento-contenido
      h2 2.3 Política nacional de salud mental para Colombia 2014
    p(data-aos="fade-right") Continuemos con el documento propuesto de ajuste de la política nacional de salud mental para Colombia 2014.
    p.mb-4(data-aos="fade-right") La dimensión de convivencia social y salud mental, a partir del análisis de la situación de salud 2014 y la propuesta de ajuste de la política nacional de salud mental 2014, se destacan tres componentes fundamentales que orientan las acciones en el ámbito de la salud mental:
    .row.align-items-center
      .col-lg-8.order-2.order-lg-1(data-aos="fade-right")
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul2")
          .row(titulo="Promoción de la salud mental")
            .col-12
              p.mb-0 Promover la salud mental mediante programas de fortalecimiento de sus factores protectores, con énfasis en la acción intersectorial.
          .row(titulo="Prevención de trastornos mentales")
            .col-12
              p.mb-0 Prevenir la aparición, desarrollo de problemas y trastornos de salud mental mediante acciones tendientes al control de factores de riesgo y la atención oportuna y adecuada a las personas, pueblos, grupos humanos y comunidades.
          .row(titulo="Atención integral en salud mental")
            .col-12
              p.mb-0 Asegurar la atención integral, integrada, continua, y basada en evidencia, saberes y prácticas ancestrales, tradicionales, alternativas y complementarias, para el mantenimiento y restablecimiento de la salud mental a toda la población colombiana.
      .col-lg-4.order-1.order-lg-2.mb-4.mb-lg-0(data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema2/img11.png", alt="", style="width: 400px").m-auto
    Separador
    #t_2_4
    .titulo-segundo.color-acento-contenido
      h2 2.4 Resolución 5592 de 2015
    p.mb-4(data-aos="fade-right") Por la cual se actualiza integralmente el Plan de Beneficios en Salud-PBS con cargo a la Unidad de Pago por Capitación-UPC del Sistema General de Seguridad Social en Salud-SGSSS.
    .row.justify-content-center
      .col-lg-5(data-aos="fade-right")
        .p-3.p-lg-4.bg-c7
          p.mb-4 #[b Capítulo II - Atención a personas de 6 años a menores de 14 años de edad.]
          ul.lista-ul--color
            li.d-flex
              i.fas.fa-circle-check
              |
              p.mb-0 #[b Artículo 100.] Atención a víctimas de violencia intrafamiliar o abuso sexual.
            li.d-flex
              i.fas.fa-circle-check
              |
              p.mb-0 #[b Artículo 101.] Atención a personas de 6 años a menores de 14 años de edad con trastornos alimentarios.
      .col-lg-5(data-aos="fade-left")
        .p-3.p-lg-4.bg-c10.h-100
          p.mb-4.text-white #[b Capítulo VI - Salud mental.]
          ul.lista-ul--color
            li.d-flex
              i.fas.fa-circle-check
              |
              p.mb-0.text-white #[b Artículo 63.] Atención de urgencias en salud mental.
    Separador
    #t_2_5
    .titulo-segundo.color-acento-contenido
      h2 2.5 Resolución 3880 de 2018
    p.mb-4(data-aos="fade-down") Esta resolución:
    .row(data-aos="fade-right")
      .col-lg-3
        .p-4.bg-c6.h-100
          figure.mb-3
            img(src="@/assets/curso/tema2/img4.svg", alt="", style="width: 70px")
          p.mb-0 Adopta los lineamientos técnicos y operativos de la Ruta Integral de Atención en salud (RIAS).
      .col-lg-3
        .p-4.bg-c11.h-100
          figure.mb-3
            img(src="@/assets/curso/tema2/img5.svg", alt="", style="width: 70px")
          p.mb-0 Se crea la Ruta Integral de Atención para la Promoción y Mantenimiento de la Salud (RIAS).
      .col-lg-6
        .p-4.bg-c7.h-100
          figure.mb-3
            img(src="@/assets/curso/tema2/img6.svg", alt="", style="width: 70px")
          p.mb-0 Establecer directrices claras para la #[b "operación de estas rutas"], garantizando la coordinación entre los diferentes niveles del sistema de salud, desde la atención primaria hasta la especializada.
    Separador
    #t_2_6
    .titulo-segundo.color-acento-contenido
      h2 2.6 Resolución 4886 de 2018
    p(data-aos="fade-right") Se adopta la Política Nacional de Salud Mental en Colombia, la cual busca garantizar el acceso a la atención en salud mental de manera integral y equitativa, promoviendo el bienestar psicológico y emocional de la población. Su enfoque está basado en los derechos humanos y en un modelo comunitario e inclusivo, buscando integrar la salud mental en todos los niveles del sistema de salud del país.
    p.mb-5(data-aos="fade-right") Los ejes de la política nacional de salud mental, son:
    .row.bg-c9
      .col-12
        .p-5
          .tarjeta.tarjeta--azul1.p-4(data-aos="fade-down")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center.my-lg-4
                .col-lg-7.mb-4.mb-lg-0
                  p #[b Promoción de la convivencia y la salud mental en los entornos.]
                  p.mb-0 Destaca la promoción de estilos de vida saludables, involucramiento parental, educación en habilidades para la vida y el fortalecimiento de la cultura propia como factor protector de la salud mental. 
                .col-lg-4
                  figure
                    img(src="@/assets/curso/tema2/img12.png", alt="", style="width: 400px").m-auto
              .row.justify-content-center.align-items-center.my-lg-4
                .col-lg-7.mb-4.mb-lg-0
                  p #[b Prevención de los problemas de salud mental individuales y colectivos, así como de los trastornos mentales y epilepsia.]
                  p.mb-0 Hace referencia a las acciones orientadas a evitar o prevenir el desarrollo de la enfermedad, como la disminución de los factores de riesgo, así como aquellas encaminadas a frenar su progresión y reducir sus efectos una vez que ya ha aparecido.
                .col-lg-4
                  figure
                    img(src="@/assets/curso/tema2/img13.png", alt="", style="width: 400px").m-auto
              .row.justify-content-center.align-items-center.my-lg-4
                .col-lg-7.mb-4.mb-lg-0
                  p #[b Atención integral de los problemas, trastornos mentales y epilepsia. (tratamiento integral)]
                  ul.lista-ul--color
                    li.d-flex
                      i.fas.fa-circle-check
                      |
                      p.mb-0 Mejorar servicios de baja complejidad para facilitar el acceso y la atención integral en salud mental y epilepsia, involucrando a gestores comunitarios.
                    li.d-flex
                      i.fas.fa-circle-check
                      |
                      p.mb-0 Fomentar el desarrollo de servicios especializados en salud mental y epilepsia.
                    li.d-flex
                      i.fas.fa-circle-check
                      |
                      p.mb-0 Crear unidades funcionales de servicios que garanticen una atención integral, incluyendo el fortalecimiento de los servicios de hospitalización parcial.
                    li.d-flex
                      i.fas.fa-circle-check
                      |
                      p.mb-0 Gestionar redes integrales de atención, mediante la formación continua del personal, habilitación de servicios, adaptación intercultural para población étnica, y definición de procedimientos y mecanismos de contratación.
                    li.d-flex
                      i.fas.fa-circle-check
                      |
                      p.mb-0 Fortalecer el sistema de información para monitorear y seguir la provisión de servicios.
                .col-lg-4
                  figure
                    img(src="@/assets/curso/tema2/img14.png", alt="", style="width: 400px").m-auto
              .row.justify-content-center.align-items-center.my-lg-4
                .col-lg-7.mb-4.mb-lg-0
                  p #[b Rehabilitación integral e inclusión social.]
                  p.mb-0 Es un proceso continuo y coordinado que busca lograr la máxima recuperación en los aspectos físicos, psicológicos, educativos, sociales y ocupacionales, con el objetivo de asegurar igualdad de oportunidades e integración social para todas las personas con discapacidad. Este proceso abarca la rehabilitación psicosocial y se lleva a cabo de manera continua en la comunidad, con el apoyo directo de las autoridades de salud locales.
                .col-lg-4
                  figure
                    img(src="@/assets/curso/tema2/img15.png", alt="", style="width: 400px").m-auto
              .row.justify-content-center.align-items-center.my-lg-4
                .col-lg-7.mb-4.mb-lg-0
                  p #[b Gestión, articulación y coordinación sectorial e intersectorial.]
                  p.mb-0 En principio, hace referencia a la colaboración entre distintos sectores con un enfoque común para abordar problemas sociales. De esta manera, todas las políticas públicas orientadas al desarrollo integral y a la mejora de la calidad de vida de la población deben ser diseñadas e implementadas de manera intersectorial.
                .col-lg-4
                  figure
                    img(src="@/assets/curso/tema2/img16.png", alt="", style="width: 400px").m-auto
    Separador
    #t_2_7
    .titulo-segundo.color-acento-contenido
      h2 2.7 Plan decenal de salud pública 2022-2031
    .row
      .col-lg-3.bg-c7(data-aos="fade-right")
        .p-4
          figure
            img(src="@/assets/curso/tema2/img1.svg", alt="", style="width: 200px").m-auto
      .col-lg-9.bg-c6(data-aos="fade-left")
        .row.h-100.align-items-center
          .col-12
            .p-4
              p.mb-4 La formulación de un Plan Nacional de Salud Mental se inscribe en el contexto del Plan Decenal de Salud Pública 2022 - 2031, un documento rector que establece las directrices para asegurar la salud en Colombia. Este plan se ha desarrollado a partir de un análisis de la situación sanitaria del país y presenta una perspectiva particular de la salud, adoptando un modelo específico con diversas dimensiones. Con relación al tema que nos ocupa, ofreceremos un resumen de la ‘Dimensión de convivencia social y salud mental’, que facilitará la comprensión del estado actual y las condiciones de la salud mental en nuestro país.
              figure
                img(src="@/assets/curso/tema2/img2.svg", alt="", style="width: 100px")

</template>

<script>
export default {
  name: 'Tema2',
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
