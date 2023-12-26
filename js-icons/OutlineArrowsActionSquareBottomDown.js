import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const OutlineArrowsActionSquareBottomDown = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M11.9425 1.25C9.63414 1.24999 7.8251 1.24998 6.41362 1.43975C4.96888 1.63399 3.82886 2.03933 2.93405 2.93414C2.10563 3.76255 1.69614 4.80193 1.48592 6.10063C1.27926 7.37741 1.25412 8.9835 1.25049 10.9986C1.24975 11.4129 1.58493 11.7493 1.99914 11.75C2.41335 11.7507 2.74974 11.4156 2.75049 11.0014C2.75416 8.96143 2.78245 7.47827 2.96665 6.34031C3.1473 5.22427 3.46609 4.52341 3.99471 3.9948C4.56436 3.42514 5.33509 3.09825 6.61349 2.92637C7.91347 2.75159 9.62169 2.75 11.9999 2.75C14.3781 2.75 16.0864 2.75159 17.3863 2.92637C18.6647 3.09825 19.4355 3.42514 20.0051 3.9948C20.5748 4.56445 20.9017 5.33517 21.0735 6.61358C21.2483 7.91356 21.2499 9.62178 21.2499 12C21.2499 14.3782 21.2483 16.0864 21.0735 17.3864C20.9017 18.6648 20.5748 19.4355 20.0051 20.0052C19.4765 20.5338 18.7756 20.8526 17.6596 21.0333C16.5216 21.2175 15.0385 21.2457 12.9986 21.2494C12.5843 21.2502 12.2492 21.5866 12.2499 22.0008C12.2507 22.415 12.587 22.7502 13.0013 22.7494C15.0164 22.7458 16.6225 22.7207 17.8993 22.514C19.198 22.3038 20.2374 21.8943 21.0658 21.0659C21.9606 20.1711 22.3659 19.031 22.5602 17.5863C22.7499 16.1748 22.7499 14.3658 22.7499 12.0574V11.9426C22.7499 9.63423 22.7499 7.82519 22.5602 6.41371C22.3659 4.96897 21.9606 3.82895 21.0658 2.93414C20.171 2.03933 19.0309 1.63399 17.5862 1.43975C16.1747 1.24998 14.3657 1.24999 12.0573 1.25H11.9425Z" fill={color}/>
	<Path d="M9 21.75C9.41421 21.75 9.75 21.4142 9.75 21C9.75 20.5858 9.41421 20.25 9 20.25H4.81066L11.5303 13.5303C11.8232 13.2374 11.8232 12.7626 11.5303 12.4697C11.2374 12.1768 10.7626 12.1768 10.4697 12.4697L3.75 19.1893V15C3.75 14.5858 3.41421 14.25 3 14.25C2.58579 14.25 2.25 14.5858 2.25 15V21C2.25 21.4142 2.58579 21.75 3 21.75H9Z" fill={color}/>
</Svg>;

export default OutlineArrowsActionSquareBottomDown;
