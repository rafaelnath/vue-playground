<template>
  <div id="pg-one">
    <product-list-one></product-list-one>
    <product-list-two></product-list-two>
    <bpi-api></bpi-api>
  </div>
</template>

<script>
import ProductListOne from './ProductListOne.vue';
import ProductListTwo from './ProductListTwo.vue';
import bpiApi from './BPI-api.vue';

export default {
  name: 'PlaygroundOne',
  components:{
    // "parallax" : require("vue-parallax"),
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
