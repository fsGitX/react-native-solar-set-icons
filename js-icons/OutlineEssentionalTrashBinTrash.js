import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const OutlineEssentionalTrashBinTrash = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M10.3093 2.24996H13.6907C13.9071 2.24982 14.0956 2.2497 14.2736 2.27813C14.9769 2.39043 15.5855 2.82909 15.9145 3.46078C15.9978 3.62067 16.0573 3.79955 16.1256 4.00488L16.2372 4.33978C16.2561 4.39647 16.2615 4.41252 16.266 4.42516C16.4412 4.90927 16.8952 5.23653 17.4098 5.24958C17.4234 5.24992 17.4399 5.24998 17.5 5.24998H20.5C20.9142 5.24998 21.25 5.58576 21.25 5.99998C21.25 6.41419 20.9142 6.74998 20.5 6.74998H3.49991C3.08569 6.74998 2.74991 6.41419 2.74991 5.99998C2.74991 5.58576 3.08569 5.24998 3.49991 5.24998H6.49999C6.56004 5.24998 6.57661 5.24992 6.59014 5.24958C7.10479 5.23653 7.55881 4.90929 7.73393 4.42518C7.73854 4.41245 7.74383 4.39675 7.76282 4.33978L7.87443 4.0049C7.94272 3.79958 8.00223 3.62067 8.08549 3.46078C8.41444 2.82909 9.02304 2.39043 9.72634 2.27813C9.90436 2.2497 10.0929 2.24982 10.3093 2.24996ZM9.00806 5.24998C9.05957 5.14895 9.10521 5.04398 9.14448 4.93542C9.15641 4.90245 9.1681 4.86736 9.18313 4.82228L9.28293 4.52286C9.3741 4.24935 9.39509 4.19357 9.41592 4.15358C9.52557 3.94301 9.72843 3.7968 9.96287 3.75936C10.0074 3.75225 10.0669 3.74998 10.3553 3.74998H13.6447C13.933 3.74998 13.9926 3.75225 14.0371 3.75936C14.2716 3.7968 14.4744 3.94301 14.5841 4.15358C14.6049 4.19357 14.6259 4.24934 14.7171 4.52286L14.8168 4.8221L14.8555 4.93544C14.8948 5.04399 14.9404 5.14896 14.9919 5.24998H9.00806Z" fill={color} fillRule="evenodd"/>
	<Path d="M5.915 8.45009C5.88744 8.03679 5.53007 7.72409 5.11677 7.75164C4.70347 7.77919 4.39077 8.13657 4.41832 8.54987L4.88177 15.5016C4.96726 16.7843 5.03633 17.8205 5.1983 18.6336C5.3667 19.4789 5.65312 20.1849 6.24471 20.7384C6.83631 21.2919 7.55985 21.5307 8.41451 21.6425C9.23653 21.75 10.275 21.75 11.5605 21.75H12.4394C13.725 21.75 14.7635 21.75 15.5855 21.6425C16.4401 21.5307 17.1637 21.2919 17.7553 20.7384C18.3469 20.1849 18.6333 19.4789 18.8017 18.6336C18.9637 17.8205 19.0327 16.7844 19.1182 15.5016L19.5817 8.54987C19.6092 8.13657 19.2965 7.77919 18.8832 7.75164C18.4699 7.72409 18.1125 8.03679 18.085 8.45009L17.625 15.3492C17.5352 16.6971 17.4712 17.6349 17.3306 18.3405C17.1942 19.0249 17.0039 19.3872 16.7305 19.643C16.4571 19.8988 16.0829 20.0646 15.3909 20.1552C14.6775 20.2485 13.7375 20.25 12.3867 20.25H11.6133C10.2625 20.25 9.32246 20.2485 8.60906 20.1552C7.91706 20.0646 7.5429 19.8988 7.26949 19.643C6.99607 19.3872 6.80574 19.0249 6.66939 18.3405C6.52882 17.6349 6.4648 16.6971 6.37494 15.3492L5.915 8.45009Z" fill={color}/>
	<Path d="M9.42537 10.2537C9.83753 10.2125 10.2051 10.5132 10.2463 10.9253L10.7463 15.9253C10.7875 16.3375 10.4868 16.705 10.0746 16.7463C9.66247 16.7875 9.29494 16.4868 9.25372 16.0746L8.75372 11.0746C8.71251 10.6624 9.01321 10.2949 9.42537 10.2537Z" fill={color}/>
	<Path d="M14.5746 10.2537C14.9868 10.2949 15.2875 10.6624 15.2463 11.0746L14.7463 16.0746C14.7051 16.4868 14.3375 16.7875 13.9254 16.7463C13.5132 16.705 13.2125 16.3375 13.2537 15.9253L13.7537 10.9253C13.7949 10.5132 14.1625 10.2125 14.5746 10.2537Z" fill={color}/>
</Svg>;

export default OutlineEssentionalTrashBinTrash;
