import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const OutlineListDown = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M2.25 6C2.25 5.58579 2.58579 5.25 3 5.25H21C21.4142 5.25 21.75 5.58579 21.75 6C21.75 6.41421 21.4142 6.75 21 6.75H3C2.58579 6.75 2.25 6.41421 2.25 6ZM2.25 10C2.25 9.58579 2.58579 9.25 3 9.25H21C21.4142 9.25 21.75 9.58579 21.75 10C21.75 10.4142 21.4142 10.75 21 10.75H3C2.58579 10.75 2.25 10.4142 2.25 10ZM2.25 14C2.25 13.5858 2.58579 13.25 3 13.25H10C10.4142 13.25 10.75 13.5858 10.75 14C10.75 14.4142 10.4142 14.75 10 14.75H3C2.58579 14.75 2.25 14.4142 2.25 14ZM13.4306 14.5119C13.7001 14.1974 14.1736 14.161 14.4881 14.4306L17.5 17.0122L20.5119 14.4306C20.8264 14.161 21.2999 14.1974 21.5694 14.5119C21.839 14.8264 21.8026 15.2999 21.4881 15.5694L17.9881 18.5694C17.7072 18.8102 17.2928 18.8102 17.0119 18.5694L13.5119 15.5694C13.1974 15.2999 13.161 14.8264 13.4306 14.5119ZM2.25 18C2.25 17.5858 2.58579 17.25 3 17.25H10C10.4142 17.25 10.75 17.5858 10.75 18C10.75 18.4142 10.4142 18.75 10 18.75H3C2.58579 18.75 2.25 18.4142 2.25 18Z" fill={color} fillRule="evenodd"/>
</Svg>;

export default OutlineListDown;
