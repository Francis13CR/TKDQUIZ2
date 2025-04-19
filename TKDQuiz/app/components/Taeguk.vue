<template>
        <StackLayout>
        <Label textWrap="true" text="Las Taeguk son una serie de movimientos coordinados y sistematizados que simulan un combate con varios oponentes." />
        <Label textWrap="true" text="Tae: Grandeza" />
        <Label textWrap="true" text="Guk: Eternidad" />
        
        <Label textWrap="true" text="Taeguk Básicas" class="h3" />
        <Label textWrap="true" text="Para reproducir los videos, es necesario estar conectado a internet. Pronto estaremos utilizando videos propios de la academia." />
        
        <ListView for="taeguk in taeguks" :key="taeguk.title">
            <v-template>
                <StackLayout orientation="vertical">
                    <Label :text="taeguk.title + ': ' + taeguk.description" textWrap="true" />
                    <WebView :src="taeguk.videoUrl" height="300" />
                </StackLayout>
            </v-template>
        </ListView>
        </StackLayout>
  </template>
  
  <script>
   import { taeguks } from '../data/taekwondo-data.js';
  export default {
    data() {
      return {
        taeguks: taeguks
      }
    },
    mounted() {
    },
  };
  </script>
  
  <style scoped>
  .responsive-iframe {
    position: relative;
    overflow: hidden;
    padding-top: 56.25%;
  }
  .responsive-iframe iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  </style>
  