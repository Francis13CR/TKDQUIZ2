<template>
  <Page class="page">
    <ActionBar class="action-bar">
      <NavigationButton visibility="hidden" />
      <GridLayout columns="50, *">
        <Label class="action-bar-title" text="Sobre nosotros" colSpan="2" />

        <Label class="fas" text.decode="&#xf0c9;" @tap="onDrawerButtonTap" />
      </GridLayout>
    </ActionBar>
    <ScrollView> 
      <StackLayout >
        <Label text="Acerca de Nosotros" class="header section-title text-primary" />
        <Label
          text="Esta aplicación es el resultado de una iniciativa que surgió con el propósito de proporcionar información esencial sobre el cambio de cinta en Taekwondo. Nuestra misión es ofrecer a los practicantes de Taekwondo una herramienta confiable y accesible que les permita acceder de manera sencilla a la información que necesitan."
          class="text"  textWrap="true"/>
        <Label :text="infoErnesto.fuentes" class="text text-primary"  textWrap="true" />
        <button @tap="openFace" class="btn btn-sm btn-info"> Facebook Academia Fenix</button>
        <label class="text text-primary" :text="infoErnesto.objetivo" textWrap="true" />
        <label class="text text-primary" :text="infoErnesto.grax" textWrap="true" />

        <Label text="Desarrollador" class="header" />
        <label class="text text-primary" :text="infoErnesto.developer" textWrap="true" />
        <Button text="Ver perfil de linkedin" @tap="openLinkedIn" class="btn btn-sm btn-info" />
      </StackLayout>
    </ScrollView>
  </Page>
</template>

<script>
import * as utils from "~/shared/utils";
import { SelectedPageService } from "../shared/selected-page-service";
import { Label, StackLayout } from "@nativescript/core";
import { infoErnesto } from "~/data/taekwondo-data";

export default {
  data() {
    return {
      infoErnesto: infoErnesto
    };
  },
  mounted() {
    SelectedPageService.getInstance().updateSelectedPage("Featured");
  },
  methods: {
    onDrawerButtonTap() {
      utils.showDrawer();
    },
    openLinkedIn() {
      utils.openUrl('https://www.linkedin.com/in/francis-mel%C3%A9ndez-236b63265/');
    }, 
    openFace(){
      utils.openUrl('https://www.facebook.com/profile.php?id=10005460975225');
    }
  }
};
</script>

<style scoped lang="scss">
// Start custom common variables
@import '@nativescript/theme/scss/variables/blue';
@import '../style/styles.scss';
// End custom common variables

// Custom styles
.header {
  font-size: 24;
  font-weight: bold;
  margin-bottom: 10;
}

.text {
  font-size: 16;
  margin-bottom: 10;
}

.link {
  color: blue;
}
</style>