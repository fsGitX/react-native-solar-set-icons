import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BrokenHomeWiFiAngle = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M21.6359 12.9581L21.3572 14.8954C20.8697 18.2828 20.626 19.9766 19.451 20.9884C18.2759 22.0002 16.5526 22.0002 13.1061 22.0002H10.8939C7.44737 22.0002 5.72409 22.0002 4.54903 20.9884C3.37396 19.9766 3.13025 18.2828 2.64284 14.8954L2.36407 12.958C1.98463 10.321 1.79491 9.00247 2.33537 7.87513C2.87583 6.74778 4.02619 6.06252 6.32691 4.69199L7.71175 3.86705C9.80104 2.62247 10.8457 2.00018 12 2.00018C13.1543 2.00018 14.199 2.62247 16.2882 3.86705L17.6731 4.69199C19.9738 6.06252 21.1242 6.74778 21.6646 7.87513" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M6 11.6825C9.31371 8.10583 14.6863 8.10583 18 11.6825M8.00002 13.841C10.2092 11.4566 13.7909 11.4566 16 13.841M10 16C11.1046 14.8078 12.8955 14.8078 14 16" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
</Svg>;

export default BrokenHomeWiFiAngle;
