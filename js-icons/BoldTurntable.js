import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldTurntable = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M16.25 9C16.25 8.58579 16.5858 8.25 17 8.25C17.4142 8.25 17.75 8.58579 17.75 9C17.75 9.41421 17.4142 9.75 17 9.75C16.5858 9.75 16.25 9.41421 16.25 9Z" fill={color}/>
	<Path d="M6.75 12C6.75 10.2051 8.20507 8.75 10 8.75C11.7949 8.75 13.25 10.2051 13.25 12C13.25 13.7949 11.7949 15.25 10 15.25C8.20507 15.25 6.75 13.7949 6.75 12Z" fill={color}/>
	<Path d="M3.17157 3.46447C2 4.92893 2 7.28595 2 12C2 16.714 2 19.0711 3.17157 20.5355C4.34315 22 6.22876 22 10 22H14C17.7712 22 19.6569 22 20.8284 20.5355C22 19.0711 22 16.714 22 12C22 7.28595 22 4.92893 20.8284 3.46447C19.6569 2 17.7712 2 14 2H10C6.22876 2 4.34315 2 3.17157 3.46447ZM17 6.75C15.7574 6.75 14.75 7.75736 14.75 9C14.75 9.97966 15.3761 10.8131 16.25 11.122V14.7639C16.25 15.2374 15.9825 15.6702 15.559 15.882L14.6646 16.3292C14.2941 16.5144 14.1439 16.9649 14.3292 17.3354C14.5144 17.7059 14.9649 17.8561 15.3354 17.6708L16.2298 17.2236C17.1615 16.7578 17.75 15.8056 17.75 14.7639V11.122C18.6239 10.8131 19.25 9.97966 19.25 9C19.25 7.75736 18.2426 6.75 17 6.75ZM10 7.25C7.37665 7.25 5.25 9.37665 5.25 12C5.25 14.6234 7.37665 16.75 10 16.75C12.6234 16.75 14.75 14.6234 14.75 12C14.75 9.37665 12.6234 7.25 10 7.25Z" fill={color} fillRule="evenodd"/>
</Svg>;

export default BoldTurntable;