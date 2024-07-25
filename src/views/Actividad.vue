<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    #Actividad                
      <Actividad :cuestionario="cuestionario" />

</template>

<script>
import Actividad from '@/components/actividad/Actividad'
export default {
  name: 'ActividadDidactica',
  components: { Actividad },
  data: () => ({
    cuestionario: {
      tema: 'Buenas prácticas en la higiene de los alimentos.',
      titulo: 'Cuestionario',
      introduccion:
        'Lea cada enunciado y luego seleccione la respuesta correcta según corresponda.',
      barajarPreguntas: false,
      preguntas: [
        {
          id: 1,
          texto:
            'Una fábrica de alimentos ha sido ubicada cerca de un basurero, y los alrededores no están siendo limpiados adecuadamente. ¿Cuál es el principal riesgo que esta ubicación representa para la seguridad alimentaria?',
          imagen: require('@/assets/componentes/preguntas/Grupo 1099887.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Aumento en el costo de producción',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Mejor calidad de los alimentos',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Contaminación de los alimentos',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Reducción del tiempo de producción',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Felicitaciones, has acertado.',
          mensaje_incorrecto:
            'La respuesta es incorrecta. Te sugerimos revisar nuevamente el componente formativo.',
        },
        {
          id: 2,
          texto:
            'Un restaurante tiene pisos de madera en su área de preparación de alimentos, lo que ha causado dificultades para mantener una adecuada limpieza. ¿Qué tipo de piso sería más adecuado para cumplir con las buenas prácticas de higiene?',
          imagen: require('@/assets/componentes/preguntas/Grupo 1100026.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Alfombrados y suaves',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Impermeables y lisos',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Resbaladizos y absorbentes',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'De tierra compactada',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Felicitaciones, has acertado.',
          mensaje_incorrecto:
            'La respuesta es incorrecta. Te sugerimos revisar nuevamente el componente formativo.',
        },
        {
          id: 3,
          texto:
            'Un establecimiento ha observado un aumento en la presencia de roedores. ¿Cuál es la medida más efectiva que debe tomar para controlar esta plaga y proteger la seguridad alimentaria?',
          imagen: require('@/assets/componentes/preguntas/Grupo 1100055.png'),
          opciones: [
            {
              id: 'a',
              texto: 'Dejar residuos sólidos acumulados',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Mantener cañerías y desagües abiertos',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Fumigar periódicamente y mantener áreas limpias',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Permitir la entrada de animales domésticos',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Felicitaciones, has acertado.',
          mensaje_incorrecto:
            'La respuesta es incorrecta. Te sugerimos revisar nuevamente el componente formativo.',
        },
        {
          id: 4,
          texto:
            'Una planta procesadora de alimentos tiene equipos fabricados con materiales que se oxidan fácilmente, dificultando la limpieza y desinfección. ¿Qué tipo de material sería más apropiado para estos equipos?',
          imagen: require('@/assets/componentes/preguntas/Grupo 1099887.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Acero inoxidable', esCorrecta: true },
            { id: 'b', texto: 'Madera', esCorrecta: false },
            { id: 'c', texto: 'Material poroso', esCorrecta: false },
            { id: 'd', texto: 'Vidrio común', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Felicitaciones, has acertado.',
          mensaje_incorrecto:
            'La respuesta es incorrecta. Te sugerimos revisar nuevamente el componente formativo.',
        },
        {
          id: 5,
          texto:
            'Durante una inspección, se encontró que un área de procesamiento de alimentos tenía puertas de material absorbente y difícil de limpiar. ¿Qué características deben tener las puertas para cumplir con las normas de higiene?',
          imagen: require('@/assets/componentes/preguntas/Grupo 1100026.png'),
          opciones: [
            { id: 'a', texto: 'Superficie porosa', esCorrecta: false },
            { id: 'b', texto: 'Material absorbente', esCorrecta: false },
            {
              id: 'c',
              texto: 'Superficie lisa y no absorbente',
              esCorrecta: true,
            },
            { id: 'd', texto: 'Cubiertas de tela', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Felicitaciones, has acertado.',
          mensaje_incorrecto:
            'La respuesta es incorrecta. Te sugerimos revisar nuevamente el componente formativo.',
        },
        {
          id: 6,
          texto:
            'Un manipulador de alimentos limpia las superficies visibles pero no realiza una desinfección adecuada. ¿Qué riesgo representa esta práctica?',
          imagen: require('@/assets/componentes/preguntas/Grupo 1100055.png'),
          opciones: [
            {
              id: 'a',
              texto: 'Aumento en la eficiencia del trabajo',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Mejora en la apariencia de las instalaciones',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Persistencia de microorganismos y riesgo de contaminación',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Reducción de costos de limpieza',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Felicitaciones, has acertado.',
          mensaje_incorrecto:
            'La respuesta es incorrecta. Te sugerimos revisar nuevamente el componente formativo.',
        },
        {
          id: 7,
          texto:
            'En una cocina, se han estado utilizando detergentes no adecuados para la industria alimentaria, lo que ha resultado en residuos químicos en las superficies de preparación. ¿Cuál es la propiedad esencial que deben tener los agentes limpiadores utilizados?',
          imagen: require('@/assets/componentes/preguntas/Grupo 1099887.png'),
          opciones: [
            {
              id: 'a',
              texto:
                'No ser corrosivos y ser adecuados para el contacto con alimentos',
              esCorrecta: true,
            },
            { id: 'b', texto: 'Ser de bajo costo', esCorrecta: false },
            { id: 'c', texto: 'Tener un color fuerte', esCorrecta: false },
            { id: 'd', texto: 'Ser difíciles de enjuagar', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Felicitaciones, has acertado.',
          mensaje_incorrecto:
            'La respuesta es incorrecta. Te sugerimos revisar nuevamente el componente formativo.',
        },
        {
          id: 8,
          texto:
            'Un restaurante desecha sus residuos sin clasificarlos, lo que ha generado problemas de contaminación cruzada. ¿Cuál es la clasificación correcta de los residuos para evitar este problema?',
          imagen: require('@/assets/componentes/preguntas/Grupo 1100026.png'),
          opciones: [
            {
              id: 'a',
              texto: 'Residuos peligrosos y no peligrosos sin diferenciación',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Residuos no peligrosos (biodegradables, reciclables) y peligrosos (químicos, biológicos)',
              esCorrecta: true,
            },
            { id: 'c', texto: 'Mezclar todos los residuos', esCorrecta: false },
            {
              id: 'd',
              texto: 'Solo separar residuos orgánicos',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Felicitaciones, has acertado.',
          mensaje_incorrecto:
            'La respuesta es incorrecta. Te sugerimos revisar nuevamente el componente formativo.',
        },
        {
          id: 9,
          texto:
            'Una empresa no realiza inspecciones de calidad al recibir materias primas, lo que ha llevado a la presencia de plagas en su stock. ¿Qué acción debe tomar para evitar esta situación?',
          imagen: require('@/assets/componentes/preguntas/Grupo 1100055.png'),
          opciones: [
            {
              id: 'a',
              texto: 'Almacenar las materias primas sin revisión',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Inspeccionar y verificar la calidad del producto al recibirlo',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Utilizar productos sin verificar su procedencia',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Almacenar productos sin medidas de control',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Felicitaciones, has acertado.',
          mensaje_incorrecto:
            'La respuesta es incorrecta. Te sugerimos revisar nuevamente el componente formativo.',
        },
        {
          id: 10,
          texto:
            'En un establecimiento, las ventanas no tienen mosquiteros y se ha detectado la entrada de insectos. ¿Qué medida debe implementarse para cumplir con las buenas prácticas de higiene?',
          imagen: require('@/assets/componentes/preguntas/Grupo 1099887.png'),
          opciones: [
            {
              id: 'a',
              texto: 'Mantener las ventanas abiertas todo el tiempo',
              esCorrecta: false,
            },
            { id: 'b', texto: 'Usar cortinas de tela', esCorrecta: false },
            {
              id: 'c',
              texto: 'Instalar mosquiteros en las ventanas',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Dejar las ventanas sin protección',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Felicitaciones, has acertado.',
          mensaje_incorrecto:
            'La respuesta es incorrecta. Te sugerimos revisar nuevamente el componente formativo.',
        },
      ],
      mensaje_final_aprobado:
        '¡Excelente! Te felicito, has superado la actividad.',
      mensaje_final_reprobado:
        'Te recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica',
    },
  }),
  computed: {},
  methods: {},
}
</script>
