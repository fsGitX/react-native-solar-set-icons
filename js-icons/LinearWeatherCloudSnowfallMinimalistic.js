import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LinearWeatherCloudSnowfallMinimalistic = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<circle cx="12" cy="18" fill={color} r="1"/>
	<circle cx="12" cy="21" fill={color} r="1"/>
	<Path d="M16 19.5C16 20.0523 15.5523 20.5 15 20.5C14.4477 20.5 14 20.0523 14 19.5C14 18.9477 14.4477 18.5 15 18.5C15.5523 18.5 16 18.9477 16 19.5Z" fill={color}/>
	<Path d="M16 16.5C16 17.0523 15.5523 17.5 15 17.5C14.4477 17.5 14 17.0523 14 16.5C14 15.9477 14.4477 15.5 15 15.5C15.5523 15.5 16 15.9477 16 16.5Z" fill={color}/>
	<Path d="M10 19.5C10 20.0523 9.55228 20.5 9 20.5C8.44772 20.5 8 20.0523 8 19.5C8 18.9477 8.44772 18.5 9 18.5C9.55228 18.5 10 18.9477 10 19.5Z" fill={color}/>
	<Path d="M10 16.5C10 17.0523 9.55228 17.5 9 17.5C8.44772 17.5 8 17.0523 8 16.5C8 15.9477 8.44772 15.5 9 15.5C9.55228 15.5 10 15.9477 10 16.5Z" fill={color}/>
	<Path d="M6.28571 19C3.91878 19 2 17.1038 2 14.7647C2 12.4256 3.91878 10.5294 6.28571 10.5294C6.56983 10.5294 6.8475 10.5567 7.11616 10.6089M14.381 8.02721C14.9767 7.81911 15.6178 7.70588 16.2857 7.70588C16.9404 7.70588 17.5693 7.81468 18.1551 8.01498M7.11616 10.6089C6.88706 9.9978 6.7619 9.33687 6.7619 8.64706C6.7619 5.52827 9.32028 3 12.4762 3C15.4159 3 17.8371 5.19371 18.1551 8.01498M7.11616 10.6089C7.68059 10.7184 8.20528 10.9374 8.66667 11.2426M18.1551 8.01498C20.393 8.78024 22 10.8811 22 13.3529C22 16.0599 20.0726 18.3221 17.5 18.8722" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
</Svg>;

export default LinearWeatherCloudSnowfallMinimalistic;
