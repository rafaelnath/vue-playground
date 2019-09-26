import Vue from 'vue';
import Vuex from 'vuex';
import Swal from 'sweetalert2';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state:{
    products:[
      {name:'banana', price:50},
      {name:'apple', price:72},
      {name:'orange',price:51},
      {name:'coconut',price:62}
    ],
  },
  getters:{
    saleProducts: state =>{
      var saleProducts = state.products.map(product =>{
        return{
          name: '**' + product.name + '**',
          price: product.price / 2
        }
      });
      return saleProducts;
    }
  },
  mutations:{
    reducePrice: (state, payload) =>{
      state.products.forEach(product => {
        product.price -= payload;
      })
    }
  },
  actions:{
    //context is kinda like a store, it basically represents store
    //payload is refer to the data that component's method send it through the 2nd parameter
    reducePrice: (context, payload) =>{
        setTimeout(function(){
          context.commit('reducePrice',payload); //comitting a reducePrice mutation
        },2000)
        var timerInterval = null;
        Swal.fire({
          title:'updating price...',
          type:'info',
          html:'in <strong></strong> seconds',
          timer:2000,
          customClass:{
            background: 'theColor',
          },
          showConfirmButton:false,
          onBeforeOpen:()=>{
            Swal.showLoading()
            timerInterval = setInterval(()=>{
              Swal.getContent().querySelector('strong').textContent = (Swal.getTimerLeft() / 1000).toFixed(0)
            },100)
          },
          onClose:()=>{
            clearInterval(timerInterval)
          }
        }).then((result) =>{
            if(result.dismiss == Swal.DismissReason.timer){
              console.log('closed by Timer');
            }
        })
    }
  }
})
