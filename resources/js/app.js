
require('./bootstrap');
window.Vue = require('vue');

//editor
import 'v-markdown-editor/dist/v-markdown-editor.css';
import Editor from 'v-markdown-editor'
// global register
Vue.use(Editor);

//VueX
import Vuex from 'vuex'
Vue.use(Vuex)

import storeData from "./store/index.js"
const store = new Vuex.Store(
        storeData
)

//support moment js
import {filter} from './filter'

//vue router
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import {routes} from "./routes.js";

Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('admin-main', require('./components/admin/adminMaster.vue').default);

Vue.component('home-main', require('./components/public/publicMaster.vue').default);

//v-form
import Vue from 'vue'
import { Form, HasError, AlertError } from 'vform'
 

Vue.component(HasError.name, HasError)
Vue.component(AlertError.name, AlertError)
window.Form = Form;

//sweet alert2
import Swal from 'sweetalert2'

window.Swal = Swal;
const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    onOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })

window.Toast = Toast
  
const router = new VueRouter({
    routes, // short for `routes: routes`
   mode: 'hash',
})


const app = new Vue({
    el: '#app',
    router,
    store
});
