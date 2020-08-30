## 基本概念
一本书的笔记，
### vue实例
创建一个vue实例是每一个vue app的开始，通常
一个Vue application包含两种类型的实例，根vue实例和组件实例
#### 创建根实例
`new Vue({/* options */})`
options对象描述应用，Vue.js使用它来初始化实例
## 一个简单例子
```
1. <!DOCTYPE html>
2. <html>
3. <head><title>Messages App</title></head>
4. <body>
5. <div id="app"></div>
6. <script src="https://unpkg.com/vue@2.5.13/dist/vue.js"></script>
7. <script>
8. let vm = new Vue({
9. el: '#app'
10. });
11. </script>
12. </body>
13. </html>
```
### 通过el选项装载应用到div "#app"
### 创建数据模型data
```
let vm = new Vue({
el: '#app',
data: {
messages: [],
newMessage: ''
}
});
```
### 在组件中创建数据模型使用data()
组件中必须使用函数创建模型，如果组件使用普通对象,所有的组件实例会共享此对象
```
data () {
return {
messages: [],
newMessage: ''
}
}
```
### 使用模板作为UI展示数据
使用模板有三种方式，分别是在vue现象中添加template属性，
在html挂在点钟插入模板，使用标签<script type="x-template" id="temlApp>,在把#temlApp放入到vue选项中
通常使用第二种方式<br>
```
5. <div id="app">
6. <ul>
7. <li v-for="message in messages">
8. {{ message.text }} - {{ message.createdAt }}
9. </li>
10. </ul>
11. <form v-on:submit.prevent="addMessage">
12. <textarea v-model="newMessage" placeholder="Leave a message">
13. </textarea>
14. <div><button type="submit">Add</button></div>
15. </form>
16. </div>
```
```
let vm = new Vue({
...
data: {
...
},
methods: {
addMessage (event) {
if (!this.newMessage) {return;}
this.messages.push({
text: this.newMessage, createdAt: new Date()});
this.newMessage = '';
}
}
});
```
### 计算属性
```
<button :disabled="addDisabled" type="submit">Add</button>
```
```
let vm = new Vue({
data {
...
},
computed: {
addDisabled () {
return this.messages.length >= 10 || this.newMessage.length > 50;
}
},
...
});
```
### v-cloak
避免在网页刚打开时显示模板标记
```
<head>
...
<style>
[v-cloak] {display: none;}
body > div {width: 500px; margin: 0 auto;}
textarea {width: 100%;}
ul {padding: 0 15px;}
</style>
</head>
<body>
<div id="app" v-cloak>
</div>
</body>
```
## 组件
组件是重用代码的主要方式，一个Vue组件也是一个Vue实例，它接受相同的options对象
### 模板创建与使用
components/MessageList.js<br>
```
1. export default {
2. name: 'MessageList',
3. template: `<ul>
4. <li v-for="item in items" :item="item">
5. {{ item.text }} - {{ item.createdAt }}
6. <button @click="deleteMessage(item)">X</button></li></ul>`,
7. props: {
8. items: {
9. type: Array,
10. required: true
11. }
12. },
13. methods: {
14. deleteMessage (message) {
15. this.$emit('delete', message);
16. }
17. }
18. };
```
```
<div id="app" v-cloak>
<message-list :items="messages" @delete="deleteMessage"></messagelist>
<ul>
<li v-for="message in messages">
{{ message.text }} - {{ message.createdAt }}
<button @click="deleteMessage(message)">X</button>
</li>
</ul>
...
</div>
```
组件注册到根实例<br>
```
<script type="module">
import MessageList from './components/MessageList.js';
let vm = new Vue({
...
components: {
MessageList
},
...
});
</script>
```
## 指令
directives/focus.directive.js
自定义指令<br>
```
// The following example is borrowed from
// https://vuejs.org/v2/guide/custom-directive.html
// Register a global custom directive called `v-focus`
Vue.directive('focus', {
// When the bound element is inserted into the DOM...
inserted: function (el) {
// Focus the element
el.focus();
}
});
```
```
<textarea v-focus ...></textarea>
...
<script type="module">
import MessageList from './components/MessageList.js';
import ‘./directives/focus.directive.js';
...
</script>
```
## 过滤器
filters/datetime.filter.js
```
const formatter = new Intl.DateTimeFormat('en-US', {
year: 'numeric', month: 'long', week: 'long', day: 'numeric',
hour: 'numeric', minute: 'numeric', second: 'numeric'
});
Vue.filter('datetime', function(value) {
if (!value) return '';
return formatter.format(value);
});
```
```
...
<script type="module">
...
import './filters/datetime.filter.js';
...
</script>
export default {
...
template: `<li>{{ item.text }} - {{ item.createdAt | datetime }}
<button @click="deleteClicked">X</button></li>`,
...
};
```
## Mixins
mixins/lifecycle-logger.mixin.js
```
export default {
created () {
console.log(`${this.$options.name} created`);
},
beforeMount () {
console.log(`${this.$options.name} about to mount`);
},
mounted () {
console.log(`${this.$options.name} mounted`);
},
destroyed () {
console.log(`${this.$options.name} destroyed`);
}
};
```
```
<script type="module">
...
import lifecyleLogger from './mixins/lifecycle-logger.mixin.js';
...
let vm = new Vue({
...
name: 'MessagesApp',
mixins: [lifecyleLogger],
...
});
</script>
```
```
import lifecyleLogger from '../mixins/lifecycle-logger.mixin.js';
export default {
name: 'MessageList',
mixins: [lifecyleLogger],
...
};
```
## Plugins
plugins/lifecycle-logger.plugin.js
```
const switchers = {
created: true,
beforeMount: true,
mounted: true,
destroyed: true
}
export default {
install (Vue, options) {
Object.assign(switchers, options)
Vue.mixin({
created () {
if (switchers.created) {
console.log(`${this.$options.name} created`)
}
},
beforeMount () {
if (switchers.beforeMount) {
console.log(`${this.$options.name} about to mount`)
}
},
mounted () {
if (switchers.mounted) {
console.log(`${this.$options.name} mounted`)
}
},
destroyed () {
if (switchers.destroyed) {
console.log(`${this.$options.name} destroyed`)
}
}
})
}
}
```
index.html
```
<script type="module">
...
import LifecycleLogger from './plugins/lifecycle-logger.plugin.js'
import './directives/focus.directive.js'
...
Vue.use(LifecycleLogger, {beforeMount: false})
...
</script>
```