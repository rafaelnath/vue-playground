<template>
  <div id="app">
    <product-list-one></product-list-one>
    <product-list-two></product-list-two>
    <bpi-api></bpi-api>
  </div>
</template>

<script>
import ProductListOne from './components/ProductListOne.vue';
import ProductListTwo from './components/ProductListTwo.vue';
import bpiApi from './components/BPI-api.vue';

export default {
  name: 'app',
  components:{
    'product-list-one': ProductListOne,
    'product-list-two': ProductListTwo,
    'bpi-api' : bpiApi,
  },
  data () {
    return {

    }
  }
}
</script>

<style>

</style>
