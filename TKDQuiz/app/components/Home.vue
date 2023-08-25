<template>
    <Page class="page">
      <ActionBar class="action-bar">
        <NavigationButton visibility="hidden"/>
        <GridLayout columns="50, *">
          <Label class="action-bar-title" text="Cinturones" colSpan="2"/>

          <Label class="fas" text.decode="&#xf0c9;" @tap="onDrawerButtonTap"/>
        </GridLayout>
      </ActionBar>
      <ScrollView> 
        <FlexboxLayout class="page__content"  flexDirection="column" alignItems="stretch" justifyContent="center">
          <!-- <StackLayout margin="2" padding="2">
              <SearchBar id="searchBar" hint="Buscar cinta" text="" />
          </StackLayout> -->
          <!-- Mostrar cada cinturón en una tarjeta -->
          <FlexboxLayout v-for="belt in belts" :key="belt.color" v-show="belt.id != 1"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              height="300"
              borderRadius="10"
              class=" card "
              :class="[ `border-${belt.color.toLowerCase()}`]"
              margin="5"
              padding="10"
              @tap="onBeltsTap(belt)"
          >
              <image :src="belt.img" stretch="none" />
              <Label
                  fontWeight="700"
                  class="text-primary"
                  fontSize="18"
                  :text="belt.name"
              />
              <HtmlView margin="0 10" :html="belt.text" class="text-center text-secondary" />
          </FlexboxLayout>
        </FlexboxLayout>
      </ScrollView>
    </Page>
</template>

<script>
  import { SelectedPageService } from "../shared/selected-page-service";
  import { belts } from '../data/taekwondo-data.js';
  import HomeJS from '../js/home.js';

  export default {
    data() {
        return {
            belts: belts,
            selectedBelt : HomeJS.data().selectedBelt
         
            // Puedes agregar más propiedades de datos según tus necesidades
        };
    },
    mounted() {
      SelectedPageService.getInstance().updateSelectedPage("Home");
    },
    computed: HomeJS.computed,
    methods: HomeJS.methods,
  };
</script>

<style scoped lang="scss">
    // Start custom common variables
    @import '@nativescript/theme/scss/variables/blue';
    // End custom common variables

    // Custom styles
     /* Importa los estilos desde el archivo styles.scss */
     @import '../style/styles.scss';
</style>
