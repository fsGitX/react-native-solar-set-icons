import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldTextFormattingLinkBroken = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M19.9896 3.9909C18.4369 2.46971 16.3082 2.41169 15.2249 3.47306L11.5248 7.09803C11.2289 7.3879 10.7541 7.38304 10.4642 7.08715C10.1743 6.79127 10.1792 6.31643 10.4751 6.02655L14.1752 2.40158C16.0111 0.602909 19.0889 1.00858 21.0393 2.91943C22.9924 4.83295 23.4177 7.87497 21.5679 9.68728L18.6607 12.5355C18.3648 12.8254 17.8899 12.8205 17.6001 12.5246C17.3102 12.2288 17.3151 11.7539 17.6109 11.464L20.5181 8.61581C21.5875 7.56808 21.5395 5.50942 19.9896 3.9909Z" fill={color}/>
	<Path d="M6.624 3.58374C6.39423 3.2391 5.92858 3.14597 5.58393 3.37573C5.23929 3.60549 5.14616 4.07115 5.37592 4.41579L7.37592 7.41579C7.60569 7.76044 8.07134 7.85357 8.41598 7.62381C8.76063 7.39404 8.85376 6.92839 8.624 6.58374L6.624 3.58374Z" fill={color}/>
	<Path d="M2.23713 7.28826C1.84417 7.15727 1.41943 7.36964 1.28845 7.7626C1.15746 8.15555 1.36983 8.58029 1.76279 8.71128L7.76279 10.7113C8.15575 10.8423 8.58049 10.6299 8.71147 10.2369C8.84246 9.84398 8.63009 9.41924 8.23713 9.28826L2.23713 7.28826Z" fill={color}/>
	<Path d="M6.72751 12.5058C7.00696 12.2 6.98565 11.7256 6.67991 11.4462C6.37416 11.1667 5.89977 11.188 5.62031 11.4938L4.35946 12.8733C2.63262 14.7626 3.00979 17.9266 4.8638 19.955C6.72896 21.9956 9.73425 22.4592 11.5188 20.5068L15.5536 16.0924C15.833 15.7866 15.8117 15.3122 15.5059 15.0328C15.2002 14.7533 14.7258 14.7746 14.4464 15.0804L10.4116 19.4948C9.41075 20.5898 7.44834 20.5593 5.97099 18.943C4.48249 17.3145 4.40806 15.0434 5.46665 13.8852L6.72751 12.5058Z" fill={color}/>
</Svg>;

export default BoldTextFormattingLinkBroken;
