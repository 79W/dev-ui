# Space 间距

## 介绍
元素排列中保持相同的宽度，适用于多个元素按照水平或垂直方向保持相同的间距。

## 使用
```tsx
import React from "react";
import { Space } from "aunt";

export default () =>(
    <Space>
        <span>space:1</span>
        <span>space:2</span>
    </Space>
);
```

### 基础用法
```tsx
<Space>
    <span>文本1</span>
    <Button type="primary" plain>按钮2</Button>
    <Button type="success" plain>按钮3</Button>
</Space>
```



<code hidden="hidden" src="./demos/demo.tsx"></code>