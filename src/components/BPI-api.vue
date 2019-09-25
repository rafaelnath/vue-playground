<template>
  <div>
    <h2>Bitcoin Price Index</h2>
    <section v-if="hasError">
      <p>We're sorry, we're not able to retrieve the information at the moment. Pls try again later</p>
    </section>
    <section v-else-if="isLoading">
      <p>Loading...</p>
    </section>

    <div v-for="currency in info">
      {{currency.description}}
      <span v-html="currency.symbol"></span>
      {{currency.rate_float | currencydecimal }}
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default{
  data(){
    return{
      info:[],
      hasError: false,
      isLoading: true,
    }
  },
  mounted(){
    axios.get('https://api.coindesk.com/v1/bpi/currentprice.json').then(
      response => {
        this.info = response.data.bpi
      }).catch(error =>{
        console.log(error)
        this.hasError = true
      }).finally(() => this.isLoading = false)
  },
  filters:{
    currencydecimal(value){
      return value.toFixed(2)
    }
  }
}
</script>

<style scoped>

</style>
