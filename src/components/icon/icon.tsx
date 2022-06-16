import React, { forwardRef, cloneElement } from 'react'
import { IconProps } from './types'

const Icon = forwardRef<SVGSVGElement,IconProps>((props,ref) => {
    const {
        name = '',
        className,
        style,
        spin,
        color,
        size,
        rotate,
        tabIndex,
        onClick,
        children,
        ...restProps
    } = props;
    
    function kebabCase(str: string): string {
        return str
          .replace(/([A-Z])/g, '-$1')
          .toLowerCase()
          .replace(/^-/, '');
    }

    const svgStyle = {} as React.CSSProperties;

    if (rotate) {
      svgStyle.msTransform = `rotate(${rotate}deg)`;
      svgStyle.transform = `rotate(${rotate}deg)`;
    }
    
    const kebabCaseName = name ? kebabCase(name) : undefined;
    
    let iconTabIndex = tabIndex;
    if (iconTabIndex === undefined && onClick) {
        iconTabIndex = -1;
    }

    const attrs = {
        role: 'img',
        focusable: 'false',
        'aria-label': kebabCaseName,
        'aria-hidden': 'true',
        'data-icon': kebabCaseName,
        preserveAspectRatio: 'xMidYMid meet',
        ref,
        tabIndex: iconTabIndex,
        onClick,
        className: [
          kebabCaseName ? `aunt-icon-${kebabCaseName}` : '',
          spin ? 'aunt-icon--spin' : '',
          className,
        ].join(' ').trim(),
        width: size ? size : "24",
        height: size ? size : "24",
        stroke: color ? color : "currentColor",
        style: { ...style, ...svgStyle },
        ...restProps,
    };
    return cloneElement(children as React.ReactElement, attrs)
})

Icon.displayName = 'AuntIcon'

export default Icon;
