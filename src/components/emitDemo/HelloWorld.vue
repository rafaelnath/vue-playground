
    <template>
      <div class="hello">
        <h3>{{msg}}</h3>
        <input type="text" v-model="welcomeMsg" />
        <button @click="changeMsg">change message</button>
      </div>
    </template>

    <script>
    /* eslint-disable */
    export default {
      name: "HelloWorld",
      data() {
        return {
          welcomeMsg:'',
        }
      },
      props: {
        msg: String
      },
      methods: {
        changeMsg(){
          this.$emit("changeMsgEmit", this.welcomeMsg);
          console.log("emit trigerred: " + this.welcomeMsg);
        }
      }
    };
    </script>
    <!-- Add "scoped" attribute to limit CSS to this component only -->
    <style scoped>
    h3 {
      margin: 40px 0 0;
    }
    ul {
      list-style-type: none;
      padding: 0;
    }
    li {
      display: inline-block;
      margin: 0 10px;
    }
     {
      acolor: #42b983;
    }
    </style>
