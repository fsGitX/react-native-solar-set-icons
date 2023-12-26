import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldDuotoneShoppingCartCheck = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M2.08416 2.75145C2.22155 2.36068 2.6497 2.15527 3.04047 2.29266L3.34187 2.39862C3.95839 2.61536 4.48203 2.79943 4.89411 3.00163C5.33474 3.21784 5.71259 3.48417 5.99677 3.90003C6.27875 4.31268 6.39517 4.76539 6.4489 5.26177C6.47295 5.48397 6.48564 5.72991 6.49233 6.00024H17.1305C18.8155 6.00024 20.3323 6.00024 20.7762 6.57733C21.2202 7.15441 21.0466 8.02394 20.6995 9.763L20.1997 12.1877C19.8846 13.7166 19.727 14.481 19.1753 14.9306C18.6236 15.3802 17.8431 15.3802 16.2821 15.3802H10.9792C8.19028 15.3802 6.79583 15.3802 5.92943 14.4664C5.06302 13.5526 4.99979 12.5818 4.99979 9.64024L4.99979 7.03856C4.99979 6.29862 4.99877 5.8034 4.95761 5.42319C4.91828 5.05984 4.84858 4.87842 4.75832 4.74634C4.67026 4.61747 4.53659 4.49704 4.23336 4.34826C3.91052 4.18985 3.47177 4.0343 2.80416 3.79958L2.54295 3.70775C2.15218 3.57036 1.94678 3.14221 2.08416 2.75145Z" fill={color} opacity="0.5"/>
	<Path d="M7.5 18C8.32843 18 9 18.6716 9 19.5C9 20.3284 8.32843 21 7.5 21C6.67157 21 6 20.3284 6 19.5C6 18.6716 6.67157 18 7.5 18Z" fill={color}/>
	<Path d="M16.5 18.0001C17.3284 18.0001 18 18.6716 18 19.5001C18 20.3285 17.3284 21.0001 16.5 21.0001C15.6716 21.0001 15 20.3285 15 19.5001C15 18.6716 15.6716 18.0001 16.5 18.0001Z" fill={color}/>
	<Path d="M15.5421 9.51724C15.8278 9.2173 15.8162 8.74256 15.5163 8.4569C15.2163 8.17123 14.7416 8.18281 14.4559 8.48276L12.1419 10.9125L11.5421 10.2828C11.2565 9.98281 10.7817 9.97123 10.4818 10.2569C10.1818 10.5426 10.1703 11.0173 10.4559 11.3172L11.5988 12.5172C11.7403 12.6659 11.9366 12.75 12.1419 12.75C12.3471 12.75 12.5434 12.6659 12.685 12.5172L15.5421 9.51724Z" fill={color}/>
</Svg>;

export default BoldDuotoneShoppingCartCheck;