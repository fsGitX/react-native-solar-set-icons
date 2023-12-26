import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldDuotoneBoneCrack = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M2.73779 17.6998C3.72152 18.6835 5.31646 18.6835 6.30018 17.6998C5.31646 18.6835 5.31645 20.2784 6.30018 21.2621C7.28391 22.2459 8.87884 22.2459 9.86257 21.2621C10.6058 20.5189 10.9908 19.2235 10.7105 18.2102C10.562 17.6739 10.5378 17.0245 10.9313 16.631L15.3831 12.1792L12.3535 13.0605V11.6463L10.2322 12.3534L10.2188 10.2188L7.3689 13.0687C6.97541 13.4621 6.32603 13.4379 5.7897 13.2895C4.77646 13.0091 3.48101 13.3942 2.73779 14.1374C1.75407 15.1211 1.75407 16.716 2.73779 17.6998Z" fill={color}/>
	<Path d="M14.1374 2.73779C13.3942 3.48102 13.0091 4.77646 13.2895 5.7897C13.4379 6.32603 13.4622 6.97541 13.0687 7.3689L10.2188 10.2188L10.2321 12.3535L12.3534 11.6464V13.0606L15.3831 12.1793L16.631 10.9313C17.0245 10.5378 17.6739 10.562 18.2102 10.7105C19.2235 10.9908 20.5189 10.6058 21.2621 9.86257C22.2459 8.87884 22.2459 7.28391 21.2621 6.30018C20.2784 5.31646 18.6835 5.31646 17.6998 6.30018C18.6835 5.31646 18.6835 3.72152 17.6998 2.73779C16.716 1.75407 15.1211 1.75407 14.1374 2.73779Z" fill={color} opacity="0.5"/>
</Svg>;

export default BoldDuotoneBoneCrack;