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
        <ListView for="(section, index) in filterInfo" height="80%">
          <v-template >
            <StackLayout >
              <Label :text="section.name" class="section-title text-center" margin="10" />
              <WebView  disableZoom:true builtInZoomControls="false" :src="section.text" class="text-center text-secondary m0"   backgroundColor="transparent"/>
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
  import * as utils from "~/shared/utils";
  import { categories } from '../data/taekwondo-data.js';
  import { info }  from '../data/taekwondo-data.js';
  export default {
    props: ['belt'],
    data() {
        return {
            categories: categories,
            selectedCategoryId: 1,
            info: info,
            currentSectionIndex: 0,
            filterInfo : [],
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
              this.selectedCategoryId = this.categories[this.currentSectionIndex].id;
              this.$nextTick(() => {
                  const scrollView = this.$refs.scrollView.nativeView;
                  const selectedCategoryIndex = this.categories.findIndex(category => category.id === this.selectedCategoryId) * 2.5;
                  const itemWidth = scrollView.getMeasuredWidth() / this.categories.length;
                  scrollView.scrollToHorizontalOffset(selectedCategoryIndex * itemWidth, true);
              });
          }
        },
        goToPreviousSection() {
          if (this.currentSectionIndex > 0) {
            this.currentSectionIndex--;
            this.selectedCategoryId = this.categories[this.currentSectionIndex].id;
            this.$nextTick(() => {
              const scrollView = this.$refs.scrollView.nativeView;
              const selectedCategoryIndex = this.categories.findIndex(category => category.id === this.selectedCategoryId) * 2.5;
              const itemWidth = scrollView.getMeasuredWidth() / this.categories.length;
              scrollView.scrollToHorizontalOffset(selectedCategoryIndex * itemWidth, true);
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
