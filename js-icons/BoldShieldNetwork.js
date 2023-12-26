import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldShieldNetwork = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M11.9438 7.76762C11.9785 7.75034 11.9956 7.75 12 7.75C12.0044 7.75 12.0215 7.75034 12.0562 7.76762C12.0936 7.78619 12.1518 7.82491 12.2259 7.9016C12.3786 8.05973 12.5539 8.33309 12.7179 8.74301C12.8795 9.14714 13.0143 9.64428 13.1078 10.2092C13.1631 10.5427 13.2027 10.8921 13.2259 11.25H10.7741C10.7973 10.8921 10.8369 10.5427 10.8922 10.2092C10.9857 9.64428 11.1205 9.14714 11.2821 8.74301C11.4461 8.33308 11.6214 8.05973 11.7741 7.9016C11.8482 7.82491 11.9064 7.78619 11.9438 7.76762Z" fill={color}/>
	<Path d="M9.27133 11.25C9.29642 10.811 9.34356 10.379 9.41233 9.96399C9.5089 9.38112 9.64788 8.8331 9.82738 8.3473C9.52472 8.52732 9.24492 8.74467 8.9948 8.9948C8.60015 9.38944 8.28709 9.85796 8.07351 10.3736C7.9564 10.6563 7.87045 10.9502 7.8167 11.25H9.27133Z" fill={color}/>
	<Path d="M7.8167 12.75H9.27133C9.29642 13.189 9.34356 13.621 9.41233 14.036C9.5089 14.6189 9.64788 15.1669 9.82738 15.6527C9.52472 15.4727 9.24492 15.2553 8.9948 15.0052C8.60015 14.6106 8.28709 14.142 8.07351 13.6264C7.9564 13.3437 7.87045 13.0498 7.8167 12.75Z" fill={color}/>
	<Path d="M16.1833 11.25C16.1296 10.9502 16.0436 10.6563 15.9265 10.3736C15.7129 9.85796 15.3999 9.38945 15.0052 8.9948C14.7551 8.74467 14.4753 8.52732 14.1726 8.3473C14.3521 8.8331 14.4911 9.38113 14.5877 9.96399C14.6564 10.379 14.7036 10.811 14.7287 11.25H16.1833Z" fill={color}/>
	<Path d="M14.7287 12.75H16.1833C16.1296 13.0498 16.0436 13.3437 15.9265 13.6264C15.7129 14.142 15.3999 14.6106 15.0052 15.0052C14.7551 15.2553 14.4753 15.4727 14.1726 15.6527C14.3521 15.1669 14.4911 14.6189 14.5877 14.036C14.6564 13.621 14.7036 13.189 14.7287 12.75Z" fill={color}/>
	<Path d="M13.2259 12.75C13.2027 13.1079 13.1631 13.4573 13.1078 13.7908C13.0143 14.3557 12.8795 14.8529 12.7179 15.257C12.5539 15.6669 12.3786 15.9403 12.2259 16.0984C12.1518 16.1751 12.0936 16.2138 12.0562 16.2324C12.0215 16.2497 12.0044 16.25 12 16.25C11.9956 16.25 11.9785 16.2497 11.9438 16.2324C11.9064 16.2138 11.8482 16.1751 11.7741 16.0984C11.6214 15.9403 11.4461 15.6669 11.2821 15.257C11.1205 14.8529 10.9857 14.3557 10.8922 13.7908C10.8369 13.4573 10.7973 13.1079 10.7741 12.75H13.2259Z" fill={color}/>
	<Path d="M3.37752 5.08241C3 5.62028 3 7.21907 3 10.4167V11.9914C3 17.6294 7.23896 20.3655 9.89856 21.5273C10.62 21.8424 10.9807 22 12 22C13.0193 22 13.38 21.8424 14.1014 21.5273C16.761 20.3655 21 17.6294 21 11.9914V10.4167C21 7.21907 21 5.62028 20.6225 5.08241C20.245 4.54454 18.7417 4.02996 15.7351 3.0008L15.1623 2.80472C13.595 2.26824 12.8114 2 12 2C11.1886 2 10.405 2.26824 8.83772 2.80472L8.26491 3.00079C5.25832 4.02996 3.75503 4.54454 3.37752 5.08241ZM6.25 12C6.25 11.2449 6.39873 10.4972 6.68769 9.79957C6.97666 9.10195 7.4002 8.46807 7.93414 7.93414C8.46807 7.4002 9.10195 6.97666 9.79957 6.68769C10.4972 6.39873 11.2449 6.25 12 6.25C12.7551 6.25 13.5028 6.39873 14.2004 6.68769C14.8981 6.97666 15.5319 7.4002 16.0659 7.93414C16.5998 8.46807 17.0233 9.10195 17.3123 9.79957C17.6013 10.4972 17.75 11.2449 17.75 12C17.75 12.7551 17.6013 13.5028 17.3123 14.2004C17.0233 14.8981 16.5998 15.5319 16.0659 16.0659C15.5319 16.5998 14.8981 17.0233 14.2004 17.3123C13.5028 17.6013 12.7551 17.75 12 17.75C11.2449 17.75 10.4972 17.6013 9.79957 17.3123C9.10195 17.0233 8.46807 16.5998 7.93414 16.0659C7.4002 15.5319 6.97666 14.8981 6.68769 14.2004C6.39873 13.5028 6.25 12.7551 6.25 12Z" fill={color} fillRule="evenodd"/>
</Svg>;

export default BoldShieldNetwork;
