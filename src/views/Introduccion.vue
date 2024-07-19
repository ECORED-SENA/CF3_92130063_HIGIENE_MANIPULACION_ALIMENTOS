<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.fondo.fondo-intro
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .p-4(style="background-color: #e6f2e9 ").mb-5
      .row.justify-content-center.align-items-center
        .col-lg-9.mb-lg-0.mb-3(data-aos="fade-right")
          p.mb-0 El componente de buenas prácticas en la higiene de los alimentos es fundamental para garantizar la seguridad y calidad en la fabricación y procesamiento de alimentos. Basado en la Resolución 2674 de 2013 del Ministerio de Salud y Protección Social, este componente proporciona una guía exhaustiva para establecer condiciones óptimas de higiene en locales y fábricas dedicadas a la transformación de alimentos. La correcta implementación de estas prácticas es esencial para prevenir la contaminación y asegurar que los productos sean seguros para el consumo humano. 
        .col-lg-3.col-7(data-aos="fade-left"): img(src='@/assets/curso/temas/1.png', alt='')
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/2.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El componente detalla los requisitos necesarios para la ubicación, diseño y construcción de instalaciones, así como el mantenimiento adecuado de los edificios y áreas de procesamiento. Estas directrices incluyen la selección de materiales resistentes y fáciles de limpiar para pisos, techos, ventanas y puertas, además de la adecuada ventilación y eliminación de residuos. También se enfatiza la importancia de mantener los equipos y utensilios en perfectas condiciones higiénicas, utilizando materiales no corrosivos y de fácil desinfección.
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-2.col-6.mb-lg-0.mb-3(data-aos="fade-right"): img(src='@/assets/curso/temas/3.svg', alt='')
      .col-lg-10(data-aos="fade-left"): p.mb-0 Además de los aspectos físicos de las instalaciones, el componente aborda las prácticas de limpieza y desinfección, destacando la diferencia entre ambos procesos y su importancia para eliminar microorganismos potencialmente peligrosos. El control de plagas es otro aspecto crítico, ya que la presencia de roedores e insectos puede comprometer la seguridad alimentaria. La correcta gestión de residuos sólidos y líquidos, así como la implementación de un programa de control de plagas, son medidas esenciales para mantener un entorno seguro y limpio en la producción de alimentos. 

    
    
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
