import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldDuotoneCat = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M9.60601 5.5625C10.3721 5.5625 10.5197 5.40636 12 5.40636C13.4804 5.40636 13.6279 5.5625 14.394 5.5625C15.0324 5.5625 16.9477 4.00011 17.9053 4.00011C18.8629 4.00011 19.9801 4.56261 19.9801 6.18761V8.0625C19.9781 8.55469 19.7993 10.0634 19.0993 9.66022C20.2113 10.9744 19.98 12.5815 19.9801 14C19.9801 17.9062 14.7132 19 12 19C9.28677 19 4.01994 17.9062 4.01994 14C4.01995 12.5815 3.78875 10.9744 4.90066 9.66022C4.20072 10.0634 4.02188 8.55469 4.01995 8.0625V6.1875C4.01995 4.5625 5.13715 4 6.09476 4C7.05236 4 8.9676 5.5625 9.60601 5.5625Z" fill={color} opacity="0.5"/>
	<Path d="M9.01622 11.0625C8.52738 11.0625 8.20149 11.38 8.03646 11.6464C7.86433 11.9243 7.78235 12.2612 7.78235 12.5938C7.78235 12.9263 7.86433 13.2632 8.03646 13.5411C8.20149 13.8075 8.52738 14.125 9.01622 14.125C9.50506 14.125 9.83095 13.8075 9.99598 13.5411C10.1681 13.2632 10.2501 12.9263 10.2501 12.5938C10.2501 12.2612 10.1681 11.9243 9.99598 11.6464C9.83095 11.38 9.50506 11.0625 9.01622 11.0625Z" fill={color}/>
	<Path d="M14.0365 11.6464C14.2015 11.38 14.5274 11.0625 15.0162 11.0625C15.5051 11.0625 15.831 11.38 15.996 11.6464C16.1681 11.9243 16.2501 12.2612 16.2501 12.5938C16.2501 12.9263 16.1681 13.2632 15.996 13.5411C15.831 13.8075 15.5051 14.125 15.0162 14.125C14.5274 14.125 14.2015 13.8075 14.0365 13.5411C13.8643 13.2632 13.7823 12.9263 13.7823 12.5938C13.7823 12.2612 13.8643 11.9243 14.0365 11.6464Z" fill={color}/>
	<Path d="M11.1782 14.0797C11.4305 13.9819 11.7282 13.9375 12.0194 13.9375C12.3107 13.9375 12.6083 13.9819 12.8607 14.0797C12.9844 14.1276 13.1358 14.2032 13.2691 14.3254C13.403 14.448 13.5759 14.675 13.5759 15C13.5759 15.325 13.403 15.552 13.2691 15.6746C13.1358 15.7968 12.9844 15.8724 12.8607 15.9203C12.6083 16.0181 12.3107 16.0625 12.0194 16.0625C11.7282 16.0625 11.4305 16.0181 11.1782 15.9203C11.0545 15.8724 10.9031 15.7968 10.7697 15.6746C10.6359 15.552 10.463 15.325 10.463 15C10.463 14.675 10.6359 14.448 10.7697 14.3254C10.9031 14.2032 11.0545 14.1276 11.1782 14.0797Z" fill={color} fillRule="evenodd"/>
	<Path d="M17.8634 13.375C17.8634 12.9608 18.1992 12.625 18.6134 12.625C18.9091 12.625 19.2636 12.6924 19.594 12.7737C19.9387 12.8585 20.3134 12.9729 20.6705 13.095C21.3544 13.3289 22.0797 13.6271 22.4074 13.8387C22.7553 14.0634 22.8552 14.5277 22.6305 14.8756C22.4058 15.2236 21.9415 15.3235 21.5936 15.0988C21.4374 14.9979 20.8723 14.7493 20.1852 14.5144C19.8569 14.4021 19.526 14.3017 19.2356 14.2302C18.9309 14.1553 18.7208 14.125 18.6134 14.125C18.1992 14.125 17.8634 13.7892 17.8634 13.375Z" fill={color}/>
	<Path d="M17.9679 15.125C17.5536 15.125 17.2179 15.4608 17.2179 15.875C17.2179 16.2892 17.5536 16.625 17.9679 16.625C18.1741 16.625 18.5175 16.7402 18.9481 16.9678C19.2901 17.1485 19.6038 17.3533 19.8491 17.5134C19.8952 17.5435 19.9393 17.5723 19.9803 17.5988C20.3283 17.8235 20.7925 17.7236 21.0173 17.3756C21.242 17.0277 21.1421 16.5634 20.7941 16.3387C20.761 16.3173 20.7232 16.2926 20.6812 16.2652C20.4388 16.1067 20.0586 15.8581 19.6489 15.6416C19.1925 15.4004 18.5681 15.125 17.9679 15.125Z" fill={color}/>
	<Path d="M3.81532 14.5144C3.12823 14.7493 2.5632 14.9979 2.40698 15.0988C2.05903 15.3235 1.59478 15.2236 1.37006 14.8756C1.14534 14.5277 1.24524 14.0634 1.5932 13.8387C1.92085 13.6271 2.64614 13.3289 3.33003 13.095C3.68718 12.9729 4.0619 12.8585 4.4066 12.7737C4.73696 12.6924 5.09144 12.625 5.38719 12.625C5.80141 12.625 6.13719 12.9608 6.13719 13.375C6.13719 13.7892 5.80141 14.125 5.38719 14.125C5.27973 14.125 5.06968 14.1553 4.76496 14.2302C4.47458 14.3017 4.14365 14.4021 3.81532 14.5144Z" fill={color}/>
	<Path d="M4.02026 17.5988C4.06139 17.5722 4.10522 17.5436 4.15147 17.5134C4.3968 17.3533 4.71048 17.1485 5.05248 16.9678C5.48313 16.7402 5.82654 16.625 6.03273 16.625C6.44695 16.625 6.78273 16.2892 6.78273 15.875C6.78273 15.4608 6.44695 15.125 6.03273 15.125C5.43247 15.125 4.80813 15.4004 4.35169 15.6416C3.94197 15.8581 3.56178 16.1067 3.31938 16.2652C3.27751 16.2925 3.23956 16.3174 3.20648 16.3387C2.85852 16.5634 2.75862 17.0277 2.98334 17.3756C3.20806 17.7236 3.67231 17.8235 4.02026 17.5988Z" fill={color}/>
</Svg>;

export default BoldDuotoneCat;
