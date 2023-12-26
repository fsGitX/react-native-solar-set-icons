import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LinearTestTube = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M9.74872 2.49415L18.1594 7.31987M9.74872 2.49415L2.65093 14.7455C1.31093 17.0584 2.10615 20.0159 4.42709 21.3513C6.74803 22.6867 9.7158 21.8942 11.0558 19.5813L12.5511 17.0003M9.74872 2.49415L8.91283 2M18.1594 7.31987L15.902 11.2163M18.1594 7.31987L19 7.80374M15.902 11.2163L14.1886 14.1738M15.902 11.2163L13.344 9.74451M14.1886 14.1738L12.5511 17.0003M14.1886 14.1738L9.98568 11.7556M12.5511 17.0003L9.93838 15.4971" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M22 14.9167C22 16.0673 21.1046 17 20 17C18.8954 17 18 16.0673 18 14.9167C18 14.1968 18.783 13.2359 19.3691 12.6175C19.7161 12.2514 20.2839 12.2514 20.6309 12.6175C21.217 13.2359 22 14.1968 22 14.9167Z" stroke="black" strokeWidth="1.5"/>
</Svg>;

export default LinearTestTube;
