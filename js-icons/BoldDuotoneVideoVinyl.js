import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldDuotoneVideoVinyl = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill={color} opacity="0.5"/>
	<Path d="M13.8184 3.39542C14.0109 3.25412 14.2592 3.21292 14.487 3.28447C17.4486 4.21465 19.7853 6.55129 20.7155 9.5129C20.8397 9.90808 20.6199 10.3291 20.2247 10.4532C19.8296 10.5773 19.4086 10.3576 19.2845 9.96238C18.6064 7.80369 17.0389 6.03733 15.0122 5.0937V12.3689C15.0122 14.2363 13.4984 15.75 11.6311 15.75C9.76379 15.75 8.25 14.2363 8.25 12.3689C8.25 10.5016 9.76379 8.98789 11.6311 8.98789C12.3274 8.98789 12.9744 9.19832 13.5122 9.55906V4.00001C13.5122 3.76123 13.6259 3.53672 13.8184 3.39542Z" fill={color} fillRule="evenodd"/>
</Svg>;

export default BoldDuotoneVideoVinyl;
