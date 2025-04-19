<template>
  <Page class="page">
    <ActionBar class="action-bar">
      <NavigationButton visibility="hidden"/>
      <GridLayout columns="50, *">
        <Label class="action-bar-title" text="Sobre nosotros" colSpan="2"/>
        <Label class="fas" text.decode="&#xf0c9;" @tap="onDrawerButtonTap"/>
      </GridLayout>
    </ActionBar>

    <ScrollView class="page__content">
      <StackLayout class="content-container">
        <!-- Header Section -->
        <StackLayout class="header-card">
          <Label text.decode="&#xf19d;" class="fas main-icon"/>
          <Label text="Taekwondo Fénix" class="app-title"/>
        </StackLayout>

        <!-- Content Section -->
        <StackLayout class="content-card">
          <Label text="Nuestra Misión" class="section-title"/>
          <Label text="Esta aplicación es el resultado de una iniciativa que surgió con el propósito de proporcionar información esencial sobre el cambio de cinta en Taekwondo." class="section-text"/>
          
          <Label text="Nuestro Maestro" class="section-title"/>
          <Label text="Prof. Ernesto Carballo Rodríguez" class="highlight-text"/>
          <Label text="Cinturón Negro 2 Dan - Academia Taekwondo Fénix Esparza" class="detail-text"/>
          <Button @tap="openFace" class="social-btn facebook">
            <FormattedString>
              <Span class="fab" text.decode="&#xf082;  "/>
            </FormattedString>
          </Button>
          <Label text="Desarrollado por" class="section-title"/>
          <Label text="Francis Meléndez Chaves" class="developer-name"/>
          <Label text="Desarrollador Full-Stack" class="developer-role"/>
          <Button @tap="openLinkedIn" class="social-btn linkedin">
            <FormattedString>
              <Span class="fab" text.decode="&#xf08c;  "/>
            </FormattedString>
          </Button>
          <Button @tap="openPortofolio" class="social-btn">
            <FormattedString>
              <Span class="btn-text" text="Portafolio"/>
            </FormattedString>
          </Button>
          <Label text="¡Sigamos mejorando juntos!" class="footer-text"/>
        </StackLayout>
      </StackLayout>
    </ScrollView>
  </Page>
</template>

<script>
import { Utils } from '@nativescript/core';
import * as utils from "~/shared/utils";
import { SelectedPageService } from "../shared/selected-page-service";
import { Button } from 'tns-core-modules';

export default {
  mounted() {
    SelectedPageService.getInstance().updateSelectedPage("Featured");
  },
  computed: {
  },
  methods: {
    onDrawerButtonTap() {
      utils.showDrawer();
    },
    openLinkedIn() {
      Utils.openUrl('https://www.linkedin.com/in/francismch/');
    },
    openFace() {
      Utils.openUrl('https://www.facebook.com/profile.php?id=100054609752257');
    },
    openPortofolio() {
      Utils.openUrl('https://francismch.dev/');
    },
  }
};
</script>

<style scoped lang="scss">
@import '@nativescript/theme/scss/variables/blue';

// Variables comunes
$border-radius: 15px;
$padding-default: 20px;
$font-size-title: 24px;
$font-size-subtitle: 18px;
$font-size-text: 16px;

// Definición de temas
.ns-light {
  $color-primary: green;
  $color-secondary: #f5f5f5;
  $text-primary: #212121;
  $text-secondary: #383838;
  $background-card: #ffffff;
  $developer-card-bg: #e3f2fd;

  .bg-primary { background-color: $color-primary; }
  .bg-secondary { background-color: $color-secondary; }
  .text-primary { color: $text-primary; }
  .text-secondary { color: $text-secondary; }

  .header-card, .content-card {
    background-color: $background-card;
  }

  .main-icon {
    color: $color-primary;
  }

  .section-title {
    color: $color-primary;
  }

  .developer-card {
    background-color: $developer-card-bg;
  }
}

.ns-dark {
  $color-primary: #212121;
  $color-secondary: #383838;
  $text-primary: #eee;
  $text-secondary: #ccc;
  $background-card: #2a2a2a;
  $developer-card-bg: #37474f;

  .bg-primary { background-color: $color-primary; }
  .bg-secondary { background-color: $color-secondary; }
  .text-primary { color: $text-primary; }
  .text-secondary { color: $text-secondary; }

  .header-card, .content-card {
    background-color: $background-card;
  }

  .main-icon {
    color: lighten($color-primary, 20%);
  }

  .section-title {
    color: lighten($color-primary, 20%);
  }

  .developer-card {
    background-color: $developer-card-bg;
  }
  //llamar a los mixins de estilos
  
}



.header-card {
  align-items: center;
  margin-bottom: 30px;
  padding: $padding-default;
  border-radius: $border-radius;
  elevation: 3;
  text-align: center;
}

.main-icon {
  font-size: 50px;
  margin-bottom: 15px;
}

.app-title {
  font-size: $font-size-title;
  font-weight: 700;
}

.content-card {
  padding: 25px;
  margin-bottom: 20px;
  border-radius: $border-radius;
  elevation: 2;
}

.section-title {
  font-size: $font-size-title;
  font-weight: 600;
  margin-top: 10px;
  text-align: center;
}

// Colores fijos (no cambian con el tema)
$color-facebook: #1877f2;
$color-linkedin: #0a66c2;
$color-highlight: #27ae60;
$color-detail: #7f8c8d;
$color-footer: #95a5a6;

.social-btn {
  &.facebook { background-color: $color-facebook; }
  &.linkedin { background-color: $color-linkedin; }
}

.highlight-text { color: $color-highlight; }
.detail-text { color: $color-detail; }
.footer-text { color: $color-footer; }

.fab {
  font-family: "Font Awesome 6 Brands", "fa-brands-400";
}

.section-text {
  font-size: 12;
  margin: 0 15;
  text-wrap: true;
}

.highlight-text {
  font-size: 18;
  margin: 5 0;
  text-align: center;
}

.detail-text {
  font-size: 12;
  margin: 0 15 20;
  text-wrap: true;
  text-align: center;
}

.fab {
  font-size: 20;
  vertical-align: center;
}

.btn-text {
  font-size: 18;
  margin-left: 8;
  text-align: center;
}

.developer-name {
  font-size: 15;
  margin: 10 0;
  text-align: center;
}

.developer-role {
  font-size: 12;
  text-align: center;
}

.footer-text {
  font-size: 18;
  margin: 30 15;
  text-align: center;
}
</style>