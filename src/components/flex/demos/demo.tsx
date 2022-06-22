import React from "react";
import { Flex } from 'kf-ui'
import './index.less'

function Demo (){
    return <div className="demo-flex">
        <p className="demo-flex-title" ></p>
        <div className="demo-flex-content">
            <Flex gutter={10}>
                <Flex.Item span={8}>
                    <span style={{
                        fontSize:14,
                        width:'100%',
                        display:'inline-block',
                        background:'red'
                    }}>你好1</span> 
                </Flex.Item>
                <Flex.Item span={8}>
                    <span style={{
                        fontSize:14,
                        width:'100%',
                        display:'inline-block',
                        background:'red'
                    }}>你好2</span> 
                </Flex.Item>
                <Flex.Item span={8}>
                    <span style={{
                        fontSize:14,
                        width:'100%',
                        display:'inline-block',
                        background:'red'
                    }}>你好3</span> 
                </Flex.Item>
            </Flex>
        </div>
    </div>
}

export default Demo