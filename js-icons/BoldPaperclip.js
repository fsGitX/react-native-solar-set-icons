import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldPaperclip = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M7.9175 17.8068L15.8084 10.2535C16.7558 9.34668 16.7558 7.87637 15.8084 6.96951C14.861 6.06265 13.325 6.06265 12.3776 6.96951L4.54387 14.4681C2.74382 16.1911 2.74382 18.9847 4.54387 20.7077C6.34391 22.4308 9.26237 22.4308 11.0624 20.7077L19.0105 13.0997C21.6632 10.5605 21.6632 6.44362 19.0105 3.90441C16.3578 1.3652 12.0569 1.3652 9.40419 3.90441L3 10.0346" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
</Svg>;

export default BoldPaperclip;
