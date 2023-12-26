import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const OutlineMen = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M16.25 2C16.25 1.58579 16.5858 1.25 17 1.25H22C22.4142 1.25 22.75 1.58579 22.75 2V7C22.75 7.41421 22.4142 7.75 22 7.75C21.5858 7.75 21.25 7.41421 21.25 7V3.81066L16.6949 8.36578C17.9773 9.88802 18.75 11.8538 18.75 14C18.75 18.8325 14.8325 22.75 10 22.75C5.16751 22.75 1.25 18.8325 1.25 14C1.25 9.16751 5.16751 5.25 10 5.25C12.1462 5.25 14.112 6.02271 15.6342 7.30512L20.1893 2.75H17C16.5858 2.75 16.25 2.41421 16.25 2ZM10 6.75C5.99594 6.75 2.75 9.99594 2.75 14C2.75 18.0041 5.99594 21.25 10 21.25C14.0041 21.25 17.25 18.0041 17.25 14C17.25 9.99594 14.0041 6.75 10 6.75Z" fill={color} fillRule="evenodd"/>
</Svg>;

export default OutlineMen;
