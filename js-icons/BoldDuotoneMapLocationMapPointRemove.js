import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldDuotoneMapLocationMapPointRemove = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M10.5371 21.6744C11.4657 22.1085 12.5343 22.1085 13.4629 21.6744C17.4467 19.8124 20 14.6055 20 10.1433C20 5.64588 16.4183 2 12 2C7.58172 2 4 5.64588 4 10.1433C4 14.6055 6.55332 19.8124 10.5371 21.6744Z" fill={color} opacity="0.5"/>
	<Path d="M9 9.25C8.58579 9.25 8.25 9.58579 8.25 10C8.25 10.4142 8.58579 10.75 9 10.75H15C15.4142 10.75 15.75 10.4142 15.75 10C15.75 9.58579 15.4142 9.25 15 9.25H9Z" fill={color}/>
</Svg>;

export default BoldDuotoneMapLocationMapPointRemove;
