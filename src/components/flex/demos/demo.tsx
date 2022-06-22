import React from "react";
import { Flex } from '../../../index'
import './index.less'

function Demo (){
    return <div className="demo-flex">
        <p className="demo-flex-title" >基础用法</p>
        <div className="demo-flex-content">
            <Flex justify="center" align="center">
                <Flex.Item span={12}>span: 12</Flex.Item>
                <Flex.Item span={12}>span: 12</Flex.Item>
            </Flex>
            
            <Flex>
                <Flex.Item span={8}>span: 8</Flex.Item>
                <Flex.Item span={8}>span: 8</Flex.Item>
                <Flex.Item span={8}>span: 8</Flex.Item>
            </Flex>
        </div>
        <p className="demo-flex-title" >区域间隔</p>
        <div className="demo-flex-content">
            <Flex gutter={16}>
                <Flex.Item span={8}>span: 8</Flex.Item>
                <Flex.Item span={8}>span: 8</Flex.Item>
                <Flex.Item span={8}>span: 8</Flex.Item>
            </Flex>
        </div>
        <p className="demo-flex-title" >方向</p>
        <div className="demo-flex-content">
            <Flex direction="row">
                <Flex.Item span={8}>span: 8-1</Flex.Item>
                <Flex.Item span={8}>span: 8-2</Flex.Item>
                <Flex.Item span={8}>span: 8-3</Flex.Item>
            </Flex>
            <Flex direction="row-reverse">
                <Flex.Item span={8}>span: 8-1</Flex.Item>
                <Flex.Item span={8}>span: 8-2</Flex.Item>
                <Flex.Item span={8}>span: 8-3</Flex.Item>
            </Flex>
        </div>
    </div>
}

export default Demo