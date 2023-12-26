import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldDuotoneSportsRugby = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M13.4573 2.10986C10.5739 2.38727 7.50954 3.25195 5.38075 5.38075C3.25195 7.50954 2.38727 10.5739 2.10986 13.4573L10.5429 21.8903C13.4263 21.6129 16.4907 20.7483 18.6195 18.6195C20.7483 16.4907 21.6129 13.4263 21.8903 10.5429L13.4573 2.10986Z" fill={color} opacity="0.5"/>
	<Path d="M18.0686 2.08725C16.7367 1.98542 15.1273 1.94909 13.4572 2.10976L21.8902 10.5428C22.0509 8.87269 22.0146 7.26327 21.9127 5.93144C21.7537 3.85169 20.1483 2.24627 18.0686 2.08725Z" fill={color}/>
	<Path d="M5.93144 21.9127C7.26327 22.0146 8.87269 22.0509 10.5428 21.8902L2.10976 13.4572C1.94909 15.1273 1.98542 16.7367 2.08725 18.0686C2.24627 20.1483 3.85169 21.7537 5.93144 21.9127Z" fill={color}/>
	<Path d="M11.9426 8.1601C12.2355 7.86721 12.7104 7.86721 13.0032 8.1601L13.8914 9.0482L14.7795 8.1601C15.0724 7.86721 15.5472 7.86721 15.8401 8.1601C16.133 8.45299 16.133 8.92787 15.8401 9.22076L14.952 10.1089L15.8401 10.997C16.133 11.2899 16.133 11.7647 15.8401 12.0576C15.5472 12.3505 15.0724 12.3505 14.7795 12.0576L13.8914 11.1695L13.0608 12.0001L13.9489 12.8882C14.2418 13.1811 14.2418 13.656 13.9489 13.9489C13.656 14.2418 13.1811 14.2418 12.8882 13.9489L12.0001 13.0608L11.1695 13.8914L12.0576 14.7795C12.3505 15.0723 12.3505 15.5472 12.0576 15.8401C11.7647 16.133 11.2899 16.133 10.997 15.8401L10.1089 14.952L9.22076 15.8401C8.92787 16.133 8.45299 16.133 8.1601 15.8401C7.86721 15.5472 7.86721 15.0723 8.1601 14.7795L9.0482 13.8914L8.1601 13.0032C7.86721 12.7104 7.86721 12.2355 8.1601 11.9426C8.45299 11.6497 8.92787 11.6497 9.22076 11.9426L10.1089 12.8307L10.9394 12.0001L10.0513 11.112C9.75845 10.8191 9.75845 10.3442 10.0513 10.0513C10.3442 9.75845 10.8191 9.75845 11.112 10.0513L12.0001 10.9394L12.8307 10.1089L11.9426 9.22076C11.6497 8.92787 11.6497 8.45299 11.9426 8.1601Z" fill={color} fillRule="evenodd"/>
</Svg>;

export default BoldDuotoneSportsRugby;
