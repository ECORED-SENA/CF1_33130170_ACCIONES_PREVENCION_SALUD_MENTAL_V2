<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Riesgos para la salud mental
    p.mb-5(data-aos="fade-right") La salud mental es un componente fundamental del bienestar integral, tal como lo define la Organización Mundial de la Salud, que establece que la salud mental no es simplemente ausencia de enfermedades, sino un estado completo de bienestar físico, mental y social. Es crucial reconocer que diversos factores psicosociales pueden influir en la salud mental, lo que resalta la necesidad de implementar estrategias efectivas de promoción, prevención, tratamiento y recuperación para minimizar las afectaciones en esta área. Estos pueden incluir:
    .row.bg-c12
      .col-12
        .px-5
          .row.align-items-center.mb-5
            .col-lg-3.mb-4.mb-lg-0(data-aos="fade-right")
              figure
                img(src="@/assets/curso/tema3/img2.png", alt="", style="width: 300px").m-auto
            .col-lg-9(data-aos="fade-left")
              SlyderF(columnas="col-md-6")
                .tarjeta.color-secundario.p-4
                  figure.mb-3
                    img(src="@/assets/curso/tema3/img2.svg", alt="", style="width: 60px").m-auto
                  .row.justify-content-center.mb-3
                    .col-auto
                      .p-2.bg-white
                        p.text-center.mb-0 #[b Presiones socioeconómicas]
                  p.text-center.mb-0 Impacto de la pobreza y el nivel educativo en la salud mental.
                .tarjeta.color-secundario.p-4
                  figure.mb-3
                    img(src="@/assets/curso/tema3/img3.svg", alt="", style="width: 60px").m-auto
                  .row.justify-content-center.mb-3
                    .col-auto
                      .p-2.bg-white
                        p.text-center.mb-0 #[b Condiciones asociadas]
                  p.text-center.mb-0 Relación entre mala salud mental y cambios sociales abruptos, entornos laborales estresantes.
                .tarjeta.color-secundario.p-4
                  figure.mb-3
                    img(src="@/assets/curso/tema3/img4.svg", alt="", style="width: 60px").m-auto
                  .row.justify-content-center.mb-3
                    .col-auto
                      .p-2.bg-white
                        p.text-center.mb-0 #[b Discriminación y exclusión]
                  p.text-center.mb-0 Efectos de la discriminación de género y la exclusión social en el bienestar psicológico.
                .tarjeta.color-secundario.p-4
                  figure.mb-3
                    img(src="@/assets/curso/tema3/img5.svg", alt="", style="width: 60px").m-auto
                  .row.justify-content-center.mb-3
                    .col-auto
                      .p-2.bg-white
                        p.text-center.mb-0 #[b Estilos de vida y violencia]
                  p.text-center.mb-0 Influencia de estilos de vida insalubres y riesgo de violencia en la salud mental.
                .tarjeta.color-secundario.p-4
                  figure.mb-3
                    img(src="@/assets/curso/tema3/img6.svg", alt="", style="width: 60px").m-auto
                  .row.justify-content-center.mb-3
                    .col-auto
                      .p-2.bg-white
                        p.text-center.mb-0 #[b Derechos humanos y salud física]
                  p.text-center.mb-0 Asociación de violaciones a los derechos humanos y problemas de salud física con trastornos mentales.
                .tarjeta.color-secundario.p-4
                  figure.mb-3
                    img(src="@/assets/curso/tema3/img7.svg", alt="", style="width: 60px").m-auto
                  .row.justify-content-center.mb-3
                    .col-auto
                      .p-2.bg-white
                        p.text-center.mb-0 #[b Factores psicológicos y personalidad]
                  p.text-center.mb-0 Contribución de rasgos psicológicos y de personalidad a la vulnerabilidad frente a trastornos mentales.
                .tarjeta.color-secundario.p-4
                  figure.mb-3
                    img(src="@/assets/curso/tema3/img8.svg", alt="", style="width: 60px").m-auto
                  .row.justify-content-center.mb-3
                    .col-auto
                      .p-2.bg-white
                        p.text-center.mb-0 #[b Causas biológicas]
                  p.text-center.mb-0 Rol de factores genéticos y desequilibrios bioquímicos en la prevalencia de enfermedades mentales.
          p.mb-0(data-aos="fade-right") Ahora bien, podemos clasificar estos factores psicosociales en dos tipos: determinantes sociales y factores de riesgo.
          Separador
          #t_3_1
          .titulo-segundo.color-acento-contenido
            h2 3.1 Determinantes sociales
    p(data-aos="fade-right") Los determinasntes sociales son:
    .row.align-items-center
      .col-lg-8(data-aos="fade-right")
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul2")
          .row(titulo="Edad")
            .col-12
              p.mb-0 En el ciclo de maduración de cada ser humano pueden existir crisis del desarrollo, las cuales son situaciones de cambio o conflicto interno que ocurren en momentos clave a lo largo del ciclo de vida de una persona, cuando se enfrenta a desafíos propios de su etapa de desarrollo. Estas crisis surgen cuando una persona debe adaptarse a nuevas responsabilidades, roles o expectativas que surgen a medida que avanza en su vida.
          .row(titulo="Situación económica")
            .col-12
              p.mb-0 La posición económica influye profundamente en la salud mental, generando riesgos derivados del estrés crónico, la falta de recursos para una atención adecuada, la dificultad para cubrir las necesidades básicas y las presiones sociales y familiares.
          .row(titulo="Genero")
            .col-12
              p.mb-0 El género tiene un impacto significativo en la salud mental debido a una serie de factores sociales, culturales, económicos y biológicos que varían entre hombres y mujeres, así como Las personas LGBTQ+ (lesbianas, gais, bisexuales, transgénero, queer, entre otras), pueden experimentar discriminación, estigmatización y rechazo social.
          .row(titulo="Educación")
            .col-12
              p.mb-0 Las personas con menor nivel educativo pueden enfrentarse a estigmas sociales relacionados con su educación, lo que puede impactar su autoestima y bienestar psicológico. Sentir que no se cumplen ciertas expectativas sociales o profesionales puede generar sentimientos de fracaso o de no valía.
          .row(titulo="Violencia social o guerra")
            .col-12
              p.mb-0 esta violencia puede tener efectos tanto a corto como a largo plazo en la salud mental, a nivel individual y social. Entre los efectos más comunes se encuentran el Trastorno de Estrés Postraumático (TEPT), la ansiedad, la depresión, el aislamiento social, el sentimiento de inseguridad y miedo crónico, así como los desplazamientos forzosos.
          .row(titulo="Violación de DH")
            .col-12
              p.mb-0 Cuando estos derechos son vulnerados, se desencadenan efectos negativos en el bienestar emocional y psicológico de las víctimas, y estos efectos pueden ser tanto inmediatos como a largo plazo.
          .row(titulo="Trabajo")
            .col-12
              p.mb-0 Las condiciones de trabajo, el conflicto laboral y el desempleo son factores clave que afectan directamente la salud mental de las personas. Las condiciones laborales adversas, el estrés relacionado con el trabajo y la inseguridad laboral pueden desencadenar una serie de problemas psicológicos y emocionales.
          .row(titulo="Cambios sociales inesperados")
            .col-12
              p.mb-0 Tienen un impacto significativo en la salud mental de las personas, ya que alteran las estructuras y condiciones a las que se está acostumbrado, generando un sentido de incertidumbre, estrés y adaptación. Estos cambios pueden estar relacionados con una variedad de situaciones, como crisis económicas, desastres naturales, cambios políticos, avances tecnológicos rápidos, pandemias o transformaciones culturales.
      .col-lg-4.d-none.d-lg-block(data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema3/img3.png", alt="", style="width: 400px").m-auto
    Separador
    #t_3_2
    .titulo-segundo.color-acento-contenido
      h2 3.2 Factores de riesgo
    .row.mb-4
      .col-lg-8.order-2.order-lg-1(data-aos="fade-right")
        .row.h-100.align-items-center.bg-c4
          .col-12
            .p-4
              p.mb-0 Estos se asocian con circunstancias individuales, familiares o sociales que pueden acelerar el surgimiento de enfermedades mentales. Al abordar un factor de riesgo, es esencial considerar también los factores de protección, definidos por la OMS como aquellas condiciones que aumentan la capacidad de las personas para resistir los factores de riesgo.  
      .col-lg-4.order-1.order-lg-2.mb-4.mb-lg-0(data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema3/img4.png", alt="", style="width: 400px").m-auto
    p.mb-0(data-aos="fade-down") Así mismo, existen condiciones individuales como factores hereditarios, personalidad y recursos de afrontamiento que también pueden convertirse en factores de riesgo de acuerdo a la manera como se comportan en cada persona.
    .row.bg-c13
      .col-12
        .px-5
          Separador
          #t_3_3
          .titulo-segundo.color-acento-contenido
            h2 3.3 Condiciones individuales
          .row.align-items-center.mb-4
            .col-lg-8.order-2.order-lg-1(data-aos="fade-right")
              p Cada persona desarrolla habilidades que le permiten navegar por la vida, protegerse y cuidar de sí mismo y de los demás. Estas habilidades se refuerzan a través de las experiencias, ya sean positivas o negativas, que brinda el entorno. Sin embargo, cuando estas condiciones individuales son frágiles, pueden convertirse en un factor de riesgo que incrementa la vulnerabilidad a problemas de salud mental a lo largo de la vida. 
              p.mb-0 #[b Algunos factores que afectan el desarrollo a través de la vida son:]
            .col-lg-4.order-1.order-lg-2.mb-4.mb-lg-0(data-aos="fade-left")
              figure
                img(src="@/assets/curso/tema3/img9.svg", alt="", style="width: 400px").m-auto
          .row.justify-content-center
            .col-lg-4.bg-c7(data-aos="fade-right")
              .row.h-100.align-items-end
                .col-12
                  .px-4.pt-4
                    figure
                      img(src="@/assets/curso/tema3/img10.svg", alt="", style="width: 300px").m-auto
            .col-lg-6.bg-c6(data-aos="fade-left")
              .p-4
                ul.lista-ul--color
                  li.d-flex
                    i.fas.fa-circle-check
                    |
                    p.mb-0 Soledad.
                  li.d-flex
                    i.fas.fa-circle-check
                    |
                    p.mb-0 Baja autoestima.
                  li.d-flex
                    i.fas.fa-circle-check
                    |
                    p.mb-0 Pensamientos negativos.
                  li.d-flex
                    i.fas.fa-circle-check
                    |
                    p.mb-0 Historia de enfermedad mental en la familia.
                  li.d-flex
                    i.fas.fa-circle-check
                    |
                    p.mb-0 Baja tolerancia a la frustración.
                  li.d-flex
                    i.fas.fa-circle-check
                    |
                    p.mb-0 Pocas habilidades sociales.
                  li.d-flex
                    i.fas.fa-circle-check
                    |
                    p.mb-0 Redes de apoyo limitadas o inexistentes.
    Separador
    #t_3_4
    .titulo-segundo.color-acento-contenido
      h2 3.4 La familia
    .row.mb-5
      .col-lg-8.order-2.order-lg-1(data-aos="fade-right")
        .row.h-100.align-items-center.bg-c4
          .col-12
            .p-4
              p La familia puede verse como un ecosistema donde la supervivencia de cada miembro está interconectada. 
              p Es en el núcleo familiar donde se forjan lazos fundamentales, se aprende sobre el amor, se inculcan valores, se establecen patrones de crianza, se forma el carácter y se practican ética y moralidad. La familia tiene la función esencial de enseñar a amar, siendo el mayor factor de protección para sus miembros.
              p.mb-0 Una configuración familiar hace referencia a la forma en que se organiza una familia, en función de la composición y los roles que desempeñan cada uno de sus miembros. Esta estructura puede incluir diferentes tipos de familias, cada configuración familiar puede tener diferentes funciones sociales y dinámicas que afectan el bienestar y el desarrollo de sus integrantes, además de su interacción con la sociedad. 
      .col-lg-4.order-1.order-lg-2.mb-4.mb-lg-0(data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema3/img6.png", alt="", style="width: 400px").m-auto
    .row.mb-4.ms-0
      .col-auto.bg-c14(data-aos="fade-left")
        .row.align-items-center
          .col-auto.px-0
            figure
              img(src='@/assets/curso/tema3/img10.png', alt='', style='width: 50px; position: relative; left: -10px').m-auto
          .col.ps-0
            h3.mb-0 Estructuras familiares
    p.mb-4(data-aos="fade-down") #[b La familia puede estar formada por diversos miembros, que pueden incluir:]
    .row.justify-content-center.mb-4(data-aos="fade-left")
      .col-md-5.col-lg-3.mb-4.mb-lg-0
        .p-4.bg-c7.h-100
          figure.mb-3
            img(src="@/assets/curso/tema3/img7.png", alt="", style="width: 130px").m-auto
          p.mb-0 #[b Padres] (biológicos, adoptivos o de hecho).
      .col-md-5.col-lg-3.mb-4.mb-lg-0
        .p-4.bg-c7.h-100
          figure.mb-3
            img(src="@/assets/curso/tema3/img8.png", alt="", style="width: 130px").m-auto
          p.mb-0 #[b Hijos] (biológicos, adoptivos o de relaciones previas).
      .col-md-5.col-lg-3
        .p-4.bg-c7.h-100
          figure.mb-3
            img(src="@/assets/curso/tema3/img9.png", alt="", style="width: 130px").m-auto
          p.mb-0 #[b Abuelos], #[b tíos], #[b primos] u otros familiares extendidos, según el tipo de familia.
    p.mb-4(data-aos="fade-down") #[b Las familias pueden tener diferentes estructuras, que varían dependiendo de su composición y organización:]
    .row.bg-c9.mb-5
      .col-12
        .p-5
          .tarjeta.tarjeta--azul1.p-4(data-aos="fade-right")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center.my-lg-4
                .col-lg-7.mb-4.mb-lg-0
                  p #[b Familia nuclear]
                  p.mb-0 Formada por los padres y sus hijos. Este es el modelo tradicional en la sociedad.
                .col-lg-4
                  figure
                    img(src="@/assets/curso/tema3/img11.png", alt="", style="width: 400px").m-auto
              .row.justify-content-center.align-items-center.my-lg-4
                .col-lg-7.mb-4.mb-lg-0
                  p #[b Familia extendida]
                  p.mb-0 Además de los padres y los hijos, incluyen otros familiares como abuelos, tíos, primos, etc. Varias generaciones coexisten en un solo hogar.
                .col-lg-4
                  figure
                    img(src="@/assets/curso/tema3/img12.png", alt="", style="width: 400px").m-auto
              .row.justify-content-center.align-items-center.my-lg-4
                .col-lg-7.mb-4.mb-lg-0
                  p #[b Familia monoparental]
                  p.mb-0 Compuesta por un solo padre o madre que cría a sus hijos, generalmente como resultado de separación, divorcio o elección personal.
                .col-lg-4
                  figure
                    img(src="@/assets/curso/tema3/img13.png", alt="", style="width: 400px").m-auto
              .row.justify-content-center.align-items-center.my-lg-4
                .col-lg-7.mb-4.mb-lg-0
                  p #[b Familia reconstituida o ensamblada]
                  p.mb-0 Se forma cuando dos personas que tienen hijos de relaciones previas se casan o se unen, formando una nueva unidad familiar.
                .col-lg-4
                  figure
                    img(src="@/assets/curso/tema3/img14.png", alt="", style="width: 400px").m-auto
              .row.justify-content-center.align-items-center.my-lg-4
                .col-lg-7.mb-4.mb-lg-0
                  p #[b Familia homoparental]
                  p.mb-0 Formada por dos padres del mismo sexo, ya sea biológicos o adoptivos.
                .col-lg-4
                  figure
                    img(src="@/assets/curso/tema3/img15.png", alt="", style="width: 400px").m-auto
              .row.justify-content-center.align-items-center.my-lg-4
                .col-lg-7.mb-4.mb-lg-0
                  p #[b Familia sin hijos]
                  p.mb-0 Puede ser una pareja sin hijos biológicos o adoptivos, que puede optar por no tener hijos o no tenerlos por diversas razones.
                .col-lg-4
                  figure
                    img(src="@/assets/curso/tema3/img16.png", alt="", style="width: 400px").m-auto
              .row.justify-content-center.align-items-center.my-lg-4
                .col-lg-7.mb-4.mb-lg-0
                  p #[b Unipersonales]
                  p.mb-0 Conformados por una sola persona.
                .col-lg-4
                  figure
                    img(src="@/assets/curso/tema3/img17.png", alt="", style="width: 400px").m-auto
    .row.justify-content-center.mb-4
      .col-lg-10(data-aos="fade-down")
        .p-4.bg-c8
          p.mb-0 La función social de la familia es esencial para el bienestar de la sociedad, ya que cumple varias funciones clave. Actúa como agente de socialización, transmitiendo normas y valores, especialmente a los niños, y proporciona apoyo emocional y afectivo, creando un entorno de amor que fomenta el desarrollo integral de sus miembros. Sin embargo, cuando la convivencia familiar se ve alterada por violencia, se generan efectos devastadores, como el miedo y las relaciones conflictivas, afectando tanto a las víctimas como a los agresores.
    p.mb-4 #[b Los tipos de violencia que se pueden dar en la familia son:]
    .row.align-items-center
      .col-lg-8.order-2.order-lg-1(data-aos="fade-right")
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul2")
          .row(titulo="Violencia intrafamiliar")
            .col-12
              p.mb-0 El Consejo Distrital para la Atención Integral a Víctimas de Violencia y Abuso Sexual define la violencia intrafamiliar como todas aquellas acciones realizadas en el interior de la familia, donde uno de sus miembros lesiona la armonía y la vida, la integridad, la autonomía, la libertad individual, la libertad sexual o la dignidad humana de quienes la integran.
          .row(titulo="Maltrato infantil")
            .col-12
              p.mb-0 La ley 1098 de 2006 en su artículo 18 establece que el maltrato infantil se refiere a toda forma de perjuicio, castigo, humillación o abuso físico, psicológico, descuido, omisión de tratamiento o malos tratos o explotación sexual, incluidos los actos sexuales abusivos y la violación y en general toda forma de violencia o agresión sobre el niño, la niña o el adolescente por parte de sus padres, representantes legales o cualquier otra persona.
          .row(titulo="Violencia por razones de género")
            .col-12
              p.mb-0 El Consejo Distrital para la Atención Integral a Víctimas de Violencia y Abuso Sexual nos define que cualquier acción, omisión, conducta (o amenazas) que causen muerte, daño o sufrimiento físico, sexual, psicológico económico y/o patrimonial a la persona y/o a las familias o a las comunidades asociada a un ejercicio de poder fundamentado en relaciones asimétricas y desiguales entre hombres y mujeres, para mantener condiciones de desigualdad y discriminación.
          .row(titulo="Maltrato a personas mayores")
            .col-12
              p.mb-0 La Convención Interamericana sobre la Protección de los Derechos Humanos de las Personas Mayores nos dice que el acto único o repetido que causa daño o sufrimiento a una persona de edad, o la falta de medidas apropiadas para evitarlo, que se produce en una relación basada en la confianza. La desatención o el abandono ocurre cuando un cuidador no brinda la atención adecuada o abandona al adulto mayor. Este es el tipo más común de maltrato a personas mayores.
      .col-lg-4.order-1.order-lg-2.mb-4.mb-lg-0(data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema3/img18.png", alt="", style="width: 360px").m-auto

</template>

<script>
export default {
  name: 'Tema3',
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
