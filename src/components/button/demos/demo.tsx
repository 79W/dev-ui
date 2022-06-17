import React from "react";
import { Button } from 'kf-ui'
import './demo.less'

function Demo (){
    return <div className="demo">
        <p className="demo-title" >按钮类型</p>
        <div className="demo-content">
            <Button>默认按钮</Button>
            <Button type="primary">主要按钮</Button>
            <Button type="success">成功按钮</Button>
            <Button type="warning">警告按钮</Button>
            <Button type="danger">危险按钮</Button>
        </div>
        <p className="demo-title">朴素按钮</p>
        <div className="demo-content">
            <Button plain>默认按钮</Button>
            <Button plain type="primary">主要按钮</Button>
            <Button plain type="success">成功按钮</Button>
            <Button plain type="warning">警告按钮</Button>
            <Button plain type="danger">危险按钮</Button>
        </div>
        <p className="demo-title">细边按钮</p>
        <div className="demo-content">
            <Button plain type="primary" hairline>主要按钮</Button>
            <Button plain type="success" hairline>成功按钮</Button>
            <Button plain type="danger" hairline>危险按钮</Button>
        </div>
        <p className="demo-title">禁用状态</p>
        <div className="demo-content">
            <Button disabled type="primary">禁用按钮</Button>
            <Button plain disabled type="success">禁用按钮</Button>
            <Button plain disabled type="warning">禁用按钮</Button>
        </div>
        <p className="demo-title">按钮形状</p>
        <div className="demo-content">
            <Button shape="default" type="primary">圆角按钮</Button>
            <Button shape="square" type="success">方形按钮</Button>
            <Button shape="round" type="danger">圆形按钮</Button>
        </div>
        <p className="demo-title">按钮尺寸</p>
        <div className="demo-content">
            <Button size="large" type="primary">大号按钮</Button>
            <Button type="primary">普通按钮</Button>
            <Button size="small" type="success">小号按钮</Button>
            <Button size="mini" type="warning">迷你按钮</Button>
        </div>
        <p className="demo-title">块级按钮</p>
        <div>
            <Button type="primary" block>块级按钮</Button>
        </div>
        <p className="demo-title">按钮颜色</p>
        <div className="demo-content">
            <Button color="#7232dd">单色按钮</Button>
            <Button color="#7232dd" plain>单色按钮</Button>
            <Button color="linear-gradient(to right, #ff6034, #ee0a24)">渐变按钮</Button>
        </div>
        
    </div>
}

export default Demo