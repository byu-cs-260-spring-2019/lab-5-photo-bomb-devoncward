<template>
<div>
  <div v-if="user" class="header">
    <div>
      <h1 id="congrats"> HORRAY YOU LOGGED IN!!!! </h1>
      <h2>{{user.email}}</h2>
      <p><button @click="logout" class="pure-button pure-button-primary">Logout</button></p>
    </div>
    <div class="button">
      <!--<p><button @click="logout" class="pure-button pure-button-primary">Logout</button></p>-->
    </div>
    <img id="unlockImg" alt="Vue logo" src="../assets/Unlock.png">
  </div>
  <div v-else>
    <router-link to="/register" class="pure-button">Register</router-link> or
    <router-link to="/login" class="pure-button">Login</router-link>
  </div>
  <br>
  <br>
  <br>
  <h1> Please enter your password again below </h1>
  <br>
  <div>
    <form>
      <input v-model="addedMessage" placeholder="Your password please">
    </form>
    <button v-on:click="addMessage" id="happyButton">
      Click Me *_*
    </button>
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
  data: function() {
    return {
      addedMessage: '',
    }
  },
  computed: {
    user() {
      return this.$store.state.user;
    }
  },
  created() {
    this.$store.dispatch("getUser");
  },
  methods: {
    async logout() {
      try {
        this.error = await this.$store.dispatch("logout");
      } catch (error) {
        console.log(error);
      }
    },
    addMessage: function () {
      if (this.addedMessage !== '') {
        db.collection('items').add({
          title: this.addedMessage,
          created_at: Date.now()
        }).then((response) => {
          if (response) {
          this.addedMessage = ''
        }
      }).catch((error) => {
        console.log(error);
      })
      } else {
        this.errors = 'Please enter some text'
      }
    },
  }
}
</script>

<style scoped>
.passwordDisplay {
  color: #FF5733;
  font-weight: bold;
}

#passwordShow {
}

.pure-button {
  margin: 0px 20px;
}

.header {
  display: flex;
}

.header .button {
  margin-left: 50px;
  order: 2;
}

.disclaimer {
  display: inline;
}

#congrats {
  color: black;
  font-weight: bold;
}

#happyButton {
  background-color: #008CBA;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  font-weight: bold;
}
#unlockImg {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 35%;
}

</style>
