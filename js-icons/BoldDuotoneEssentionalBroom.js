import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldDuotoneEssentionalBroom = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M22.5302 2.53033C22.8231 2.23743 22.8231 1.76256 22.5302 1.46967C22.2373 1.17678 21.7625 1.17678 21.4696 1.46967L19.0676 3.87162C19.2694 4.01476 19.4619 4.17674 19.6427 4.35756C19.8234 4.53824 19.9853 4.7306 20.1284 4.93221L22.5302 2.53033Z" fill={color} opacity="0.5"/>
	<Path d="M2.44853 11.4112L3.18962 12.6295C5.22275 15.9716 8.02819 18.7771 11.3703 20.8102L12.5886 21.5514C14.4872 22.5205 16.9425 21.8979 18.0027 19.8899C18.5037 18.9411 18.9798 17.8777 19.2819 16.821C19.7699 15.114 19.9408 13.5612 19.9945 12.4895C20.0266 11.8492 20.0426 11.5291 19.8902 11.1335C19.7378 10.7378 19.4738 10.4738 18.9456 9.94576L14.1203 5.12125C13.6288 4.62982 13.383 4.3841 13.0133 4.23184C12.6435 4.07957 12.3489 4.08075 11.7597 4.08312C10.6466 4.08759 8.97556 4.20435 7.17896 4.71795C6.12226 5.02004 5.05883 5.49614 4.11001 5.99712C2.10201 7.05734 1.47943 9.51268 2.44853 11.4112Z" fill={color} opacity="0.5"/>
	<Path d="M19.6428 4.35756C17.9069 2.62162 15.0924 2.62175 13.3564 4.35764L13.3186 4.39549C13.55 4.55102 13.7743 4.77521 14.1203 5.12119L18.9456 9.9457C19.2474 10.2475 19.463 10.463 19.6208 10.6662L19.6429 10.644C21.3788 8.90807 21.3788 6.09349 19.6428 4.35756Z" fill={color}/>
</Svg>;

export default BoldDuotoneEssentionalBroom;
