import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const OutlineCallRecordMinimalistic = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M9.46412 15.25C10.2616 14.4003 10.75 13.2572 10.75 12C10.75 9.37665 8.62335 7.25 6 7.25C3.37665 7.25 1.25 9.37665 1.25 12C1.25 14.6234 3.37665 16.75 6 16.75H18C20.6234 16.75 22.75 14.6234 22.75 12C22.75 9.37665 20.6234 7.25 18 7.25C15.3766 7.25 13.25 9.37665 13.25 12C13.25 13.2572 13.7384 14.4003 14.5359 15.25H9.46412ZM6 8.75C4.20507 8.75 2.75 10.2051 2.75 12C2.75 13.7949 4.20507 15.25 6 15.25C7.79493 15.25 9.25 13.7949 9.25 12C9.25 10.2051 7.79493 8.75 6 8.75ZM18 15.25C19.7949 15.25 21.25 13.7949 21.25 12C21.25 10.2051 19.7949 8.75 18 8.75C16.2051 8.75 14.75 10.2051 14.75 12C14.75 13.7949 16.2051 15.25 18 15.25Z" fill={color} fillRule="evenodd"/>
</Svg>;

export default OutlineCallRecordMinimalistic;
