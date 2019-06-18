<template>
  <div class="bonus">
    <div>
      <h1 class="passwordDisplay"> All the passwords for all the users are: </h1>
      <div id="passwordShow" v-for="item in this.$store.getters.getItems" :key="item.id">
       {{ item.title }}
       <hr />
     </div>
     <br>
     <br>
     <h1 class="passwordDisplay"> You thought all the passwords were safe... you were wrong </h1>
    </div>
  </div>
</template>

<script>
import { db } from '@/main'
const axios = require('axios');
export default {
  name: 'mypage',
  beforeCreate: function () {
    this.$store.dispatch('setItems')
  },
}
</script>

<style>
.passwordDisplay {
  color: #FF5733;
  font-weight: bold;
  
}
</style>
