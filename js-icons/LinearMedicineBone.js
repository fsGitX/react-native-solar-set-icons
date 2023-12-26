import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LinearMedicineBone = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M14.1374 2.73779C13.3942 3.48102 13.0092 4.77646 13.2895 5.7897C13.438 6.32603 13.4622 6.97541 13.0687 7.3689L7.3689 13.0687C6.97541 13.4622 6.32603 13.438 5.7897 13.2895C4.77646 13.0092 3.48101 13.3942 2.73779 14.1374C1.75407 15.1212 1.75407 16.7161 2.73779 17.6998C3.72152 18.6835 5.31646 18.6835 6.30018 17.6998C5.31646 18.6835 5.31645 20.2785 6.30018 21.2622C7.28391 22.2459 8.87884 22.2459 9.86257 21.2622C10.6058 20.519 10.9908 19.2235 10.7105 18.2103C10.562 17.674 10.5378 17.0246 10.9313 16.6311L16.6311 10.9313C17.0246 10.5378 17.674 10.562 18.2103 10.7105C19.2235 10.9908 20.519 10.6058 21.2622 9.86257C22.2459 8.87884 22.2459 7.28391 21.2622 6.30018C20.2785 5.31646 18.6835 5.31646 17.6998 6.30018C18.6835 5.31646 18.6835 3.72152 17.6998 2.73779C16.7161 1.75407 15.1212 1.75407 14.1374 2.73779Z" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
</Svg>;

export default LinearMedicineBone;