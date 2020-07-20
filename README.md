# vue

## 基本模版
```html
<!doctype html>
<html>
<head>
	<meta charset='utf-8'>
	<title>vue</title>
</head>
<body>
	<div id='app'>
	</div>
<!-- 开发环境版本，包含了有帮助的命令行警告 -->
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<!-- 生产环境版本，优化了尺寸和速度 -->
<!-- 
<script src="https://cdn.jsdelivr.net/npm/vue"></script>
-->
<script>
	var app = new Vue({
		el: '#app',
		data: {
		},
		methods: {
		}
	});

</script>
</body>
</html>
```

## 基础
### 声明式渲染
```html
<div id='app'>
    {{ message }}
</div>
```

js
```js
let app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!'
    }
});
```

### v-bind
```html
<div id='app'>
    <span v-bind:title="message">
        悬停查看绑定信息
    </span>
    <a v-bind:href="canvas_url">CANVAS</a>
</div>
```
js
```js
let app = new Vue({
	el: '#app',
	data: {
		message: '页面加载时间：' + new Date().toLocaleString(),
		canvas_url: 'https://canvas.shenjinxiang.com',
	},
});
```

## 组件
### 创建组件

#### 方式1

```html
<div id='app'>
    <my-component></my-component>
</div>
```

```javascript
let temp = Vue.extend({
    template: '<div><h2>组件标题</h2><span>使用Vue.extends的方式</span></div>'
});
Vue.component('myComponent', temp);
let app = new Vue({
    el: '#app',
    data: {
    },
    methods: {
    }
});
```

#### 方式2

```html
<div id='app'>
    <my-component></my-component>
</div>
```

```javascript
Vue.component('myComponent', {
    template: '<div><h2>组件标题</h2><span>使用Vue.component的方式</span></div>'
});
var app = new Vue({
    el: '#app',
    data: {
    },
    methods: {
    }
});
```

#### 方式3

```html
<div id='app'>
    <my-component1></my-component1>
    <my-component2></my-component2>
</div>

<template id="temp1">
    <div>
        <h2>组件标题</h2>
        <span>使用template标签的方式</span>
    </div>
</template>

<template id="temp2">
    <div>
        <h3>三甲</h3>
        <ul>
            <li>朱元璋</li>
            <li>朱允炆</li>
            <li>朱棣</li>
        </ul>
    </div>
</template>
```

```javascript
Vue.component('myComponent1', {
    template: '#temp1'
});
Vue.component('myComponent2', {
    template: '#temp2'
});
let app = new Vue({
    el: '#app',
    data: {
    },
    methods: {
    }
});
```

