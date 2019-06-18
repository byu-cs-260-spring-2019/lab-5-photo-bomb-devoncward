<template>
  <div class="home">
    <!--<img alt="Vue logo" src="../assets/login.png">-->
    <HelloWorld msg="Welcome to the login page, where you can login for absolutely no reason, Yay *_*"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>
