import sass from './sass/main.scss';
import Vue from 'vue'
import Main from './Main.vue';
import { User } from './User.js';
let config = require('./configuration.js');

let user = new User();
config.beta = 789;

console.log("coucou c'est moi");
console.log(user, config);

new Vue({
    el: '#app',
    template: '<Main/>',
    components: { Main: Main }
})
