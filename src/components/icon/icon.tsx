import React, { forwardRef, cloneElement } from 'react'
import { IconProps } from './types'

const Icon = forwardRef<SVGSVGElement,IconProps>((props,ref) => {
    const {
        name = '',
        className,
        style,
        spin,
        rotate,
        tabIndex,
        onClick,
        children,
        ...restProps
    } = props;
    
    function kebabCase(str: string): string {
        return str
          .substring(3)
          .replace(/([A-Z])/g, '-$1')
          .toLowerCase()
          .replace(/^-/, '');
    }

    const svgStyle = {} as React.CSSProperties;
    
    const kebabCaseName = name ? kebabCase(name) : undefined;
    
    let iconTabIndex = tabIndex;
    if (iconTabIndex === undefined && onClick) {
        iconTabIndex = -1;
    }

    const attrs = {
        role: 'img',
        'aria-label': kebabCaseName,
        focusable: 'false',
        'data-icon': kebabCaseName,
        'aria-hidden': 'true',
        preserveAspectRatio: 'xMidYMid meet',
        ref,
        tabIndex: iconTabIndex,
        onClick,
        className: [
          'rv-icon',
          kebabCaseName ? `rv-icon-${kebabCaseName}` : '',
          spin ? 'rv-icon--spin' : '',
          className,
        ]
          .join(' ')
          .trim(),
        style: { ...style, ...svgStyle },
        ...restProps,
    };
    return cloneElement(children as React.ReactElement, attrs)
})

Icon.displayName = 'AuntIcon'

export default Icon;
