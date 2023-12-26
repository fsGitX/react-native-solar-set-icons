import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const OutlineWindowFrame = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M7 6C7 6.55229 6.55229 7 6 7C5.44772 7 5 6.55229 5 6C5 5.44772 5.44772 5 6 5C6.55229 5 7 5.44772 7 6Z" fill={color}/>
	<Path d="M10 6C10 6.55229 9.55229 7 9 7C8.44772 7 8 6.55229 8 6C8 5.44772 8.44772 5 9 5C9.55229 5 10 5.44772 10 6Z" fill={color}/>
	<Path d="M12 7C12.5523 7 13 6.55229 13 6C13 5.44772 12.5523 5 12 5C11.4477 5 11 5.44772 11 6C11 6.55229 11.4477 7 12 7Z" fill={color}/>
	<Path d="M11.9426 1.25C9.63423 1.24999 7.82519 1.24998 6.41371 1.43975C4.96897 1.63399 3.82895 2.03933 2.93414 2.93414C2.03933 3.82895 1.63399 4.96897 1.43975 6.41371C1.32736 7.24965 1.28153 8.22504 1.26285 9.36102C1.25441 9.40606 1.25 9.45251 1.25 9.5C1.25 9.5399 1.25312 9.57907 1.25912 9.61728C1.24999 10.3296 1.25 11.1031 1.25 11.9426V12.0574C1.24999 14.3658 1.24998 16.1748 1.43975 17.5863C1.63399 19.031 2.03933 20.1711 2.93414 21.0659C3.82895 21.9607 4.96897 22.366 6.41371 22.5603C7.82519 22.75 9.63423 22.75 11.9426 22.75H12.0574C14.3658 22.75 16.1748 22.75 17.5863 22.5603C19.031 22.366 20.1711 21.9607 21.0659 21.0659C21.9607 20.1711 22.366 19.031 22.5603 17.5863C22.75 16.1748 22.75 14.3658 22.75 12.0574V11.9426C22.75 11.1031 22.75 10.3296 22.7409 9.61728C22.7469 9.57907 22.75 9.5399 22.75 9.5C22.75 9.45251 22.7456 9.40606 22.7371 9.36102C22.7185 8.22504 22.6726 7.24965 22.5603 6.41371C22.366 4.96897 21.9607 3.82895 21.0659 2.93414C20.1711 2.03933 19.031 1.63399 17.5863 1.43975C16.1748 1.24998 14.3658 1.24999 12.0574 1.25H11.9426ZM2.75 12C2.75 11.3715 2.75011 10.7898 2.7535 10.25H8.25L8.25 21C8.25 21.0718 8.26009 21.1412 8.27892 21.2069C7.65589 21.1811 7.1055 21.1398 6.61358 21.0736C5.33517 20.9018 4.56445 20.5749 3.9948 20.0052C3.42514 19.4355 3.09825 18.6648 2.92637 17.3864C2.75159 16.0864 2.75 14.3782 2.75 12ZM9.71019 21.2417C10.3969 21.2498 11.1563 21.25 12 21.25C14.3782 21.25 16.0864 21.2484 17.3864 21.0736C18.6648 20.9018 19.4355 20.5749 20.0052 20.0052C20.5749 19.4355 20.9018 18.6648 21.0736 17.3864C21.2484 16.0864 21.25 14.3782 21.25 12C21.25 11.3715 21.2499 10.7898 21.2465 10.25H9.75L9.75 21C9.75 21.0846 9.736 21.1659 9.71019 21.2417ZM2.92637 6.61358C2.84403 7.22599 2.80013 7.92901 2.77672 8.75H21.2233C21.1999 7.92901 21.156 7.22599 21.0736 6.61358C20.9018 5.33517 20.5749 4.56445 20.0052 3.9948C19.4355 3.42514 18.6648 3.09825 17.3864 2.92637C16.0864 2.75159 14.3782 2.75 12 2.75C9.62178 2.75 7.91356 2.75159 6.61358 2.92637C5.33517 3.09825 4.56445 3.42514 3.9948 3.9948C3.42514 4.56445 3.09825 5.33517 2.92637 6.61358Z" fill={color} fillRule="evenodd"/>
</Svg>;

export default OutlineWindowFrame;
