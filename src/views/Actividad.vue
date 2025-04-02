<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Microcontroladores y sensores',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> evaluar la comprensión de los aprendices sobre los conceptos de salud mental positiva, normatividad vigente en Colombia y factores de riesgo psicosocial.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!..',
      titulo_reprobado: 'VUELVA A INTENTARLO..',
      preguntas: [
        {
          id: 1,
          texto: 'Según la OMS, la salud mental se define como:',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La ausencia de trastornos mentales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Un estado de bienestar en el que el individuo desarrolla sus capacidades, afronta tensiones normales de la vida y contribuye a su comunidad.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'La capacidad de ser productivo en el trabajo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Un estado en el que no existen factores de riesgo psicosocial.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Cuál es el objetivo principal de la Ley 1616 de 2013 en Colombia?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Regular el consumo de sustancias psicoactivas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Fortalecer las instituciones de salud pública.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Garantizar el derecho a la salud mental desde un enfoque de derechos humanos.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Promover el acceso a medicamentos psiquiátricos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto: 'Uno de los derechos establecidos en la Ley 1616 de 2013 es:',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'No recibir información sobre su diagnóstico y tratamiento.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Ser discriminado en el ámbito laboral si presenta un trastorno mental.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Ser sometido a tratamientos experimentales sin su consentimiento.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Recibir psicoeducación individual y familiar sobre su trastorno mental.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Cuál de los siguientes es un determinante social que influye en la salud mental?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La temperatura del lugar donde vive una persona.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La cantidad de ejercicio físico realizado diariamente.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La educación y el acceso a oportunidades laborales.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'El número de familiares cercanos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto: '¿Qué establece la Ley 1566 de 2012 en Colombia?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Normas para garantizar la atención integral a personas que consumen sustancias psicoactivas.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Regulaciones para la salud mental en el entorno laboral.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Directrices para el tratamiento de enfermedades crónicas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'El derecho a la libre elección de medicamentos psiquiátricos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            '¿Cuál de las siguientes opciones es un factor de riesgo psicosocial?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El acceso a educación de calidad.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La violencia social y los conflictos armados.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'La práctica de <i>mindfulness</i>.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Un ambiente laboral estable.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            '¿Qué busca la Política Nacional de Salud Mental adoptada en la Resolución 4886 de 2018?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Eliminar la atención psicológica en centros de salud públicos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Garantizar el acceso a la atención en salud mental de manera integral y equitativa.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Restringir la venta de medicamentos psiquiátricos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Asegurar que solo los psiquiatras puedan atender pacientes con trastornos mentales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            '¿Cuál es una de las estrategias de la Política Nacional de Salud Mental?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Garantizar la promoción de la convivencia y la salud mental en los entornos.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Excluir a personas con trastornos mentales del sistema educativo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Eliminar el tratamiento ambulatorio en salud mental.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Reducir la cantidad de hospitales psiquiátricos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            'Según el Plan Decenal de Salud Pública 2022-2031, la salud mental debe abordarse desde:',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Una perspectiva biomédica exclusivamente.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Un enfoque intersectorial que incluya salud, educación y justicia.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Solo la atención en hospitales psiquiátricos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La reducción de costos en medicamentos psiquiátricos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            '¿Qué acciones se incluyen en la prevención de trastornos mentales según la Política Nacional de Salud Mental?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Reducción de la atención psicológica en centros de salud.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Excluir a las personas con trastornos mentales de la sociedad.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Acciones para evitar el desarrollo de enfermedades y frenar su progresión.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Suspender la atención a pacientes con enfermedades mentales crónicas.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
