import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldSchoolBookmarkOpened = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M2 12C2 11.1184 2 10.3192 2.00958 9.59291C2.06596 9.39805 2.13335 9.2273 2.21322 9.07054C2.62068 8.27085 3.27085 7.62068 4.07054 7.21322C4.48197 7.00359 4.9897 6.87996 5.77708 6.81563C5.92663 6.80341 6.08387 6.79347 6.25 6.78538V10.831C6.25 11.2986 6.24999 11.6821 6.26739 11.9839C6.28454 12.2816 6.32145 12.5899 6.44371 12.8652C6.88513 13.859 7.97413 14.3949 9.03086 14.1383C9.32356 14.0673 9.59039 13.9084 9.83671 13.7404C10.0864 13.57 10.3903 13.336 10.7608 13.0508L10.7793 13.0365C11.2486 12.6751 11.3808 12.5804 11.5019 12.5277C11.8196 12.3897 12.1804 12.3897 12.4981 12.5277C12.6192 12.5804 12.7513 12.6751 13.2207 13.0365L13.2392 13.0507C13.6097 13.336 13.9135 13.57 14.1633 13.7404C14.4096 13.9084 14.6764 14.0673 14.9691 14.1383C16.0259 14.3949 17.1149 13.859 17.5563 12.8652C17.6786 12.5899 17.7155 12.2816 17.7326 11.9839C17.75 11.6821 17.75 11.2985 17.75 10.831V6.78538C17.9161 6.79347 18.0734 6.80341 18.2229 6.81563C19.0103 6.87996 19.518 7.00359 19.9295 7.21322C20.7291 7.62068 21.3793 8.27085 21.7868 9.07054C21.8667 9.2273 21.934 9.39805 21.9904 9.59292C22 10.3192 22 11.1184 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12ZM21.8433 6.72315C21.6699 5.24918 21.3048 4.23369 20.5355 3.46447C19.0711 2 16.714 2 12 2C7.28595 2 4.92893 2 3.46447 3.46447C2.69524 4.23369 2.33006 5.24918 2.15669 6.72315C2.52685 6.39051 2.9408 6.10536 3.38955 5.87671C4.04768 5.54138 4.77479 5.39252 5.65494 5.32061C6.51928 5.24999 7.59472 5.25 8.96644 5.25H15.0336C16.4053 5.25 17.4807 5.24999 18.3451 5.32061C19.2252 5.39252 19.9523 5.54138 20.6104 5.87671C21.0592 6.10536 21.4732 6.39051 21.8433 6.72315Z" fill={color} fillRule="evenodd"/>
	<Path d="M7.75 10.8076V6.75233C8.12917 6.75006 8.54382 6.75 9 6.75H15C15.4562 6.75 15.8708 6.75006 16.25 6.75233V10.8076C16.25 11.3043 16.2497 11.6442 16.2351 11.8976C16.22 12.1601 16.1923 12.2408 16.1854 12.2563C16.0383 12.5876 15.6753 12.7662 15.323 12.6807C15.3066 12.6767 15.2257 12.6493 15.0085 12.5012C14.7989 12.3582 14.5294 12.151 14.1358 11.848L14.0688 11.7964C13.6986 11.5109 13.4101 11.2885 13.0958 11.152C12.3968 10.8483 11.6032 10.8483 10.9042 11.152C10.5899 11.2885 10.3014 11.511 9.9312 11.7964L9.86419 11.848C9.47062 12.151 9.20112 12.3582 8.99148 12.5012C8.77428 12.6493 8.69342 12.6767 8.67695 12.6807C8.32471 12.7662 7.96171 12.5876 7.81457 12.2563C7.80769 12.2408 7.78003 12.1601 7.7649 11.8976C7.7503 11.6442 7.75 11.3043 7.75 10.8076Z" fill={color}/>
</Svg>;

export default BoldSchoolBookmarkOpened;
