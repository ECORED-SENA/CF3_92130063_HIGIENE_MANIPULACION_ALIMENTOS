<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.fondo.fondo-2
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Limpieza y desinfección  
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8.mb-lg-0.mb-3(data-aos="fade-right")
        .p-4(style="background-color: #fef5eb ")
          p.mb-3 La limpieza y desinfección en el área de producción es una operación muy importante para la elaboración de alimentos; las áreas, equipos y utensilios sin higienizar pueden convertirse en fuentes de contaminación. Aunque la limpieza y desinfección dependen de los manipuladores de alimentos, existen diferentes técnicas y pasos en el proceso de lavado que deben tenerse en cuenta. 
          img(src='@/assets/curso/temas/dots.svg', alt='' style="width: 119px ").d-lg-block.d-none
      .col-lg-4.col-6(data-aos="fade-left"): img(src='@/assets/curso/temas/28.png', alt='')
    .row.justify-content-center.mb-5
      .col-lg-4.mb-lg-0.mb-3
        .tarjeta.p-4(style="background-color: #c1ddc7").h-100
          .row.justify-content-center.mb-5
            .col-lg-3.col-2.mb-lg-0.mb-3: img(src='@/assets/curso/temas/29.svg', alt='')
            .col-lg-9
              h5 Sabías qué 
              p.mb-0 No solo debe considerarse la limpieza de los manipuladores, sino también la limpieza de todo lo que rodea al alimento, desde los utensilios hasta las instalaciones.
      .col-lg-4.mb-lg-0.mb-3
        .tarjeta.p-4(style="background-color: #c1ddc7").h-100
          .row.justify-content-center.mb-5
            .col-lg-3.col-2.mb-lg-0.mb-3: img(src='@/assets/curso/temas/30.svg', alt='')
            .col-lg-9
              h5 Es necesario limpiar
              p.mb-0 Ya que puede ser peligroso por la aparición de microorganismos. También es importante evitar la aparición de plagas, pues las zonas con mala limpieza las favorecen.
      .col-lg-4.mb-lg-0.mb-3
        .tarjeta.p-4(style="background-color: #c1ddc7").h-100
          .row.justify-content-center.mb-5
            .col-lg-3.col-2.mb-lg-0.mb-3: img(src='@/assets/curso/temas/31.svg', alt='')
            .col-lg-9
              h5 Es importante
              p.mb-0  Diferenciar los términos limpieza y desinfección, ya que no significan lo mismo. Son acciones que deben realizarse conjuntamente para obtener una correcta higienización en todo lo que rodea al alimento.
    p.mb-5(data-aos='fade-right').fw-bold Para asegurar un entorno higiénico en la producción de alimentos, es crucial llevar a cabo tanto la limpieza como la desinfección. 
    TabsB.color-acento-contenido(style="margin-bottom: 7rem")
      .py-4.py-md-5(titulo="Limpieza" :icono="require('@/assets/curso/temas/32.svg')" style="background-color: #fbf8ee ")
        .row.justify-content-center
          .col-lg-7.mb-4.mb-lg-0
            h5 Limpieza
            p Es eliminar todos los residuos visibles que pueden servir de alimento para los microorganismos. Si solo se limpia, no se eliminan los microorganismos que podrían crecer en esas superficies. De forma general, se trataría de quitar todo aquello que, mediante agua caliente y detergentes (acordes con la zona que se vaya a limpiar, debido a que cada industria necesita un tipo de limpiador específico), no debería estar allí. Para ello se utilizarán utensilios como estropajos y cepillos, que ayudan a quitar la suciedad.
          .col-lg-3.col-7: img(src='@/assets/curso/temas/34.png', alt='')
      .py-4.py-md-5(titulo="Desinfección" :icono="require('@/assets/curso/temas/32.svg')" style="background-color: #fbf8ee ")
        .row.justify-content-center
          .col-lg-7.mb-4.mb-lg-0
            h5 Desinfección
            p Debe realizarse después de limpiar. De esta manera se logra eliminar o disminuir en gran medida los microorganismos presentes, hasta verificar que no haya riesgo de contaminación para los alimentos. Los productos utilizados para una adecuada desinfección son productos químicos como hipoclorito y vapor de agua, entre otros.
          .col-lg-3.col-7: img(src='@/assets/curso/temas/35.png', alt='')
    p.mb-5(data-aos='fade-right').fw-bold Los pasos a seguir para una buena limpieza y desinfección son:
    .row.justify-content-center.align-items-center(style="margin-bottom: 6rem")
      .col-lg-5.col-7.mb-lg-0.mb-3(data-aos="fade-right"): img(src='@/assets/curso/temas/36.svg', alt='')
      .col-lg-5
        .tarjeta-avatar-b.mb-3
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/37.svg' alt='AvatarTop')
          .tarjeta(style="background-color:#d2d5d2 ")
            .p-4
              h4.mb-0 Eliminación manual con cepillos, espátulas y aspirado.
        .tarjeta-avatar-b.mb-3
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/38.svg' alt='AvatarTop')
          .tarjeta(style="background-color:#d2d5d2 ")
            .p-4
              h4.mb-0 Lavado manual o con máquina.
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/39.svg' alt='AvatarTop')
          .tarjeta(style="background-color:#d2d5d2 ")
            .p-4
              h4.mb-0 Manual con atomizador, fumigación, vaporización.
    .titulo-tres: h3 Requerimientos básicos para aplicar un sistema de limpieza
    p.mb-5(data-aos='fade-right') Implementar un sistema de limpieza requiere identificar las áreas y equipos a limpiar, seleccionar los métodos y productos adecuados, y seguir una rutina regular para mantener altos estándares de higiene. 
    .fondo-section.p-5.mn.mb-5
      .row.justify-content-center
        .col-lg-2.mb-lg-0.mb-3
          .p-4(style="background-color: #fddbb4").h-100
            img(src='@/assets/curso/temas/40.svg', alt='' style="width: 74px ").mb-4
            p.mb-0 Determinar el área o equipos que se quieren limpiar.
        .col-lg-2.mb-lg-0.mb-3
          .p-4(style="background-color: #fddbb4").h-100
            img(src='@/assets/curso/temas/41.svg', alt='' style="width: 74px ").mb-4
            p.mb-0 Seleccionar los equipos de limpieza.
        .col-lg-2.mb-lg-0.mb-3
          .p-4(style="background-color: #fddbb4").h-100
            img(src='@/assets/curso/temas/42.svg', alt='' style="width: 74px ").mb-4
            p.mb-0 Establecer la calidad del agua a utilizar.
        .col-lg-2.mb-lg-0.mb-3
          .p-4(style="background-color: #fddbb4").h-100
            img(src='@/assets/curso/temas/43.svg', alt='' style="width: 74px ").mb-4
            p.mb-0 Diferenciar las clases de suciedad y seleccionar el detergente a utilizar.
        .col-lg-2.mb-lg-0.mb-3
          .p-4(style="background-color: #fddbb4").h-100
            img(src='@/assets/curso/temas/44.svg', alt='' style="width: 74px ").mb-4
            p.mb-0 Seleccionar los métodos de limpieza.
    .titulo-tres: h3 Métodos de limpieza 
    p.mb-5(data-aos='fade-right') La limpieza se puede realizar usando métodos físicos combinados o separados; por ejemplo, si se quiere retirar la grasa acumulada se debe utilizar el cepillo o diferentes tipos de palas. El lavado puede efectuarse con medios químicos como detergentes o ácidos en combinación con agua. Se debe seleccionar la temperatura adecuada según el detergente y la superficie de trabajo. 
    Separador
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.1 Agentes limpiadores 
    .row.justify-content-center.mb-5
      .col-lg-8.mb-lg-0.mb-3
        p Estos compuestos son agentes químicos diseñados para retirar las impurezas y los depósitos de minerales. Las propiedades de estos agentes químicos son: 
        .row.justify-content-center.mb-5
          .col-lg-3.mb-lg-0.mb-3
            .tarjeta.p-4(style="background-color:#d2d5d2 ").h-100
              p.mb-0 No son corrosivos.
          .col-lg-3.mb-lg-0.mb-3
            .tarjeta.p-4(style="background-color:#d2d5d2 ").h-100
              p.mb-0 Ablandan completamente la suciedad.
          .col-lg-3.mb-lg-0.mb-3
            .tarjeta.p-4(style="background-color:#d2d5d2 ").h-100
              p.mb-0 Solubilidad rápida y completa.
          .col-lg-3.mb-lg-0.mb-3
            .tarjeta.p-4(style="background-color:#d2d5d2 ").h-100
              p.mb-0 Acción germicida.
        .tarjeta.rounded-pill.p-2.d-inline-block.mb-4(style="background-color: #f1e7c2")
          h4.mb-0.mx-4 Detergentes 
        p.mb-5(data-aos='fade-right') Todos los detergentes contienen sustancias que disuelven la tensión entre la superficie sucia y el detergente, por lo que se llaman tensioactivos. Estas sustancias ablandan las impurezas, facilitando su eliminación. Se clasifican en:  
      .col-lg-4.col-7(data-aos="fade-left"): img(src='@/assets/curso/temas/45.png', alt='')
    .row.justify-content-center.mb-5
      .col-lg-4.mb-lg-0.mb-3
        .tarjeta.fondo.card-naranja.p-5
          img(src='@/assets/curso/temas/46.svg', alt='' style="width:89px").m-auto.mb-4
          .d-flex.justify-content-center
            .d-inline-block.p-2.bg-white
              h4.mb-0 Limpiadores alcalinos 
              p.text-center Son los llamados desengrasantes, sirven para limpiar la superficie de hornos, parrillas, entre otros. 
      .col-lg-4.mb-lg-0.mb-3
        .tarjeta.fondo.card-naranja.p-5
          img(src='@/assets/curso/temas/47.svg', alt='' style="width:89px").m-auto.mb-4
          .d-flex.justify-content-center
            .d-inline-block.p-2.bg-white
              h4.mb-0 Limpiadores ácidos 
              p.text-center Se utilizan cuando los limpiadores alcalinos no funcionan, sirven para eliminar residuos minerales, manchas de óxido y placas de lavalozas en las máquinas. 
      .col-lg-4.mb-lg-0.mb-3
        .tarjeta.fondo.card-naranja.p-5
          img(src='@/assets/curso/temas/48.svg', alt='' style="width:89px").m-auto.mb-4
          .d-flex.justify-content-center
            .d-inline-block.p-2.bg-white
              h4.mb-0 Limpiadores polifosfatos 
              p.text-center Estos contienen desengrasantes que pueden ser frotados o tallados sobre las manchas difíciles de eliminar y son utilizados en pisos y sartenes que tienen la grasa pegada. 
    Separador
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.2 Manejo de residuos sólidos y líquidos
    p.mb-5(data-aos='fade-right') Los residuos son desechos que se producen después de la fabricación de un alimento, estos pueden ser líquidos o sólidos, en los lugares de manipulación de alimentos son los restos de comida generados en una cocina o en una planta de proceso. 
    .tarjeta.p-4.mb-5(style="background-color:#c1ddc7 ")
      .row.justify-content-center.align-items-center
        .col-lg-2.mb-lg-0.mb-3
          img(src='@/assets/curso/temas/49.svg', alt='' style="width: 70px ").m-auto 
        .col-lg-10
          h5 Es importante hacer un buen manejo de estos residuos porque son un foco importante de contaminación, atrayendo plagas y roedores, también pueden generar microorganismos patógenos.
    .p-lg-0.p-4(style="background-color:#e6f2e9 ") 
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-5.col-7.mb-lg-0.mb-3
          img.d-lg-block.d-none(src='@/assets/curso/temas/50.png', alt='')
          img.d-lg-none.d-block(src='@/assets/curso/temas/51.png', alt='')
        .col-lg-7
          p.mb-0.p-5 Es fundamental comprender las distintas categorías y procesos relacionados con la gestión de residuos para asegurar un manejo adecuado y seguro. Aquí se detallan las definiciones esenciales como basura, desechos, desperdicios, disposición final, disposición sanitaria de basuras, infestación, programas, residuos sólidos y tratamiento. 
    .fondo-slyder.fondo.mn.p-5.mb-5
      .tarjeta.bg-white.p-5
        SlyderA(tipo='b')
          .row.justify-content-center
            .col-lg-6.mb-4.mb-md-0
              h4 Basura
              p Son todos aquellos residuos sólidos o semisólidos, putrescibles o no putrescibles, con excepción de excretas de origen humano o animal. Incluye desperdicios, desechos, cenizas, elementos de barrido de calles, residuos industriales, de establecimientos hospitalarios y residuos de mercado, entre otros.
            .col-lg-4
              figure
                img(src='@/assets/curso/temas/52.png', alt='Texto que describa la imagen')
          .row.justify-content-center
            .col-lg-6.mb-4.mb-md-0
              h4 Programa
              p Conjunto de actividades que incluyen objetivos, metodologías y procedimientos, resultados, evaluación y metas.
            .col-lg-4
              figure
                img(src='@/assets/curso/temas/53.png', alt='Texto que describa la imagen')
          .row.justify-content-center
            .col-lg-6.mb-4.mb-md-0
              h4 Infestación
              p Es la presencia y multiplicación de plagas que pueden contaminar o deteriorar los alimentos y/o materias primas.
            .col-lg-4
              figure
                img(src='@/assets/curso/temas/54.png', alt='Texto que describa la imagen')
          .row.justify-content-center
            .col-lg-6.mb-4.mb-md-0
              h4 Disposición sanitaria de basuras
              p Proceso mediante el cual las basuras son colocadas en forma definitiva, sea en el agua o en el suelo.
            .col-lg-4
              figure
                img(src='@/assets/curso/temas/55.png', alt='Texto que describa la imagen')
          .row.justify-content-center
            .col-lg-6.mb-4.mb-md-0
              h4 Desecho
              p Cualquier producto deficiente, inservible o inutilizado que el manipulador de alimentos destina al abandono o se va a desechar
            .col-lg-4
              figure
                img(src='@/assets/curso/temas/56.png', alt='Texto que describa la imagen')
          .row.justify-content-center
            .col-lg-6.mb-4.mb-md-0
              h4 Desperdicio
              p Residuo de origen animal o vegetal procedente de la preparación de alimentos que, por su naturaleza y composición, está sujeto a una rápida descomposición, generando malos olores y favoreciendo la proliferación microbiana y de fauna nociva.
            .col-lg-4
              figure
                img(src='@/assets/curso/temas/57.png', alt='Texto que describa la imagen')
          .row.justify-content-center
            .col-lg-6.mb-4.mb-md-0
              h4 Disposición final
              p Es el emplazamiento final o definitivo de todo tipo de residuos, previamente sometidos a sistemas de tratamientos que eliminan sus fracciones peligrosas, con el fin de que no representen riesgo para la salud de las personas o deterioro del medio ambiente.
            .col-lg-4
              figure
                img(src='@/assets/curso/temas/58.png', alt='Texto que describa la imagen')
    .titulo-tres: h3 Clasificación de los residuos
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-9.mb-lg-0.mb-3(data-aos="fade-right")
        p.mb-0 Para gestionar adecuadamente los residuos, es esencial distinguir entre los residuos peligrosos y no peligrosos. Esta clasificación ayuda a implementar las medidas adecuadas de manejo y eliminación para proteger la salud humana y el medio ambiente. Aquí se detallan las características y ejemplos de cada categoría. 
      .col-lg-3.col-7: img(src='@/assets/curso/temas/59.svg', alt='')
    .tarjeta.rounded-pill.p-2.d-inline-block.mb-4(style="background-color: #f1e7c2")
          h4.mb-0.mx-4 Residuos no peligrosos 
    p.mb-5(data-aos='fade-right') Son aquellos residuos que son producidos por el generador en cualquier lugar y en desarrollo de su actividad, que no presentan riesgo para la salud humana y el medio ambiente. Se clasifican en: 
    .fondo-slyder.fondo.mn.p-5.mb-5
      .tarjeta.bg-white.p-5
        SlyderA(tipo='b')
          .row.justify-content-center
            .col-lg-6.mb-4.mb-md-0
              h4 Biodegradables
              p Son aquellos restos químicos o naturales que se descomponen fácilmente en el ambiente. En estos restos se encuentran: los vegetales, residuos alimenticios no infectados, papel higiénico, papeles no aptos para reciclaje, jabones y detergentes biodegradables, madera; así como también otros residuos que puedan ser procesados y se conviertan en materia orgánica.
            .col-lg-4
              figure
                img(src='@/assets/curso/temas/60.png', alt='Texto que describa la imagen')
          .row.justify-content-center
            .col-lg-6.mb-4.mb-md-0
              h4 Reciclables
              p Son aquellos residuos que no se descomponen fácilmente y pueden volver a ser utilizados en procesos productivos como materia prima. Entre estos se encuentran: algunos papeles y plásticos, chatarra, vidrio, telas, radiografías, partes y equipos obsoletos o en desuso, entre otros.
            .col-lg-4
              figure
                img(src='@/assets/curso/temas/61.png', alt='Texto que describa la imagen')
          .row.justify-content-center
            .col-lg-6.mb-4.mb-md-0
              h4 Inertes
              p Son aquellos que no permiten su descomposición, ni su transformación en materia prima y su degradación natural requiere grandes períodos de tiempo. Entre estos se encuentran: el icopor, cierto tipo de papel como el papel carbón y algunos plásticos.
            .col-lg-4
              figure
                img(src='@/assets/curso/temas/62.png', alt='Texto que describa la imagen')
          .row.justify-content-center
            .col-lg-6.mb-4.mb-md-0
              h4 Ordinarios o comunes
              p Son aquellos generados en el desempeño normal de las actividades. Estos residuos se generan en: oficinas, pasillos, áreas comunes, cafeterías, salas de espera, auditorios y en general en todos los sitios del establecimiento del generador.
            .col-lg-4
              figure
                img(src='@/assets/curso/temas/63.png', alt='Texto que describa la imagen')
    .tarjeta.rounded-pill.p-2.d-inline-block.mb-4(style="background-color: #f1e7c2")
      h4.mb-0.mx-4 Residuos peligrosos 
    .row.justify-content-center.mb-5
      .col-lg-10.mb-lg-0.mb-3(data-aos="fade-right")
        p.mb-3 Son aquellos residuos producidos por el generador con alguna de las siguientes características: infecciosos o de riesgo biológico, combustibles, inflamables, explosivos, reactivos, radiactivos, volátiles, corrosivos y/o tóxicos; los cuales pueden causar daño a la salud humana y/o al medio ambiente. Así mismo se consideran peligrosos los envases, empaques y residuos que hayan estado en contacto con ellos.  
          img(src='@/assets/curso/temas/dots.svg', alt='' style="width: 119px ").d-lg-block.d-none
      .col-lg-2.col-7: img(src='@/assets/curso/temas/64.svg', alt='')
    .titulo-tres: h3 Código de colores 
    p.mb-5(data-aos='fade-right') En cada sección generadora de residuos peligrosos y no peligrosos se ubican recipientes desechables y reutilizables perfectamente identificados, de acuerdo con el código de colores. Todos los recipientes para almacenamiento temporal deben estar rotulados con el nombre de la sección a la que pertenecen y la clase de residuo que contienen. 
    img(src='@/assets/curso/temas/65.svg', alt='').mb-5

    .titulo-sexto.color-acento-contenido(data-aos='fade-right')
      h5 Tabla 1. 
      span Código de colores
    .tabla-a.color-acento-contenido.mb-5
      table
        thead
          tr(style="background-color:#e7e8e7 ")
            th Clase de residuo 
            th Contenido básico 
            th Color 
            th Etiqueta 
        tbody
          tr
            td No peligrosos biodegradables 
            td Hojas y tallos de los árboles, grama, barrido del prado, resto de alimentos contaminados 
            td Verde 
            td Rotular con: residuos aprovechables 
          tr
            td No peligrosos residuos no aprovechables 
            td Papel higiénico, servilletas, papeles y cartones contaminados con comida, papeles metalizados 
            td Negro
            td Rotular con: residuos no aprovechable
          tr
            td No peligrosos residuos aprovechables 
            td Plástico, cartón, vidrio, papel y metales 
            td Blanco 
            td Rotular con: residuos aprovechables 
    Separador
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.3 Control de plagas
    p.mb-5(data-aos='fade-right') El control de plagas se refiere a la gestión de especies animales que se reproducen de manera descontrolada y pueden actuar como vectores de enfermedades graves para los seres humanos. Entre estas especies se incluyen principalmente roedores e insectos
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/66.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Las plagas y roedores tienen las mismas características que los seres humanos, es decir que para cumplir sus necesidades básicas requieren de agua, alimentos y un lugar en cual habitar; por lo tanto, es necesario eliminar todos los factores que beneficien su reproducción y supervivencia.
    p.mb-4(data-aos='fade-right') También es importante que en los establecimientos y sus alrededores no se dejen residuos de alimentos ni aguas a disposición de las plagas. 
    p.mb-5(data-aos='fade-right') #[b Recomendaciones a seguir para evitar que entren y se contaminen los alimentos: ]
      br
      br
      | Es fundamental seguir ciertas recomendaciones para prevenir la entrada y contaminación de alimentos, garantizando así su seguridad y calidad. A continuación, se detallan las medidas a tomar: 
    .fondo-section.mn.p-5.mb-5
      SlyderF.mb-5(columnas="col-lg-4 col-xl-4")
        .tarjeta.p-4(style='background-color: #c1ddc7')
          .row.justify-content-center.mb-3
            .col-5
              img(src='@/assets/curso/temas/67.svg' alt='AvatarTop')
          p Mantener la limpieza y desinfección en todas las áreas, desde la recepción de materias primas hasta el almacenamiento. 
        .tarjeta.p-4(style='background-color: #c1ddc7')
          .row.justify-content-center.mb-3
            .col-5
              img(src='@/assets/curso/temas/68.svg' alt='AvatarTop')
          p Las cañerías y desagües se deben mantener cerrados y con sus respectivas rejillas. 
        .tarjeta.p-4(style='background-color: #c1ddc7')
          .row.justify-content-center.mb-3
            .col-5
              img(src='@/assets/curso/temas/69.svg' alt='AvatarTop')
          p Mantener la limpieza y desinfección en todas las áreas, desde la recepción de materias primas hasta el almacenamiento. 
        .tarjeta.p-4(style='background-color: #c1ddc7')
          .row.justify-content-center.mb-3
            .col-5
              img(src='@/assets/curso/temas/70.svg' alt='AvatarTop')
          p Fumigar periódicamente de forma responsable y con la asesoría de expertos en el tema de erradicación de plagas, además de saber contar con un plan de control de plagas y llevar los registros de los productos que se están utilizando para el exterminio de las mismas. 
        .tarjeta.p-4(style='background-color: #c1ddc7')
          .row.justify-content-center.mb-3
            .col-5
              img(src='@/assets/curso/temas/71.svg' alt='AvatarTop')
          p Mantener los alimentos cubiertos. 
        .tarjeta.p-4(style='background-color: #c1ddc7')
          .row.justify-content-center.mb-3
            .col-5
              img(src='@/assets/curso/temas/72.svg' alt='AvatarTop')
          p Las materias primas para elaboración de alimentos se deben mantener en anaqueles limpios con una distancia del piso de 15 cm, debido a que de esta manera se facilita la limpieza y desinfección. 
        .tarjeta.p-4(style='background-color: #c1ddc7')
          .row.justify-content-center.mb-3
            .col-5
              img(src='@/assets/curso/temas/73.svg' alt='AvatarTop')
          p Cuando lleguen pedidos de materias primas, inspeccionar muy bien la calidad del producto y verificar que no haya plagas ni roedores en esta. 
        .tarjeta.p-4(style='background-color: #c1ddc7')
          .row.justify-content-center.mb-3
            .col-5
              img(src='@/assets/curso/temas/74.svg' alt='AvatarTop')
          p Las ventanas deben estar protegidas con mosquiteros para impedir la entrada de insectos. 
    .titulo-tres: h3 Animales domésticos
    .row.justify-content-center.mb-5
      .col-lg-8.mb-lg-0.mb-3(data-aos="fade-right")
        p.mb-0 Los animales domésticos son una fuente de contaminación de alimentos, debido a que son portadores de numerosos agentes patógenos como: virus, bacterias, hongos y parásitos; que portan las enfermedades denominadas zoonosis, que son las que se transmiten al hombre; un ejemplo de ello es la toxoplasmosis. Por esta razón, no se deben tener animales domésticos en las áreas donde se procesen alimentos. 
      .col-lg-4.col-7(data-aos="fade-left"): img(src='@/assets/curso/temas/75.png', alt='')
    .titulo-tres: h3 Restaurantes y establecimientos gastronómicos 
    p.mb-5(data-aos='fade-right') #[b Los restaurantes y establecimientos gastronómicos deben cumplir con los siguientes aspectos sanitarios: ]
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-3.col-7.mb-lg-0.mb-3: img(src='@/assets/curso/temas/76.png', alt='')
      .col-lg-9(data-aos="fade-left")
        SlyderF.mb-5(columnas="col-lg-6 col-xl-6")
          .tarjeta.p-4(style='background-color: #f9a545')
            .row.justify-content-center.mb-3
              .col-5
                img(src='@/assets/curso/temas/77.svg' alt='AvatarTop')
            p El funcionamiento de restaurantes y establecimientos gastronómicos no debe poner en riesgo a la comunidad.
          .tarjeta.p-4(style='background-color: #f9a545')
            .row.justify-content-center.mb-3
              .col-5
                img(src='@/assets/curso/temas/78.svg' alt='AvatarTop')
            p Los establecimientos no deben ser usados como vivienda o dormitorio.
          .tarjeta.p-4(style='background-color: #f9a545')
            .row.justify-content-center.mb-3
              .col-5
                img(src='@/assets/curso/temas/79.svg' alt='AvatarTop')
            p Deben estar ubicados en terrenos seguros a inundaciones y tener un buen drenaje.
          .tarjeta.p-4(style='background-color: #f9a545')
            .row.justify-content-center.mb-3
              .col-5
                img(src='@/assets/curso/temas/80.svg' alt='AvatarTop')
            p Deben mantenerse en sitios que estén lejos de cualquier tipo de contaminación como: basuras, plagas, entre otros.
          .tarjeta.p-4(style='background-color: #f9a545')
            .row.justify-content-center.mb-3
              .col-5
                img(src='@/assets/curso/temas/81.svg' alt='AvatarTop')
            p El manejo de residuos líquidos debe ser adecuado, evitando que el alimento y las superficies se contaminen.
          .tarjeta.p-4(style='background-color: #f9a545')
            .row.justify-content-center.mb-3
              .col-5
                img(src='@/assets/curso/temas/82.svg' alt='AvatarTop')
            p Los alrededores de los establecimientos deben estar libres de basuras y de acumulación de aguas estancadas.
          .tarjeta.p-4(style='background-color: #f9a545')
            .row.justify-content-center.mb-3
              .col-5
                img(src='@/assets/curso/temas/83.svg' alt='AvatarTop')
            p Las instalaciones deben estar diseñadas para impedir la presencia de insectos y roedores
          .tarjeta.p-4(style='background-color: #f9a545')
            .row.justify-content-center.mb-3
              .col-5
                img(src='@/assets/curso/temas/84.svg' alt='AvatarTop')
            p El establecimiento debe disponer de suficiente agua potable.
          .tarjeta.p-4(style='background-color: #f9a545')
            .row.justify-content-center.mb-3
              .col-5
                img(src='@/assets/curso/temas/85.svg' alt='AvatarTop')
            p La entidad debe contar con servicio sanitario para empleados y para uso de público; en caso de que el espacio no permita tener dos baños, se puede utilizar el de los empleados.












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
