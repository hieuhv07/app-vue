<template>
  <div id="#app1">
    <ButtonCounter></ButtonCounter>
  </div>
</template>

<script>
  import ButtonCounter from './ButtonCounter.vue'; 
  export default {
    data: function (){
      return {
        name: "app",
        components: {
          ButtonCounter
        }
      };
    }
  }
</script>
