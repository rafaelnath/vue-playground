import Vue from 'vue'
import App from './App.vue'
import {store} from './store/store'
import Swal from 'sweetalert2'

//My Swal
export const Toast = Swal.mixin({
  // toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  padding:'0.8em',
  // grow:'fullscreen,'
  position:'center',
  allowOutsideClick:false,
});


new Vue({
  store: store,
  el: '#app',
  render: h => h(App)
})
