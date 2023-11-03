<template>
    <Page class="page">
      <ActionBar class="action-bar">
        <NavigationButton visibility="hidden"/>
        <GridLayout columns="50, *">
          <Label class="action-bar-title" text="Sobre nosotros" colSpan="2"/>

          <Label class="fas" text.decode="&#xf0c9;" @tap="onDrawerButtonTap"/>
        </GridLayout>
      </ActionBar>

        <GridLayout class="page__content">
         <HtmlView  margin="10" :html="message" class="text-center text-secondary" />
        </GridLayout>
    </Page>
</template>

<script>
  import * as utils from "~/shared/utils";
  import { SelectedPageService } from "../shared/selected-page-service";

  export default {
    mounted() {
      SelectedPageService.getInstance().updateSelectedPage("Featured");
    },
    computed: {
      message() {
        return `
        <h1>Acerca de Nosotros</h1>
        <p>
          Esta aplicación es el resultado de una iniciativa que surgió con el propósito de proporcionar información esencial sobre el cambio de cinta en Taekwondo. Nuestra misión es ofrecer a los practicantes de Taekwondo una herramienta confiable y accesible que les permita acceder de manera sencilla a la información que necesitan.
        </p>
        <p>
          La información que encontrarás en esta aplicación se basa en la experiencia y el conocimiento del Profesor  <strong>Ernesto Carballo Rodríguez </strong>, Cinturón Negro 2 Dan de la academia Taekwondo Fénix Esparza. Su dedicación y pasión por el Taekwondo han sido fundamentales para impulsar y respaldar el desarrollo de cada miembro de TKD Fénix Esparza.
        </p>
        <p>
          Esta aplicación ha sido desarrollada por Francis Meléndez Chaves.
          <a href="https://www.linkedin.com/in/francis-mel%C3%A9ndez-236b63265?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BLXnGsdy%2BSWql3szSV88FbQ%3D%3D">Ver perfil de linkedin</a>
        </p>
        <p>  
        Nuestro compromiso es seguir mejorándola y expandiéndola para proporcionar aún más funcionalidades y recursos útiles a la comunidad de Taekwondo.
        </p>
        <p>
          ¡Esperamos que disfrutes explorando y aprendiendo a través de nuestra aplicación!
        </p>
        ` 
      }
    },
    methods: {
      onDrawerButtonTap() {
        utils.showDrawer();
      },
      openLinkedIn() {
        utils.openUrl('https://www.linkedin.com/in/francis-mel%C3%A9ndez-236b63265/');
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
