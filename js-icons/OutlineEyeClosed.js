import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const OutlineEyeClosed = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M22.2954 6.31064C22.6761 6.4738 22.8525 6.91471 22.6893 7.29543L22 6.99999C22.6893 7.29543 22.6894 7.29526 22.6893 7.29543L22.6886 7.29711L22.6875 7.2996L22.6843 7.30696L22.6737 7.33103C22.6647 7.35117 22.6519 7.37938 22.6353 7.41507C22.602 7.48642 22.5533 7.58774 22.4889 7.71415C22.36 7.9668 22.1676 8.32067 21.9085 8.73646C21.4829 9.4195 20.8724 10.2776 20.062 11.1302L21.0303 12.0985C21.3232 12.3914 21.3232 12.8663 21.0303 13.1592C20.7374 13.4521 20.2625 13.4521 19.9697 13.1592L18.9691 12.1586C18.3094 12.7113 17.5529 13.23 16.6951 13.6562L17.6286 15.091C17.8545 15.4381 17.7562 15.9027 17.409 16.1286C17.0618 16.3545 16.5973 16.2562 16.3713 15.909L15.2822 14.2351C14.5028 14.4896 13.659 14.6626 12.75 14.7246V16.5C12.75 16.9142 12.4142 17.25 12 17.25C11.5858 17.25 11.25 16.9142 11.25 16.5V14.7246C10.369 14.6645 9.54916 14.5002 8.78989 14.2584L7.71581 15.9091C7.48991 16.2563 7.02532 16.3546 6.67813 16.1287C6.33095 15.9028 6.23263 15.4382 6.45853 15.091L7.37095 13.6888C6.50657 13.2666 5.74387 12.7502 5.07848 12.1983L4.1175 13.1592C3.82461 13.4521 3.34974 13.4521 3.05684 13.1592C2.76395 12.8663 2.76395 12.3915 3.05684 12.0986L3.98061 11.1748C3.15605 10.3151 2.53531 9.44655 2.10283 8.75466C1.8399 8.33403 1.64466 7.97564 1.51394 7.71968C1.44854 7.59162 1.39916 7.48894 1.36543 7.41663C1.34856 7.38047 1.33559 7.35188 1.32648 7.33148L1.31568 7.30709L1.31244 7.29964L1.31135 7.29713L1.31095 7.29618C1.31087 7.296 1.31063 7.29543 1.99998 6.99999L1.31095 7.29618C1.14778 6.91546 1.32382 6.4738 1.70455 6.31064C2.08495 6.1476 2.52545 6.32354 2.68894 6.70361C2.689 6.70375 2.68888 6.70348 2.68894 6.70361L2.6899 6.70581L2.69597 6.71952C2.70186 6.73271 2.71146 6.7539 2.72479 6.78247C2.75145 6.83963 2.79302 6.92624 2.84982 7.03747C2.96351 7.26009 3.13768 7.58027 3.37479 7.95959C3.85039 8.72047 4.57163 9.70708 5.55567 10.6216C6.42157 11.4263 7.48265 12.1676 8.75171 12.6558C9.7062 13.023 10.7854 13.25 12 13.25C13.2417 13.25 14.3421 13.0128 15.3125 12.6308C16.5739 12.1343 17.6277 11.3882 18.4867 10.582C19.4562 9.67196 20.1669 8.69515 20.6354 7.9432C20.869 7.5683 21.0406 7.25226 21.1526 7.03266C21.2086 6.92295 21.2495 6.83756 21.2758 6.78124C21.2889 6.75309 21.2983 6.73222 21.3041 6.71923L21.3101 6.70575L21.3106 6.70455C21.3107 6.70446 21.3106 6.70465 21.3106 6.70455M22.2954 6.31064C21.9148 6.14751 21.4739 6.32404 21.3106 6.70455ZM2.68894 6.70361C2.689 6.70375 2.68888 6.70348 2.68894 6.70361Z" fill={color} fillRule="evenodd"/>
</Svg>;

export default OutlineEyeClosed;
