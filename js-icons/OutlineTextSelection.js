import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const OutlineTextSelection = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M9 8.25C8.58579 8.25 8.25 8.58579 8.25 9C8.25 9.41421 8.58579 9.75 9 9.75H11.25L11.25 15C11.25 15.4142 11.5858 15.75 12 15.75C12.4142 15.75 12.75 15.4142 12.75 15L12.75 9.75H15C15.4142 9.75 15.75 9.41421 15.75 9C15.75 8.58579 15.4142 8.25 15 8.25H9Z" fill={color}/>
	<Path d="M3.25 6.64648C2.09575 6.32002 1.25 5.25878 1.25 4C1.25 2.48122 2.48122 1.25 4 1.25C5.25878 1.25 6.32002 2.09575 6.64648 3.25H17.3535C17.68 2.09575 18.7412 1.25 20 1.25C21.5188 1.25 22.75 2.48122 22.75 4C22.75 5.25878 21.9043 6.32002 20.75 6.64648V17.3535C21.9043 17.68 22.75 18.7412 22.75 20C22.75 21.5188 21.5188 22.75 20 22.75C18.7412 22.75 17.68 21.9043 17.3535 20.75H6.64648C6.32002 21.9043 5.25878 22.75 4 22.75C2.48122 22.75 1.25 21.5188 1.25 20C1.25 18.7412 2.09575 17.68 3.25 17.3535L3.25 6.64648ZM4 2.75C3.30964 2.75 2.75 3.30964 2.75 4C2.75 4.69036 3.30964 5.25 4 5.25C4.69036 5.25 5.25 4.69036 5.25 4C5.25 3.30964 4.69036 2.75 4 2.75ZM4.75 17.3535L4.75 6.64648C5.66584 6.38745 6.38745 5.66584 6.64648 4.75H17.3535C17.6125 5.66584 18.3342 6.38745 19.25 6.64648V17.3535C18.3342 17.6125 17.6125 18.3342 17.3535 19.25H6.64648C6.38745 18.3342 5.66584 17.6125 4.75 17.3535ZM4 18.75C3.30964 18.75 2.75 19.3096 2.75 20C2.75 20.6904 3.30964 21.25 4 21.25C4.69036 21.25 5.25 20.6904 5.25 20C5.25 19.3096 4.69036 18.75 4 18.75ZM21.25 4C21.25 4.69036 20.6904 5.25 20 5.25C19.3096 5.25 18.75 4.69036 18.75 4C18.75 3.30964 19.3096 2.75 20 2.75C20.6904 2.75 21.25 3.30964 21.25 4ZM18.75 20C18.75 19.3096 19.3096 18.75 20 18.75C20.6904 18.75 21.25 19.3096 21.25 20C21.25 20.6904 20.6904 21.25 20 21.25C19.3096 21.25 18.75 20.6904 18.75 20Z" fill={color} fillRule="evenodd"/>
</Svg>;

export default OutlineTextSelection;