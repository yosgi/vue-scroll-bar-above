# vue-scroll-bar-above

> Simple Vue.js plugin for  top scroll progress bar

## 安装

```
npm i vue-scroll-bar-above --save
```

### 使用

------

##### main.js

```javascript
import Vue from 'vue'
import VueScrollBarAbove from 'vue-scroll-bar-above'
Vue.use(VueScrollBarAbove)
```

##### component

普通页面布局的使用

```vue
<!-- .vue template -->
 <VueScrollBarAbove></VueScrollBarAbove>
```

对于使用overflow-y scroll 属性的元素，需要指定elName，elName为实际滚动的元素

```vue
 <VueScrollBarAbove elName='#scroll-element'></VueScrollBarAbove>
```

或者手动设置Progress的百分比

```vue
 <VueScrollBarAbove percent='80'></VueScrollBarAbove>
```

##### 自定义样式属性

- containerColor - 容器的背景颜色
- height - 容器的高度
- backgroundColor - 内部滚动条颜色
- height - 内部滚动条的高度