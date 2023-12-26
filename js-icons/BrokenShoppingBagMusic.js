import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BrokenShoppingBagMusic = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M9 6V5C9 3.34315 10.3431 2 12 2C13.6569 2 15 3.34315 15 5V6" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M12 17C12 18.1046 11.1046 19 10 19C8.89543 19 8 18.1046 8 17C8 15.8954 8.89543 15 10 15C11.1046 15 12 15.8954 12 17ZM12 17V12" stroke="black" strokeWidth="1.5"/>
	<Path d="M14.0584 9.97082L12.7416 10.6292L12.7416 10.6292C12.5592 10.7204 12.468 10.766 12.3926 10.8236C12.1974 10.9729 12.064 11.1887 12.0178 11.43C12 11.5232 12 11.6252 12 11.8292C12 12.3147 12 12.5575 12.0598 12.7225C12.2178 13.1587 12.6551 13.429 13.1159 13.3752C13.2902 13.3549 13.5074 13.2463 13.9416 13.0292L15.2584 12.3708C15.4408 12.2796 15.532 12.234 15.6074 12.1764C15.8026 12.0271 15.936 11.8113 15.9822 11.57C16 11.4768 16 11.3748 16 11.1708C16 10.6853 16 10.4425 15.9402 10.2775C15.7822 9.84126 15.3449 9.57102 14.8841 9.62477C14.7098 9.64511 14.4926 9.75368 14.0584 9.97082Z" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M20.2235 12.5257C19.6382 9.40452 19.3456 7.84393 18.2347 6.92196C17.1238 6 15.5361 6 12.3605 6H11.6393C8.46374 6 6.87596 6 5.76506 6.92196C4.65416 7.84393 4.36155 9.40452 3.77633 12.5257C2.9534 16.9146 2.54194 19.1091 3.74157 20.5545C4.94119 22 7.17389 22 11.6393 22H12.3605C16.8259 22 19.0586 22 20.2582 20.5545C20.9542 19.7159 21.1079 18.6252 20.9536 17" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
</Svg>;

export default BrokenShoppingBagMusic;
