import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase';

Vue.config.productionTip = false;

var firebaseConfig = {
  apiKey: "AIzaSyAkxhMMCKdZdmA1c28e9VaPnHxx380JsAI",
    authDomain: "cs260lab3devoncward.firebaseapp.com",
    databaseURL: "https://cs260lab3devoncward.firebaseio.com",
    projectId: "cs260lab3devoncward",
    storageBucket: "cs260lab3devoncward.appspot.com",
    messagingSenderId: "206338887198",
    appId: "1:206338887198:web:2e066fc07b513268"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();

firebase.auth().onAuthStateChanged(user => {
  if(user){
    store.commit('setUser',user);
  }
  else {
    store.commit('setUser',null);
  }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
