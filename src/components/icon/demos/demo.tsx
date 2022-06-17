import React from "react";
import {AuntIconActivity,AuntIconAlertOctagon,AuntIconLoader,AuntIconFileMinus} from 'kf-ui'
import './index.less'

function Demo (){
    return <div className="demo-icon">
        <p className="demo-icon-title">基础使用</p>
        <div className="demo-icon-content">
            <div className="demo-icon-card" style={{
                width:60,
                height:60
            }}>
                    <AuntIconActivity /> 
            </div>
        </div>
        <p className="demo-icon-title">图标颜色</p>
        <div className="demo-icon-content">
            <div className="demo-icon-card" style={{
                width:60,
                height:60
            }}>
                    <AuntIconActivity color="#f44336" />
                    
            </div>
            <div className="demo-icon-card" style={{
                width:60,
                height:60
            }} >
                    <AuntIconAlertOctagon color="#3f45ff" />
            </div>
        </div>
        <p className="demo-icon-title">图标旋转</p>
        <div className="demo-icon-content">
            <div className="demo-icon-card" style={{
                width:60,
                height:60
            }} >
                    <AuntIconLoader spin />
            </div>
            <div className="demo-icon-card" style={{
                width:60,
                height:60
            }} >
                    <AuntIconFileMinus spin />
            </div>
        </div>
    </div>
}

export default Demo