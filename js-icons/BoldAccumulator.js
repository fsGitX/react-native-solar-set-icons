import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldAccumulator = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M22 14V11.9751C22 10.1294 22 9.20663 21.6078 8.51698C21.3409 8.04767 20.9523 7.65908 20.483 7.39219C19.7934 7 18.8706 7 17.0249 7H16.7454C16.6224 7 16.561 7 16.5042 6.9935C16.2083 6.95961 15.943 6.79559 15.7803 6.54609C15.7491 6.49827 15.7216 6.44329 15.6667 6.33333C15.5567 6.11345 15.5017 6.00345 15.4394 5.90782C15.1141 5.40882 14.5833 5.08078 13.9915 5.01299C13.8781 5 13.7552 5 13.5093 5H10.4907C10.2448 5 10.1219 5 10.0085 5.01299C9.41668 5.08078 8.8859 5.40882 8.56062 5.90782C8.49827 6.00346 8.44329 6.11342 8.33333 6.33333C8.27836 6.44328 8.25086 6.49827 8.21969 6.54609C8.05705 6.79559 7.79166 6.95961 7.49576 6.9935C7.43905 7 7.37758 7 7.25464 7H6.97508C5.12945 7 4.20663 7 3.51698 7.39219C3.04767 7.65908 2.65908 8.04767 2.39219 8.51698C2 9.20663 2 10.1294 2 11.9751V14C2 16.8284 2 18.2426 2.87868 19.1213C3.75736 20 5.17157 20 8 20H16C18.8284 20 20.2426 20 21.1213 19.1213C22 18.2426 22 16.8284 22 14Z" fill="#1C274C"/>
	<Path d="M5.04476 3.25C5.47757 3.24995 5.8744 3.24991 6.19721 3.29331C6.5527 3.3411 6.92842 3.45355 7.23744 3.76257C7.54647 4.07159 7.65891 4.44732 7.70671 4.8028C7.70965 4.82469 7.71239 4.84691 7.71495 4.86947C7.74874 5.16758 7.65868 5.46394 7.51814 5.72901C7.43113 5.89312 7.26124 5.99961 7.07549 5.99985L6.92963 6C6.04546 5.99998 5.3158 5.99997 4.72337 6.05301C4.10735 6.10816 3.54349 6.22673 3.02264 6.52292C2.74177 6.68265 2.48257 6.87508 2.25001 7.09526L2.25 5.95526C2.24995 5.52244 2.24991 5.12561 2.29331 4.8028C2.3411 4.44732 2.45355 4.07159 2.76257 3.76257C3.07159 3.45355 3.44732 3.3411 3.8028 3.29331C4.12561 3.24991 4.52244 3.24995 4.95526 3.25H5.04476Z" fill="#1C274C"/>
	<Path d="M19.0448 3.25C19.4776 3.24995 19.8744 3.24991 20.1972 3.29331C20.5527 3.3411 20.9284 3.45355 21.2374 3.76257C21.5465 4.07159 21.6589 4.44732 21.7067 4.8028C21.7501 5.12559 21.7501 5.52248 21.75 5.95526L21.75 7.09527C21.5174 6.87509 21.2582 6.68266 20.9774 6.52292C20.4565 6.22673 19.8927 6.10816 19.2766 6.05301C18.6842 5.99997 17.9545 5.99998 17.0704 6L16.9171 5.99889C16.733 5.99755 16.5651 5.89147 16.4796 5.72842C16.3407 5.4636 16.2513 5.16813 16.2849 4.87099C16.2875 4.84791 16.2903 4.82518 16.2933 4.8028C16.3411 4.44732 16.4535 4.07159 16.7626 3.76257C17.0716 3.45355 17.4473 3.3411 17.8028 3.29331C18.1256 3.24991 18.5224 3.24995 18.9553 3.25H19.0448Z" fill="#1C274C"/>
	<Path d="M16.5 11.25C16.9142 11.25 17.25 11.5858 17.25 12V12.75H18C18.4142 12.75 18.75 13.0858 18.75 13.5C18.75 13.9142 18.4142 14.25 18 14.25H17.25V15C17.25 15.4142 16.9142 15.75 16.5 15.75C16.0858 15.75 15.75 15.4142 15.75 15V14.25H15C14.5858 14.25 14.25 13.9142 14.25 13.5C14.25 13.0858 14.5858 12.75 15 12.75H15.75V12C15.75 11.5858 16.0858 11.25 16.5 11.25ZM5.25 13.5C5.25 13.0858 5.58579 12.75 6 12.75H9C9.41421 12.75 9.75 13.0858 9.75 13.5C9.75 13.9142 9.41421 14.25 9 14.25H6C5.58579 14.25 5.25 13.9142 5.25 13.5Z" fill="white" fillRule="evenodd"/>
</Svg>;

export default BoldAccumulator;
