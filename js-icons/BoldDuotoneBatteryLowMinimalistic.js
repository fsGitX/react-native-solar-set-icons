import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldDuotoneBatteryLowMinimalistic = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M3.17157 5.17157C2 6.34315 2 8.22876 2 12C2 15.7712 2 17.6569 3.17157 18.8284C4.34315 20 6.22876 20 10 20H11.5C15.2712 20 17.1569 20 18.3284 18.8284C19.5 17.6569 19.5 15.7712 19.5 12C19.5 8.22876 19.5 6.34315 18.3284 5.17157C17.1569 4 15.2712 4 11.5 4H10C6.22876 4 4.34315 4 3.17157 5.17157Z" fill={color} opacity="0.5"/>
	<Path d="M21.25 14C21.25 14.4142 21.5858 14.75 22 14.75C22.4142 14.75 22.75 14.4142 22.75 14V10C22.75 9.58579 22.4142 9.25 22 9.25C21.5858 9.25 21.25 9.58579 21.25 10V14Z" fill={color}/>
	<Path d="M6.6359 8.34452C6.99799 8.14336 7.45459 8.27382 7.65575 8.6359L7.00014 9.00014C7.65575 8.6359 7.65648 8.63722 7.65648 8.63722L7.65725 8.63861L7.65892 8.64166L7.66277 8.64877L7.6724 8.66712C7.67965 8.6812 7.68852 8.69895 7.69877 8.72046C7.71925 8.76349 7.7452 8.82149 7.77462 8.89503C7.83348 9.04219 7.90606 9.25113 7.97663 9.52635C8.1179 10.0773 8.25014 10.89 8.25014 12.0001C8.25014 13.1103 8.1179 13.923 7.97663 14.4739C7.90606 14.7491 7.83348 14.9581 7.77462 15.1052C7.7452 15.1788 7.71925 15.2368 7.69877 15.2798C7.68852 15.3013 7.67965 15.3191 7.6724 15.3331L7.66277 15.3515L7.65892 15.3586L7.65725 15.3617L7.65648 15.3631L7.65575 15.3644C7.45459 15.7265 6.99799 15.8569 6.6359 15.6558C6.27689 15.4563 6.14559 15.0057 6.33947 14.6451L6.34448 14.6349C6.35133 14.6205 6.36445 14.5918 6.3819 14.5482C6.41679 14.4609 6.46921 14.3136 6.52364 14.1014C6.63237 13.6773 6.75014 12.99 6.75014 12.0001C6.75014 11.0103 6.63237 10.323 6.52364 9.89892C6.46921 9.68664 6.41679 9.53933 6.3819 9.45212C6.36445 9.40848 6.35133 9.37976 6.34448 9.36536L6.33947 9.35513C6.14559 8.99455 6.27689 8.54397 6.6359 8.34452Z" fill={color}/>
</Svg>;

export default BoldDuotoneBatteryLowMinimalistic;
