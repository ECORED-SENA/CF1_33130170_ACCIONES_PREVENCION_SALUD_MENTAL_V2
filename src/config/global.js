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
        download: 'downloads/33130170_CF01_DU.pdf',
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
      tema: 'Salud mental en Colombia',
      referencia:
        'Ministerio de Salud de Colombia. (2021). <i>¿Qué es lo nuevo en este Plan Decenal de Salud Pública 2022-2031?</i> [video]. YouTube.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=_k4hapIpNoA&list=PLdA3cVDe-LYwnLe-Csdcfgw7gVZo094XY&index=5',
    },
    {
      tema: 'Salud mental en Colombia',
      referencia:
        'Hernández, S. (2021, septiembre 8). <i>Política pública de salud mental en Colombia</i> [video]. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=4PgLbYkm9jg',
    },
  ],
  glosario: [
    {
      termino: 'Atención primaria',
      significado:
        'son aquellos servicios que se prestan para atender las necesidades básicas de salud.',
    },
    {
      termino: 'Determinantes sociales',
      significado:
        'factores socioeconómicos y ambientales como la pobreza, educación y violencia, que impactan en la salud mental de los individuos y comunidades.',
    },
    {
      termino: 'Enfoque de derechos',
      significado:
        'perspectiva que garantiza el acceso, la atención y la promoción de la salud mental como parte fundamental de los derechos humanos.',
    },
    {
      termino: 'Estrategias de prevención',
      significado:
        'son un conjunto de acciones planificadas y ejecutadas con el objetivo de reducir o evitar la ocurrencia de problemas, riesgos o conductas indeseables antes de que sucedan.',
    },
    {
      termino: 'Política pública',
      significado:
        'las políticas públicas son las acciones de gobierno, es la acción emitida por éste, que busca cómo dar respuestas a las diversas demandas de la sociedad, como señala Chandler y Plano, se pueden entender como uso estratégico de recursos para aliviar los problemas nacionales.',
    },
    {
      termino: 'Promoción de la salud mental',
      significado:
        'la promoción de la salud mental es una estrategia intersectorial y un conjunto de procesos orientados hacia la transformación de los determinantes de la salud mental, que afectan la calidad de vida en procura de la satisfacción de las necesidades y los medios para mantener la salud, mejorarla y ejercer control de la misma en los niveles individual y colectivo teniendo en cuenta el marco cultural colombiano.',
    },
    {
      termino: 'Red hospitalaria',
      significado:
        'conjunto de instituciones de diferentes niveles de atención, dispuestas para prestar los servicios de salud a la comunidad.',
    },
    {
      termino: 'Salud mental',
      significado:
        'estado de bienestar en que las personas desarrollan sus capacidades, afrontan las tensiones de la vida y contribuyen a su comunidad, según la Organización Mundial de la Salud (OMS).',
    },
    {
      termino: 'Trastornos mentales comunes',
      significado:
        'afecciones de salud mental que pueden incluir depresión, ansiedad y trastornos del comportamiento, que afectan a individuos de distintas maneras.',
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
        'American Psychiatric Association. (2013). <i>Diagnostic and statistical manual of mental disorders (5th ed.)</i>. American Psychiatric Publishing.',
      link: '',
    },
    {
      referencia:
        'Fernández Márquez, L. M. (2010, junio). <i>Modelo de intervención en crisis en busca de la resiliencia personal</i>. Consejo General de la Psicología de España. ',
      link:
        'https://www.cop.es/uploads/PDF/MODELO-INTERVENCION-CRISIS-RESILIENCIA-PERSONAL.pdf',
    },
    {
      referencia:
        'Guatrochi, M. (2020). <i>Nuevas configuraciones familiares: Tipos de familia, funciones y estructura familiar</i>. Revista REDES, (41), 11-18. ',
      link: 'https://www.redesdigital.com/index.php/redes/article/view/44',
    },
    {
      referencia:
        'Ley 1566 de 2012. (2012). <i>Por medio de la cual se dictan normas para garantizar la atención integral a personas que consumen sustancias psicoactivas y se crea el Premio Nacional "Entidad Comprometida con la Prevención del Consumo, Abuso y Adicción a Sustancias Psicoactivas"</i>. Congreso de la República de Colombia. Función Pública. ',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=48678',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (2018). <i>Política Nacional de Salud Mental</i>. Ministerio de Salud y Protección Social. ',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/VS/PP/politica-nacional-salud-mental.pdf',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (2018). <i>Resolución 3280 de 2018, por la cual se adoptan los lineamientos técnicos y operativos de la Ruta Integral de Atención para la Promoción y Mantenimiento de la Salud y la Ruta Integral de Atención en Salud para la Población Materno Perinatal y se establecen las directrices para su operación</i>. Ministerio de Salud y Protección Social. ',
      link:
        'https://www.minsalud.gov.co/Normatividad_Nuevo/Resoluci%C3%B3n%20No.%203280%20de%2020183280.pdf',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (2022). <i>Plan Decenal de Salud Pública 2022-2031</i>. Ministerio de Salud y Protección Social. ',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/VS/ED/PSP/documento-plan-decenal-salud-publica-2022-2031.pdf',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (s.f.). <i>ASIS Salud Mental</i> [Documento en línea]. Recuperado el 21 de noviembre de 2024, de: ',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/VS/ED/PSP/asis-convivencia-social-salud-mental.pdf',
    },
    {
      referencia:
        'Política Criminal. (2024). <i>Boletín de comportamiento del delito de violencia intrafamiliar (VIF) 2016-2023</i> [Documento en línea]. Recuperado el 23 de noviembre de 2024, de: ',
      link:
        'https://www.politicacriminal.gov.co/Portals/0/documento/Violencia-Intrafamiliar-Junio.pdf',
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
          nombre: 'Jhon Jairo Urueta Alvarez',
          cargo: 'Desarrollador <i>full stack</i>',
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
