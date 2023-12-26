import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldDuotoneFlipHorizontal = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<g opacity="0.5">
		<Path d="M22 5.88665V18.1139C22 19.816 22 20.6671 21.4576 20.9463C20.9152 21.2254 20.2226 20.7307 18.8375 19.7414L17.2563 18.6119C16.6404 18.172 16.3325 17.9521 16.1663 17.629C16 17.306 16 16.9275 16 16.1707V7.82984C16 7.07301 16 6.69459 16.1662 6.37154C16.3325 6.04849 16.6404 5.82854 17.2563 5.38864L18.8375 4.25918C20.2226 3.26983 20.9152 2.77516 21.4576 3.05429C22 3.33343 22 4.18451 22 5.88665Z" fill={color}/>
		<Path d="M2 5.88665L2 18.1139C2 19.816 2 20.6671 2.54242 20.9463C3.08484 21.2254 3.77738 20.7307 5.16248 19.7414L6.74372 18.6119C7.35957 18.172 7.6675 17.9521 7.83375 17.629C8 17.306 8 16.9275 8 16.1707L8 7.82984C8 7.07301 8 6.69459 7.83375 6.37154C7.6675 6.04849 7.35957 5.82854 6.74372 5.38864L5.16248 4.25918C3.77738 3.26983 3.08484 2.77516 2.54242 3.0543C2 3.33343 2 4.18451 2 5.88665Z" fill={color}/>
	</g>
	<Path d="M12 22.75C11.5858 22.75 11.25 22.4142 11.25 22L11.25 18C11.25 17.5858 11.5858 17.25 12 17.25C12.4142 17.25 12.75 17.5858 12.75 18L12.75 22C12.75 22.4142 12.4142 22.75 12 22.75ZM12 14.75C11.5858 14.75 11.25 14.4142 11.25 14L11.25 10C11.25 9.58579 11.5858 9.25 12 9.25C12.4142 9.25 12.75 9.58579 12.75 10L12.75 14C12.75 14.4142 12.4142 14.75 12 14.75ZM12 6.75C11.5858 6.75 11.25 6.41421 11.25 6L11.25 2C11.25 1.58579 11.5858 1.25 12 1.25C12.4142 1.25 12.75 1.58579 12.75 2L12.75 6C12.75 6.41421 12.4142 6.75 12 6.75Z" fill={color} fillRule="evenodd"/>
</Svg>;

export default BoldDuotoneFlipHorizontal;
