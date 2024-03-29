import React from "react";
import { BaseTypeProps } from '../../utils';

// 定义接受到的参数 类型
export interface SkeletonProps extends BaseTypeProps {
  /**
   * 段落占位图行数
   * @default 3
   */
   row?: number;
   /** 
    * 段落占位图宽度，可传数组来设置每一行的宽度	 
    */
   rowWidth?: number | string | (number | string)[];
   /** 
    * 段落占位图高度，可传数组来设置每一行的高度	 
    */
   rowHeight?: number | string | (number | string)[];
   /** 
    * 是否显示标题占位图	
    * @default false 
    */
   title?: boolean;
   /** 
    * 标题占位图宽度	 
    */
   titleWidth?: string | number;
   /** 
    * 是否将标题和段落显示为圆角风格	 
    * @default true 
    */
   round?: boolean;
   /** 
    * 是否显示骨架屏，传 false 时会展示子组件内容	 
    * @default true 
    */
   loading?: boolean;
   /** 
    * 是否开启动画	 
    * @default true 
    */
   animate?: boolean;
   /** 
    * 是否显示头像占位图
    * @default false 
    */
   avatar?: boolean;
   /** 
    * 头像占位图大小	 
    */
   avatarSize?: string | number;
   /**
    * 头像占位图形状
    * @default 'round'
    */
   avatarShape?: 'square' | 'round';
}