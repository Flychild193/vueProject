// 1.使用commonjs的模塊化規範
const {add,mul} = require('./js/mathUtils.js')

console.log(add(20,30));
console.log(mul(20,30));

// 2. 使用ES6的模塊化規範
import {name, age, height} from "./js/info";

console.log(name);
console.log(age);
console.log(height);

//3. 依賴 css文件
require('./css/normal.css')

//4. 依賴 less文件
require('./css/special.less')
document.writeln('<h2>aloha</h2>')

//5. 使用 vue進行開發
import Vue from 'vue'
//import App from './vue/app'
import App from './vue/App.vue'

//const app =    <--Vue 中可以拿掉const app
new Vue({
    el:'#app',
    template:'<App/>',
    components:{App}
})