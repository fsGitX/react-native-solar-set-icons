import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldEarth = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M13.4365 18.2761C14.4246 16.414 17.7182 16.414 17.7182 16.414C21.1502 16.3782 21.6138 14.2944 21.9237 13.2412C21.369 17.7226 17.8494 21.2849 13.3885 21.9046C13.0659 21.2256 12.6837 19.6946 13.4365 18.2761Z" fill={color}/>
	<Path d="M5.00602 5.8339L4.59438 5.48184C4.56011 5.45252 4.52734 5.42182 4.49611 5.38985C2.94252 7.15213 2 9.466 2 12C2 17.4608 6.37707 21.8992 11.8142 21.9983C11.4608 20.9435 11.2302 19.234 12.1116 17.5732C12.9217 16.0465 14.5516 15.4456 15.5899 15.1903C16.1567 15.051 16.6778 14.9831 17.0542 14.9493C17.2442 14.9323 17.4018 14.9235 17.5156 14.919C17.5726 14.9168 17.6189 14.9156 17.6531 14.9149L17.6952 14.9143L17.7064 14.9143C19.0872 14.8991 19.6231 14.4916 19.8704 14.2132C20.1763 13.8688 20.2962 13.4605 20.4632 12.8917L20.4849 12.818C20.683 12.1447 21.3156 11.7093 21.9968 11.743C21.934 9.25352 20.9613 6.99003 19.3989 5.27266C19.3673 5.45036 19.3297 5.61557 19.2921 5.76183C19.1225 6.4234 18.8378 7.13716 18.4884 7.66739C18.1465 8.1863 17.5392 8.64995 17.1355 8.94003C16.8308 9.15893 16.5194 9.34078 16.2628 9.48867L16.1707 9.54169C15.939 9.67497 15.7548 9.78114 15.5794 9.89699C15.2234 10.1322 15.0099 10.3411 14.8652 10.6241C14.9532 10.9464 15.0157 11.3168 15.0167 11.7041C15.0191 12.6256 14.5474 13.3537 13.9836 13.8081C13.4289 14.2551 12.7112 14.5078 11.984 14.4999C9.03417 14.4677 7.30397 12.0613 7.08118 9.5816C7.0164 8.8606 6.69205 8.08373 6.23879 7.35988C5.798 6.65591 5.29975 6.10474 5.00602 5.8339Z" fill={color}/>
	<Path d="M8.57516 9.44737C8.3879 7.36316 6.7806 5.42105 6.00035 4.71053L5.56934 4.34189C7.30792 2.88037 9.55133 2 12.0004 2C14.2137 2 16.2592 2.7191 17.9158 3.93642C18.1498 4.64695 17.704 6.13158 17.2359 6.84211C17.0663 7.09947 16.6818 7.41898 16.2602 7.72186C15.3097 8.40477 14.1102 8.74254 13.5004 10C13.326 10.3595 13.3335 10.7108 13.4173 11.0163C13.4776 11.2358 13.5161 11.4745 13.5167 11.708C13.5187 12.4629 12.7552 13.0082 12.0004 13C10.0361 12.9786 8.7502 11.3955 8.57516 9.44737Z" fill={color}/>
</Svg>;

export default BoldEarth;