import Vue from 'vue'
import VueRouter from 'vue-router'
import Quasar, { QAvatar, QBtn, QCard, QCardSection, QExpansionItem, QFooter, QForm, QHeader, QIcon, QImg, QInput,
  QItem, QItemLabel, QItemSection, QLayout, QLinearProgress, QList, QPage, QPageContainer, QParallax, QSpace, QToolbar,
  QToolbarTitle, QTooltip } from 'quasar'

import App from './App.vue'
import Home from './Home.vue'
import Resume from './Resume.vue'

Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(Quasar, {
  components: {
    QAvatar, QBtn, QCard, QCardSection, QExpansionItem, QFooter, QForm, QHeader, QIcon, QImg, QInput, QItem, QItemLabel,
    QItemSection, QLayout, QLinearProgress, QList, QPage, QPageContainer, QParallax, QSpace, QToolbar, QToolbarTitle,
    QTooltip
  },
  config: {
    brand: {
      primary: '#36877f',
      secondary: '#2e3a82',
      accent: '#f08969',

      positive: '#61c9ac',
      negative: '#c10015',
      info: '#3298db',
      warning: '#f5ea53'
    }
  }
});

const NotFound = { template: '<p>Page not found</p>' };
const routes = [
  { path: '/', component: Home },
  { path: '/jguertin', component: Resume }
];

const router = new VueRouter({
  mode: 'history',
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
      // TODO this isn't used, 404 isn't currently working
      return routes[this.currentRoute] || NotFound
    }
  },
  render: h => h(App)
}).$mount('#app');
