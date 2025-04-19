<template>
  <Page>
    <ActionBar class="action-bar">
      <NavigationButton visibility="hidden"/>
      <GridLayout columns="50, *">
        <Label class="action-bar-title" text="Quiz" colSpan="2"/>
        <Label class="fas" text.decode="&#xf0c9;" @tap="onDrawerButtonTap"/>
      </GridLayout>
    </ActionBar>
    <StackLayout>
      <!-- Selección de cinturón -->
      
      <ScrollView v-if="!selectedBell" orientation="vertical" class="scroll-container">
        <StackLayout class="page__content">
            <label class="instruction">Selecciona un cinturón para comenzar el quiz. Las preguntas se basan en los fundamentos, taeguks, números, partes del cuerpo, vocabulario y otros. Además, las preguntas son generadas y mezcladas aleatoriamente. Al finalizar el quiz, podrás ver tus resultados y las preguntas incorrectas.</label>
            <FlexboxLayout 
                flexDirection="row" 
                flexWrap="wrap" 
                justifyContent="center"
                padding="10"
            >
                <!-- Tarjetas de cinturones -->
                <FlexboxLayout 
                    v-for="belt in belts" 
                    :key="belt.color" 
                    v-show="belt.id != 1"
                    flexDirection="column"
                    alignItems="center"
                    justifyContent="center"
                    class="card"
                    :class="[`border-${belt.color}`]"
                    margin="5"
                    padding="20"
                    width="95%"
                >
                    <Image :src="belt.img" stretch="aspectFit" height="80"/>
                    <Label class="text-primary text-center belt-title" :text="belt.name"/>
                   
                    <Button 
                        class="btn btn-primary btn-sm" 
                        :borderColor="belt.color"  
                        @tap="onBeltsTap(belt)"
                    >
                        <FormattedString>
                            <Span class="" text="Practicar" /> <!-- Icono pencil -->
                        </FormattedString>
                    </Button>
                </FlexboxLayout>
            </FlexboxLayout>
        </StackLayout>
      </ScrollView>

      <!-- Pantalla de preguntas -->
      <StackLayout v-else-if="!showResult">
        <Label v-if="quizData.length === 0" text="No hay preguntas para este cinturón" class="error-message"/>
        <StackLayout v-else>
          <Button 
            text="Cambiar cinturón"
            @tap="selectedBell = null"
            class="bell-btn"
          />
          <Label class="instruction">
            {{ currentQuestionIndex + 1 }} de {{ quizData.length }} preguntas
          </Label>
          <Label textWrap="true" :text="currentQuestion.question" class="question"/>
          
          <StackLayout>
            <Button
              v-for="(option, index) in currentQuestion.options"
              :key="index"
              :text="option"
              class="option"
              @tap="selectOption(index)"
              :class="selectedOption === index ? 'selected text-secondary' : ''"
            />
          </StackLayout>

          <Button
            text="Siguiente"
            @tap="nextQuestion"
            :isEnabled="selectedOption !== null"
            class="next-btn"
          />
        </StackLayout>
      </StackLayout>

      <!-- Resultados -->
      <StackLayout v-else class="result-container">
        <Button 
            text="Cambiar cinturón"
            @tap="selectedBell = null"
            class="bell-btn"
          />
        <Label :text="`¡Quiz completado!`" class="result-title"/>
        <Label :text="`Puntuación: ${score}/${quizData.length}`" class="result-score"/>
        <Label :text="formattedTime" class="result-score"/>
        <!-- Sección de respuestas incorrectas -->        <StackLayout v-if="incorrectAnswers.length > 0" class="wrong-answers">
          <Label text="Errores cometidos:" class="section-title"/>
          
          <ListView for="(error, index) in incorrectAnswers" class="error-list">
            <v-template>
              <StackLayout class="error-item">
                <Label :text="`${index + 1}. ${error.question}`" textWrap="true"/>
                <Label :text="`Tu respuesta: ${error.userAnswer}`" class="user-answer"/>
                <Label :text="`Respuesta correcta: ${error.correctAnswer}`" class="correct-answer"/>
              </StackLayout>
            </v-template>
          </ListView>
        </StackLayout>

        <Button 
          text="Intentar nuevamente" 
          @tap="restartQuiz"
          class="restart-btn"
        />
        
        <Button 
          text="Elegir otro cinturón" 
          @tap="selectedBell = null"
          class="change-bell-btn"
        />
      </StackLayout>
    </StackLayout>
  </Page>
</template>

<script>
import { fundamentosBasicos } from '../data/taekwondo-data.js';
import { taeguks } from '../data/taekwondo-data.js';
import { numeros } from '../data/taekwondo-data.js';
import { bodyParts } from '../data/taekwondo-data.js';
import { generalVocabulary } from '../data/taekwondo-data.js';
import {aspectsToImproveForms} from '../data/taekwondo-data.js';


