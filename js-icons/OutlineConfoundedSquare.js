import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const OutlineConfoundedSquare = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M11.9426 1.25H12.0574C14.3658 1.24999 16.1748 1.24998 17.5863 1.43975C19.031 1.63399 20.1711 2.03933 21.0659 2.93414C21.9607 3.82895 22.366 4.96897 22.5603 6.41371C22.75 7.82519 22.75 9.63423 22.75 11.9426V12.0574C22.75 14.3658 22.75 16.1748 22.5603 17.5863C22.366 19.031 21.9607 20.1711 21.0659 21.0659C20.1711 21.9607 19.031 22.366 17.5863 22.5603C16.1748 22.75 14.3658 22.75 12.0574 22.75H11.9426C9.63423 22.75 7.82519 22.75 6.41371 22.5603C4.96897 22.366 3.82895 21.9607 2.93414 21.0659C2.03933 20.1711 1.63399 19.031 1.43975 17.5863C1.24998 16.1748 1.24999 14.3658 1.25 12.0574V11.9426C1.24999 9.63423 1.24998 7.82519 1.43975 6.41371C1.63399 4.96897 2.03933 3.82895 2.93414 2.93414C3.82895 2.03933 4.96897 1.63399 6.41371 1.43975C7.82519 1.24998 9.63423 1.24999 11.9426 1.25ZM6.61358 2.92637C5.33517 3.09825 4.56445 3.42514 3.9948 3.9948C3.42514 4.56445 3.09825 5.33517 2.92637 6.61358C2.75159 7.91356 2.75 9.62178 2.75 12C2.75 14.3782 2.75159 16.0864 2.92637 17.3864C3.09825 18.6648 3.42514 19.4355 3.9948 20.0052C4.56445 20.5749 5.33517 20.9018 6.61358 21.0736C7.91356 21.2484 9.62177 21.25 12 21.25C14.3782 21.25 16.0864 21.2484 17.3864 21.0736C18.6648 20.9018 19.4355 20.5749 20.0052 20.0052C20.5749 19.4355 20.9018 18.6648 21.0736 17.3864C21.2484 16.0864 21.25 14.3782 21.25 12C21.25 9.62178 21.2484 7.91356 21.0736 6.61358C20.9018 5.33517 20.5749 4.56445 20.0052 3.9948C19.4355 3.42514 18.6648 3.09825 17.3864 2.92637C16.0864 2.75159 14.3782 2.75 12 2.75C9.62177 2.75 7.91356 2.75159 6.61358 2.92637ZM7.4 8.55C7.64853 8.21863 8.11863 8.15147 8.45 8.4L10.45 9.9C10.6389 10.0416 10.75 10.2639 10.75 10.5C10.75 10.7361 10.6389 10.9584 10.45 11.1L8.45 12.6C8.11863 12.8485 7.64853 12.7814 7.4 12.45C7.15147 12.1186 7.21863 11.6485 7.55 11.4L8.75 10.5L7.55 9.6C7.21863 9.35147 7.15147 8.88137 7.4 8.55ZM16.6 8.55C16.8485 8.88137 16.7814 9.35147 16.45 9.6L15.25 10.5L16.45 11.4C16.7814 11.6485 16.8485 12.1186 16.6 12.45C16.3515 12.7814 15.8814 12.8485 15.55 12.6L13.55 11.1C13.3611 10.9584 13.25 10.7361 13.25 10.5C13.25 10.2639 13.3611 10.0416 13.55 9.9L15.55 8.4C15.8814 8.15147 16.3515 8.21863 16.6 8.55ZM8.46967 15.4697L9.46967 14.4697C9.76256 14.1768 10.2374 14.1768 10.5303 14.4697L11 14.9393L11.4697 14.4697C11.7626 14.1768 12.2374 14.1768 12.5303 14.4697L13 14.9393L13.4697 14.4697C13.7626 14.1768 14.2374 14.1768 14.5303 14.4697L15.5303 15.4697C15.8232 15.7626 15.8232 16.2374 15.5303 16.5303C15.2374 16.8232 14.7626 16.8232 14.4697 16.5303L14 16.0607L13.5303 16.5303C13.2374 16.8232 12.7626 16.8232 12.4697 16.5303L12 16.0607L11.5303 16.5303C11.2374 16.8232 10.7626 16.8232 10.4697 16.5303L10 16.0607L9.53033 16.5303C9.23744 16.8232 8.76256 16.8232 8.46967 16.5303C8.17678 16.2374 8.17678 15.7626 8.46967 15.4697Z" fill={color} fillRule="evenodd"/>
</Svg>;

export default OutlineConfoundedSquare;
