import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldDuotoneConfoundedSquare = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M3.46447 3.46447C2 4.92893 2 7.28595 2 12C2 16.714 2 19.0711 3.46447 20.5355C4.92893 22 7.28595 22 12 22C16.714 22 19.0711 22 20.5355 20.5355C22 19.0711 22 16.714 22 12C22 7.28595 22 4.92893 20.5355 3.46447C19.0711 2 16.714 2 12 2C7.28595 2 4.92893 2 3.46447 3.46447Z" fill={color} opacity="0.5"/>
	<Path d="M7.55004 9.60004C7.21867 9.35152 7.15152 8.88142 7.40004 8.55004C7.64857 8.21867 8.11867 8.15152 8.45004 8.40004L10.45 9.90004C10.6389 10.0417 10.75 10.264 10.75 10.5C10.75 10.7361 10.6389 10.9584 10.45 11.1L8.45004 12.6C8.11867 12.8486 7.64857 12.7814 7.40004 12.45C7.15152 12.1187 7.21867 11.6486 7.55004 11.4L8.75004 10.5L7.55004 9.60004Z" fill={color}/>
	<Path d="M16.6 8.55004C16.8486 8.88142 16.7814 9.35152 16.45 9.60004L15.25 10.5L16.45 11.4C16.7814 11.6486 16.8486 12.1187 16.6 12.45C16.3515 12.7814 15.8814 12.8486 15.55 12.6L13.55 11.1C13.3612 10.9584 13.25 10.7361 13.25 10.5C13.25 10.264 13.3612 10.0417 13.55 9.90004L15.55 8.40004C15.8814 8.15152 16.3515 8.21867 16.6 8.55004Z" fill={color}/>
	<Path d="M15.5304 16.5304C15.2375 16.8233 14.7626 16.8233 14.4697 16.5304L13.9996 16.0603C13.4388 16.5896 12.5607 16.5895 12 16.0599C11.4394 16.5895 10.5613 16.5896 10.0005 16.0603L9.53037 16.5304C9.23748 16.8233 8.76261 16.8233 8.46971 16.5304C8.17682 16.2375 8.17682 15.7626 8.46971 15.4697L8.96971 14.9697C9.52875 14.4107 10.429 14.4009 11 14.9403C11.5609 14.4105 12.4392 14.4105 13 14.9403C13.5711 14.4009 14.4713 14.4107 15.0304 14.9697L15.5304 15.4697C15.8233 15.7626 15.8233 16.2375 15.5304 16.5304Z" fill={color}/>
</Svg>;

export default BoldDuotoneConfoundedSquare;
