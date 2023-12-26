import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldDuotonePulse = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z" fill={color} opacity="0.5"/>
	<Path d="M15.0994 12.0936C14.9145 11.7917 14.7343 11.4973 14.558 11.2865C14.3708 11.0629 14.0427 10.7552 13.541 10.7754C13.0392 10.7955 12.7369 11.1284 12.5682 11.3664C12.4094 11.5905 12.2533 11.8984 12.0933 12.2141L12.0933 12.2142L10.1054 16.1339C10.0303 16.2819 9.96781 16.4052 9.91157 16.5111C9.84318 16.4126 9.76649 16.2976 9.67443 16.1595L9.49755 15.8942C9.2942 15.5891 9.11407 15.3189 8.9414 15.1058C8.75414 14.8747 8.54321 14.6683 8.2589 14.5162C7.9746 14.364 7.6859 14.303 7.38972 14.2754C7.11663 14.2499 6.79189 14.2499 6.42526 14.25L5 14.25C4.58579 14.25 4.25 14.5857 4.25 15C4.25 15.4142 4.58579 15.75 5 15.75H6.39445C6.80113 15.75 7.0553 15.7507 7.25047 15.7689C7.43017 15.7857 7.50379 15.8134 7.55112 15.8387C7.59845 15.864 7.66234 15.9099 7.77596 16.0501C7.89936 16.2024 8.04097 16.4135 8.26656 16.7519L8.4526 17.031C8.64087 17.3135 8.8261 17.5915 9.00554 17.7898C9.1984 18.003 9.52819 18.2871 10.0153 18.2582C10.5025 18.2293 10.7963 17.9081 10.9626 17.6736C11.1173 17.4554 11.2683 17.1574 11.4218 16.8546L13.4092 12.9357C13.4876 12.7812 13.553 12.6523 13.6119 12.5415C13.6794 12.6472 13.7549 12.7704 13.8454 12.9182L14.4994 13.9859C14.6995 14.3127 14.8766 14.6018 15.0485 14.8299C15.2348 15.0773 15.4477 15.2988 15.7406 15.4629C16.0336 15.6271 16.3337 15.6928 16.642 15.7226C16.9263 15.75 17.2653 15.75 17.6485 15.75L19 15.75C19.4142 15.75 19.75 15.4142 19.75 15C19.75 14.5857 19.4142 14.25 19 14.25H17.6805C17.2557 14.25 16.9897 14.2491 16.786 14.2295C16.5983 14.2114 16.5223 14.1815 16.4737 14.1543C16.4251 14.1271 16.36 14.0779 16.2465 13.9273C16.1233 13.7638 15.9837 13.5374 15.7618 13.1752L15.0994 12.0936Z" fill={color}/>
</Svg>;

export default BoldDuotonePulse;