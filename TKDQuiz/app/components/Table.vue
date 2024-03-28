<template>
  <Page class="page">
    <ActionBar class="action-bar">
      <NavigationButton visibility="hidden" />
      <GridLayout columns="50, *">
        <Label class="action-bar-title" text="QUIZ" colSpan="2" />
        <Label class="fas" text.decode="&#xf0c9;" @tap="onDrawerButtonTap" />
      </GridLayout>
    </ActionBar>

    <StackLayout>
      
      <!-- Encabezado de la lista -->
      <GridLayout rows="auto" columns="*, auto, auto, auto" class="header">
        <Label text="Nombre" col="0" class="header-item" />
        <Label text="Oro" col="1" class="header-item" />
        <Label text="Plata" col="2" class="header-item" />
        <Label text="Bronce" col="3" class="header-item" />
      </GridLayout>

      <!-- Lista de taekwondistas -->
      <ListView :items="taekwondistas" class="list-group" height="100%">
        <v-template>
          <GridLayout rows="auto" columns="*, auto, auto, auto">
            <Label :text="item.nombre" col="0" class="list-group-item" />
            <Label :text="item.medalla_oro" col="1" class="list-group-item" />
            <Label :text="item.medalla_plata" col="2" class="list-group-item" />
            <Label :text="item.medalla_bronce" col="3" class="list-group-item" />
          </GridLayout>
        </v-template>
      </ListView>
    </StackLayout>
  </Page>
</template>
<script>
import * as utils from "~/shared/utils";
import { SelectedPageService } from "../shared/selected-page-service";
import { firebase } from '@nativescript/firebase-core'
import { GridLayout } from "@nativescript/core";
import { DropDown } from 'nativescript-drop-down';
const database = firebase().database()

export default {
  components: {
    DropDown
  },
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
      taekwondistas: [
        {
          nombre: 'Jesús',
          medalla_oro: 1,
          medalla_plata: 2,
          medalla_bronce: 3
        },
        {
          nombre: 'Juan',
          medalla_oro: 2,
          medalla_plata: 3,
          medalla_bronce: 1
        },
        {
          nombre: 'Pedro',
          medalla_oro: 3,
          medalla_plata: 1,
          medalla_bronce: 2
        }
      ]
    }
  },
  async mounted() {
    SelectedPageService.getInstance().updateSelectedPage("Ranking");
    //OBTENER LOS DATOS DE LA BASE DE DATOS
    const year = new Date().getFullYear(); // Obtener el año actual
    const ref = database.ref('taekwondistas/' + year); // Referencia a la clave del año actual
    const taekwondistas = await ref.orderByChild('medalla_bronce').once('value');
    console.log(taekwondistas.val(), 'taekwondistas');
    this.taekwondistas = taekwondistas.val();
    // ordenar los taekwondistas por medalla de oro, luego por medalla de plata y finalmente por medalla de bronce
    this.taekwondistas.sort((a, b) => {
      if (a.medalla_oro !== b.medalla_oro) {
        return b.medalla_oro - a.medalla_oro; // Orden descendente por medallas de oro
      }
      if (a.medalla_plata !== b.medalla_plata) {
        return b.medalla_plata - a.medalla_plata; // Orden descendente por medallas de plata
      }
      return b.medalla_bronce - a.medalla_bronce; 
    });

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
.header {
  background-color: #ccc; // Cambia esto al color que prefieras para el encabezado
}

.header-item {
  padding: 10; // Ajusta este valor para cambiar el espacio alrededor de los elementos del encabezado
}

.list-group-header {
  font-weight: bold;
}

.list-group-item {
  padding: 20;
  border-bottom-width: 1;
  border-bottom-color: #ccc;
}
</style>
