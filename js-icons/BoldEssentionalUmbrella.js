import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldEssentionalUmbrella = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M2.47619 12C2.2132 12 2 11.7868 2 11.5238C2 7.07824 5.04593 3.34408 9.16469 2.29445C9.01255 2.48707 8.87137 2.69028 8.74065 2.89955C8.00482 4.0776 7.49337 5.60532 7.13421 7.07156C6.77232 8.54901 6.5522 10.0191 6.42246 11.1149C6.38321 11.4464 6.35211 11.7448 6.3278 12H2.47619Z" fill={color}/>
	<Path d="M22 11.5238C22 11.7868 21.7868 12 21.5238 12H17.6722C17.6479 11.7448 17.6168 11.4464 17.5775 11.1149C17.4478 10.0191 17.2277 8.54901 16.8658 7.07156C16.5066 5.60532 15.9952 4.0776 15.2593 2.89955C15.1286 2.69028 14.9875 2.48706 14.8353 2.29445C18.9541 3.34408 22 7.07824 22 11.5238Z" fill={color}/>
	<Path d="M11.25 20V12H7.83487C7.85586 11.7886 7.88135 11.5506 7.91205 11.2913C8.03759 10.2309 8.24881 8.82599 8.59114 7.42844C8.93621 6.01968 9.40187 4.6724 10.0129 3.6942C10.6292 2.7074 11.2887 2.25 12 2.25C12.7113 2.25 13.3708 2.7074 13.9871 3.6942C14.5981 4.6724 15.0638 6.01968 15.4089 7.42844C15.7512 8.82599 15.9624 10.2309 16.0879 11.2913C16.1186 11.5506 16.1441 11.7886 16.1651 12H12.75V20C12.75 21.5188 11.5188 22.75 10 22.75C8.48122 22.75 7.25 21.5188 7.25 20V19C7.25 18.5858 7.58579 18.25 8 18.25C8.41421 18.25 8.75 18.5858 8.75 19V20C8.75 20.6904 9.30964 21.25 10 21.25C10.6904 21.25 11.25 20.6904 11.25 20Z" fill={color}/>
</Svg>;

export default BoldEssentionalUmbrella;
