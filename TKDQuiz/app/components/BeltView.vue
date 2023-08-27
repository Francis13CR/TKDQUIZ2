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

        
        <StackLayout v-for="(section, index) in info" :key="index" v-show="selectedCategoryId == section.id_category">
            <Label :text="section.name" class="section-title" margin="10"/>
            <Label :text="section.text" class="section-text" margin="10"/>
        </StackLayout>
        <Button class="bg-primary" text="Siguiente" @tap="goToNextSection" />
       
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
            currentSectionIndex: 0
        }
    },
    mounted() {
        console.log(this.belt)
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
            console.log(this.selectedCategoryId)
        },
        goToNextSection() {
        if (this.currentSectionIndex < this.categories.length - 1) {
            this.currentSectionIndex++;
            this.selectedCategoryId = this.categories[this.currentSectionIndex].id;
            this.$nextTick(() => {
                const scrollView = this.$refs.scrollView.nativeView;
                const selectedCategoryIndex = this.categories.findIndex(category => category.id === this.selectedCategoryId) * 1.8;
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
