import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const OutlineVideoFullScreenCircle = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M12 2.75C6.89137 2.75 2.75 6.89137 2.75 12C2.75 17.1086 6.89137 21.25 12 21.25C17.1086 21.25 21.25 17.1086 21.25 12C21.25 6.89137 17.1086 2.75 12 2.75ZM1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12ZM10.7474 5.99364C10.7509 6.40784 10.4179 6.74646 10.0038 6.74997C9.14788 6.75723 8.55011 6.7855 8.10037 6.8736C7.67158 6.95759 7.43423 7.08568 7.25996 7.25996C7.08568 7.43423 6.95759 7.67158 6.8736 8.10037C6.7855 8.55011 6.75723 9.14788 6.74997 10.0038C6.74646 10.4179 6.40784 10.7509 5.99364 10.7474C5.57944 10.7439 5.24652 10.4052 5.25003 9.99103C5.25724 9.14035 5.28357 8.41444 5.40157 7.81203C5.52367 7.18869 5.75316 6.64543 6.1993 6.1993C6.64543 5.75316 7.18869 5.52367 7.81203 5.40157C8.41444 5.28357 9.14035 5.25724 9.99103 5.25003C10.4052 5.24652 10.7439 5.57944 10.7474 5.99364ZM13.2502 5.99364C13.2537 5.57944 13.5923 5.24652 14.0065 5.25003C14.8572 5.25724 15.5831 5.28357 16.1855 5.40157C16.8089 5.52367 17.3521 5.75316 17.7983 6.1993C18.2444 6.64543 18.4739 7.18869 18.596 7.81203C18.714 8.41444 18.7403 9.14035 18.7475 9.99103C18.751 10.4052 18.4181 10.7439 18.0039 10.7474C17.5897 10.7509 17.2511 10.4179 17.2476 10.0038C17.2403 9.14788 17.2121 8.55011 17.124 8.10037C17.04 7.67158 16.9119 7.43423 16.7376 7.25996C16.5633 7.08568 16.326 6.95759 15.8972 6.8736C15.4475 6.7855 14.8497 6.75723 13.9938 6.74997C13.5796 6.74646 13.2467 6.40784 13.2502 5.99364ZM5.99364 13.2502C6.40784 13.2467 6.74646 13.5796 6.74997 13.9938C6.75723 14.8497 6.7855 15.4475 6.8736 15.8972C6.95759 16.326 7.08568 16.5633 7.25996 16.7376C7.43423 16.9119 7.67158 17.04 8.10037 17.124C8.55011 17.2121 9.14788 17.2403 10.0038 17.2476C10.4179 17.2511 10.7509 17.5897 10.7474 18.0039C10.7439 18.4181 10.4052 18.751 9.99103 18.7475C9.14035 18.7403 8.41444 18.714 7.81203 18.596C7.18869 18.4739 6.64543 18.2444 6.1993 17.7983C5.75316 17.3521 5.52367 16.8089 5.40157 16.1855C5.28357 15.5831 5.25724 14.8572 5.25003 14.0065C5.24652 13.5923 5.57944 13.2537 5.99364 13.2502ZM18.0039 13.2502C18.4181 13.2537 18.751 13.5923 18.7475 14.0065C18.7403 14.8572 18.714 15.5831 18.596 16.1855C18.4739 16.8089 18.2444 17.3521 17.7983 17.7983C17.3521 18.2444 16.8089 18.4739 16.1855 18.596C15.5831 18.714 14.8572 18.7403 14.0065 18.7475C13.5923 18.751 13.2537 18.4181 13.2502 18.0039C13.2467 17.5897 13.5796 17.2511 13.9938 17.2476C14.8497 17.2403 15.4475 17.2121 15.8972 17.124C16.326 17.04 16.5633 16.9119 16.7376 16.7376C16.9119 16.5633 17.04 16.326 17.124 15.8972C17.2121 15.4475 17.2403 14.8497 17.2476 13.9938C17.2511 13.5796 17.5897 13.2467 18.0039 13.2502Z" fill={color} fillRule="evenodd"/>
</Svg>;

export default OutlineVideoFullScreenCircle;