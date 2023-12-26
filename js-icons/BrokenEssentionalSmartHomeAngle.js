import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BrokenEssentionalSmartHomeAngle = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M21.6359 12.9581L21.3572 14.8954C20.8697 18.2828 20.626 19.9766 19.451 20.9884C18.3822 21.9086 16.8599 21.9919 14 21.9994M21.6646 7.87513C21.1242 6.74779 19.9738 6.06252 17.6731 4.69199L16.2882 3.86705C14.199 2.62247 13.1543 2.00018 12 2.00018C10.8457 2.00018 9.80104 2.62247 7.71175 3.86705L6.32691 4.69199C4.02619 6.06252 2.87583 6.74779 2.33537 7.87513C2.04852 8.47345 1.96736 9.12562 2.01108 10.0002" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M11 22C11 17.0294 6.97056 13 2 13" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M8 22C8 18.6863 5.31371 16 2 16" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M5 22C5 20.3431 3.65685 19 2 19" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
</Svg>;

export default BrokenEssentionalSmartHomeAngle;