import * as utils from "~/shared/utils";
import { SelectedPageService } from "../shared/selected-page-service";
import { belts } from '../data/taekwondo-data.js';
import { start } from '@nativescript/core/profiling/index.js';

export default {
  mounted() {
    SelectedPageService.getInstance().updateSelectedPage("Quiz");
  },
  
  data() {
    return {
      belts: belts,
      selectedBell: null,
      quizData: [],
      currentQuestionIndex: 0,
      selectedOption: null,
      score: 0,
      showResult: false,
      timeTranscurred: 0,
      timer: null,
      allQuestions: [],
      incorrectAnswers: [] // Nuevo array para guardar los errores
    };
  },

  computed: {
    currentQuestion() {
      return this.quizData[this.currentQuestionIndex] || {};
    },
    formattedTime() {
      const minutes = Math.floor(this.timeTranscurred / 60);
      const seconds = this.timeTranscurred % 60;
      return minutes > 0
        ? `Tiempo transcurrido: ${minutes} minuto(s) y ${seconds} segundo(s)`
        : `Tiempo transcurrido: ${seconds} segundo(s)`;
    }
  },

  methods: { 
    selectBell(bellId) {
        this.selectedBell = bellId;
        this.initializeQuiz();
    },
    onBeltsTap(event){
        this.selectedBelt = event;
        this.selectBell(event.id);
    },

    initializeQuiz() {
      const questions = [];
      
      // Generar preguntas para cada categoría
      questions.push(...this.generateFundamentosQuestions());
      questions.push(...this.generateTaeguksQuestions());
      questions.push(...this.generateNumerosQuestions());
      questions.push(...this.generateBodyPartsQuestions());
      questions.push(...this.generateVocabularyQuestions());
      questions.push(...this.generateAspectosQuestions());

      //solo devolver 35 preguntas
      this.quizData = this.shuffle(questions);
      switch (this.selectedBell) {
        case 2:
          this.quizData = this.quizData.slice(0, 35);
          break;
        case 3:
          this.quizData = this.quizData.slice(0, 50);
          break;
        case 4:
          this.quizData = this.quizData.slice(0, 65);
          break;
        case 5:
          this.quizData = this.quizData.slice(0, 80);
          break;
        default:
          this.quizData = this.quizData.slice(0, 50);
      }
      this.allQuestions = this.quizData;
      
      this.resetQuizState();
      this.startTimer();
    },

    generateFundamentosQuestions() {
      //filtar los fundamentos por el id del cinturón
      const fundamentosFiltrados = fundamentosBasicos.find(bell => bell.id_bell === this.selectedBell);
      if (!fundamentosFiltrados) return [];
      //mapear los fundamentos y filtrar los que tienen descripción
      //y devolver un array de objetos con la pregunta y las opciones
      return fundamentosFiltrados.fundamentos
        .filter(item => item.description)
        .map(item => ({
          type: 'fundamentos',
          question: `¿Qué significa "${item.name}" en Taekwondo?`,
          options: this.generateOptions(
            item.description, 
            fundamentosFiltrados.fundamentos.map(f => f.description)
          ),
          correctAnswer: item.description
        }));
    },

    generateTaeguksQuestions() {
      return taeguks.map(taeguk => ({
        type: 'taeguks',
        question: `¿Qué representa la forma ${taeguk.title}?`,
        options: this.generateOptions(
          taeguk.description,
          taeguks.map(t => t.description)
          ),
        correctAnswer: taeguk.description
        }));
    },

    generateNumerosQuestions() {
      return numeros.numeros.map(num => ({
        type: 'numeros',
        question: `¿Cómo se dice ${num.spa} en coreano?`,
        options: this.generateOptions(
          num.kor,
          numeros.numeros.map(n => n.kor)
          ),
        correctAnswer: num.kor
        }));
    },

    generateBodyPartsQuestions() {
      return bodyParts.bodyParts.map(part => ({
        type: 'bodyParts',
        question: `¿Cómo se dice ${part.spa} en coreano?`,
        options: this.generateOptions(
          part.kor,
          bodyParts.bodyParts.map(p => p.kor)
          ),
        correctAnswer: part.kor
        }));
    },

    generateVocabularyQuestions() {
      return generalVocabulary.vocabulary.map(term => ({
        type: 'vocabulary',
        question: `¿Qué significa "${term.kor}" en español?`,
        options: this.generateOptions(
          term.spa,
          generalVocabulary.vocabulary.map(t => t.spa)
        ),
        correctAnswer: term.spa
        }));
    },

    generateAspectosQuestions() {
      return aspectsToImproveForms.aspects.map(aspecto => ({
        type: 'aspectos',
        question: `¿Por qué es importante el "${aspecto}" en las formas?`,
        options: this.generateOptions(
          'Mejora la ejecución de la técnica',
          ['Aumenta la velocidad', 'Mejora la flexibilidad', 'Facilita los saltos']),
        correctAnswer: 'Mejora la ejecución de la técnica'
      }));
    },

    generateOptions(correctAnswer, dataPool) {
      const incorrectOptions = dataPool
        .filter(item => item && item !== correctAnswer);
      
      const uniqueIncorrect = [...new Set(incorrectOptions)]
        .sort(() => 0.5 - Math.random())
        .slice(0, 3);
      return this.shuffle([correctAnswer, ...uniqueIncorrect]);
    },
    startTimer() {
      this.timer = setInterval(() => {
        this.timeTranscurred++;
      }, 1000);
    },
    stopTimer() {
      clearInterval(this.timer);
      this.timer = null;
    },
    shuffle(array) {
      return array.sort(() => Math.random() - 0.5);
    },

    selectOption(index) {
      this.selectedOption = index;
    },

    nextQuestion() {
      if (this.selectedOption !== null) {
        const selectedAnswer = this.currentQuestion.options[this.selectedOption];
        if (selectedAnswer === this.currentQuestion.correctAnswer) {
          this.score++;
        }
        if (selectedAnswer !== this.currentQuestion.correctAnswer) {
          this.incorrectAnswers.push({
            question: this.currentQuestion.question,
            userAnswer: selectedAnswer,
            correctAnswer: this.currentQuestion.correctAnswer
          });
        }

        if (this.currentQuestionIndex < this.quizData.length - 1) {
          this.currentQuestionIndex++;
          this.selectedOption = null;
        } else {
          this.showResult = true;
          this.stopTimer();
        }
      }
    },

    resetQuizState() {
      this.currentQuestionIndex = 0;
      this.selectedOption = null;
      this.score = 0;
      this.showResult = false;
      this.timeTranscurred = 0;
      this.incorrectAnswers = [];
    },

    restartQuiz() {
      this.resetQuizState();
    },

    onDrawerButtonTap() {
      utils.showDrawer();
    }
  }
};
</script>

