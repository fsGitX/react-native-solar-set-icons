import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldDuotoneCardRecive = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M10 20H14C14.6595 20 15.2613 20 15.8118 19.9937L15.409 19.591C14.5303 18.7123 14.5303 17.2877 15.409 16.409C15.7847 16.0334 16.2601 15.8183 16.75 15.7638V14C16.75 12.7574 17.7574 11.75 19 11.75C20.2426 11.75 21.25 12.7574 21.25 14V15.7638C21.4739 15.7887 21.6947 15.8471 21.9044 15.9391C22 14.9172 22 13.636 22 12C22 11.5581 22 10.392 21.9981 10H2.00189C2 10.392 2 11.5581 2 12C2 15.7712 2 17.6569 3.17157 18.8284C4.34315 20 6.22876 20 10 20Z" fill={color} opacity="0.5"/>
	<Path d="M18.4697 20.5303C18.7626 20.8232 19.2374 20.8232 19.5303 20.5303L21.5303 18.5303C21.8232 18.2374 21.8232 17.7626 21.5303 17.4697C21.2374 17.1768 20.7626 17.1768 20.4697 17.4697L19.75 18.1893V14C19.75 13.5858 19.4142 13.25 19 13.25C18.5858 13.25 18.25 13.5858 18.25 14V18.1893L17.5303 17.4697C17.2374 17.1768 16.7626 17.1768 16.4697 17.4697C16.1768 17.7626 16.1768 18.2374 16.4697 18.5303L18.4697 20.5303Z" fill={color} fillRule="evenodd"/>
	<Path d="M12.5 15.25C12.0858 15.25 11.75 15.5858 11.75 16C11.75 16.4142 12.0858 16.75 12.5 16.75H14C14.4142 16.75 14.75 16.4142 14.75 16C14.75 15.5858 14.4142 15.25 14 15.25H12.5Z" fill={color}/>
	<Path d="M6 15.25C5.58579 15.25 5.25 15.5858 5.25 16C5.25 16.4142 5.58579 16.75 6 16.75H10C10.4142 16.75 10.75 16.4142 10.75 16C10.75 15.5858 10.4142 15.25 10 15.25H6Z" fill={color}/>
	<Path d="M9.99484 4H14.0052C17.7861 4 19.6766 4 20.8512 5.11578C21.6969 5.91916 21.9337 7.07507 22 9V10H2V9C2.0663 7.07507 2.3031 5.91916 3.14881 5.11578C4.3234 4 6.21388 4 9.99484 4Z" fill={color}/>
</Svg>;

export default BoldDuotoneCardRecive;
