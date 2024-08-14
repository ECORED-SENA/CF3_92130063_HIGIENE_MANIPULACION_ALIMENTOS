export default {
  global: {
    componenteFormativo: 'Buenas prácticas en la higiene de los alimentos ',
    descripcionCurso:
      'El componente aborda las prácticas óptimas para la higiene en la fabricación de alimentos, basadas en la Resolución 2674 de 2013 del Ministerio de Salud y Protección Social. Destaca la importancia de la ubicación, diseño, construcción y mantenimiento de instalaciones, así como el manejo adecuado de equipos, utensilios y residuos. Además, enfatiza la limpieza, desinfección y control de plagas para garantizar la seguridad alimentaria. ',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/a1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/a2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/a3.svg'),
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
        titulo:
          'Condiciones básicas de higiene en la fabricación de alimentos ',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Edificios e instalaciones',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Equipos y utensilios',
            hash: 't_1_2',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Limpieza y desinfección ',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Agentes limpiadores',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Manejo de residuos sólidos y líquidos',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Control de plagas',
            hash: 't_2_3',
          },
        ],
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
        download: 'downloads/92130063_CF03_DU.pdf',
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
      tema: 'Condiciones básicas de higiene en la fabricación de alimentos',
      referencia:
        'Agència Catalana de Seguretat Alimentària. (2021). Manual de manipuladores de alimentos.',
      tipo: 'Documento',
      link:
        'https://scientiasalut.gencat.cat/bitstream/handle/11351/5178/manual_basic_manipulacio_aliments_2019_cas.pdf?sequence=7&isAllowed=y',
    },
    {
      tema: 'Edificios e instalaciones',
      referencia:
        'Quality Check Academy (2020). Edificación e Instalaciones. [Archivo de video] Youtube.',
      tipo: 'Video',
      link: 'https://youtu.be/HvwNmy1w1zs?feature=shared',
    },
    {
      tema: 'Equipos y utensilios',
      referencia:
        'Asonaman - Certificado Manipulador Alimentos. (2015). Tema 8. Características de las instalaciones, equipos y utensilios. [Archivo de video] Youtube.',
      tipo: 'Video',
      link: 'https://youtu.be/CUS_CiATcr0?feature=shared',
    },
    {
      tema: 'Limpieza y desinfección',
      referencia:
        'Javier Vega. (2021). Limpieza y Desinfección en la Industria de Alimentos. [Archivo de video] Youtube',
      tipo: 'Video',
      link: 'https://youtu.be/NbsXfon-JV0?feature=shared',
    },
    {
      tema: 'Agentes limpiadores',
      referencia:
        'Ministerio de Ambiente y Desarrollo Sostenible. (2021). Guía de limpieza y desinfección.',
      tipo: 'Guía',
      link:
        'https://www.minambiente.gov.co/wp-content/uploads/2021/11/GUIA_DE_LIMPIEZA_Y_DESINFECCION.pdf',
    },
    {
      tema: 'Manejo de residuos sólidos y líquidos',
      referencia:
        'SICCAS - OEI. (2016) Modulo 2 Tema 3 - Manejo de residuos sólidos y líquidos. [Archivo de video] Youtube.',
      tipo: 'Video',
      link: 'https://youtu.be/tgJZpgG_PU4?feature=shared',
    },
    {
      tema: 'Control de plagas',
      referencia:
        'Alicorp Oficial. (2020). Guía para el control de plagas - crecemos juntos. [Archivo de video] Youtube.',
      tipo: 'Video',
      link: 'https://youtu.be/YMG0y70Rh_E?feature=shared',
    },
  ],
  glosario: [
    {
      termino: 'Basura',
      significado:
        'todo residuo sólido o semisólido, putrescible o no putrescible, con excepción de excretas de origen humano o animal. Comprende en la misma definición: los desperdicios, desechos, cenizas, elementos del barrido de calles, residuos industriales, de establecimientos hospitalarios y de plazas de mercado, entre otros.',
    },
    {
      termino: 'Biodegradables',
      significado:
        'son aquellos restos químicos o naturales que se descomponen fácilmente en el ambiente; entre los cuales se encuentran: los vegetales, residuos alimenticios no infectados, papel higiénico, papeles no aptos para reciclaje, jabones y detergentes biodegradables, madera y otros residuos que puedan ser transformados y se conviertan en materia orgánica.',
    },
    {
      termino: 'Biológicos',
      significado:
        'son aquellos provenientes de animales de experimentación, inoculados con microorganismos patógenos y/o los provenientes de animales portadores de enfermedades infectocontagiosas.',
    },
    {
      termino: 'Desecho',
      significado:
        'cualquier producto deficiente, inservible o inutilizado que su poseedor destina al abandono o del cual quiere deshacerse.',
    },
    {
      termino: 'Desperdicio',
      significado:
        'residuo de origen animal o vegetal procedente de la preparación de alimentos, que por su naturaleza y composición está sujeto a un corto tiempo a una rápida descomposición; proceso que genera malos olores y favorece la proliferación microbiana y de fauna nociva.',
    },
    {
      termino: 'Disposición final',
      significado:
        'es el emplazamiento final o definitivo de todo tipo de residuos, previamente sometidos a sistemas de tratamientos que eliminan sus fracciones peligrosas, para que no representen riesgo en la salud de las personas o deterioro del medio ambiente.',
    },
    {
      termino: 'Disposición sanitaria de basuras',
      significado:
        'proceso mediante el cual las basuras son colocadas en forma definitiva, ya sea en el agua o en el suelo.',
    },
    {
      termino: 'Inertes',
      significado:
        'son aquellos que no permiten su descomposición, ni su transformación en materia prima y su degradación natural requiere grandes períodos de tiempo. Entre los cuales se encuentran: el icopor, algunos tipos de papel como el papel carbón y algunos plásticos.',
    },
    {
      termino: 'Infestación',
      significado:
        'es la presencia y multiplicación de plagas que pueden contaminar o deteriorar los alimentos y/o materias primas.',
    },
    {
      termino: 'Ordinarios o comunes',
      significado:
        'son aquellos generados en el desempeño normal de las actividades. Estos residuos se generan en oficinas, pasillos, áreas comunes, cafeterías, salas de espera, auditorios y en general en todos los sitios del establecimiento del generador.',
    },
    {
      termino: 'Programa',
      significado:
        'conjunto de actividades que incluye objetivos, metodologías y procedimientos, resultados, evaluación y conclusiones.',
    },
    {
      termino: 'Químicos',
      significado:
        'son los restos de sustancias químicas y sus empaques o cualquier otro residuo contaminado con estos; los cuales, dependiendo de su concentración y tiempo de exposición, tienen el potencial para causar la muerte, lesiones graves o efectos adversos a la salud y el medio ambiente.',
    },
    {
      termino: 'Reciclables',
      significado:
        'son aquellos que no se descomponen fácilmente y pueden volver a ser utilizados en procesos productivos como materia prima. Entre estos residuos se encuentran: algunos papeles y plásticos, chatarra, vidrio, telas, radiografías, partes y equipos obsoletos o en desuso, entre otros.',
    },
    {
      termino: 'Residuo sólido',
      significado:
        'es la última fase del ciclo de vida del bien o producto que por sus características físicas o su acondicionamiento debe manejarse independientemente de los residuos líquidos y de los liberados a la atmósfera.',
    },
    {
      termino: 'Tratamiento',
      significado:
        'proceso de transformación física, química o biológica de los residuos sólidos para modificar sus características o aprovechar su potencial y en el cual se puede generar un nuevo residuo sólido, de características diferentes.',
    },
  ],
  referencias: [
    {
      referencia:
        'Bravo, F. (2012). Manejo higiénico de los alimentos. México. Limusa S.A.',
    },
    {
      referencia:
        'Fundación Niño Jesús. (2020). Manual de Buenas Prácticas de Manufactura (BPM).',
      link:
        'https://www.fundacionninojesus.org/wp-content/uploads/2020/01/2.-MANUAL-BPM.pdf',
    },
    {
      referencia:
        'Jacas, J. (2014). El control biológico de plagas y enfermedades: ( ed.). Universitat Jaume I. Servei de Comunicació i Publicacions.',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/lc/senavirtual/titulos/53255',
    },
    {
      referencia: 'Ministerio de la Protección Social. (2000). Decreto 2676.',
    },
    {
      referencia:
        'Requena Peláez, J. M. (Coord.). (2012). Higiene alimentaria en centros: (2 ed.). Editorial ICB.',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/lc/senavirtual/titulos/105615',
    },
    {
      referencia:
        'Resolución 2674. (2013, 22 de julio). Diario Oficial, 48862, 2013, 25 de julio.',
    },
    {
      referencia:
        'Rubio, B., Casero, V., & Blanco, L. (2023). Importancia de la verificación de los procesos de limpieza y desinfección de superficies de zonas y equipos de producción en la industria cárnica. Eurocarne: La revista internacional del sector cárnico, (315), 58-66.',
      link:
        'https://imancorpfoundation.org/wp-content/uploads/2023/04/Eurocarne.pdf',
    },
    {
      referencia:
        'Subdirección ambiente y salud, Programas de riesgos físicos. (1997). Plan de manejo seguro de los residuos a nivel instituciones prestadoras de servicios de salud. Santa Fe de Bogotá. Ministerio de la Protección Social.',
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
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Beatriz Elena Marín Rodríguez E',
          cargo: 'Experta temática',
          centro: 'Centro de Industria Tolima - Regional Tolima',
        },
        {
          nombre: 'Paola Alexandra Moya',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Industria Tolima - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Carlos Julian Ramirez Benitez',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Edgar Mauricio Cortes Garcia',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Edgar Mauricio Cortes Garcia',
          cargo: 'Actividad didáctica',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Luis Gabriel Urueta Alvarez',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Margarita Marcela Medrano Gómez',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
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
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
