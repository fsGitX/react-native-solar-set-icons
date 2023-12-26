import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const OutlineLinkBroken = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M19.9896 3.9909C18.4369 2.46971 16.3083 2.41169 15.225 3.47306L11.5249 7.09803C11.229 7.3879 10.7542 7.38304 10.4643 7.08715C10.1744 6.79127 10.1793 6.31643 10.4752 6.02655L14.1752 2.40158C16.0112 0.602909 19.0889 1.00858 21.0393 2.91943C22.9925 4.83295 23.4178 7.87497 21.5679 9.68728L18.6607 12.5355C18.3648 12.8254 17.89 12.8205 17.6001 12.5246C17.3102 12.2288 17.3151 11.7539 17.611 11.464L20.5182 8.61581C21.5876 7.56808 21.5396 5.50942 19.9896 3.9909Z" fill={color}/>
	<Path d="M6.62406 3.58374C6.39429 3.2391 5.92864 3.14597 5.584 3.37573C5.23935 3.60549 5.14622 4.07115 5.37598 4.41579L7.37598 7.41579C7.60575 7.76044 8.0714 7.85357 8.41605 7.62381C8.76069 7.39404 8.85382 6.92839 8.62406 6.58374L6.62406 3.58374Z" fill={color}/>
	<Path d="M2.23719 7.28826C1.84423 7.15727 1.41949 7.36964 1.28851 7.7626C1.15752 8.15555 1.36989 8.58029 1.76285 8.71128L7.76285 10.7113C8.15581 10.8423 8.58055 10.6299 8.71153 10.2369C8.84252 9.84398 8.63015 9.41924 8.23719 9.28826L2.23719 7.28826Z" fill={color}/>
	<Path d="M6.72757 12.5058C7.00702 12.2 6.98571 11.7256 6.67997 11.4462C6.37422 11.1667 5.89983 11.188 5.62038 11.4938L4.35952 12.8733C2.63268 14.7626 3.00985 17.9266 4.86386 19.955C6.72902 21.9956 9.73431 22.4592 11.5189 20.5068L15.5536 16.0924C15.8331 15.7866 15.8118 15.3122 15.506 15.0328C15.2003 14.7533 14.7259 14.7746 14.4464 15.0804L10.4117 19.4948C9.41081 20.5898 7.4484 20.5593 5.97105 18.943C4.48255 17.3145 4.40812 15.0434 5.46671 13.8852L6.72757 12.5058Z" fill={color}/>
</Svg>;

export default OutlineLinkBroken;
