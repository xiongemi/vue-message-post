import Vue from 'vue';
import App from './App.vue';
import 'tachyons/css/tachyons.min.css';
import './styles/material-icons.css';

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App)
}).$mount('#app');
