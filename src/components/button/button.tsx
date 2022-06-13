import React, { CSSProperties, FunctionComponent, useEffect, useState } from 'react'
import {ButtonProps,} from './types'

const defaultProps: ButtonProps = {
    className: '',
    color: '',
    shape: 'default',
    plain: false,
    hairline: false,
    loading: false,
    disabled: false,
    type: 'default',
    size: 'normal',
    block: false,
    icon: '',
    style: {},
    children: undefined,
    onClick: (e: MouseEvent) => {},
}

export const Button:FunctionComponent<Partial<ButtonProps>> = ((props) => {
    const {
        color,
        shape,
        plain,
        hairline,
        loading,
        disabled,
        type,
        size,
        block,
        icon,
        children,
        onClick,
        className,
        style,
        ...rest
    } = {
        ...defaultProps,
        ...props
    }

    const [btnName, setBtnName] = useState('')
    const [btnStyle, setBtnStyle] = useState({})
    
    useEffect(() => {
        setBtnName(classes())
        setBtnStyle(getStyle())
    }, [
        className,
        color,
        shape,
        plain,
        loading,
        disabled,
        style,
        type,
        size,
        block,
        icon,
        children,
        onClick,
    ])

    const classes = () => {
        const prefixCls = 'aunt-button'
        return `${prefixCls} ${type ? `${prefixCls}--${type}` : ''}
        ${size ? `${prefixCls}--${size}` : ''}
        ${shape ? `${prefixCls}--shape--${shape}` : ''}
        ${plain ? `${prefixCls}--plain` : ''}
        ${block ? `${prefixCls}--block` : ''}
        ${disabled ? `${prefixCls}--disabled` : ''}
        ${loading ? `${prefixCls}--loading` : ''}
        ${hairline ? `${prefixCls}--hairline` : ''}`
    }

    const getStyle = () => {
        const style: CSSProperties = {}
        if (color) {
            style.color = plain ? color : '#fff';
            style.background = !plain ? color : '#fff';
          if (color?.includes('gradient')) {
            style.borderWidth = 0
          }else{
            style.borderColor = color
          }
        }
        return style
    }

    const handleClick = (e: any) => {
        if (!loading && !disabled && onClick) {
          onClick(e)
        }
    }

    return <div 
        className={`${btnName} ${className}`}
        style={{ ...btnStyle, ...style }}   
        {...rest}
        onClick={(e) => handleClick(e)}
    >
        {children}
    </div>
})


Button.defaultProps = defaultProps
Button.displayName = 'AuntButton'