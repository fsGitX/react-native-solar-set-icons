import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BrokenSmartphoneUpdate = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<g clipPath="url(#clip0_1648_6343)">
		<Path d="M20 10C20 6.22881 20 4.34319 18.8284 3.17162C17.7653 2.10853 16.1143 2.01009 13 2.00098M20 14C20 17.7713 20 19.6569 18.8284 20.8285C17.6569 22 15.7712 22 12 22C8.22876 22 6.34315 22 5.17157 20.8285C4 19.6569 4 17.7713 4 14V11.001" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
		<Path d="M2.73016 4L1.98016 4L1.98016 4L2.73016 4ZM2.73016 4.8L2.17621 5.3056C2.31831 5.46129 2.51937 5.55 2.73016 5.55C2.94096 5.55 3.14202 5.46129 3.28412 5.3056L2.73016 4.8ZM4.01428 4.5056C4.29352 4.19966 4.27187 3.72528 3.96593 3.44604C3.65998 3.16681 3.1856 3.18846 2.90637 3.4944L4.01428 4.5056ZM2.55396 3.4944C2.27472 3.18846 1.80034 3.16681 1.4944 3.44604C1.18846 3.72528 1.16681 4.19966 1.44604 4.5056L2.55396 3.4944ZM10.2698 3.2L10.8238 2.6944C10.6817 2.53871 10.4806 2.45 10.2698 2.45C10.059 2.45 9.85798 2.53871 9.71588 2.6944L10.2698 3.2ZM8.98572 3.4944C8.70648 3.80034 8.72813 4.27472 9.03407 4.55396C9.34002 4.83319 9.8144 4.81154 10.0936 4.5056L8.98572 3.4944ZM10.446 4.5056C10.7253 4.81154 11.1997 4.83319 11.5056 4.55396C11.8115 4.27472 11.8332 3.80034 11.554 3.4944L10.446 4.5056ZM4.57638 6.30618C4.29935 5.99824 3.82514 5.97317 3.51719 6.2502C3.20925 6.52723 3.18419 7.00144 3.46122 7.30938L4.57638 6.30618ZM8.53968 1.83047C8.79878 2.15364 9.27081 2.20559 9.59398 1.94649C9.91715 1.68739 9.9691 1.21537 9.71 0.892194L8.53968 1.83047ZM6.38098 -0.75C3.88747 -0.75 1.98016 1.4426 1.98016 4H3.48016C3.48016 2.13913 4.84191 0.75 6.38098 0.75V-0.75ZM1.98016 4L1.98016 4.8L3.48016 4.8L3.48016 4L1.98016 4ZM3.28412 5.3056L4.01428 4.5056L2.90637 3.4944L2.17621 4.2944L3.28412 5.3056ZM3.28412 4.2944L2.55396 3.4944L1.44604 4.5056L2.17621 5.3056L3.28412 4.2944ZM6.61902 8.75C9.11253 8.75 11.0198 6.5574 11.0198 4H9.51984C9.51984 5.86087 8.15809 7.25 6.61902 7.25V8.75ZM11.0198 4V3.2H9.51984V4H11.0198ZM9.71588 2.6944L8.98572 3.4944L10.0936 4.5056L10.8238 3.7056L9.71588 2.6944ZM9.71588 3.7056L10.446 4.5056L11.554 3.4944L10.8238 2.6944L9.71588 3.7056ZM3.46122 7.30938C4.25148 8.18784 5.3685 8.75 6.61902 8.75V7.25C5.83415 7.25 5.11029 6.89968 4.57638 6.30618L3.46122 7.30938ZM9.71 0.892194C8.9139 -0.10079 7.72551 -0.75 6.38098 -0.75V0.75C7.22351 0.75 7.99759 1.15432 8.53968 1.83047L9.71 0.892194Z" fill={color}/>
		<Path d="M15 19H9" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	</g>
	<defs>
		<clipPath id="clip0_1648_6343">
			<rect height="24" width="24" fill="white"/>
		</clipPath>
	</defs>
</Svg>;

export default BrokenSmartphoneUpdate;
