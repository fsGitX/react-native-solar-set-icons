import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const OutlineArrowsDoubleAltArrowUp = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M11.5119 6.43056C11.7928 6.18981 12.2072 6.18981 12.4881 6.43056L19.4881 12.4306C19.8026 12.7001 19.839 13.1736 19.5695 13.4881C19.2999 13.8026 18.8264 13.839 18.5119 13.5694L12 7.98781L5.48811 13.5694C5.17361 13.839 4.70014 13.8026 4.43057 13.4881C4.161 13.1736 4.19743 12.7001 4.51192 12.4306L11.5119 6.43056ZM4.51192 16.4306L11.5119 10.4306C11.7928 10.1898 12.2072 10.1898 12.4881 10.4306L19.4881 16.4306C19.8026 16.7001 19.839 17.1736 19.5695 17.4881C19.2999 17.8026 18.8264 17.839 18.5119 17.5694L12 11.9878L5.48811 17.5694C5.17361 17.839 4.70014 17.8026 4.43057 17.4881C4.161 17.1736 4.19743 16.7001 4.51192 16.4306Z" fill={color} fillRule="evenodd"/>
</Svg>;

export default OutlineArrowsDoubleAltArrowUp;