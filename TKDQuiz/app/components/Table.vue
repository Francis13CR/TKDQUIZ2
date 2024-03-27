<template>
    <Page class="page">
      <ActionBar class="action-bar">
        <NavigationButton visibility="hidden"/>
        <GridLayout columns="50, *">
          <Label class="action-bar-title" text="QUIZ" colSpan="2"/>

          <Label class="fas" text.decode="&#xf0c9;" @tap="onDrawerButtonTap"/>
        </GridLayout>
      </ActionBar>

        <GridLayout class="page__content">
          <ScrollView>
            <label :text="title" class="text-center" />
            
         </ScrollView>
         
        </GridLayout>
    </Page>
</template>

<script>
  import * as utils from "~/shared/utils";
  import { SelectedPageService } from "../shared/selected-page-service";
  import { firebase } from '@nativescript/firebase-core'

  const database = firebase().database()
 
  export default {
   
    data() {
      return {
        questions: [
        {
          text: '¿Cuál es la capital de Francia?',
          answers: [
            { text: 'Paris', isCorrect: true },
            { text: 'Londres', isCorrect: false },
            { text: 'Madrid', isCorrect: false },
            { text: 'Berlín', isCorrect: false },
          ],
        },
        // Agrega más preguntas aquí
      ],
      }
    },
    mounted() {
      SelectedPageService.getInstance().updateSelectedPage("Quiz");
    },
    computed: {
      message() {
        return `
        <h2>¡Gracias por tu interés!</h2>
        <p>Lamentablemente, esta característica aún no está disponible en la versión actual de la aplicación. Sin embargo, estamos al tanto de tu interés y tu deseo de utilizarla.</p>
        <p>Ten en cuenta que estamos trabajando en mejoras continuas, basándonos en la retroalimentación y el interés de nuestros usuarios. ¡Gracias por tu interés y sigue atento a las próximas actualizaciones para más novedades!</p>
        ` 
      },
      async title() {
        //OBTENER LOS DATOS DE LA BASE DE DATOS
        const ref = database.ref('taekwondistas')
        const taekwondistas = await ref.orderByChild('medalla_bronce').once('value');
        console.log(taekwondistas.val(), 'taekwondistas')
  
        return `Quiz de `;
      }
    },
    methods: {
      onDrawerButtonTap() {
        utils.showDrawer();
      }
    }
  };
</script>

<style scoped lang="scss">
    // Start custom common variables
    @import '@nativescript/theme/scss/variables/blue';
    // End custom common variables

    // Custom styles
</style>
