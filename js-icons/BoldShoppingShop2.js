import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldShoppingShop2 = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M16.5279 2H7.47225C6.26943 2 5.66803 2 5.18472 2.2987C4.70142 2.5974 4.43246 3.13531 3.89454 4.21114L2.49093 7.75929C2.16664 8.57905 1.8829 9.54525 2.42878 10.2375C2.795 10.7019 3.36269 11 4.00003 11C5.1046 11 6.00003 10.1046 6.00003 9C6.00003 10.1046 6.89546 11 8.00003 11C9.1046 11 10 10.1046 10 9C10 10.1046 10.8955 11 12 11C13.1046 11 14 10.1046 14 9C14 10.1046 14.8955 11 16 11C17.1046 11 18 10.1046 18 9C18 10.1046 18.8955 11 20 11C20.6374 11 21.2051 10.7019 21.5713 10.2375C22.1172 9.54525 21.8335 8.57905 21.5092 7.75929L20.1056 4.21114C19.5677 3.13531 19.2987 2.5974 18.8154 2.2987C18.3321 2 17.7307 2 16.5279 2Z" fill={color}/>
	<Path d="M20 21.2499H22C22.4142 21.2499 22.75 21.5857 22.75 21.9999C22.75 22.4141 22.4142 22.7499 22 22.7499H2C1.58579 22.7499 1.25 22.4141 1.25 21.9999C1.25 21.5857 1.58579 21.2499 2 21.2499H4L4 12.4999C4.74363 12.4999 5.43309 12.268 6 11.8726C6.56692 12.268 7.25638 12.4999 8 12.4999C8.74363 12.4999 9.43309 12.268 10 11.8726C10.5669 12.268 11.2564 12.4999 12 12.4999C12.7436 12.4999 13.4331 12.268 14 11.8726C14.5669 12.268 15.2564 12.4999 16 12.4999C16.7436 12.4999 17.4331 12.268 18 11.8726C18.5669 12.268 19.2564 12.4999 20 12.4999L20 21.2499ZM9.5 21.2499H14.5V18.4999C14.5 17.5653 14.5 17.098 14.299 16.7499C14.1674 16.5219 13.978 16.3325 13.75 16.2009C13.4019 15.9999 12.9346 15.9999 12 15.9999C11.0654 15.9999 10.5981 15.9999 10.25 16.2009C10.022 16.3325 9.83261 16.5219 9.70096 16.7499C9.5 17.098 9.5 17.5653 9.5 18.4999V21.2499Z" fill={color} fillRule="evenodd"/>
</Svg>;

export default BoldShoppingShop2;
