import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldPlanet2 = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M12 20C16.4183 20 20 16.4183 20 12C20 11.8805 19.9974 11.7615 19.9922 11.6433C20.2479 11.4141 20.4882 11.1864 20.7118 10.9611C21.0037 10.6672 21.002 10.1923 20.708 9.90049C20.4336 9.628 20.0014 9.61143 19.7077 9.84972C19.4023 8.75248 18.8688 7.75024 18.1616 6.89725C18.4607 6.84611 18.7436 6.8084 19.0087 6.784C19.4212 6.74604 19.7247 6.38089 19.6868 5.96842C19.6488 5.55595 19.2837 5.25235 18.8712 5.29032C18.4474 5.32932 17.9972 5.39638 17.5262 5.48921C17.3267 5.52851 17.1614 5.64353 17.0543 5.79852C15.6765 4.67424 13.917 4 12 4C7.58172 4 4 7.58172 4 12C4 12.2776 4.01414 12.552 4.04175 12.8223C3.78987 12.7532 3.50899 12.8177 3.31137 13.0159C2.97651 13.3517 2.67596 13.6846 2.415 14.0113C2.15647 14.3349 2.20924 14.8069 2.53287 15.0654C2.8565 15.3239 3.32843 15.2711 3.58696 14.9475C3.78866 14.695 4.02466 14.4302 4.2938 14.1557C4.60754 15.2796 5.16056 16.3037 5.8945 17.1697C5.66824 17.3368 5.54578 17.6248 5.60398 17.919C5.68437 18.3253 6.07894 18.5896 6.48528 18.5092C6.7024 18.4662 6.92455 18.4177 7.15125 18.3637C8.49656 19.3903 10.1771 20 12 20ZM7.15125 18.3637C6.69042 18.012 6.26891 17.6114 5.8945 17.1697C5.98073 17.106 6.08204 17.0599 6.19417 17.0377C7.19089 16.8405 8.33112 16.5084 9.55581 16.0486C9.94359 15.903 10.376 16.0994 10.5216 16.4872C10.6671 16.8749 10.4708 17.3073 10.083 17.4529C9.05325 17.8395 8.0653 18.1459 7.15125 18.3637ZM19.7077 9.84972C19.6869 9.86663 19.6667 9.88483 19.6474 9.90431C18.9609 10.5957 18.0797 11.3337 17.0388 12.0753C16.7014 12.3157 16.6228 12.784 16.8631 13.1213C17.1035 13.4587 17.5718 13.5373 17.9091 13.297C18.6809 12.7471 19.3806 12.1912 19.9922 11.6433C19.965 11.0246 19.8676 10.4241 19.7077 9.84972ZM20.9366 5.37924C20.5336 5.28378 20.1294 5.53313 20.034 5.93619C19.9385 6.33925 20.1879 6.74339 20.5909 6.83886C20.985 6.93219 21.1368 7.07125 21.1932 7.16142C21.2565 7.26269 21.3262 7.52732 21.0363 8.10938C20.8516 8.48014 21.0025 8.93042 21.3732 9.1151C21.744 9.29979 22.1943 9.14894 22.379 8.77818C22.7566 8.02003 22.9422 7.12886 22.4648 6.36582C22.1206 5.81574 21.5416 5.52252 20.9366 5.37924ZM2.81481 16.2501C2.94057 15.8555 2.72259 15.4336 2.32793 15.3078C1.93327 15.1821 1.51138 15.4 1.38562 15.7947C1.19392 16.3963 1.17354 17.0573 1.53488 17.6349C1.98775 18.3587 2.84153 18.6413 3.68907 18.7224C4.1014 18.7619 4.46765 18.4596 4.50712 18.0473C4.54658 17.635 4.24432 17.2687 3.83199 17.2293C3.13763 17.1628 2.88355 16.9624 2.80651 16.8393C2.75679 16.7598 2.70479 16.5954 2.81481 16.2501ZM15.7504 14.704C16.106 14.4915 16.2218 14.0309 16.0093 13.6754C15.7967 13.3199 15.3362 13.204 14.9807 13.4166C14.4991 13.7045 13.9974 13.9881 13.4781 14.2648C12.9445 14.5491 12.4132 14.8149 11.8883 15.0615C11.5134 15.2376 11.3522 15.6843 11.5283 16.0592C11.7044 16.4341 12.1511 16.5953 12.526 16.4192C13.0739 16.1618 13.6277 15.8847 14.1834 15.5887C14.7242 15.3005 15.2474 15.0048 15.7504 14.704Z" fill={color} fillRule="evenodd"/>
</Svg>;

export default BoldPlanet2;
