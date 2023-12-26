import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldEssentionalHomeAddAngle = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M2.33537 7.87495C1.79491 9.00229 1.98463 10.3208 2.36407 12.9579L2.64284 14.8952C3.13025 18.2827 3.37396 19.9764 4.54903 20.9882C5.72409 22 7.44737 22 10.8939 22H13.1061C16.5526 22 18.2759 22 19.451 20.9882C20.626 19.9764 20.8697 18.2827 21.3572 14.8952L21.6359 12.9579C22.0154 10.3208 22.2051 9.00229 21.6646 7.87495C21.1242 6.7476 19.9738 6.06234 17.6731 4.69181L16.2882 3.86687C14.199 2.62229 13.1543 2 12 2C10.8457 2 9.80104 2.62229 7.71175 3.86687L6.32691 4.69181C4.02619 6.06234 2.87583 6.7476 2.33537 7.87495ZM12.0001 9.24979C12.4143 9.24979 12.7501 9.58558 12.7501 9.99979V12.2498L15.0001 12.2498C15.4143 12.2498 15.7501 12.5856 15.7501 12.9998C15.7501 13.414 15.4143 13.7498 15.0001 13.7498L12.7501 13.7498V15.9998C12.7501 16.414 12.4143 16.7498 12.0001 16.7498C11.5859 16.7498 11.2501 16.414 11.2501 15.9998V13.7498H9.0001C8.58589 13.7498 8.2501 13.414 8.2501 12.9998C8.2501 12.5856 8.58589 12.2498 9.0001 12.2498H11.2501V9.99979C11.2501 9.58558 11.5859 9.24979 12.0001 9.24979Z" fill={color} fillRule="evenodd"/>
</Svg>;

export default BoldEssentionalHomeAddAngle;
