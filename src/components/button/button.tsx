import React, { CSSProperties, FunctionComponent, useEffect, useState } from 'react'
import {ButtonProps,} from './types'

const defaultProps: ButtonProps = {
    className: '',
    color: '',
    shape: 'square',
    plain: false,
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
        ${shape ? `${prefixCls}--${shape}` : ''}
        ${plain ? `${prefixCls}--plain` : ''}
        ${block ? `${prefixCls}--block` : ''}
        ${disabled ? `${prefixCls}--disabled` : ''}
        ${loading ? `${prefixCls}--loading` : ''}`
    }

    const getStyle = () => {
        const style: CSSProperties = {}
        if (color) {
          if (plain) {
            style.color = color
            style.background = '#fff'
            if (!color?.includes('gradient')) {
              style.borderColor = color
            }
          } else {
            style.color = '#fff'
            style.background = color
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