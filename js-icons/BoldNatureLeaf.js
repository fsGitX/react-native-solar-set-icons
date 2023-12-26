import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldNatureLeaf = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M11.25 2.08252C11.0066 2.13678 10.7675 2.21776 10.5371 2.32548C6.55332 4.18752 4 9.39446 4 13.8566C4 18.0966 7.18341 21.5797 11.25 21.9646V2.08252Z" fill={color}/>
	<Path d="M12.75 21.9646C16.8166 21.5797 20 18.0966 20 13.8566C20 13.4506 19.9789 13.0384 19.9374 12.6232L12.75 19.8106V21.9646Z" fill={color}/>
	<Path d="M18.2597 7.17958C17.8707 6.45476 17.4222 5.76809 16.92 5.14062L12.75 9.31059V12.6893L18.2597 7.17958Z" fill={color}/>
	<Path d="M15.9084 4.03082C15.1732 3.32559 14.3538 2.74189 13.4629 2.32548C13.2325 2.21776 12.9934 2.13678 12.75 2.08252V7.18927L15.9084 4.03082Z" fill={color}/>
	<Path d="M18.9364 8.62415L12.75 14.8106V17.6893L19.5 10.9393L19.6319 10.8073C19.458 10.0697 19.2246 9.33627 18.9364 8.62415Z" fill={color}/>
</Svg>;

export default BoldNatureLeaf;
