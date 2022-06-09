import React from "react"

// 定义按钮的Ref类型
export type ButtonRef = {
    nativeElement: HTMLButtonElement | null
}
export type ButtonType = 'default' | 'primary' | 'info' | 'success' | 'warning' | 'danger'
export type ButtonSize = 'large' | 'normal' | 'small'
export type ButtonShape = 'square' | 'round'

// 定义接受到的参数 类型
export interface ButtonProps {
    className: string
    color: string
    shape: ButtonShape
    plain: boolean
    loading: boolean
    disabled: boolean
    style: React.CSSProperties
    type: ButtonType
    size: ButtonSize
    block: boolean
    icon: string
    children: any
    onClick: (e: MouseEvent) => void
}