<style scoped lang="scss">
@import '@nativescript/theme/scss/variables/blue';
@import '../style/styles.scss';

.instruction {
  font-size: 12px;
  text-align: center;
  text-wrap: true;
  margin: 10px;
}

.bell-btn {
  margin: 10px;
  padding: 15px;
  border-radius: 8px;
  font-size: 16px;
  border-color: #2196f3;
  border-radius: 8px;
  border-width: 1px;
}

.question {
  font-size: 20px;
  margin: 20px;
  text-align: center;
}

.option {
  font-size: 16px;
  margin: 10px;
  padding: 15px;
  border-radius: 8px;
  border-width: 1px;
  border-color: #ddd;
}

.selected {
  border-color: #2196f3;
  background-color:  #2196f3;
  color: #fff;
}


.next-btn {
  background-color: #4CAF50;
  color: white;
  margin: 20px;
}

.error-message {
  color: #ff4444;
  text-align: center;
  margin: 20px;
  font-size: 18px;
}

.result-container {
  margin: 20px;
  padding: 20px;
  border-radius: 10px;
}

.result-title {
  font-size: 24px;
  color: #27ae60;
  margin-bottom: 15px;
  text-align: center;
}

.result-score {
  font-size: 22px;
  color: #27ae60;
  margin-bottom: 25px;
  text-align: center;
  text-wrap: true;
}

.restart-btn {
  background-color: #3498db;
  color: white;
  margin: 10px;
}

.change-bell-btn {
  background-color: #95a5a6;
  color: white;
  margin: 10px;
}
.scroll-container {
    height: 100%;
}

.wrong-answers {
  margin-top: 20px;
  padding: 15px;
  border-radius: 10px;
  width: 90%;
}

.section-title {
  font-size: 18px;
  color: #ff4444;
  margin-bottom: 10px;
  font-weight: bold;
}

.error-list {
  margin-top: 10px;
}

.error-item {
  padding: 10px;
  margin: 5px 0;
  border-bottom-width: 1px;
  border-bottom-color: #ffcccc;
}

.user-answer {
  color: #ff4444;
  font-size: 14px;
  margin-top: 5px;
  text-wrap: true;
}

.correct-answer {
  color: #4CAF50;
  font-size: 14px;
  margin-top: 3px;
  font-weight: bold;
  text-wrap: true;
}

</style>