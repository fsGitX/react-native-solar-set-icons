import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldCartLarge4 = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M3.04047 2.29266C2.6497 2.15527 2.22155 2.36068 2.08416 2.75145C1.94678 3.14221 2.15218 3.57036 2.54295 3.70775L2.80416 3.79958C3.47177 4.0343 3.91052 4.18985 4.23336 4.34826C4.53659 4.49704 4.67026 4.61747 4.75832 4.74634C4.84858 4.87842 4.91828 5.05984 4.95761 5.42319C4.99877 5.8034 4.99979 6.29862 4.99979 7.03856L4.99979 9.64024C4.99979 12.5818 5.06302 13.5526 5.92943 14.4664C6.79583 15.3802 8.19028 15.3802 10.9792 15.3802H16.2821C17.8431 15.3802 18.6236 15.3802 19.1753 14.9306C19.727 14.481 19.8846 13.7166 20.1997 12.1877L20.6995 9.763C21.0466 8.02394 21.2202 7.15441 20.7762 6.57733C20.3323 6.00024 18.8155 6.00024 17.1305 6.00024H6.49233C6.48564 5.72991 6.47295 5.48397 6.4489 5.26177C6.39517 4.76539 6.27875 4.31268 5.99677 3.90003C5.71259 3.48417 5.33474 3.21784 4.89411 3.00163C4.48203 2.79943 3.95839 2.61536 3.34187 2.39862L3.04047 2.29266ZM10.2395 8.87497C10.1703 8.46658 9.78312 8.19159 9.37473 8.26078C8.96633 8.32997 8.69135 8.71712 8.76054 9.12551L9.28872 12.2434C9.35791 12.6518 9.74507 12.9267 10.1535 12.8576C10.5619 12.7884 10.8368 12.4012 10.7677 11.9928L10.2395 8.87497ZM15.6536 8.26078C15.2452 8.19159 14.858 8.46658 14.7889 8.87497L14.2607 11.9928C14.1915 12.4012 14.4665 12.7884 14.8749 12.8576C15.2833 12.9267 15.6704 12.6518 15.7396 12.2434L16.2678 9.12551C16.337 8.71712 16.062 8.32997 15.6536 8.26078ZM7.5 18.0002C8.32843 18.0002 9 18.6718 9 19.5002C9 20.3287 8.32843 21.0002 7.5 21.0002C6.67157 21.0002 6 20.3287 6 19.5002C6 18.6718 6.67157 18.0002 7.5 18.0002ZM16.5 18.0003C17.3284 18.0003 18 18.6719 18 19.5003C18 20.3287 17.3284 21.0003 16.5 21.0003C15.6716 21.0003 15 20.3287 15 19.5003C15 18.6719 15.6716 18.0003 16.5 18.0003Z" fill={color} fillRule="evenodd"/>
</Svg>;

export default BoldCartLarge4;
