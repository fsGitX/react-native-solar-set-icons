import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldDuotonePointOnMapPerspective = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M22.0001 16C22.0001 13.1716 22.0001 11.7574 21.1214 10.8787C20.6315 10.3888 19.9752 10.172 19.0001 10.0761C18.1668 10.0507 16.2001 10 15.0001 10H8.00007C5.95519 10 4.64951 10 3.75098 10.332L21.6868 20.1968C22.0001 19.3 22.0001 18.0055 22.0001 16Z" fill={color} opacity="0.5"/>
	<Path d="M10.7576 15.8979L2.51112 11.3623C2 12.2636 2 13.6392 2 16.0002C2 18.6659 2 20.0754 2.73557 20.9644L10.7576 15.8979Z" fill={color}/>
	<Path d="M8.00004 22.0002H16C18.4823 22.0002 19.8753 22.0002 20.773 21.4063L12.2591 16.7236L4.21582 21.8036C5.08709 22.0002 6.28296 22.0002 8.00004 22.0002Z" fill={color}/>
	<Path d="M17 2C15.3431 2 14 3.34315 14 5C14 6.39788 14.9561 7.57246 16.25 7.90549L16.25 13C16.25 13.4142 16.5858 13.75 17 13.75C17.4142 13.75 17.75 13.4142 17.75 13V7.90549C19.0439 7.57245 20 6.39788 20 5C20 3.34315 18.6569 2 17 2Z" fill={color}/>
</Svg>;

export default BoldDuotonePointOnMapPerspective;
