import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldCodeFile = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M19.3517 7.61665L15.3929 4.05375C14.2651 3.03868 13.7012 2.53114 13.0092 2.26562L13 5.00011C13 7.35713 13 8.53564 13.7322 9.26787C14.4645 10.0001 15.643 10.0001 18 10.0001H21.5801C21.2175 9.29588 20.5684 8.71164 19.3517 7.61665Z" fill={color}/>
	<Path d="M10 22H14C17.7712 22 19.6569 22 20.8284 20.8284C22 19.6569 22 17.7712 22 14V13.5629C22 12.6901 22 12.0344 21.9574 11.5001H18L17.9051 11.5001C16.808 11.5002 15.8385 11.5003 15.0569 11.3952C14.2098 11.2813 13.3628 11.0198 12.6716 10.3285C11.9803 9.63726 11.7188 8.79028 11.6049 7.94316C11.4998 7.16164 11.4999 6.19207 11.5 5.09497L11.5092 2.26057C11.5095 2.17813 11.5166 2.09659 11.53 2.01666C11.1214 2 10.6358 2 10.0298 2C6.23869 2 4.34315 2 3.17157 3.17157C2 4.34315 2 6.22876 2 10V14C2 17.7712 2 19.6569 3.17157 20.8284C4.34315 22 6.22876 22 10 22ZM10.9697 15.4697C11.2626 15.1768 11.7374 15.1768 12.0303 15.4697L13.0303 16.4697C13.3232 16.7626 13.3232 17.2374 13.0303 17.5303L12.0303 18.5303C11.7374 18.8232 11.2626 18.8232 10.9697 18.5303C10.6768 18.2374 10.6768 17.7626 10.9697 17.4697L11.4393 17L10.9697 16.5303C10.6768 16.2374 10.6768 15.7626 10.9697 15.4697ZM10.7022 14.2633C10.8477 13.8755 10.6512 13.4432 10.2633 13.2978C9.8755 13.1523 9.44319 13.3488 9.29775 13.7367L7.79775 17.7367C7.65231 18.1245 7.84882 18.5568 8.23666 18.7022C8.6245 18.8477 9.05681 18.6512 9.20225 18.2633L10.7022 14.2633ZM7.53033 13.4697C7.82322 13.7626 7.82322 14.2374 7.53033 14.5303L7.06066 15L7.53033 15.4697C7.82322 15.7626 7.82322 16.2374 7.53033 16.5303C7.23744 16.8232 6.76256 16.8232 6.46967 16.5303L5.46967 15.5303C5.17678 15.2374 5.17678 14.7626 5.46967 14.4697L6.46967 13.4697C6.76256 13.1768 7.23744 13.1768 7.53033 13.4697Z" fill={color} fillRule="evenodd"/>
</Svg>;

export default BoldCodeFile;
