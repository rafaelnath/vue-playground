
    <template>
      <div id="app">
        <img alt="Vue logo" src="../../assets/logo.png">
        <hello-world @changeMsgEmit="setMsg" :msg="welcomeMsg"/>
      </div>
    </template>

    <script>
    import HelloWorld from './HelloWorld.vue';
    export default {
      name: "emitDemo",
      data() {
        return {
          welcomeMsg:'hi there!',
        }
      },
      components: {
        HelloWorld
      },
      methods: {
        setMsg(msg){
          this.welcomeMsg = msg;
        }
      }
    };
    </script>
    <!-- Add "scoped" attribute to limit CSS to this component only -->
    <style scoped>

    #app {
      font-family: "Avenir", Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-align: center;
      color: #2c3e50;
      margin-top: 60px;
    }
    </style>
