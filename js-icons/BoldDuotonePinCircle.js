import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldDuotonePinCircle = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M21.9998 12C21.9998 17.5228 17.5226 22 11.9998 22C6.47691 22 1.99976 17.5228 1.99976 12C1.99976 6.47715 6.47691 2 11.9998 2C17.5226 2 21.9998 6.47715 21.9998 12Z" fill={color} fillRule="evenodd" opacity="0.5"/>
	<Path d="M15.5918 9.90258L14.1094 8.41878C13.0961 7.40445 12.5894 6.89728 12.0452 7.01734C11.501 7.1374 11.2543 7.81078 10.7608 9.15753L10.4269 10.069C10.2953 10.4281 10.2295 10.6076 10.1112 10.7465C10.0581 10.8088 9.99768 10.8644 9.93125 10.9123C9.78322 11.0188 9.59906 11.0696 9.23072 11.1711C8.40055 11.4 7.98544 11.5145 7.82902 11.786C7.7614 11.9035 7.72621 12.0368 7.72707 12.1723C7.72905 12.4858 8.03349 12.7905 8.64238 13.4L9.08868 13.848L7.46924 15.4701C7.17658 15.7632 7.17697 16.2381 7.4701 16.5308C7.76323 16.8234 8.2381 16.823 8.53076 16.5299L10.1495 14.9086L10.6222 15.3818C11.235 15.9951 11.5413 16.3018 11.8567 16.3023C11.9896 16.3025 12.1202 16.2679 12.2357 16.202C12.5096 16.0457 12.6247 15.6276 12.8548 14.7913C12.9559 14.4236 13.0065 14.2397 13.1127 14.0918C13.1592 14.027 13.2131 13.9679 13.2734 13.9157C13.411 13.7965 13.5894 13.7295 13.9461 13.5955L14.8681 13.2491C16.2 12.7487 16.866 12.4985 16.9833 11.9557C17.1007 11.413 16.5977 10.9095 15.5918 9.90258Z" fill={color}/>
</Svg>;

export default BoldDuotonePinCircle;
