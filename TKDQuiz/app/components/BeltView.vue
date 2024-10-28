<template>
  <Page class="page">
    <ActionBar class="action-bar">
      <NavigationButton visibility="hidden"/>
      <GridLayout columns="50, *">
        <Label class="action-bar-title" text="" colSpan="2"/>
        <Label class="fas" text.decode="&#xf100;" @tap="$navigateBack"/>
      </GridLayout>
    </ActionBar>
    <StackLayout>
      <ScrollView orientation="horizontal"  ref="scrollView">
        <SegmentedBar v-model="currentSectionIndex" @selectedIndexChange="onCategorySelected">
            <SegmentedBarItem v-for="(category, index) in categories" :key="category.id" :title="category.name" class="text-center"/>
        </SegmentedBar>
      </ScrollView>
      

      <StackLayout v-show="selectedCategoryId == 1">
        <Label :text="IntroduccionTaekwondo.name" textWrap="true" class="title text-center text-primary" />
        <ScrollView orientation="vertical"  height="80%">
          <Label class="m-5 text-primary" :text="IntroduccionTaekwondo.text.split('\n').map(line => line.trim()).join('\n')" textWrap="true" />
        </ScrollView>
      </StackLayout>
      <StackLayout v-show="selectedCategoryId == 2">
        <Label :text="HonorTaek.name" textWrap="true" class="title text-center text-primary" />
        <ScrollView orientation="vertical"  height="80%">
          <Label class="m-5 text-primary" :text="HonorTaek.text.split('\n').map(line => line.trim()).join('\n')" textWrap="true" />
        </ScrollView>
      </StackLayout>
      <StackLayout v-show="selectedCategoryId == 3">
        <Label :text="NowTaek.name" textWrap="true" class="title text-center text-primary" />
        <ScrollView orientation="vertical"  height="50%">
          <Label class="m-5 text-primary" :text="NowTaek.text.split('\n').map(line => line.trim()).join('\n')" textWrap="true" />
        </ScrollView>
      </StackLayout>
      <StackLayout v-show="selectedCategoryId == 4">
        <Label :text="AcademiaFenix.name" textWrap="true" class="title text-center text-primary" />
        <ScrollView orientation="vertical"  height="80%">
          <Label class="m-5 text-primary" :text="AcademiaFenix.text.split('\n').map(line => line.trim()).join('\n')" textWrap="true" />
        </ScrollView>
      </StackLayout>

      <StackLayout v-show="selectedCategoryId == 5">   
        <ListView :items="cinturonesValoresTaekwondoConTitulo" height="80%">
          <v-template>
            <StackLayout orientation="vertical">
              <Label  v-if="item.isFirstValor === 3" class="text-center text-primary section-title" textWrap="true" text="Significado del Taekwondo" />
              <Label v-if="item.isFirstValor === 2"  class="text-center text-primary section-title" textWrap="true" text="Nombres y Significados de los Cinturones" />
              <Label v-if="item.isFirstValor === 1" class="text-center text-primary section-title" textWrap="true" text="Valores del Taekwondo" />
              <Label v-show="item.description != 'valor' && item.description != 'sig' " class="m-5 fs-12 text-primary" :text="`${item.name}: ${item.description}`" textWrap="true" />
              <Label v-show="item.description == 'valor' " class="m-5 fs-12 text-primary" :text="`${item.name}`" textWrap="true" />
              <Label v-show="item.description == 'sig'  " class="m-5 fs-12 text-primary" :text="`${item.name}`" textWrap="true" />
            </StackLayout>
          </v-template>
        </ListView>
      </StackLayout>
     
      <StackLayout v-show="selectedCategoryId == 6">
        <ListView for="(taeguk, index) in taeguks"  height="80%">
          <v-template>
            <StackLayout orientation="vertical">
              <Label v-if="index === 0" class="text-center text-primary section-title" textWrap="true" text="Las Taeguk son una serie de movimientos coordinados y sistematizados que simulan un combate con varios oponentes." />
              <Label v-if="index === 0" class="text-center text-primary" textWrap="true" text="Tae: Grandeza" />
              <Label v-if="index === 0" class="text-center text-primary" textWrap="true" text="Guk: Eternidad" />
              <Label v-if="index === 0" class="text-center text-primary section-title" textWrap="true" text="Taeguk Básicas"  />
              <Label v-if="index === 0" class="text-center text-secondary" textWrap="true" text="Para reproducir los videos, es necesario estar conectado a internet. Pronto estaremos utilizando videos propios de la academia." />
              <Label class="m-5 section-subtitle text-primary" :text="`${taeguk.title}: ${taeguk.description}`" textWrap="true" />
              <WebView :src="taeguk.videoUrl"  height="800" @loadFinished="onLoadFinished" />
            </StackLayout>
          </v-template>
        </ListView>
      </StackLayout>
      <StackLayout v-show="selectedCategoryId == 7">
        <Label class="text-center text-primary section-title" textWrap="true" text="Aspectos para Mejorar las Formas" />
        <ListView :items="aspectsToImproveForms.aspects" height="80%">
          <v-template>
            <StackLayout orientation="vertical">
              <Label class="m-5 fs-12 text-primary" :text="item" textWrap="true" />
            </StackLayout>
          </v-template>
        </ListView>
      </StackLayout>
      
      <StackLayout v-show="selectedCategoryId == 8">
        <Label class="text-center text-primary section-title" textWrap="true" text="Vocabulario" />
        <ListView :items="generalVocabulary" height="80%">
          <v-template>
            <StackLayout orientation="vertical">
              <Label class="m-5 fs-12 text-primary" :text="`${item.kor} = ${item.spa}`" textWrap="true" />
            </StackLayout>
          </v-template>
        </ListView> 
      </StackLayout>

      <StackLayout v-show="selectedCategoryId == 9">
        <Label class="text-center text-primary section-title" textWrap="true" text="Partes del cuerpo" />
        <ListView :items="bodyParts" height="80%">
          <v-template>
            <StackLayout orientation="vertical">
              <Label class="m-5 fs-12 text-primary" :text="`${item.kor} = ${item.spa}`" textWrap="true" />
            </StackLayout>
          </v-template>
        </ListView> 
      </StackLayout>

      <StackLayout v-show="selectedCategoryId == 10">
        <Label class="text-center text-primary section-title" textWrap="true" text="Números" />
        <ListView :items="numeros" height="80%">
          <v-template>
            <StackLayout orientation="vertical">
              <Label class="m-5 fs-12 text-primary" :text="`${item.kor} = ${item.spa}`" textWrap="true" />
            </StackLayout>
          </v-template>
        </ListView> 
      </StackLayout>

      <StackLayout v-show="selectedCategoryId == 11">
        <Label class="text-center text-primary section-title" textWrap="true" text="Fundamentos Básicos" />
        <ListView :items="fundamentosAgrupados" height="80%">
          <v-template>
            <StackLayout orientation="vertical">
              <Label class="text-center text-primary section-subtitle" :text="item.type" textWrap="true" />
              <Label v-for="(subItem, index) in item.items" :class="index === 0 ? 'text-center text-primary' : 'text-primary'" :text="subItem" textWrap="true" />
            </StackLayout>
          </v-template>
        </ListView> 
      </StackLayout>

      <StackLayout v-show="selectedCategoryId == 12">
        <Label class="text-center text-primary section-title" textWrap="true" text="Fundamentos Prácticos" />
        <ListView :items="fundamentosPracticos.fundamentos" height="80%">
          <v-template>
            <StackLayout orientation="vertical">
              <Label class="m-5 fs-12 text-primary" :text="item.name" textWrap="true" />
            </StackLayout>
          </v-template>
        </ListView>
      </StackLayout>

      <StackLayout v-show="selectedCategoryId == 13">
        <Label class="text-center text-primary section-title" textWrap="true" :text="prohibitedActions.name" />
        <ListView :items="prohibitedActions.actions" height="80%">
          <v-template>
            <StackLayout orientation="vertical">
              <Label class="m-5 fs-12 text-primary" :text="item" textWrap="true" />
            </StackLayout>
          </v-template>
        </ListView>
      </StackLayout>

   
 
      <StackLayout orientation="horizontal" horizontalAlignment="right">
        <Button class="bg-secondary" v-show="currentSectionIndex > 0" text="Anterior" @tap="goToPreviousSection" width="100" />
        <Button  class="bg-primary" v-show="selectedCategoryId != 13" text=" Siguiente " @tap="goToNextSection" width="100" /> 
      </StackLayout>
      
    </StackLayout>
  </Page>
