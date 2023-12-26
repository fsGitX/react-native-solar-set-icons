import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldShoppingBagMusic2 = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M11 14.75C10.3096 14.75 9.74998 15.3096 9.74998 16C9.74998 16.6904 10.3096 17.25 11 17.25C11.6903 17.25 12.25 16.6904 12.25 16C12.25 15.3096 11.6903 14.75 11 14.75Z" fill={color}/>
	<Path d="M8.25014 6.01489C8.25005 6.00994 8.25 6.00498 8.25 6V5C8.25 2.92893 9.92893 1.25 12 1.25C14.0711 1.25 15.75 2.92893 15.75 5V6C15.75 6.00498 15.75 6.00994 15.7499 6.0149C17.0371 6.05353 17.8248 6.1924 18.4261 6.69147C19.2593 7.38295 19.4787 8.55339 19.9177 10.8943L20.6677 14.8943C21.2849 18.186 21.5934 19.8318 20.6937 20.9159C19.794 22 18.1195 22 14.7704 22H9.22954C5.88048 22 4.20595 22 3.30624 20.9159C2.40652 19.8318 2.71512 18.186 3.33231 14.8943L4.08231 10.8943C4.52122 8.55339 4.74068 7.38295 5.57386 6.69147C6.17521 6.19239 6.96288 6.05353 8.25014 6.01489ZM9.75 5C9.75 3.75736 10.7574 2.75 12 2.75C13.2426 2.75 14.25 3.75736 14.25 5V6C14.25 6.00001 14.25 5.99999 14.25 6C14.1747 5.99998 14.0982 6 14.0204 6H9.97954C9.90177 6 9.82526 6 9.75 6.00002C9.75 6.00002 9.75 6.00003 9.75 6.00002V5ZM13.75 10C13.75 9.58579 13.4142 9.25 13 9.25C12.5858 9.25 12.25 9.58579 12.25 10V13.5499C11.8749 13.3581 11.4501 13.25 11 13.25C9.4812 13.25 8.24998 14.4812 8.24998 16C8.24998 17.5188 9.4812 18.75 11 18.75C12.5188 18.75 13.75 17.5188 13.75 16V12.4501C14.125 12.6419 14.5499 12.75 15 12.75C15.4142 12.75 15.75 12.4142 15.75 12C15.75 11.5858 15.4142 11.25 15 11.25C14.3096 11.25 13.75 10.6904 13.75 10Z" fill={color} fillRule="evenodd"/>
</Svg>;

export default BoldShoppingBagMusic2;