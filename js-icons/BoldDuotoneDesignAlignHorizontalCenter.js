import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldDuotoneDesignAlignHorizontalCenter = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M14.5 14H9.5C8.56538 14 8.09808 14 7.75 14.201C7.52197 14.3326 7.33261 14.522 7.20096 14.75C7 15.0981 7 15.5654 7 16.5C7 17.4346 7 17.9019 7.20096 18.25C7.33261 18.478 7.52197 18.6674 7.75 18.799C8.09808 19 8.56538 19 9.5 19H14.5C15.4346 19 15.9019 19 16.25 18.799C16.478 18.6674 16.6674 18.478 16.799 18.25C17 17.9019 17 17.4346 17 16.5C17 15.5654 17 15.0981 16.799 14.75C16.6674 14.522 16.478 14.3326 16.25 14.201C15.9019 14 15.4346 14 14.5 14Z" fill={color} fillRule="evenodd"/>
	<Path d="M19 7.5C19 6.56539 19 6.09808 18.799 5.75C18.6674 5.52197 18.478 5.33262 18.25 5.20096C17.9019 5 17.4346 5 16.5 5L7.5 5C6.56538 5 6.09808 5 5.75 5.20096C5.52197 5.33261 5.33261 5.52197 5.20096 5.75C5 6.09808 5 6.56538 5 7.5C5 8.43462 5 8.90192 5.20096 9.25C5.33261 9.47803 5.52197 9.66739 5.75 9.79904C6.09808 10 6.56538 10 7.5 10L16.5 10C17.4346 10 17.9019 10 18.25 9.79904C18.478 9.66739 18.6674 9.47803 18.799 9.25C19 8.90192 19 8.43462 19 7.5Z" fill={color}/>
	<g opacity="0.5">
		<Path d="M12.75 5L12.75 2C12.75 1.58579 12.4142 1.25 12 1.25C11.5858 1.25 11.25 1.58579 11.25 2L11.25 5H12.75Z" fill={color}/>
		<Path d="M11.25 10L11.25 14H12.75L12.75 10L11.25 10Z" fill={color}/>
		<Path d="M11.25 19L11.25 22C11.25 22.4142 11.5858 22.75 12 22.75C12.4142 22.75 12.75 22.4142 12.75 22L12.75 19H11.25Z" fill={color}/>
	</g>
</Svg>;

export default BoldDuotoneDesignAlignHorizontalCenter;
