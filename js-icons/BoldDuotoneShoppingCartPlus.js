import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldDuotoneShoppingCartPlus = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M7.5 18C8.32843 18 9 18.6716 9 19.5C9 20.3284 8.32843 21 7.5 21C6.67157 21 6 20.3284 6 19.5C6 18.6716 6.67157 18 7.5 18Z" fill={color}/>
	<Path d="M16.5 18.0001C17.3284 18.0001 18 18.6716 18 19.5001C18 20.3285 17.3284 21.0001 16.5 21.0001C15.6716 21.0001 15 20.3285 15 19.5001C15 18.6716 15.6716 18.0001 16.5 18.0001Z" fill={color}/>
	<Path d="M2.08368 2.75145C2.22106 2.36068 2.64921 2.15527 3.03998 2.29266L3.34138 2.39862C3.95791 2.61536 4.48154 2.79943 4.89363 3.00163C5.33426 3.21784 5.71211 3.48417 5.99629 3.90003C6.27827 4.31268 6.39468 4.76539 6.44841 5.26177C6.47247 5.48397 6.48515 5.72991 6.49184 6.00024H17.1301C18.815 6.00024 20.3318 6.00024 20.7757 6.57733C21.2197 7.15441 21.0461 8.02394 20.699 9.763L20.1992 12.1877C19.8841 13.7166 19.7266 14.481 19.1748 14.9306C18.6231 15.3802 17.8426 15.3802 16.2816 15.3802H10.9787C8.18979 15.3802 6.79534 15.3802 5.92894 14.4664C5.06254 13.5526 4.9993 12.5818 4.9993 9.64024L4.9993 7.03856C4.9993 6.29862 4.99828 5.8034 4.95712 5.42319C4.91779 5.05984 4.84809 4.87842 4.75783 4.74634C4.66977 4.61747 4.5361 4.49704 4.23288 4.34826C3.91003 4.18985 3.47128 4.0343 2.80367 3.79958L2.54246 3.70775C2.1517 3.57036 1.94629 3.14221 2.08368 2.75145Z" fill={color} opacity="0.5"/>
	<Path d="M13.75 9C13.75 8.58579 13.4142 8.25 13 8.25C12.5858 8.25 12.25 8.58579 12.25 9V10.25H11C10.5858 10.25 10.25 10.5858 10.25 11C10.25 11.4142 10.5858 11.75 11 11.75H12.25V13C12.25 13.4142 12.5858 13.75 13 13.75C13.4142 13.75 13.75 13.4142 13.75 13V11.75H15C15.4142 11.75 15.75 11.4142 15.75 11C15.75 10.5858 15.4142 10.25 15 10.25H13.75V9Z" fill={color}/>
</Svg>;

export default BoldDuotoneShoppingCartPlus;