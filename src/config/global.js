export default {
  global: {
    Name: 'Salud mental positiva y derechos en Colombia',
    Description:
      'Este componente se centra en la promoción de la salud mental desde una perspectiva positiva y de derechos en Colombia. Destaca la importancia de un bienestar auténtico para enfrentar la vida y contribuir al desarrollo social, enfatizando en la prevención de trastornos mentales a través del conocimiento y ejercicio de derechos, apoyándose en marcos legales y políticas públicas nacionales.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Concepto de salud mental positiva',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Salud mental en Colombia',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Riesgos para la salud mental',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Crisis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Concepto de salud mental positiva',
      referencia:
        'PAHO TV (2022). Qué es la salud mental y cómo podemos cuidarla.  [Archivo de video] Youtube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=owr6b1WxWHM&ab_channel=PAHOTV',
    },
    {
      tema: 'Derechos en el campo de la salud mental',
      referencia:
        'Unisalud-Universidad Nacional de Colombia (2023). Conozca sus derechos de salud mental. Ley 1616 de 2013, Art 2 [Archivo de video] Youtube',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=iUHHyu-0HL0&ab_channel=Unisalud-UniversidadNacionaldeColombia ',
    },
    {
      tema: 'Derechos en el campo de la salud mental',
      referencia:
        'MinSalud (2021). Dimensión convivencia social y salud mental',
      tipo: 'Archivo',
      link:
        'https://www.minsalud.gov.co/plandecenal/Documents/dimensiones/convivenciasocial-ysalud-mental.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Salud mental',
      significado:
        'estado de bienestar en que las personas desarrollan sus capacidades, afrontan las tensiones de la vida y contribuyen a su comunidad, según la Organización Mundial de la Salud (OMS).',
    },
    {
      termino: 'Enfoque de derechos',
      significado:
        'perspectiva que garantiza el acceso, la atención y la promoción de la salud mental como parte fundamental de los derechos humanos.',
    },
    {
      termino: 'Trastornos mentales comunes',
      significado:
        'afecciones de salud mental que pueden incluir depresión, ansiedad y trastornos del comportamiento, que afectan a individuos de distintas maneras.',
    },
    {
      termino: 'Determinantes sociales',
      significado:
        'factores socioeconómicos y ambientales como la pobreza, educación y violencia, que impactan en la salud mental de los individuos y comunidades.',
    },
    {
      termino: 'Violencia intrafamiliar',
      significado:
        'cualquier forma de abuso físico, psicológico, económico o sexual que ocurre dentro del hogar y afecta la integridad y bienestar de sus miembros.',
    },
  ],
  referencias: [
    {
      referencia:
        'Colombia. Ministerio de Salud y Protección Social. (2013). Ley 1616 de 21 de enero de 2013 por medio de la cual se expide la ley de salud mental y se dictan otras disposiciones.',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/DE/DIJ/ley-1616-del-21-de-enero-2013.pdf',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (2014). ABECÉ sobre la salud mental, sus trastornos y estigma.',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/VS/PP/abc-salud-mental.pdf',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (2015). Resolución 5592 de 2015.',
      link:
        'https://www.minsalud.gov.co/Normatividad_Nuevo/Resoluci%C3%B3n%205592%20de%202015.pdf',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (2016). Resolución 6408 de 2016. Recuperado de',
      link:
        'https://www.minsalud.gov.co/Normatividad_Nuevo/Resoluci%C3%B3n%206408%20de%202016.pdf',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable de Línea de Producción',
          centro:
            'Centro de Formación Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Sonia Margarita Leal Cruzo',
          cargo: 'Experta Temática',
          centro: 'Regional Risaralda',
        },
        {
          nombre: 'Paola Alexandra Moya Peralta',
          cargo: 'Evaluadora Instruccional',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Carlos Julián Ramírez Benítez',
          cargo: 'Diseñador de Contenidos Digitales',
          centro:
            'Centro de Formación Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Edgar Mauricio Cortés García',
          cargo: 'Desarrollador <i>full stack</i>',
          centro:
            'Centro de Formación Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Edgar Mauricio Cortés García',
          cargo: 'Actividad Didáctica',
          centro:
            'Centro de Formación Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Luis Gabriel Urueta Alvarez',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro:
            'Centro de Formación Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Margarita Marcela Medrano Gómez',
          cargo: 'Evaluador para Contenidos Inclusivos y Accesibles',
          centro:
            'Centro de Formación Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para Contenidos Inclusivos y Accesibles',
          centro:
            'Centro de Formación Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
