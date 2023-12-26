import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LineDuotoneFoodOvenMittsMinimalistic = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M10.3341 4.77929C9.91482 3.15159 8.66759 1.97843 7.21305 2.0003C5.44093 2.02694 4.03217 3.81732 4.06648 5.99923L4.03433 9.34056C4.02705 10.0967 4.02341 10.4748 3.88968 10.8109C3.75595 11.1471 3.46036 11.4685 2.86916 12.1112C2.28972 12.7412 2 13.2089 2 13.7454C2 14.563 2.67293 15.221 4.0188 16.5368L7.58758 20.0262C8.93345 21.3421 9.60638 22 10.4426 22C11.2788 22 11.9518 21.342 13.2976 20.0262L20.0783 13.3965C22.6406 10.8913 22.6406 6.82951 20.0783 4.32429C17.516 1.81908 13.3618 1.81908 10.7995 4.32429L10.3341 4.77929ZM10.3341 4.77929L9.37197 5.72001" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M10.7994 17.5836L6.51685 13.3965" opacity="0.5" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
</Svg>;

export default LineDuotoneFoodOvenMittsMinimalistic;
