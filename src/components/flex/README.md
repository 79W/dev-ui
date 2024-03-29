# Flex 布局
<code hidden src="./demos/demo.tsx"></code>

## 介绍
Flex 组件是 CSS flex 布局的一个封装。

## 使用

```tsx
import { Flex } from 'aunt';
```

### 基础用法
Flex 组件提供了24列栅格。使用单一的一组 Flex 和 Flex.Item 栅格组件，就可以创建一个基本的栅格系统，所有列（Flex.Item）必须放在 Flex 内。

<code src="./demos/demo-base.tsx"></code>

### 区域间隔
通过gutter属性可以设置列元素之间的间距，默认间距为 0; 如果需要垂直间距，可以写成数组形式 [水平间距, 垂直间距]

<code src="./demos/demo-gutter.tsx"></code>

### 方向
通过direction属性设置弹性布局方向。默认是 row

<code src="./demos/demo-direction.tsx"></code>

## 参数
### Flex
| 参数 | 说明 | 类型 | 默认值 | 
| ---- | ---- | ---- | ------ |
| direction |   项目定位方向，可选值为 row row-reverse column column-reverse   |    `string`    | `row`  |   
| wrap | 子元素的换行方式，可选值为 nowrap wrap wrap-reverse | `string`  | `nowrap` |  
| gutter | 列元素之间的间距。可以使用数组形式同时设置 [水平间距, 垂直间距] | `number \| array` |   `0`  | 
| align | 垂直对齐方式，可选值为 start center end baseline stretch |  `string`  | `start`   | 
| justify | 水平排列方式，可选值为 start end center around between |  `string` | `start`  | 

### Flex.item
| 参数 | 说明 |  类型 | 默认值 |
| ---- | ---- | ---- | ------ |
| flex |   flex 布局属性   |       `string \| number`    | `-`   |
| span | 栅格占位格数，为 0 时相当于 display: none |   `number`  | `-`   |