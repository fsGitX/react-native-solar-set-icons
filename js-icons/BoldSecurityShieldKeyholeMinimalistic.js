import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldSecurityShieldKeyholeMinimalistic = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M10.8753 8.55212C11.3146 8.29848 11.8017 8.21007 12.2684 8.26664C12.9489 8.34912 13.5804 8.73856 13.9481 9.37549C14.3159 10.0124 14.3374 10.754 14.0686 11.3846C13.8842 11.817 13.5641 12.1947 13.1248 12.4484C12.0488 13.0695 10.6731 12.7009 10.0519 11.625C9.43069 10.5491 9.79933 9.1733 10.8753 8.55212Z" fill={color}/>
	<Path d="M3.37752 5.08241C3 5.62028 3 7.21907 3 10.4167V11.9914C3 17.6294 7.23896 20.3655 9.89856 21.5273C10.62 21.8424 10.9807 22 12 22C13.0193 22 13.38 21.8424 14.1014 21.5273C16.761 20.3655 21 17.6294 21 11.9914V10.4167C21 7.21907 21 5.62028 20.6225 5.08241C20.245 4.54454 18.7417 4.02996 15.7351 3.00079L15.1623 2.80472C13.595 2.26824 12.8114 2 12 2C11.1886 2 10.405 2.26824 8.83772 2.80472L8.26491 3.00079C5.25832 4.02996 3.75503 4.54454 3.37752 5.08241ZM12.4489 6.77754C11.6708 6.68322 10.8555 6.83147 10.1253 7.25308C8.33189 8.28848 7.71744 10.5816 8.75284 12.375C9.31127 13.3422 10.2356 13.9665 11.25 14.174V16.5002C11.25 16.9145 11.5858 17.2502 12 17.2502C12.4142 17.2502 12.75 16.9145 12.75 16.5002V14.175C13.1356 14.0963 13.5152 13.955 13.8748 13.7474C14.605 13.3258 15.141 12.6939 15.4484 11.9728C15.8943 10.927 15.8608 9.68827 15.2472 8.62549C14.6336 7.56272 13.5776 6.91434 12.4489 6.77754Z" fill={color} fillRule="evenodd"/>
</Svg>;

export default BoldSecurityShieldKeyholeMinimalistic;