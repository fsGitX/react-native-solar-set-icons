import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LineDuotoneMoneyTagHorizontal = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M9.72104 20H12.358C14.5854 20 15.6992 20 16.6289 19.4672C17.5586 18.9345 18.1488 17.958 19.3294 16.005L20.0102 14.8787C21.0034 13.2357 21.5 12.4142 21.5 11.5C21.5 10.5858 21.0034 9.76431 20.0102 8.12126L19.3294 6.99501C18.1488 5.04203 17.5586 4.06554 16.6289 3.53277C15.6992 3 14.5854 3 12.358 3H9.72104C5.84561 3 3.90789 3 2.70394 4.2448C1.5 5.48959 1.5 7.49306 1.5 11.5C1.5 15.5069 1.5 17.5104 2.70394 18.7552C3.90789 20 5.8456 20 9.72104 20Z" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M6.5 6.99512V16" opacity="0.5" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
</Svg>;

export default LineDuotoneMoneyTagHorizontal;
