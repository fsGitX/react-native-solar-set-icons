import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const OutlineMedicineTestTube = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M9.29448 1.35437C8.93791 1.14358 8.47798 1.26176 8.26719 1.61833C8.0564 1.9749 8.17457 2.43483 8.53114 2.64562L8.72707 2.76144L2.00196 14.3695C0.453263 17.0427 1.37338 20.4596 4.05304 22.0014C6.73119 23.5423 10.1569 22.6289 11.7047 19.9573L18.4334 8.343L18.6258 8.45374C18.9848 8.66039 19.4433 8.53689 19.65 8.17791C19.8566 7.81892 19.7331 7.36039 19.3742 7.15374L18.5336 6.66987L10.1262 1.84604L9.29448 1.35437ZM3.29987 15.1214L10.0233 3.51636L17.1329 7.59558L15.6279 10.1933L13.718 9.09443C13.359 8.88786 12.9005 9.01145 12.6939 9.37048C12.4873 9.72951 12.6109 10.188 12.97 10.3946L14.876 11.4912L13.9145 13.1508L10.3597 11.1055C10.0007 10.8989 9.54215 11.0225 9.33558 11.3815C9.12901 11.7406 9.25261 12.1991 9.61164 12.4056L13.1626 14.4487L12.277 15.9773L10.3124 14.847C9.95337 14.6404 9.49486 14.764 9.28829 15.1231C9.08172 15.4821 9.20531 15.9406 9.56434 16.1472L11.525 17.2752L10.4068 19.2053C9.27464 21.1595 6.76482 21.8311 4.8011 20.7012C2.83888 19.5723 2.16857 17.0741 3.29987 15.1214Z" fill={color} fillRule="evenodd"/>
	<Path d="M21.1752 12.1014C20.5324 11.4232 19.4675 11.4232 18.8247 12.1014C18.5172 12.426 18.1419 12.8566 17.8388 13.3157C17.5544 13.7466 17.25 14.3242 17.25 14.9166C17.25 16.4522 18.4526 17.7499 20 17.7499C21.5473 17.7499 22.75 16.4522 22.75 14.9166C22.75 14.3242 22.4456 13.7466 22.1612 13.3157C21.8581 12.8566 21.4828 12.426 21.1752 12.1014ZM19.9135 13.1333C19.9428 13.1024 19.9734 13.0928 20 13.0928C20.0266 13.0928 20.0572 13.1024 20.0865 13.1333C20.3651 13.4272 20.6744 13.7862 20.9093 14.1421C21.1629 14.5263 21.25 14.7891 21.25 14.9166C21.25 15.6821 20.6618 16.2499 20 16.2499C19.3382 16.2499 18.75 15.6821 18.75 14.9166C18.75 14.7891 18.8371 14.5263 19.0907 14.1421C19.3256 13.7862 19.6349 13.4272 19.9135 13.1333Z" fill={color} fillRule="evenodd"/>
</Svg>;

export default OutlineMedicineTestTube;
