import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldAstronomyAsteroid = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M2 12C2 6.47715 6.47715 2 12 2C14.1266 2 16.0982 2.66383 17.7188 3.79559C16.7998 4.94874 16.25 6.41105 16.25 7.99974C16.25 11.2675 18.5713 13.9914 21.6545 14.6155C20.5047 18.8698 16.6179 22 12 22C11.3615 22 10.7369 21.9402 10.1316 21.8258C10.5287 20.9653 10.75 20.0075 10.75 19C10.75 15.2721 7.7279 12.25 3.99998 12.25C3.31014 12.25 2.64323 12.3537 2.0147 12.5469C2.00494 12.3658 2 12.1835 2 12ZM16 16C16 16.5523 15.5523 17 15 17C14.4477 17 14 16.5523 14 16C14 15.4477 14.4477 15 15 15C15.5523 15 16 15.4477 16 16ZM10.5 11C11.8807 11 13 9.88071 13 8.5C13 7.11929 11.8807 6 10.5 6C9.11929 6 8 7.11929 8 8.5C8 9.88071 9.11929 11 10.5 11Z" fill={color} fillRule="evenodd"/>
	<Path d="M17.75 7.99974C17.75 6.76899 18.1726 5.63896 18.8812 4.74396C20.8021 6.56624 22 9.14322 22 12C22 12.3861 21.9781 12.7672 21.9355 13.1419C19.5463 12.6503 17.75 10.534 17.75 7.99974Z" fill={color}/>
	<Path d="M8.65778 21.4278C5.40825 20.2758 2.93116 17.4914 2.21252 14.0605L2.32447 14.0228C2.84969 13.8461 3.41284 13.75 3.99998 13.75C6.89948 13.75 9.24998 16.1005 9.24998 19C9.24998 19.8351 9.05555 20.6226 8.71017 21.3218L8.65778 21.4278Z" fill={color}/>
</Svg>;

export default BoldAstronomyAsteroid;
