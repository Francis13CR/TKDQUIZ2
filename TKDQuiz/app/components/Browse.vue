<template>
    <Page class="page">
      <ActionBar class="action-bar">
        <NavigationButton visibility="hidden"/>
        <GridLayout columns="50, *">
          <Label class="action-bar-title" text="Noticias" colSpan="2"/>

          <Label class="fas" text.decode="&#xf0c9;" @tap="onDrawerButtonTap"/>
        </GridLayout>
      </ActionBar>

        <GridLayout class="page__content">
            <Label class="page__content-icon far" text.decode="&#xf1ea;"/>
            <HtmlView margin="10" :html="message" class="text-center text-secondary" />
        </GridLayout>
    </Page>
</template>

<script>
  import * as utils from "~/shared/utils";
  import { SelectedPageService } from "../shared/selected-page-service";

  export default {
    mounted() {
      SelectedPageService.getInstance().updateSelectedPage("Browse");
    },
    computed: {
      message() {
        return `
        <h2>¡Gracias por tu interés!</h2>
        <p>Lamentablemente, esta característica aún no está disponible en la versión actual de la aplicación. Sin embargo, estamos al tanto de tu interés y tu deseo de utilizarla.</p>
        <p>Ten en cuenta que estamos trabajando en mejoras continuas, basándonos en la retroalimentación y el interés de nuestros usuarios. ¡Gracias por tu interés y sigue atento a las próximas actualizaciones para más novedades!</p>
        ` 
      
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
