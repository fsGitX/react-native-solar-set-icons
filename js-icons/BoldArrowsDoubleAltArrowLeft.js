import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldArrowsDoubleAltArrowLeft = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M13.4881 4.43057C13.8026 4.70014 13.839 5.17361 13.5694 5.48811L7.98781 12L13.5694 18.5119C13.839 18.8264 13.8026 19.2999 13.4881 19.5695C13.1736 19.839 12.7001 19.8026 12.4306 19.4881L6.43056 12.4881C6.18981 12.2072 6.18981 11.7928 6.43056 11.5119L12.4306 4.51192C12.7001 4.19743 13.1736 4.161 13.4881 4.43057Z" fill={color} fillRule="evenodd"/>
	<Path d="M17.75 5.00005C17.75 4.68619 17.5546 4.40553 17.2602 4.29664C16.9658 4.18774 16.6348 4.27366 16.4306 4.51196L10.4306 11.512C10.1898 11.7928 10.1898 12.2073 10.4306 12.4881L16.4306 19.4881C16.6348 19.7264 16.9658 19.8124 17.2602 19.7035C17.5546 19.5946 17.75 19.3139 17.75 19L17.75 5.00005Z" fill={color}/>
</Svg>;

export default BoldArrowsDoubleAltArrowLeft;
