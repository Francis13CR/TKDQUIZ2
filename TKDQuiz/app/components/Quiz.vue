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
            <StackLayout v-for="(question, index) in questions" :key="index">
              <Label :text="question.text" class="question" />
              <Button v-for="(answer, aIndex) in question.answers" :key="aIndex" :text="answer.text" @tap="checkAnswer(index, aIndex)" />
            </StackLayout>
         </ScrollView>
         
        </GridLayout>
    </Page>
</template>

<script>
  import * as utils from "~/shared/utils";
  import { SelectedPageService } from "../shared/selected-page-service";
  import { TNSFancyAlert } from 'nativescript-fancyalert';
  export default {
    props: ['belt'],
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
      title() {
        return `Quiz de ${this.belt.name}`;
      }
    },
    methods: {
      onDrawerButtonTap() {
        utils.showDrawer();
      },
      checkAnswer(questionIndex, answerIndex) {
        const question = this.questions[questionIndex];
        const answer = question.answers[answerIndex];
        let text = '';
        if (answer.isCorrect) {
          text = '¡Correcto!';
        } else {
          text = '¡Incorrecto!';
        }
      
        TNSFancyAlert.showSuccess(
          'Success!',
          'This is a fancy alert.',
          'Done',
          30
        );
      },
    }
  };
</script>

<style scoped lang="scss">
    // Start custom common variables
    @import '@nativescript/theme/scss/variables/blue';
    // End custom common variables

    // Custom styles
</style>
