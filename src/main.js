import Vue from 'vue'
import App from './App'
import router from './router'
import BootstrapVue from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {library} from "@fortawesome/fontawesome-svg-core";
import {faPencilAlt} from "@fortawesome/free-solid-svg-icons";
import ContainerService from "./services/Container"
import {eventBus} from './utils'

Vue.use(BootstrapVue);

library.add(faPencilAlt);
Vue.component('font-awesome-icon', FontAwesomeIcon);
export const context = new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App }
});

ContainerService.startService(context);

