import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldDuotoneEssentionalSpecialEffects = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M3.46447 20.5355C4.92893 22 7.28595 22 12 22C16.714 22 19.0711 22 20.5355 20.5355C22 19.0711 22 16.714 22 12C22 7.28595 22 4.92893 20.5355 3.46447C19.0711 2 16.714 2 12 2C7.28595 2 4.92893 2 3.46447 3.46447C2 4.92893 2 7.28595 2 12C2 16.714 2 19.0711 3.46447 20.5355Z" fill={color} opacity="0.5"/>
	<Path d="M5.25 8.00004C5.25 7.58583 5.58579 7.25004 6 7.25004H10C10.4142 7.25004 10.75 7.58583 10.75 8.00004C10.75 8.41426 10.4142 8.75004 10 8.75004H6.75V11.25H10C10.4142 11.25 10.75 11.5858 10.75 12C10.75 12.4143 10.4142 12.75 10 12.75H6.75V16C6.75 16.4143 6.41421 16.75 6 16.75C5.58579 16.75 5.25 16.4143 5.25 16V12V8.00004Z" fill={color}/>
	<Path d="M11.55 7.40004C11.8814 7.15152 12.3515 7.21867 12.6 7.55004L15 10.75L17.4 7.55004C17.6485 7.21867 18.1186 7.15152 18.45 7.40004C18.7814 7.64857 18.8485 8.11867 18.6 8.45004L15.9375 12L18.6 15.55C18.8485 15.8814 18.7814 16.3515 18.45 16.6C18.1186 16.8486 17.6485 16.7814 17.4 16.45L15 13.25L12.6 16.45C12.3515 16.7814 11.8814 16.8486 11.55 16.6C11.2186 16.3515 11.1515 15.8814 11.4 15.55L14.0625 12L11.4 8.45004C11.1515 8.11867 11.2186 7.64857 11.55 7.40004Z" fill={color}/>
</Svg>;

export default BoldDuotoneEssentionalSpecialEffects;
