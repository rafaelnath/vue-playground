import pgOne from './components/pgOne/playgroundOne.vue';
import scrollHandler from './components/ScrollHandler.vue';
import emitDemo from './components/emitDemo/emitDemo.vue';

export default[
    {path:'/', component:pgOne},
    {path:'/scrollhandler',component:scrollHandler},
    {path:'/emitdemo',component:emitDemo},
  ]
