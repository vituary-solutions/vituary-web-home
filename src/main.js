import Vue from 'vue'
import VueRouter from 'vue-router'
import Quasar, { QAvatar, QBtn, QCard, QCardSection, QExpansionItem, QIcon, QItem, QItemLabel, QItemSection, QLinearProgress, QList, QParallax, QSpace, QToolbar, QToolbarTitle, QTooltip } from 'quasar'

import App from './App.vue'
import Home from './Home.vue'
import Resume from './Resume.vue'

Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(Quasar, {
  components: {
    QToolbar,
    QToolbarTitle,
    QAvatar,
    QBtn,
    QCard,
    QCardSection,
    QExpansionItem,
    QIcon,
    QItem,
    QItemLabel,
    QItemSection,
    QLinearProgress,
    QList,
    QParallax,
    QSpace,
    QTooltip
  }
});

const NotFound = { template: '<p>Page not found</p>' }
const routes = [
  { path: '/', component: Home },
  { path: '/jguertin', component: Resume }
];

const router = new VueRouter({
  routes,
  // eslint-disable-next-line
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
});

new Vue({
  name: 'app',
  router,
  data: {
    currentRoute: window.location.pathname
  },
  computed: {
    ViewComponent () {
      return routes[this.currentRoute] || NotFound
    }
  },
  render: h => h(App)
}).$mount('#app');
