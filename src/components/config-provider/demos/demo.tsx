import React from "react";
import { ConfigProvider, Button } from 'kf-ui'
import './index.less'

function Demo (){
    return <div className="demo-button">
        <p className="demo-button-title" >自定义变量</p>
        <div className="demo-button-content">
        <ConfigProvider theme={{
            buttonBackgroundPrimaryColor: 'blue',
            ButtonBorderPrimaryColor: 'red'
        }}>
            <Button type="primary">我变身了</Button>
        </ConfigProvider>
        </div>
    </div>
}

export default Demo