<template>
  <div id="product-list-one">
    <h2>Product List One</h2>
    <ul>
      <li v-for="product in saleProducts">
        <span class="name">{{product.name}}</span>
        <span class="price">${{product.price}}</span>
      </li>
    </ul>

    <button @click="reducePrice(4)">Reduce Price</button>
    <button @click="showSwal">click for fun</button>
  </div>
</template>
<script>
import {mapGetters} from 'vuex';
import {mapActions} from 'vuex';
import Swal from 'sweetalert2';
import {Toast} from '../main';



  export default{
    computed:{
      products(){
        return this.$store.state.products; //access state from store, and grabbing 'products' property
      },
      ...mapGetters([
        'saleProducts',
      ])
    },
    methods:{
      ...mapActions([
        'reducePrice',
      ]),
      showSwal(){
        Toast.fire({
          type:'success',
          title:'swal mixin succeed'
        })
        // Swal.fire({
        //   html:'<p style="color: #F0F0F0;font-family:Verdana, Geneva, sans-serif;padding:0 15px;">achievement unlocked!</p>',
        //   type: 'success',
        //   toast:true,
        //   timer:800,
        //   position: 'top-end',
        //   showConfirmButton: false,
        //   background:'#2B2A2B'
        // })
      }
    }
  }
</script>
<style scoped>

.theColor{
  background-color: black;
}
#product-list-one{
  background: #FFF8B1;
  box-shadow: 1px 2px 3px rgba(0,0,0,0.2);
  margin-bottom: 30px;
  padding: 10px 20px;
}
#product-list-one ul{
  padding: 0;
}
#product-list-one li{
  display: inline-block;
  margin-right: 10px;
  margin-top: 10px;
  padding: 20px;
  background: rgba(255,255,255,0.7);
}
.price{
  font-weight: bold;
  color: #E8800C;
}
</style>
