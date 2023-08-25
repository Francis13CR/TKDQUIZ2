// home.js
import * as utils from "~/shared/utils";
export default {
  data() {
    return {
      selectedBelt : null
    }
  },
    computed: {
      message() {
        return "Blank {N}-Vue app";
      },
    },
    methods: {
        onBeltsTap(event){
            this.selectedBelt = event;
            console.log(event);
        },
        onDrawerButtonTap() {
          utils.showDrawer();
        }
    },
  };
  