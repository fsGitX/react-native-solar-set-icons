import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BrokenEssentionalFuel = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M22 10.2325V15.8834C22 18.7668 22 20.2085 21.1213 21.1042C20.2426 22 18.8284 22 16 22H8C5.17157 22 3.75736 22 2.87868 21.1042C2 20.2085 2 18.7668 2 15.8834V13.0869C2 10.9906 2 9.94241 2.55325 9.14745C3.1065 8.3525 4.07697 8.00623 6.0179 7.3137L14.0179 4.45927C17.6539 3.16195 19.4718 2.51329 20.7359 3.42756C21.4239 3.92513 21.7374 4.73349 21.8803 6" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M9 14C9 12.5858 9 11.8787 9.43934 11.4393C9.87868 11 10.5858 11 12 11C13.4142 11 14.1213 11 14.5607 11.4393C15 11.8787 15 12.5858 15 14C15 15.4142 15 16.1213 14.5607 16.5607C14.1213 17 13.4142 17 12 17C10.5858 17 9.87868 17 9.43934 16.5607C9 16.1213 9 15.4142 9 14Z" stroke="black" strokeWidth="1.5"/>
	<Path d="M15 11L16 10" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M9 11L8 10" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M15 17L16 18" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M9 17L8 18" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M5 7.06009C5 5.75506 5 5.10254 5.33815 4.65303C5.4252 4.53731 5.52676 4.43372 5.64021 4.34492C6.08089 4 6.7206 4 8 4H8.81818C9.32544 4 9.57907 4 9.78716 4.05687C10.3519 4.21122 10.7929 4.66113 10.9442 5.23713" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
</Svg>;

export default BrokenEssentionalFuel;
