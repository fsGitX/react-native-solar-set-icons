import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldFoodCupPaper = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M9.18527 2H14.8149C16.6526 2 17.5715 2 18.2943 2.44432C18.419 2.52098 18.5379 2.60666 18.6501 2.70069C19.3003 3.24562 19.5912 4.11727 20.1729 5.8605L20.2087 5.96791C20.5275 6.92318 20.6869 7.40081 20.5185 7.76195C20.4653 7.87592 20.3912 7.97884 20.2999 8.06533C20.0106 8.33937 19.5071 8.33937 18.5001 8.33937L18.0739 11.25H5.92614L5.5 8.33937C4.49299 8.33937 3.98949 8.33936 3.70022 8.06533C3.60893 7.97884 3.53477 7.87592 3.48163 7.76195C3.31325 7.40081 3.47263 6.92318 3.79139 5.96791L3.82722 5.86056C4.40893 4.11727 4.69979 3.24563 5.35004 2.70069C5.46223 2.60666 5.58115 2.52098 5.70585 2.44432C6.42859 2 7.34749 2 9.18527 2Z" fill={color}/>
	<Path d="M17.3418 16.25H6.65817L6.14575 12.75H17.8543L17.3418 16.25Z" fill={color}/>
	<Path d="M13.043 22H10.957C9.30835 22 8.48401 22 7.92073 21.5132C7.35745 21.0264 7.23804 20.2107 6.99921 18.5794L6.87778 17.75H17.1222L17.0008 18.5794C16.762 20.2107 16.6425 21.0264 16.0793 21.5132C15.516 22 14.6917 22 13.043 22Z" fill={color}/>
</Svg>;

export default BoldFoodCupPaper;
