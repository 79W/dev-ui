import React, { CSSProperties, FunctionComponent, useEffect, useState } from 'react'
import {ButtonProps,} from './types'

const classPrefix = 'aunt-button'

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
    onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {},
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

    const [buttonClassName, setButtonClassName] = useState('')
    const [btnStyle, setBtnStyle] = useState({})
    
    useEffect(() => {
        setButtonClassName(classes())
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
        return `${classPrefix} ${type ? `${classPrefix}--${type}` : ''}
        ${size ? `${classPrefix}--${size}` : ''}
        ${shape ? `${classPrefix}--shape--${shape}` : ''}
        ${plain ? `${classPrefix}--plain` : ''}
        ${block ? `${classPrefix}--block` : ''}
        ${disabled ? `${classPrefix}--disabled` : ''}
        ${loading ? `${classPrefix}--loading` : ''}
        ${hairline ? `${classPrefix}--hairline` : ''}`
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
        className={`${buttonClassName} ${className}`}
        style={{ ...btnStyle, ...style }}   
        {...rest}
        onClick={(e) => handleClick(e)}
    >
        {children}
    </div>
})


Button.defaultProps = defaultProps
Button.displayName = 'AuntButton'