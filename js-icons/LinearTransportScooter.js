import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LinearTransportScooter = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<rect height="6" width="6" rx="3" stroke="#1C274C" strokeWidth="1.5" x="16" y="13"/>
	<Path d="M11 16V14.5C11 12.6144 11 11.6716 10.4142 11.0858C9.82843 10.5 8.88562 10.5 7 10.5H6.4C6.02856 10.5 5.84284 10.5 5.68616 10.5123C3.72466 10.6667 2.1667 12.2247 2.01233 14.1862C2 14.3428 2 14.5286 2 14.9C2 14.9929 2 15.0393 2.00308 15.0785C2.04168 15.5688 2.43116 15.9583 2.92154 15.9969C2.96071 16 3.00714 16 3.1 16H11ZM11 16H16" stroke="#1C274C" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M9.5 16C9.5 17.6569 8.15685 19 6.5 19C4.84315 19 3.5 17.6569 3.5 16" stroke="#1C274C" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M12 5H12.5279C13.7307 5 14.3321 5 14.8154 5.2987C15.2987 5.5974 15.5677 6.13531 16.1056 7.21114L19 13" stroke="#1C274C" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M18.1426 11L18.8243 10.4978C19.0871 10.3041 19.2186 10.2073 19.31 10.0811C19.3722 9.99519 19.4203 9.89994 19.4526 9.7989C19.5 9.65046 19.5 9.48721 19.5 9.16072C19.5 8.54327 19.5 8.23455 19.3684 8.00405C19.2797 7.84887 19.1511 7.72028 18.996 7.63165C18.7654 7.5 18.4567 7.5 17.8393 7.5H16.5" stroke="#1C274C" strokeLinecap="round" strokeWidth="1.5"/>
	<circle cx="19" cy="16" r="3" stroke="#1C274C" strokeWidth="1.5"/>
</Svg>;

export default LinearTransportScooter;
