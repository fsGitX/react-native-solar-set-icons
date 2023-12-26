import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldDuotoneEssentionalSleeping = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M2 5.25C2.41421 5.25 2.75 5.58579 2.75 6V15.25H12H22.6428L22.6429 15.643L22.642 16.0001V18.0002C22.642 18.4144 22.3063 18.7502 21.892 18.7502C21.4778 18.7502 21.142 18.4144 21.142 18.0002V16.75H2.75V18C2.75 18.4142 2.41421 18.75 2 18.75C1.58579 18.75 1.25 18.4142 1.25 18V6C1.25 5.58579 1.58579 5.25 2 5.25Z" fill={color} fillRule="evenodd"/>
	<Path d="M7 13.5C8.38071 13.5 9.5 12.3807 9.5 11C9.5 9.61929 8.38071 8.5 7 8.5C5.61929 8.5 4.5 9.61929 4.5 11C4.5 12.3807 5.61929 13.5 7 13.5Z" fill={color} opacity="0.5"/>
	<Path d="M22.3623 11.8486C21.8597 10.4124 20.7305 9.28314 19.2943 8.78058C18.4924 8.5 17.4949 8.5 15.5 8.5H15.4977C14.7 8.5 13.6599 8.5 13.3394 8.61213C12.7649 8.81315 12.3133 9.26484 12.1122 9.83933C12 10.1601 12 10.5591 12 11.357V15.2499H22.6428C22.6416 13.5133 22.6238 12.596 22.3623 11.8486Z" fill={color} opacity="0.5"/>
</Svg>;

export default BoldDuotoneEssentionalSleeping;
