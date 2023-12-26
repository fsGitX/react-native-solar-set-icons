import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldDuotoneLikeHeartUnlock = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M7.50118 7.01398C7.66526 6.01711 8.055 5.27482 8.59388 4.74477C9.33288 4.01787 10.4444 3.6 11.896 3.6C13.7289 3.6 15.0149 4.26126 15.7123 5.39117C15.9359 5.75349 16.3769 5.84223 16.6974 5.58937C17.0178 5.33652 17.0963 4.83782 16.8727 4.4755C15.821 2.77149 14.0086 2 11.896 2C10.2215 2 8.73888 2.48148 7.66517 3.5376C6.72077 4.46652 6.16184 5.77209 6.03027 7.37702C6.49056 7.17952 6.98528 7.0541 7.50118 7.01398Z" fill={color}/>
	<Path d="M8.49565 20.0367C5.96837 18.1516 3 15.9375 3 12.0992C3 7.86196 7.95014 4.85701 12 8.93062C16.0499 4.85701 21 7.86196 21 12.0992C21 15.9375 18.0316 18.1516 15.5044 20.0367C15.2417 20.2327 14.9838 20.4251 14.7344 20.6154C13.8 21.3285 12.9 22 12 22C11.1 22 10.2 21.3285 9.26556 20.6154C9.01624 20.4251 8.75832 20.2327 8.49565 20.0367Z" fill={color} fillRule="evenodd" opacity="0.5"/>
	<Path d="M12 11.25C12.4142 11.25 12.75 11.5858 12.75 12V14.5C12.75 14.9142 12.4142 15.25 12 15.25C11.5858 15.25 11.25 14.9142 11.25 14.5V12C11.25 11.5858 11.5858 11.25 12 11.25Z" fill={color}/>
</Svg>;

export default BoldDuotoneLikeHeartUnlock;