</template>

<script>
import { categories, taeguks,prohibitedActions, fundamentosPracticos, fundamentosBasicos, IntroduccionTaekwondo, numeros, bodyParts, 
  aspectsToImproveForms, generalVocabulary, cinturonesValoresTaekwondo, AcademiaFenix, NowTaek,HonorTaek } from '../data/taekwondo-data.js';
import * as utils from "@nativescript/core/utils";

export default {
props: ['belt'],
data() {
  return {
    categories,
    selectedCategoryId: 1,
    currentSectionIndex: 0,
    filterInfo: [],
    showWebView: true,
    taeguks,
    prohibitedActions,
    fundamentosPracticos,
    numeros,
    fundamentosBasicos,
    fundamentosPorSeccion: {},
    IntroduccionTaekwondo,
    bodyParts,
    aspectsToImproveForms,
    generalVocabulary,
    cinturonesValoresTaekwondo,
    AcademiaFenix,
    NowTaek,
    HonorTaek

  };
},
mounted() {
  this.onCategorySelected({ value: 0 });
  this.prohibitedActions = this.prohibitedActions[0];
  this.fundamentosPracticos = this.fundamentosPracticos.find(item => item.id_bell == this.belt.id);
  this.fundamentosBasicos = this.fundamentosBasicos.find(item => item.id_bell == this.belt.id);
  // ELIMINAMOS EL id_bell DE LOS FUNDAMENTOS BASICOS
  this.fundamentosBasicos = this.fundamentosBasicos.fundamentos;
  this.numeros = this.numeros.numeros;
  this.bodyParts = this.bodyParts.bodyParts;
  this.generalVocabulary = this.generalVocabulary.vocabulary;
  this.aspectsToImproveForms = this.aspectsToImproveForms;
  this.cinturonesValoresTaekwondo = this.cinturonesValoresTaekwondo;
  this.AcademiaFenix = this.AcademiaFenix;
  this.NowTaek = this.NowTaek;
  this.HonorTaek = this.HonorTaek;
  //ordenar el array de fundamentos por seccion
  this.fundamentosPorSeccion = this.fundamentosBasicos.reduce((acc, item) => {
    if (!acc[item.section]) {
      acc[item.section] = [];
    }
  if(item.description == null) item.description = '';
  acc[item.section].push(item.name + (item.description ? ' - ' + item.description : ''));
    return acc;
  }, {});
  
  if(this.belt.id == 2) {
    //solo agarrar las primeras dos taeguks
    this.taeguks = this.taeguks.slice(0, 2);
  } else if (this.belt.id == 3) {
    this.taeguks = this.taeguks.slice(0, 4);
  } else if (this.belt.id == 4) {
    this.taeguks = this.taeguks.slice(0, 8);
  } else if (this.belt.id == 5) {
    this.taeguks = this.taeguks.slice(0, 8);
  }
},
computed: {
  cinturonesValoresTaekwondoConTitulo() {
    let foundFirstValor = false;
    let foundFirstCinturon = false;
    let foundFirstSig = false;
    return this.cinturonesValoresTaekwondo.map(item => {
      if (item.description === 'valor' && !foundFirstValor) {
        foundFirstValor = true;
        return { ...item, isFirstValor: 1 };
      } else if (item.description !== 'valor' && item.description != 'sig' && !foundFirstCinturon) {
        foundFirstCinturon = true;
        return { ...item, isFirstValor: 2 };
      } else if (item.description === 'sig' && !foundFirstSig) {
        foundFirstSig = true;
        return { ...item, isFirstValor: 3 };
      }
      return { ...item, isFirstValor: false };
    });
  },
  fundamentosAgrupados() {
    return [
      {
        type: 'Defensas',
        items: this.fundamentosPorSeccion.Defensas
      },
      {
        type: 'Golpes',
        items: this.fundamentosPorSeccion.Golpes
      },
      {
        type: 'Patadas',
        items: this.fundamentosPorSeccion.Patadas
      },
      {
        type: 'Posiciones',
        items: this.fundamentosPorSeccion.Posiciones
      }
    ];
  }
},
methods: {
  onLoadFinished(args) {
    const webview = args.object;
    if (webview.android) {
      webview.android.getSettings().setBuiltInZoomControls(false);
      webview.android.getSettings().setJavaScriptEnabled(true);
      webview.android.getSettings().setSupportZoom(false);
      webview.android.getSettings().setUseWideViewPort(true);
      webview.android.getSettings().setLoadWithOverviewMode(true);
  
      const WebViewClient = android.webkit.WebViewClient.extend({
        shouldOverrideUrlLoading: function(view, url) {
          utils.openUrl(url);
          return true;
        }
      });
  
      const WebChromeClient = android.webkit.WebChromeClient.extend({
        onShowCustomView: function(view, callback) {
          if (this.mCustomView != null) {
            callback.onCustomViewHidden();
            return;
          }
  
          this.mCustomView = view;
          this.mCustomViewCallback = callback;
        },
        onHideCustomView: function() {
          if (this.mCustomView == null) {
            return;
          }
  
          this.mCustomView.setVisibility(android.view.View.GONE);
          this.mCustomViewCallback.onCustomViewHidden();
          this.mCustomView = null;
        }
      });
  
      webview.android.setWebViewClient(new WebViewClient());
      webview.android.setWebChromeClient(new WebChromeClient());
    }
  },
  onDrawerButtonTap() {
    utils.showDrawer();
  },
  onCategorySelected(index) {
    this.currentSectionIndex = index.value;
    this.selectedCategoryId = this.categories[index.value].id;
    //this.filterInfo = this.info.filter(item => item.id_category === this.selectedCategoryId && (this.belt.id == item.id_bell || item.id_bell == 0));
  },
  goToNextSection() {
    if (this.currentSectionIndex < this.categories.length - 1) {
      this.currentSectionIndex++;
      this.showWebView = false;
      this.selectedCategoryId = this.categories[this.currentSectionIndex].id;
      this.$nextTick(() => {
        const scrollView = this.$refs.scrollView.nativeView;
        const selectedCategoryIndex = this.categories.findIndex(category => category.id === this.selectedCategoryId) * 2.5;
        const itemWidth = scrollView.getMeasuredWidth() / this.categories.length;
        scrollView.scrollToHorizontalOffset(selectedCategoryIndex * itemWidth, true);
        const listview = this.$refs.listview.nativeView;
        listview.scrollToIndex(0);
        this.showWebView = true;
      });
    }
  },
  goToPreviousSection() {
    if (this.currentSectionIndex > 0) {
      this.currentSectionIndex--;
      this.showWebView = false;
      this.selectedCategoryId = this.categories[this.currentSectionIndex].id;
      this.$nextTick(() => {
        const scrollView = this.$refs.scrollView.nativeView;
        const selectedCategoryIndex = this.categories.findIndex(category => category.id === this.selectedCategoryId) * 2.5;
        const itemWidth = scrollView.getMeasuredWidth() / this.categories.length;
        scrollView.scrollToHorizontalOffset(selectedCategoryIndex * itemWidth, true);
        const listview = this.$refs.listview.nativeView;
        listview.scrollToIndex(0);
        this.showWebView = true;
      });
    }
  }
}
};
</script>

<style scoped lang="scss">
@import '@nativescript/theme/scss/variables/blue';
@import '../style/styles.scss';
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
.title {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
}

.content {
  font-size: 16px;
  line-height: 1.5;
  text-align: justify;
}
</style>
