<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2 class="instructions"> There is absolutely NO photo-bombing allowed on this webpage! </h2>
    <h3 class="instructions">
      This is your home page, if you want to login, just click the myPage link on the left
    </h3>
    <br>
    <br>
    <br>
    <br>
    <img id="lockImg" alt="Vue logo" src="../assets/login.png">
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
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
a {
  color: #42b983;
}
#lockImg {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 35%;
}

.instructions {
  text-align: center;
  font-weight: bold;
}
</style>
