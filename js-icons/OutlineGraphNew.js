import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const OutlineGraphNew = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M11.9426 1.25H13.5C13.9142 1.25 14.25 1.58579 14.25 2C14.25 2.41421 13.9142 2.75 13.5 2.75H12C9.62178 2.75 7.91356 2.75159 6.61358 2.92637C5.33517 3.09825 4.56445 3.42514 3.9948 3.9948C3.42514 4.56445 3.09825 5.33517 2.92637 6.61358C2.75159 7.91356 2.75 9.62178 2.75 12C2.75 14.3782 2.75159 16.0864 2.92637 17.3864C3.09825 18.6648 3.42514 19.4355 3.9948 20.0052C4.56445 20.5749 5.33517 20.9018 6.61358 21.0736C7.91356 21.2484 9.62178 21.25 12 21.25C14.3782 21.25 16.0864 21.2484 17.3864 21.0736C18.6648 20.9018 19.4355 20.5749 20.0052 20.0052C20.5749 19.4355 20.9018 18.6648 21.0736 17.3864C21.2484 16.0864 21.25 14.3782 21.25 12V10.5C21.25 10.0858 21.5858 9.75 22 9.75C22.4142 9.75 22.75 10.0858 22.75 10.5V12.0574C22.75 14.3658 22.75 16.1748 22.5603 17.5863C22.366 19.031 21.9607 20.1711 21.0659 21.0659C20.1711 21.9607 19.031 22.366 17.5863 22.5603C16.1748 22.75 14.3658 22.75 12.0574 22.75H11.9426C9.63423 22.75 7.82519 22.75 6.41371 22.5603C4.96897 22.366 3.82895 21.9607 2.93414 21.0659C2.03933 20.1711 1.63399 19.031 1.43975 17.5863C1.24998 16.1748 1.24999 14.3658 1.25 12.0574V11.9426C1.24999 9.63423 1.24998 7.82519 1.43975 6.41371C1.63399 4.96897 2.03933 3.82895 2.93414 2.93414C3.82895 2.03933 4.96897 1.63399 6.41371 1.43975C7.82519 1.24998 9.63423 1.24999 11.9426 1.25Z" fill={color}/>
	<Path d="M17.4801 9.42383C17.7983 9.68901 17.8413 10.1619 17.5762 10.4801L15.7473 12.6748C15.4189 13.069 15.1228 13.4244 14.8462 13.6742C14.5452 13.9459 14.1662 14.188 13.6667 14.188C13.1672 14.188 12.7881 13.9459 12.4872 13.6742C12.2106 13.4244 11.9145 13.069 11.586 12.6748L11.2936 12.3239C10.9228 11.8789 10.6951 11.6085 10.5075 11.4391C10.4205 11.3606 10.3689 11.3292 10.3442 11.3173C10.3414 11.3159 10.339 11.3149 10.3371 11.314L10.3333 11.3125C10.3311 11.3134 10.3275 11.3148 10.3225 11.3173C10.2977 11.3292 10.2461 11.3606 10.1591 11.4391C9.97155 11.6085 9.74385 11.8789 9.37306 12.3239L7.57617 14.4801C7.31099 14.7983 6.83807 14.8413 6.51986 14.5762C6.20165 14.311 6.15866 13.8381 6.42383 13.5199L8.25267 11.3253C8.58113 10.931 8.87725 10.5756 9.15384 10.3258C9.45478 10.0541 9.83385 9.81205 10.3333 9.81205C10.8328 9.81205 11.2119 10.0541 11.5128 10.3258C11.7894 10.5756 12.0855 10.931 12.414 11.3252L12.7064 11.6761C13.0772 12.1211 13.3049 12.3915 13.4925 12.5609C13.5795 12.6394 13.6311 12.6708 13.6558 12.6827C13.6608 12.6852 13.6644 12.6866 13.6667 12.6875C13.6667 12.6875 13.6694 12.6864 13.6713 12.6856C13.6713 12.6856 13.6751 12.6839 13.6775 12.6827C13.7023 12.6708 13.7539 12.6394 13.8409 12.5609C14.0284 12.3915 14.2562 12.1211 14.6269 11.6761L16.4238 9.51986C16.689 9.20165 17.1619 9.15866 17.4801 9.42383Z" fill={color}/>
	<Path d="M19 1.25C16.9289 1.25 15.25 2.92893 15.25 5C15.25 7.07107 16.9289 8.75 19 8.75C21.0711 8.75 22.75 7.07107 22.75 5C22.75 2.92893 21.0711 1.25 19 1.25ZM16.75 5C16.75 3.75736 17.7574 2.75 19 2.75C20.2426 2.75 21.25 3.75736 21.25 5C21.25 6.24264 20.2426 7.25 19 7.25C17.7574 7.25 16.75 6.24264 16.75 5Z" fill={color} fillRule="evenodd"/>
</Svg>;

export default OutlineGraphNew;
