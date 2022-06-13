import React from "react";
import { Button } from '../button'
import '../styles'

function Demo (){
    return <div style={{padding:10,}}>
        <h2 style={{fontSize:20,color:'#333'}}>按钮类型</h2>
        <div style={{
            
            display:'grid',
            gridGap:10,
            grid: 'auto auto auto / auto auto auto'
        }}>
            <Button>默认按钮</Button>
            <Button type="primary">主要按钮</Button>
            <Button type="success">成功按钮</Button>
            <Button type="warning">警告按钮</Button>
            <Button type="danger">危险按钮</Button>
        </div>
        <h2 style={{fontSize:20,color:'#333'}}>朴素按钮</h2>
        <div style={{
            display:'grid',
            gridGap:10,
            grid: 'auto auto auto / auto auto auto'
        }}>
            <Button plain>默认按钮</Button>
            <Button plain type="primary">主要按钮</Button>
            <Button plain type="success">成功按钮</Button>
            <Button plain type="warning">警告按钮</Button>
            <Button plain type="danger">危险按钮</Button>
        </div>
        <h2 style={{fontSize:20,color:'#333'}}>细边按钮</h2>
        <div style={{
            display:'grid',
            gridGap:10,
            grid: 'auto auto auto / auto auto auto'
        }}>
            <Button plain type="primary" hairline>主要按钮</Button>
            <Button plain type="success" hairline>成功按钮</Button>
            <Button plain type="danger" hairline>危险按钮</Button>
        </div>
        <h2 style={{fontSize:20,color:'#333'}}>按钮尺寸</h2>
        <div style={{}}>
            <Button size="large" type="primary">大号按钮</Button>
            <Button type="primary">普通按钮</Button>
            <span style={{padding:'0 5px'}}></span>
            <Button size="small" type="success">小型按钮</Button>
        </div>
        <h2 style={{fontSize:20,color:'#333'}}>按钮形状</h2>
        <div style={{}}>
            <Button size="large" shape='default' type="primary">大号按钮</Button>
            <Button type="primary" shape='round'>普通按钮</Button>
            <span style={{padding:'0 5px'}}></span>
            <Button size="small" type="success" shape='square'>小型按钮</Button>
        </div>
        <h2 style={{fontSize:20,color:'#333'}}>细边按钮</h2>
        <div style={{
            display:'grid',
            gridGap:10,
            grid: 'auto auto auto / auto auto auto'
        }}>
            <Button plain type="primary" disabled>主要按钮</Button>
            <Button type="primary" color='linear-gradient(45deg, #ff9a9e 0%, #fad0c4 99%, #fad0c4 100%)'>成功按钮</Button>
            <Button color='#333' plain type="danger">危险按钮</Button>
        </div>
    </div>
}

export default Demo