import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LinearMapLocationRoute = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M6.14214 6.14214C8.90356 3.38071 10.2843 2 12 2C13.7157 2 15.0964 3.38071 17.8579 6.14214C20.6193 8.90356 22 10.2843 22 12C22 13.7157 20.6193 15.0964 17.8579 17.8579C15.0964 20.6193 13.7157 22 12 22C10.2843 22 8.90356 20.6193 6.14214 17.8579C3.38071 15.0964 2 13.7157 2 12C2 10.2843 3.38071 8.90356 6.14214 6.14214Z" stroke="black" strokeWidth="1.5"/>
	<Path d="M16 11.5L13.3333 9M16 11.5L13.3333 14M16 11.5L10.6667 11.5C9.77778 11.5 8 12 8 14" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
</Svg>;

export default LinearMapLocationRoute;
