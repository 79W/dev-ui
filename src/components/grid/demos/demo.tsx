import React from "react";
import { Grid } from 'kf-ui'
import './index.less'

function Demo (){
    return <div className="demo-grid">
        <p className="demo-grid-title">基础用法</p>
        <div className="demo-grid-content">
            <Grid gap={10} column={3} row={3}>
                <Grid.Item row={2} column={2}>1</Grid.Item>
                <Grid.Item>2</Grid.Item>
                <Grid.Item>3</Grid.Item>
                <Grid.Item>4</Grid.Item>
                <Grid.Item column={2}>5</Grid.Item>
            </Grid>
        </div>
        <p className="demo-grid-title">间隔用法</p>
        <div className="demo-grid-content">
            <Grid gap={4}>
                <Grid.Item>1</Grid.Item>
                <Grid.Item>2</Grid.Item>
                <Grid.Item>3</Grid.Item>
                <Grid.Item>4</Grid.Item>
            </Grid>
        </div>
        <p className="demo-grid-title">列数用法</p>
        <div className="demo-grid-content">
            <Grid gap={4} column={2}>
                <Grid.Item>1</Grid.Item>
                <Grid.Item>2</Grid.Item>
                <Grid.Item>3</Grid.Item>
                <Grid.Item>4</Grid.Item>
            </Grid>
        </div>
        <p className="demo-grid-title">行数用法</p>
        <div className="demo-grid-content">
            <Grid gap={4} column={2} row={3}>
                <Grid.Item row={3}>1</Grid.Item>
                <Grid.Item>2</Grid.Item>
                <Grid.Item>3</Grid.Item>
                <Grid.Item>4</Grid.Item>
            </Grid>
        </div>
        <p className="demo-grid-title">列跨度</p>
        <div className="demo-grid-content">
            <Grid gap={4}>
                <Grid.Item column={2}>1</Grid.Item>
                <Grid.Item>2</Grid.Item>
                <Grid.Item>3</Grid.Item>
                <Grid.Item>4</Grid.Item>
                <Grid.Item column={3}>5</Grid.Item>
            </Grid>
        </div>
    </div>
}

export default Demo