import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LinearRewindForwardCircle = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<circle cx="12" cy="12" r="10" stroke="black" strokeWidth="1.5"/>
	<Path d="M13 8.07141L16.2215 10.3725C17.3382 11.1702 17.3382 12.8298 16.2215 13.6274L13 15.9286M7.5 15.0568V8.94317C7.5 8.1298 8.41937 7.65667 9.08124 8.12944L13.3608 11.1862C13.9191 11.5851 13.9191 12.4149 13.3608 12.8137L9.08124 15.8705C8.41937 16.3433 7.5 15.8702 7.5 15.0568Z" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
</Svg>;

export default LinearRewindForwardCircle;
