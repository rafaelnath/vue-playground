<template>
  <div id="scroll-handler" class="content">
    <h1>Just a test. {{this.scrolPos}}</h1>
    <p :class="{scrolled: this.scrolPos > 113}" style="width: 200px">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris blandit dictum erat eu commodo. Phasellus maximus elementum purus a convallis. Suspendisse fermentum sem ut velit congue, nec euismod nulla rutrum. Donec elementum sodales mi eu auctor. Fusce eget metus suscipit, consectetur tellus a, porta dolor. Cras maximus aliquet odio, in fringilla leo. Maecenas sed malesuada ligula. Donec accumsan massa eu lorem eleifend congue. Curabitur tristique in ex vel rutrum. Vestibulum elementum risus lobortis egestas pretium. Sed sed tempor lacus. Cras tincidunt luctus mauris, eu faucibus orci dapibus id. Sed vitae purus et sem venenatis eleifend sit amet varius velit.
Fusce nec sapien at neque dignissim lacinia at et eros. Cras hendrerit nibh eros, eget vehicula massa faucibus a. Donec feugiat sapien at volutpat egestas. Donec malesuada molestie sapien, vel tincidunt tellus tempus vitae. Sed consectetur diam neque, a efficitur augue tristique ut. Duis laoreet vulputate ex. Duis eget volutpat lorem. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent lacinia eget nunc quis tempor. Morbi aliquam neque vitae dolor scelerisque porta vel quis sapien. Integer faucibus sollicitudin purus, non mattis odio consequat quis. Aliquam erat volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris blandit dictum erat eu commodo. Phasellus maximus elementum purus a convallis. Suspendisse fermentum sem ut velit congue, nec euismod nulla rutrum. Donec elementum sodales mi eu auctor. Fusce eget metus suscipit, consectetur tellus a, porta dolor. Cras maximus aliquet odio, in fringilla leo. Maecenas sed malesuada ligula. Donec accumsan massa eu lorem eleifend congue. Curabitur tristique in ex vel rutrum. Vestibulum elementum risus lobortis egestas pretium. Sed sed tempor lacus. Cras tincidunt luctus mauris, eu faucibus orci dapibus id. Sed vitae purus et sem venenatis eleifend sit amet varius velit.
Fusce nec sapien at neque dignissim lacinia at et eros. Cras hendrerit nibh eros, eget vehicula massa faucibus a. Donec feugiat sapien at volutpat egestas. Donec malesuada molestie sapien, vel tincidunt tellus tempus vitae. Sed consectetur diam neque, a efficitur augue tristique ut. Duis laoreet vulputate ex. Duis eget volutpat lorem. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent lacinia eget nunc quis tempor. Morbi aliquam neque vitae dolor scelerisque porta vel quis sapien. Integer faucibus sollicitudin purus, non mattis odio consequat quis. Aliquam erat volutpat.</p>
</div>
</template>

<script>
export default {
  name: 'VueHandler',
  data () {
    return {
      scrolPos:null,
    }
  },
  methods:{
    updateScroll(){
      this.scrolPos = window.scrollY
    }
  },
  mounted(){
    window.addEventListener("scroll", this.updateScroll);
  }
}



</script>

<style lang="css">
.content{
  padding:10px;
}
.scrolled{
  color:red;
}
</style>
