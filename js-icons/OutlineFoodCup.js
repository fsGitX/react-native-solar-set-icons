import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const OutlineFoodCup = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M6.948 2.25H13.052C13.9505 2.24997 14.6997 2.24995 15.2945 2.32991C15.9223 2.41432 16.4891 2.59999 16.9445 3.05546C17.2869 3.39785 17.4769 3.80316 17.5859 4.25H18C20.6234 4.25 22.75 6.37665 22.75 9C22.75 11.6234 20.6234 13.75 18 13.75H17.7393C17.7262 14.3712 17.6973 14.9168 17.6335 15.3918C17.5125 16.2919 17.2536 17.0497 16.6517 17.6517C16.0497 18.2536 15.2919 18.5125 14.3918 18.6335C13.5248 18.75 12.4225 18.75 11.0549 18.75H8.94513C7.57754 18.75 6.47522 18.75 5.60825 18.6335C4.70814 18.5125 3.95027 18.2536 3.34835 17.6517C2.74643 17.0497 2.48754 16.2919 2.36652 15.3918C2.27983 14.7469 2.25762 13.9719 2.25195 13.0544C2.25066 13.0365 2.25 13.0183 2.25 13C2.25 12.9845 2.25047 12.9692 2.25139 12.954C2.24999 12.668 2.24999 12.3684 2.25 12.0549L2.25 6.948C2.24997 6.04952 2.24994 5.3003 2.32991 4.70552C2.41432 4.07773 2.59999 3.51093 3.05546 3.05546C3.51093 2.59999 4.07773 2.41432 4.70552 2.32991C5.3003 2.24995 6.04952 2.24997 6.948 2.25ZM3.76115 13.75C3.77341 14.319 3.79914 14.7902 3.85315 15.1919C3.9518 15.9257 4.13225 16.3142 4.40901 16.591C4.68577 16.8678 5.07434 17.0482 5.80812 17.1469C6.56347 17.2484 7.56458 17.25 9 17.25H11C12.4354 17.25 13.4365 17.2484 14.1919 17.1469C14.9257 17.0482 15.3142 16.8678 15.591 16.591C15.8678 16.3142 16.0482 15.9257 16.1469 15.1919C16.2009 14.7902 16.2266 14.319 16.2389 13.75H3.76115ZM16.25 12.25H3.75004C3.75001 12.1682 3.75 12.0848 3.75 12V7C3.75 6.03599 3.75159 5.38843 3.81654 4.90539C3.87858 4.44393 3.9858 4.24644 4.11612 4.11612C4.24643 3.9858 4.44393 3.87858 4.90539 3.81654C5.38843 3.7516 6.03599 3.75 7 3.75H13C13.964 3.75 14.6116 3.7516 15.0946 3.81654C15.5561 3.87858 15.7536 3.9858 15.8839 4.11612C16.0142 4.24644 16.1214 4.44393 16.1835 4.90539C16.2484 5.38843 16.25 6.03599 16.25 7V12C16.25 12.0848 16.25 12.1682 16.25 12.25ZM17.75 12.25H18C19.7949 12.25 21.25 10.7949 21.25 9C21.25 7.20508 19.7949 5.75 18 5.75H17.741C17.75 6.11405 17.75 6.51358 17.75 6.94801L17.75 12.0549C17.75 12.1205 17.75 12.1856 17.75 12.25ZM1.25 21C1.25 20.5858 1.58579 20.25 2 20.25H22C22.4142 20.25 22.75 20.5858 22.75 21C22.75 21.4142 22.4142 21.75 22 21.75H2C1.58579 21.75 1.25 21.4142 1.25 21Z" fill={color} fillRule="evenodd"/>
</Svg>;

export default OutlineFoodCup;
