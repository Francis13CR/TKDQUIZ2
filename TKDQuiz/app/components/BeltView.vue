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
          <SegmentedBar   v-model="currentSectionIndex" @selectedIndexChange="onCategorySelected">
              <SegmentedBarItem v-for="(category, index) in categories" :key="category.id" :title="category.name" class="text-center"/>
          </SegmentedBar>
        </ScrollView>
        <ListView ref="listview" for="(section, index) in filterInfo" height="80%">
          <v-template >
            <StackLayout >
              <Label :text="section.name" class="section-title text-center" margin="10" />
              <WebView  v-if="showWebView" disableZoom:true builtInZoomControls="false" :src="section.text" class="text-center text-secondary m0" @loadFinished="onLoadFinished"  backgroundColor="transparent"/>
              <!-- <StackLayout v-for="(video, index) in section.videos" id="videos" >
                <Label :text="video.title" class="section-title text-center" margin="10" />
                <WebView :src="video.url" height="300" />
              </StackLayout> -->
              
            </StackLayout>
          </v-template>
        </ListView>
        <StackLayout orientation="horizontal" horizontalAlignment="right">
          <Button class="bg-secondary"  v-show="currentSectionIndex > 0" text="Atrás" @tap="goToPreviousSection" witdh="50" />
        <Button class="bg-primary" text=" Siguiente " @tap="goToNextSection" witdh="50" /> 
        </StackLayout>
        
        
      </StackLayout>

      
    </Page>
</template>

<script>
 
  import { categories } from '../data/taekwondo-data.js';
  import { info }  from '../data/taekwondo-data.js';
  import * as utils from "@nativescript/core/utils";
  export default {
    props: ['belt'],
    data() {
        return {
            categories: categories,
            selectedCategoryId: 1,
            info: info,
            currentSectionIndex: 0,
            filterInfo : [],
            showWebView: true
        }
    },
    mounted() {
        console.log(this.belt.id)
     // SelectedPageService.getInstance().updateSelectedPage("Featured");
    },
    computed: {
      message() {
        return this.belt;
      }
    },
    methods: {
      onLoadFinished(args) {
        const webview = args.object;
        if (webview.android) {
            webview.android.getSettings().setBuiltInZoomControls(false);
            //abrir los links fuera del webview
            webview.android.getSettings().setJavaScriptEnabled(true);
            webview.android.getSettings().setSupportZoom(false);
            const WebViewClient = android.webkit.WebViewClient.extend({
              shouldOverrideUrlLoading: function(view, url) {
                utils.openUrl(url);
                return true;
              },
            });
            webview.android.setWebViewClient(new WebViewClient());
            }
      },
        onDrawerButtonTap() {
            utils.showDrawer();
        },
        onCategorySelected(index) {
            this.currentSectionIndex = index.value;
            this.selectedCategoryId = this.categories[index.value].id;
            this.filterInfo = this.info.filter(item => item.id_category === this.selectedCategoryId &&  (this.belt.id == item.id_bell || item.id_bell == 0) );
        },
        goToNextSection() {
          if (this.currentSectionIndex < this.categories.length - 1) {
              this.currentSectionIndex++;
              //eliminar el webview existente
              this.showWebView = false;

              this.selectedCategoryId = this.categories[this.currentSectionIndex].id;
              this.$nextTick(() => {
                  const scrollView = this.$refs.scrollView.nativeView;
                  const selectedCategoryIndex = this.categories.findIndex(category => category.id === this.selectedCategoryId) * 2.5;
                  const itemWidth = scrollView.getMeasuredWidth() / this.categories.length;
                  scrollView.scrollToHorizontalOffset(selectedCategoryIndex * itemWidth, true);
                  //subir el scroll al inicio del webview dentro del listview
                  const listview = this.$refs.listview.nativeView;
                  listview.scrollToIndex(0);
                  //volver a mostrar el webview
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
    // Start custom common variables
    @import '@nativescript/theme/scss/variables/blue';
    // End custom common variables
    @import '../style/styles.scss';
    // Custom styles
</style>
