import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldMapLocationRoute = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M6.14214 6.14214C8.90356 3.38071 10.2843 2 12 2C13.7157 2 15.0964 3.38071 17.8579 6.14214C20.6193 8.90356 22 10.2843 22 12C22 13.7157 20.6193 15.0964 17.8579 17.8579C15.0964 20.6193 13.7157 22 12 22C10.2843 22 8.90356 20.6193 6.14214 17.8579C3.38071 15.0964 2 13.7157 2 12C2 10.2843 3.38071 8.90356 6.14214 6.14214ZM13.8463 8.45285C13.5441 8.16955 13.0695 8.18486 12.7862 8.48704C12.5029 8.78923 12.5182 9.26386 12.8204 9.54715L14.1034 10.75H10.6667C10.1116 10.75 9.28861 10.9003 8.5804 11.3784C7.83208 11.8835 7.25 12.7345 7.25 14C7.25 14.4142 7.58579 14.75 8 14.75C8.41421 14.75 8.75 14.4142 8.75 14C8.75 13.2655 9.05681 12.8665 9.41961 12.6216C9.8225 12.3497 10.3329 12.25 10.6667 12.25H14.1034L12.8204 13.4528C12.5182 13.7361 12.5029 14.2108 12.7862 14.513C13.0695 14.8151 13.5441 14.8305 13.8463 14.5472L16.513 12.0472C16.6642 11.9054 16.75 11.7073 16.75 11.5C16.75 11.2927 16.6642 11.0946 16.513 10.9528L13.8463 8.45285Z" fill={color} fillRule="evenodd"/>
</Svg>;

export default BoldMapLocationRoute;
