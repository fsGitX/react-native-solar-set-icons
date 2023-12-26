import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const OutlineDoubleAltArrowDown = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M4.43057 6.51192C4.70014 6.19743 5.17361 6.161 5.48811 6.43057L12 12.0122L18.5119 6.43057C18.8264 6.161 19.2999 6.19743 19.5695 6.51192C19.839 6.82641 19.8026 7.29989 19.4881 7.56946L12.4881 13.5695C12.2072 13.8102 11.7928 13.8102 11.5119 13.5695L4.51192 7.56946C4.19743 7.29989 4.161 6.82641 4.43057 6.51192ZM4.43057 10.5119C4.70014 10.1974 5.17361 10.161 5.48811 10.4306L12 16.0122L18.5119 10.4306C18.8264 10.161 19.2999 10.1974 19.5695 10.5119C19.839 10.8264 19.8026 11.2999 19.4881 11.5695L12.4881 17.5695C12.2072 17.8102 11.7928 17.8102 11.5119 17.5695L4.51192 11.5695C4.19743 11.2999 4.161 10.8264 4.43057 10.5119Z" fill={color} fillRule="evenodd"/>
</Svg>;

export default OutlineDoubleAltArrowDown;
