import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldDuotoneFacemaskSquare = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M3.46447 3.46447C2 4.92893 2 7.28595 2 12L2.00001 12.2498C2.09277 12.2498 2.1871 12.2671 2.2785 12.3036L6.99997 14.1918L9.8645 13.046C11.2354 12.4977 12.7646 12.4977 14.1355 13.046L17 14.1918L21.7215 12.3036C21.8129 12.2671 21.9072 12.2498 22 12.2498L22 12C22 7.28595 22 4.92893 20.5355 3.46447C19.0711 2 16.714 2 12 2C7.28595 2 4.92893 2 3.46447 3.46447Z" fill={color} opacity="0.5"/>
	<Path d="M10 10.5C10 11.3284 9.55228 12 9 12C8.44772 12 8 11.3284 8 10.5C8 9.67157 8.44772 9 9 9C9.55228 9 10 9.67157 10 10.5Z" fill={color}/>
	<Path d="M16 10.5C16 11.3284 15.5523 12 15 12C14.4477 12 14 11.3284 14 10.5C14 9.67157 14.4477 9 15 9C15.5523 9 16 9.67157 16 10.5Z" fill={color}/>
	<Path d="M21.9964 13.8096L17.7148 15.5219L17.509 18.4024L20.7956 19.811C20.8778 19.8462 20.9505 19.8944 21.0123 19.9522C21.8458 18.6897 21.976 16.8399 21.9964 13.8096Z" fill={color}/>
	<Path d="M19.8879 21.0539L17.3959 19.9859L17.2631 21.8452C18.3638 21.7169 19.2095 21.4824 19.8879 21.0539Z" fill={color}/>
	<Path d="M15.7514 21.9566C15.7516 21.9533 15.7518 21.9501 15.752 21.9469L16.213 15.4928L13.5785 14.439C12.5653 14.0338 11.435 14.0338 10.4217 14.439L7.78725 15.4928L8.24823 21.9469C8.24846 21.9501 8.24867 21.9533 8.24886 21.9566C9.3015 22.0003 10.5373 22.0003 12.0001 22.0003C13.4629 22.0003 14.6988 22.0003 15.7514 21.9566Z" fill={color}/>
	<Path d="M6.73715 21.8452L6.60435 19.9859L4.11236 21.0539C4.79082 21.4824 5.63646 21.7169 6.73715 21.8452Z" fill={color}/>
	<Path d="M2.98793 19.9522C3.04974 19.8944 3.12245 19.8462 3.2047 19.811L6.49125 18.4024L6.28551 15.5219L2.00391 13.8096C2.02426 16.8399 2.15451 18.6897 2.98793 19.9522Z" fill={color}/>
</Svg>;

export default BoldDuotoneFacemaskSquare;
