import React, { FunctionComponent, useEffect, useState, useContext,useMemo } from 'react'
import ConfigProviderContext from '../config-provider/config-provider-context';
import FlexContext from './flex-context';
import { FlexProps } from './types'

const defaultProps: FlexProps = {
    direction: 'row', 
    wrap: 'nowrap', 
    justify: 'start', 
    align: 'start',
    gutter: 0,
    className:'',
}

const Flex:FunctionComponent<Partial<FlexProps>> = ((props) => {
    const {
        direction, wrap, justify, align, gutter, style, className, children, 
        ...rest
    } = {
        ...defaultProps,
        ...props
    };

    const [flexClassName, setFlexClassName] = useState('')
    const [flexStyle, setFlexStyle] = useState({})

    const { prefix } = useContext(ConfigProviderContext);
    const classPrefix = `${prefix}-flex`
    
    useEffect(()=>{
        setFlexClassName(classes())
        setFlexStyle(getStyle())
    },[direction,wrap,justify,align,className,gutter])

    const classes = ()=>{
        return `
            ${className}
            ${classPrefix}
            ${classPrefix}--direction-${direction}
            ${classPrefix}--wrap-${wrap}
            ${classPrefix}--justify-${justify}
            ${classPrefix}--align-${align}
        `
    }
    
    const getGutter: [number, number] = useMemo(
        () => (Array.isArray(gutter) ? gutter : [gutter, 0]) as [number, number],
        [gutter],
    );

    const getStyle = () => {
        return {
            ...(getGutter[0]! > 0
            ? {
                marginLeft: getGutter[0]! / -2,
                marginRight: getGutter[0]! / -2,
            }
            : {}),
            ...(getGutter[1]! > 0
            ? {
                marginTop: getGutter[1]! / -2,
                marginBottom: getGutter[1]! / 2,
            }
            : {}),
            ...style,
        }
    }


    return (
        <FlexContext.Provider value={{ gutter: getGutter }}>
            <div className={`${flexClassName}`} style={flexStyle} {...rest}>   
                {children}
            </div>
        </FlexContext.Provider>
        
    )
})

Flex.defaultProps = defaultProps;
Flex.displayName = 'AuntFlex';

export default Flex;