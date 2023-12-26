import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LinearForward = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M14.6644 5.47973L18.6367 9.01066C20.2053 10.405 20.9896 11.1022 20.9896 12.0003C20.9896 12.8984 20.2053 13.5956 18.6367 14.9899L14.6644 18.5209C13.9484 19.1573 13.5903 19.4755 13.2952 19.343C13 19.2104 13 18.7314 13 17.7735V15.4289C9.4 15.4289 5.5 17.1432 4 20.0003C4 10.8574 9.33333 8.57172 13 8.57172V6.22714C13 5.26915 13 4.79015 13.2952 4.6576C13.5903 4.52505 13.9484 4.84327 14.6644 5.47973Z" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
</Svg>;

export default LinearForward;
