import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldVolleyball2 = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M11.756 13.3257L12.0171 12.9934C15.365 13.0728 18.4787 14.694 20.4402 17.3653C18.6653 20.1517 15.5485 21.9999 12 21.9999C10.7177 21.9999 9.49181 21.7585 8.36522 21.3188C10.9132 20.7501 13.3607 19.6436 15.4931 18.1493C15.8324 17.9116 15.9146 17.4439 15.6769 17.1047C15.4392 16.7655 14.9715 16.6832 14.6323 16.9209C12.1358 18.6704 9.1927 19.8336 6.21503 20.1577C5.33562 19.533 4.56158 18.7696 3.92479 17.8994C7.00231 17.4192 9.81188 15.7992 11.756 13.3257Z" fill={color}/>
	<Path d="M10.7467 12.1824L10.5766 12.3988C8.73919 14.7366 6.0175 16.2093 3.06576 16.4969C2.38398 15.145 2 13.6173 2 11.9999C2 9.27148 3.09268 6.79829 4.86432 4.99403L4.86305 4.99969C4.3182 7.43417 4.2879 9.9424 4.77311 12.3864C4.85376 12.7927 5.24851 13.0567 5.65479 12.976C6.06108 12.8954 6.32505 12.5006 6.24439 12.0943C5.67155 9.20889 5.8825 6.22464 6.87932 3.40866C7.93127 2.7803 9.1083 2.33968 10.3642 2.13303L10.1849 2.55887C8.86607 5.69099 9.08193 9.23954 10.7467 12.1824Z" fill={color}/>
	<Path d="M12.0812 11.4946C10.6179 8.94446 10.4221 5.86084 11.5673 3.14096L12.0477 2C16.6319 2.02142 20.4872 5.12739 21.6449 9.3491C19.4613 7.51604 16.8587 6.25905 14.0806 5.67701C13.6752 5.59207 13.2777 5.85187 13.1928 6.25728C13.1078 6.66269 13.3676 7.0602 13.773 7.14513C16.7254 7.76368 19.4587 9.21615 21.6241 11.3581L21.6261 11.3601L21.9965 11.7327C21.9988 11.8215 22 11.9106 22 11.9999C22 13.3876 21.7173 14.7093 21.2065 15.9105C18.9642 13.2084 15.6375 11.5871 12.0812 11.4946Z" fill={color}/>
</Svg>;

export default BoldVolleyball2;
