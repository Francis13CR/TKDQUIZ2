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
              height="auto"
              borderRadius="10"
              class=" card "
              :class="[ `border-${belt.color}`]"
              margin="5"
              padding="10"
              @tap="onBeltsTap(belt)"
          >
              <image :src="belt.img" stretch="none"  />
              <Label
                  fontWeight="700"
                  class="text-primary text-center"
                  fontSize="18"
                  :text="belt.name"
              />
              <Label margin="5" :text="belt.text" textWrap="true" class="text-center text-secondary" />
              <Button class="btn btn-primary btn-sm " :borderColor="belt.color"  @tap="onBeltsTap(belt)"> Ver información </Button>
          </FlexboxLayout>
        </FlexboxLayout>
      </ScrollView>
    </Page>
</template>

<script>
  import { SelectedPageService } from "../shared/selected-page-service";
  import { belts } from '../data/taekwondo-data.js';
  import * as utils from "~/shared/utils";
  import BeltView from "./BeltView.vue";
  export default {
    data() {
        return {
            belts: belts,
            selectedBelt : null
        };
    },
    mounted() {
      SelectedPageService.getInstance().updateSelectedPage("Home");
    },
    computed: {
      message() {
        return "Blank {N}-Vue app";
      },
    }, 
    components: {
      BeltView
    },
    methods: {
        onBeltsTap(event){
            this.selectedBelt = event;
            this.$navigateTo(BeltView, {
              transition: {
                name: "slideLeft",
                duration: 300,
                curve: "easeIn"
              },
              props: { belt: this.selectedBelt }
            });
        },
        onDrawerButtonTap() {
          utils.showDrawer();
        },
    },
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
