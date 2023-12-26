import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BrokenHomeAngle = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M15 18H9" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M21.6359 12.9581L21.3572 14.8955C20.8697 18.2829 20.626 19.9766 19.451 20.9884C18.2759 22.0002 16.5526 22.0002 13.1061 22.0002H10.8939C7.44737 22.0002 5.72409 22.0002 4.54903 20.9884C3.37396 19.9766 3.13025 18.2829 2.64284 14.8955L2.36407 12.9581C1.98463 10.3211 1.79491 9.00253 2.33537 7.87519C2.87583 6.74785 4.02619 6.06258 6.32691 4.69205L7.71175 3.86711C9.80104 2.62253 10.8457 2.00024 12 2.00024C13.1543 2.00024 14.199 2.62253 16.2882 3.86711L17.6731 4.69205C19.9738 6.06258 21.1242 6.74785 21.6646 7.87519" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
</Svg>;

export default BrokenHomeAngle;
