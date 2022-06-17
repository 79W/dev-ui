import React from "react";
import {AuntIconActivity,AuntIconAlertOctagon,AuntIconLoader,AuntIconFileMinus} from 'kf-ui'


function Demo (){
    return <div style={{padding:10,}}>
        <h2 style={{fontSize:20,color:'#333'}}>基础使用</h2>
        <div style={{
            display:'flex',
            alignItems:'center',
            justifyContent:'space-between',
            flexWrap:'wrap'
        }}>
            <div style={{
                    width:60,
                    height:60,
                    background:'#fff',
                    display:'flex',
                    alignItems:'center',
                    justifyContent:'center',
                    margin:5,
                    borderRadius:10,
                    cursor:'pointer'
                }} >
                    <AuntIconActivity /> 
            </div>
        </div>
        <h2 style={{fontSize:20,color:'#333'}}>图标颜色</h2>
        <div style={{
            display:'flex',
            alignItems:'center',
            flexWrap:'wrap'
        }}>
            <div style={{
                    width:60,
                    height:60,
                    background:'#fff',
                    display:'flex',
                    alignItems:'center',
                    justifyContent:'center',
                    margin:5,
                    borderRadius:10,
                    cursor:'pointer'
                }} >
                    <AuntIconActivity color="#f44336" />
                    
            </div>
            <div style={{
                    width:60,
                    height:60,
                    background:'#fff',
                    display:'flex',
                    alignItems:'center',
                    justifyContent:'center',
                    margin:5,
                    borderRadius:10,
                    cursor:'pointer'
                }} >
                    <AuntIconAlertOctagon color="#3f45ff" />
            </div>
        </div>
        <h2 style={{fontSize:20,color:'#333'}}>图标旋转</h2>
        <div style={{
            display:'flex',
            alignItems:'center',
            flexWrap:'wrap'
        }}>
            <div style={{
                    width:60,
                    height:60,
                    background:'#fff',
                    display:'flex',
                    alignItems:'center',
                    justifyContent:'center',
                    margin:5,
                    borderRadius:10,
                    cursor:'pointer'
                }} >
                    <AuntIconLoader spin />
            </div>
            <div style={{
                    width:60,
                    height:60,
                    background:'#fff',
                    display:'flex',
                    alignItems:'center',
                    justifyContent:'center',
                    margin:5,
                    borderRadius:10,
                    cursor:'pointer'
                }} >
                    <AuntIconFileMinus spin />
            </div>
        </div>
    </div>
}

export default Demo