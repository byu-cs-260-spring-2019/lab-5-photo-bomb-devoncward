<template>
  <div class="about">
    <h1 id="cleverComment">You thought you were about to get free Bitcoin... psych, It's me, PHOTO-BOMBING</h1>
    <img id="bomb" alt="Vue logo" src="../assets/bomb.jpg">
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
#cleverComment {
  text-align: center;
  font-weight: bold;
}
#bomb {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 35%;
}
</style>
