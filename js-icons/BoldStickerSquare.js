import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldStickerSquare = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M16.5 21.8389C16.4873 21.8417 16.4745 21.8444 16.4617 21.8472L16.4582 21.8479C16.4424 21.8512 16.4266 21.8545 16.4107 21.8578L16.4092 21.8581C16.4256 21.8548 16.4419 21.8514 16.4582 21.8479C16.4722 21.8449 16.4861 21.8419 16.5 21.8389Z" fill={color} fillRule="evenodd"/>
	<Path d="M22 15C21.4162 15 20.9239 15 20.5 15.0076C19.5724 15.0241 18.9718 15.0768 18.4549 15.2447C16.9327 15.7393 15.7393 16.9327 15.2447 18.4549C15.0768 18.9718 15.0241 19.5724 15.0076 20.5C15 20.9239 15 21.4162 15 22C15.4827 22 15.954 21.9511 16.4092 21.8581L16.4107 21.8578L16.4582 21.8479L16.4617 21.8472L16.5 21.8389C19.162 21.2577 21.2577 19.162 21.8389 16.5C21.9444 16.0168 22 15.5149 22 15Z" fill={color}/>
	<Path d="M2 12C2 16.714 2 19.0711 3.46447 20.5355C4.92893 22 7.28595 22 12 22H13.5L13.4999 21.7409C13.499 20.1325 13.4984 18.9754 13.8181 17.9914C14.4611 16.0125 16.0125 14.4611 17.9914 13.8181C18.9754 13.4984 20.1325 13.499 21.7409 13.4999L22 13.5V12C22 7.28595 22 4.92893 20.5355 3.46447C19.0711 2 16.714 2 12 2C7.28595 2 4.92893 2 3.46447 3.46447C2 4.92893 2 7.28595 2 12Z" fill={color}/>
</Svg>;

export default BoldStickerSquare;