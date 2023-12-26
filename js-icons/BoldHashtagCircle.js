import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldHashtagCircle = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M14.092 10.75L13.342 13.25H9.90802L10.658 10.75H14.092Z" fill={color}/>
	<Path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM11.2155 6.28164C11.6123 6.40067 11.8374 6.81878 11.7184 7.21553L11.108 9.25001H14.542L15.2816 6.7845C15.4007 6.38776 15.8188 6.16262 16.2155 6.28164C16.6123 6.40067 16.8374 6.81878 16.7184 7.21553L16.108 9.25001H18C18.4142 9.25001 18.75 9.5858 18.75 10C18.75 10.4142 18.4142 10.75 18 10.75H15.658L14.908 13.25H17C17.4142 13.25 17.75 13.5858 17.75 14C17.75 14.4142 17.4142 14.75 17 14.75H14.458L13.7184 17.2155C13.5993 17.6123 13.1812 17.8374 12.7845 17.7184C12.3877 17.5994 12.1626 17.1812 12.2816 16.7845L12.892 14.75H9.45802L8.71837 17.2155C8.59935 17.6123 8.18123 17.8374 7.78449 17.7184C7.38774 17.5994 7.16261 17.1812 7.28163 16.7845L7.89198 14.75H6C5.58579 14.75 5.25 14.4142 5.25 14C5.25 13.5858 5.58579 13.25 6 13.25H8.34198L9.09198 10.75H7C6.58579 10.75 6.25 10.4142 6.25 10C6.25 9.5858 6.58579 9.25001 7 9.25001H9.54198L10.2816 6.7845C10.4007 6.38776 10.8188 6.16262 11.2155 6.28164Z" fill={color} fillRule="evenodd"/>
</Svg>;

export default BoldHashtagCircle;
