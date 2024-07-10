import Vue from "vue";
import MonacoEditor from "vue-monaco";
import debounce from "lodash/debounce";
import VueFormRenderer from "@processmaker/screen-builder";
import DataSummary from "./components/DataSummary.vue";
import RequestDetail from "./components/RequestDetail.vue";
import RequestDetailMobile from "./components/RequestDetailMobile.vue";
import AvatarImage from "../components/AvatarImage.vue";
import RequestErrors from "./components/RequestErrors.vue";
import Timeline from "../components/Timeline.vue";
import TimelineItem from "../components/TimelineItem.vue";
import RequestScreens from "./components/RequestScreens.vue";
import NavbarRequestMobile from "./components/NavbarRequestMobile.vue";
import SummaryMobile from "./components/SummaryMobile.vue";
import FilesMobile from "./components/FilesMobile.vue";
import RequestHeaderMobile from "./components/RequestHeaderMobile.vue";
import FilterMobile from "../Mobile/FilterMobile.vue";
import FilterMixin from "../Mobile/FilterMixin";

Vue.component("DataSummary", DataSummary);
Vue.component("RequestDetail", RequestDetail);
Vue.component("RequestDetailMobile", RequestDetailMobile);
Vue.component("AvatarImage", AvatarImage);
Vue.component("RequestErrors", RequestErrors);
Vue.component("MonacoEditor", MonacoEditor);
Vue.component("Timeline", Timeline);
Vue.component("TimelineItem", TimelineItem);
Vue.component("RequestScreens", RequestScreens);
Vue.component("NavbarRequestMobile", NavbarRequestMobile);
Vue.component("SummaryMobile", SummaryMobile);
Vue.component("FilesMobile", FilesMobile);
Vue.component("RequestHeaderMobile", RequestHeaderMobile);
Vue.component("FilterMobile", FilterMobile);
Vue.mixin(FilterMixin);

Vue.use("vue-form-renderer", VueFormRenderer);
window.debounce = debounce;
