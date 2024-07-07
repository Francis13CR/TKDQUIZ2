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
      <ListView v-show="selectedCategoryId != 6 && selectedCategoryId != 13 " ref="listview" for="(section, index) in filterInfo" height="80%">
        <v-template>
          <StackLayout>
            <Label :text="section.name" class="section-title text-center" margin="10" />
            <WebView v-if="showWebView" disableZoom=true :src="section.text" class="text-center text-secondary m0" @loadFinished="onLoadFinished" backgroundColor="transparent"/>
          </StackLayout>
        </v-template>
      </ListView>
     
      <StackLayout v-show="selectedCategoryId == 6">
        <ListView for="(taeguk, index) in taeguks">
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

      <StackLayout v-show="selectedCategoryId == 13">
        <Label class="text-center text-primary section-title" textWrap="true" :text="prohibitedActions.name" />
        <ListView :items="prohibitedActions.actions">
          <v-template>
            <StackLayout orientation="vertical">
              <Label class="m-5 fs-12 text-primary" :text="item" textWrap="true" />
            </StackLayout>
          </v-template>
        </ListView>
      </StackLayout>
 
      <StackLayout orientation="horizontal" horizontalAlignment="right">
        <Button class="bg-secondary" v-show="currentSectionIndex > 0" text="Atrás" @tap="goToPreviousSection" width="50" />
        <Button class="bg-primary" text=" Siguiente " @tap="goToNextSection" width="50" /> 
      </StackLayout>
      
    </StackLayout>
  </Page>
</template>

<script>
import { categories, info, taeguks,prohibitedActions } from '../data/taekwondo-data.js';
import * as utils from "@nativescript/core/utils";

export default {
props: ['belt'],
data() {
  return {
    categories,
    selectedCategoryId: 1,
    info,
    currentSectionIndex: 0,
    filterInfo: [],
    showWebView: true,
    taeguks,
    prohibitedActions
  };
},
mounted() {
  this.onCategorySelected({ value: 0 });
  this.prohibitedActions = this.prohibitedActions[0]
  console.log(this.belt.id, this.prohibitedActions[0]);
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
    this.filterInfo = this.info.filter(item => item.id_category === this.selectedCategoryId && (this.belt.id == item.id_bell || item.id_bell == 0));
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
</style>
