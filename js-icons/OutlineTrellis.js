import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const OutlineTrellis = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M11.1988 2.91992C10.7812 3.04899 10.2417 3.24504 9.48774 3.51936C8.42173 3.90719 7.16774 4.28264 6.06789 4.38263C5.79401 4.40753 5.59696 4.42546 5.45168 4.44081C5.37954 4.44843 5.32551 4.45486 5.28477 4.46053C5.26469 4.46332 5.24959 4.46569 5.2385 4.4676L5.2261 4.46987C5.22321 4.47044 5.2219 4.47074 5.22194 4.47073C4.88783 4.54696 4.68143 4.6751 4.54858 4.82057C4.41573 4.96605 4.3068 5.1832 4.26114 5.52284C4.25183 5.59204 4.24999 5.71899 4.24999 6.13747V14.25H19.75V6.13747C19.75 5.71899 19.7481 5.59204 19.7388 5.52284C19.6932 5.1832 19.5842 4.96605 19.4514 4.82057C19.3185 4.6751 19.1122 4.54696 18.778 4.47073C18.7781 4.47074 18.7768 4.47044 18.7739 4.46987L18.7615 4.4676C18.7504 4.46569 18.7353 4.46332 18.7152 4.46053C18.6745 4.45486 18.6204 4.44843 18.5483 4.44081C18.403 4.42546 18.2059 4.40753 17.9321 4.38263C16.8322 4.28264 15.5782 3.90719 14.5122 3.51936C13.7582 3.24504 13.2187 3.04899 12.8012 2.91991C12.3773 2.78891 12.1472 2.74963 12 2.74963C11.8528 2.74963 11.6226 2.78891 11.1988 2.91992ZM21.25 14.2677V6.13747C21.25 6.11517 21.25 6.09325 21.25 6.0717C21.2501 5.74775 21.2502 5.50684 21.2255 5.32295C21.148 4.74665 20.9388 4.2249 20.559 3.80906C20.1793 3.39323 19.6786 3.13766 19.1117 3.00831C18.9306 2.96699 18.6175 2.93861 18.1676 2.89783C18.135 2.89489 18.1018 2.89188 18.0679 2.88879C17.1639 2.80661 16.0555 2.48462 15.0251 2.10975L15.0052 2.10251C14.2754 1.83699 13.7012 1.6281 13.2441 1.48681C12.7891 1.34618 12.3816 1.24963 12 1.24963C11.6184 1.24963 11.2108 1.34618 10.7559 1.48681C10.2988 1.6281 9.72457 1.837 8.99477 2.10252L8.97489 2.10975C7.94451 2.48462 6.83609 2.80661 5.93209 2.88879C5.89815 2.89188 5.86493 2.89489 5.83242 2.89783C5.38244 2.93862 5.06939 2.96699 4.88828 3.00831C4.32136 3.13765 3.82069 3.39323 3.44094 3.80906C3.0612 4.2249 2.852 4.74665 2.77451 5.32296C2.74979 5.50684 2.74987 5.74775 2.74997 6.0717C2.74998 6.09325 2.74999 6.11517 2.74999 6.13747V14.2677C1.90286 14.3891 1.2468 15.1179 1.25174 16.0042C1.25776 17.0857 1.28364 17.9871 1.41894 18.7236C1.55817 19.4816 1.82341 20.1267 2.34834 20.6516C2.86864 21.1719 3.50548 21.4359 4.24999 21.5761V22C4.24999 22.4142 4.58577 22.75 4.99999 22.75C5.4142 22.75 5.74999 22.4142 5.74999 22V21.7243C6.38924 21.75 7.11875 21.75 7.94512 21.75H16.0549C16.8812 21.75 17.6107 21.75 18.25 21.7243V22C18.25 22.4142 18.5858 22.75 19 22.75C19.4142 22.75 19.75 22.4142 19.75 22V21.5761C20.4945 21.4359 21.1313 21.1719 21.6516 20.6516C22.1766 20.1267 22.4418 19.4816 22.581 18.7236C22.7163 17.9871 22.7422 17.0857 22.7482 16.0042C22.7532 15.1179 22.0971 14.3891 21.25 14.2677ZM12.75 20.25H16C17.4354 20.25 18.4365 20.2484 19.1919 20.1468C19.9256 20.0482 20.3142 19.8677 20.591 19.591C20.8344 19.3475 21.0016 19.0194 21.1057 18.4526C21.2138 17.8644 21.2422 17.0893 21.2483 15.9959C21.249 15.8631 21.1401 15.75 21 15.75H12.75V20.25ZM11.25 15.75V20.25H7.99999C6.56457 20.25 5.56346 20.2484 4.80811 20.1468C4.07433 20.0482 3.68576 19.8677 3.409 19.591C3.16554 19.3475 2.99837 19.0194 2.89425 18.4526C2.7862 17.8644 2.7578 17.0893 2.75171 15.9959C2.75097 15.8631 2.85986 15.75 2.99999 15.75H11.25ZM11.0303 6.46964C11.3232 6.76253 11.3232 7.2374 11.0303 7.5303L10.0303 8.5303C9.73742 8.82319 9.26255 8.82319 8.96966 8.5303C8.67676 8.2374 8.67676 7.76253 8.96966 7.46964L9.96966 6.46964C10.2625 6.17674 10.7374 6.17674 11.0303 6.46964ZM14.0303 7.46964C14.3232 7.76253 14.3232 8.2374 14.0303 8.5303L11.0303 11.5303C10.7374 11.8232 10.2625 11.8232 9.96966 11.5303C9.67676 11.2374 9.67676 10.7625 9.96966 10.4696L12.9697 7.46964C13.2625 7.17674 13.7374 7.17674 14.0303 7.46964ZM15.0303 10.4696C15.3232 10.7625 15.3232 11.2374 15.0303 11.5303L14.0303 12.5303C13.7374 12.8232 13.2625 12.8232 12.9697 12.5303C12.6768 12.2374 12.6768 11.7625 12.9697 11.4696L13.9697 10.4696C14.2625 10.1767 14.7374 10.1767 15.0303 10.4696ZM6.24999 18C6.24999 17.5858 6.58577 17.25 6.99999 17.25H8.99999C9.4142 17.25 9.74999 17.5858 9.74999 18C9.74999 18.4142 9.4142 18.75 8.99999 18.75H6.99999C6.58577 18.75 6.24999 18.4142 6.24999 18ZM14.25 18C14.25 17.5858 14.5858 17.25 15 17.25H17C17.4142 17.25 17.75 17.5858 17.75 18C17.75 18.4142 17.4142 18.75 17 18.75H15C14.5858 18.75 14.25 18.4142 14.25 18Z" fill={color} fillRule="evenodd"/>
</Svg>;

export default OutlineTrellis;
