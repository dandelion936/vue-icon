# vue-icon

> 基于 Vue.js 的图标组件。推荐使用iconfont图标。

vue-icon 是基于 [Vue.js](https://vuejs.org/) 的 图标组件，默认使用 [iconfont](https://www.iconfont.cn/)。

[git registry](https://github.com/dandelion936/vue-icon)

## 安装

### npm（推荐方式）

npmre gistry [http://94.191.21.122:4873](http://94.191.21.122:4873)

npm换源推荐[nrm](https://github.com/Pana/nrm)

```bash
$ npm install @bzvue/icon
```

### 手动安装

直接下载 `dist/vicon.js`


## 使用方法
```js
import VIcon from '@bzvue/icon'; //npm
import VIcon from 'dist/vicon.min.js'; //手动下载

Vue.use(VIcon);
Vue.prototype.ICONCLASS = 'iconfont'; //修改图标库的类名 如果不设置默认iconfont
```

```html
<!-- font class用法 -->
<v-icon custom="icon-bug"/>
<!-- Unicode用法 -->
<v-icon Unicode="&#xe610;"/>

<!-- 添加选项 -->
<v-icon custom="icon-bug hello" size="16" color="red"></v-icon>
<v-icon Unicode="&#xe610;" size="20" color="green"></v-icon>
```

### Props

* `custom: string`

  图标类名。

* `Unicode: string`

  图标的Unicode。

* `size: string|number`

  指定图标大小。

* `color: string`

  指定图标颜色。

## 本地开发

```bash
$ npm i
$ npm run dev
```

打开 `http://localhost:8081/` 来查看 demo。
