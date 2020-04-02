import Vue from 'vue';
import App from './App.vue';
import VueTimeago from 'vue-timeago';
import 'tachyons/css/tachyons.min.css';
import './styles/material-icons.css';

Vue.config.productionTip = false;

Vue.use(VueTimeago, {
  name: 'Timeago', // Component name, `Timeago` by default
  locale: 'en' // Default locale
});

new Vue({
  render: h => h(App)
}).$mount('#app');
