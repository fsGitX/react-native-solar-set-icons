import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldHashtagChat = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M17.8144 21.2359L17.5433 21.6938C17.3017 22.102 16.6982 22.102 16.4567 21.6938L16.1856 21.2359C15.9754 20.8807 15.8702 20.7031 15.7014 20.6049C15.5325 20.5067 15.32 20.503 14.8948 20.4957C14.2671 20.4849 13.8734 20.4464 13.5433 20.3097C12.9307 20.0559 12.444 19.5693 12.1903 18.9567C12 18.4973 12 17.9148 12 16.75V16.25C12 14.6132 12 13.7949 12.3684 13.1937C12.5745 12.8573 12.8574 12.5745 13.1938 12.3683C13.7949 11.9999 14.6133 11.9999 16.25 11.9999H17.75C19.3867 11.9999 20.2051 11.9999 20.8062 12.3683C21.1426 12.5745 21.4255 12.8573 21.6316 13.1937C22 13.7949 22 14.6132 22 16.25V16.75C22 17.9148 22 18.4973 21.8097 18.9567C21.556 19.5693 21.0693 20.0559 20.4567 20.3097C20.1266 20.4464 19.7329 20.4849 19.1052 20.4957C18.68 20.503 18.4674 20.5067 18.2986 20.6049C18.1297 20.7031 18.0246 20.8807 17.8144 21.2359Z" fill={color}/>
	<Path d="M10.2007 2.27731C10.5998 2.38817 10.8335 2.80158 10.7226 3.20068L9.32006 8.24995H16.7633L18.2774 2.79921C18.3882 2.40011 18.8016 2.16645 19.2007 2.27731C19.5998 2.38817 19.8335 2.80158 19.7226 3.20068L18.3201 8.24995H22C22.4142 8.24995 22.75 8.58573 22.75 8.99995C22.75 9.41416 22.4142 9.74995 22 9.74995H17.9016C17.7716 10.1188 17.3761 10.3288 16.9937 10.2226C16.7488 10.1546 16.5662 9.97261 16.4873 9.74995H8.9034L7.37562 15.2499H9C9.41421 15.2499 9.75 15.5857 9.75 15.9999C9.75 16.4142 9.41421 16.7499 9 16.7499H6.95895L5.72264 21.2007C5.61178 21.5998 5.19837 21.8334 4.79927 21.7226C4.40016 21.6117 4.1665 21.1983 4.27736 20.7992L5.40216 16.7499H2C1.58579 16.7499 1.25 16.4142 1.25 15.9999C1.25 15.5857 1.58579 15.2499 2 15.2499H5.81882L7.3466 9.74995H4C3.58579 9.74995 3.25 9.41416 3.25 8.99995C3.25 8.58573 3.58579 8.24995 4 8.24995H7.76327L9.27736 2.79921C9.38822 2.40011 9.80163 2.16645 10.2007 2.27731Z" fill={color} fillRule="evenodd"/>
</Svg>;

export default BoldHashtagChat;
