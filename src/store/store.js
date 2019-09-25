import Vue from 'vue';
import Vuex from 'vuex';

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
    }
  }
})
