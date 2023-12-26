import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldHanger2 = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M10.2859 3.90909C10.2859 3.34219 10.8238 2.75 11.6599 2.75C12.496 2.75 13.0339 3.34219 13.0339 3.90909C13.0339 4.22136 12.9225 4.49112 12.7404 4.68925C12.6275 4.81206 12.5031 4.93485 12.3612 5.07483L12.2799 5.15509C12.1114 5.32181 11.9234 5.51074 11.7515 5.71278C11.4862 6.02479 11.1987 6.43649 11.0933 6.94251C10.4658 7.04826 9.85599 7.28792 9.31952 7.66529L2.22382 12.6566C1.29682 13.3086 1.0583 14.3591 1.39591 15.2392C1.72803 16.105 2.58989 16.75 3.70256 16.75H6.00926C6.00002 17.1135 6.00002 17.5271 6.00002 18C6.00002 19.8856 6.00002 20.8284 6.5858 21.4142C7.17159 22 8.1144 22 10 22H14C15.8856 22 16.8284 22 17.4142 21.4142C18 20.8284 18 19.8856 18 18C18 17.5271 18 17.1135 17.9908 16.75H20.2975C21.4221 16.75 22.2877 16.0928 22.6127 15.2165C22.9431 14.3256 22.6859 13.2692 21.7363 12.629L14.3038 7.61866C13.8097 7.2856 13.2576 7.06682 12.6892 6.95888C12.7398 6.87796 12.8069 6.78721 12.8942 6.68456C13.0204 6.53616 13.1678 6.38672 13.3349 6.22141L13.4087 6.14851C13.5498 6.00942 13.7047 5.85668 13.8447 5.7044C14.2867 5.22354 14.5339 4.58928 14.5339 3.90909C14.5339 2.36727 13.1699 1.25 11.6599 1.25C10.1499 1.25 8.7859 2.36727 8.7859 3.90909C8.7859 4.3233 9.12169 4.65909 9.5359 4.65909C9.95012 4.65909 10.2859 4.3233 10.2859 3.90909ZM17.8073 15.25H20.2975C20.8059 15.25 21.1032 14.9729 21.2063 14.6949C21.304 14.4314 21.2546 14.1133 20.8978 13.8728L13.4653 8.86245C12.9827 8.53714 12.3996 8.373 11.8102 8.37985C11.2258 8.38665 10.6528 8.56138 10.1825 8.89216L3.08683 13.8834C2.74174 14.1262 2.69621 14.4407 2.79641 14.7019C2.90209 14.9775 3.19989 15.25 3.70256 15.25H6.19276C6.27921 14.9828 6.40442 14.7672 6.5858 14.5858C7.17159 14 8.1144 14 10 14H14C15.8856 14 16.8284 14 17.4142 14.5858C17.5956 14.7672 17.7208 14.9828 17.8073 15.25Z" fill={color} fillRule="evenodd"/>
</Svg>;

export default BoldHanger2;
