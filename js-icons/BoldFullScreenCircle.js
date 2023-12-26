import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldFullScreenCircle = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM10.7474 5.99364C10.7509 6.40784 10.4179 6.74646 10.0038 6.74997C9.14788 6.75723 8.55011 6.7855 8.10037 6.8736C7.67158 6.95759 7.43423 7.08568 7.25996 7.25996C7.08568 7.43423 6.95759 7.67158 6.8736 8.10037C6.7855 8.55011 6.75723 9.14788 6.74997 10.0038C6.74646 10.4179 6.40784 10.7509 5.99364 10.7474C5.57944 10.7439 5.24652 10.4052 5.25003 9.99103C5.25724 9.14035 5.28357 8.41444 5.40157 7.81203C5.52367 7.18869 5.75316 6.64543 6.1993 6.1993C6.64543 5.75316 7.18869 5.52367 7.81203 5.40157C8.41444 5.28357 9.14035 5.25724 9.99103 5.25003C10.4052 5.24652 10.7439 5.57944 10.7474 5.99364ZM13.2502 5.99364C13.2537 5.57944 13.5923 5.24652 14.0065 5.25003C14.8572 5.25724 15.5831 5.28357 16.1855 5.40157C16.8089 5.52367 17.3521 5.75316 17.7983 6.1993C18.2444 6.64543 18.4739 7.18869 18.596 7.81203C18.714 8.41444 18.7403 9.14035 18.7475 9.99103C18.751 10.4052 18.4181 10.7439 18.0039 10.7474C17.5897 10.7509 17.2511 10.4179 17.2476 10.0038C17.2403 9.14788 17.2121 8.55011 17.124 8.10037C17.04 7.67158 16.9119 7.43423 16.7376 7.25996C16.5633 7.08568 16.326 6.95759 15.8972 6.8736C15.4475 6.7855 14.8497 6.75723 13.9938 6.74997C13.5796 6.74646 13.2467 6.40784 13.2502 5.99364ZM6.74997 13.9943C6.74646 13.5801 6.40784 13.2472 5.99364 13.2507C5.57944 13.2542 5.24652 13.5928 5.25003 14.007C5.25724 14.8577 5.28357 15.5836 5.40157 16.186C5.52367 16.8094 5.75316 17.3526 6.1993 17.7988C6.64543 18.2449 7.18869 18.4744 7.81203 18.5965C8.41444 18.7145 9.14035 18.7408 9.99103 18.748C10.4052 18.7515 10.7439 18.4186 10.7474 18.0044C10.7509 17.5902 10.4179 17.2516 10.0038 17.2481C9.14788 17.2408 8.55011 17.2125 8.10037 17.1245C7.67158 17.0405 7.43423 16.9124 7.25996 16.7381C7.08568 16.5638 6.95759 16.3265 6.8736 15.8977C6.7855 15.4479 6.75723 14.8502 6.74997 13.9943ZM18.0039 13.2507C18.4181 13.2542 18.751 13.5928 18.7475 14.007C18.7403 14.8577 18.714 15.5836 18.596 16.186C18.4739 16.8094 18.2444 17.3526 17.7983 17.7988C17.3521 18.2449 16.8089 18.4744 16.1855 18.5965C15.5831 18.7145 14.8572 18.7408 14.0065 18.748C13.5923 18.7515 13.2537 18.4186 13.2502 18.0044C13.2467 17.5902 13.5796 17.2516 13.9938 17.2481C14.8497 17.2408 15.4475 17.2125 15.8972 17.1245C16.326 17.0405 16.5633 16.9124 16.7376 16.7381C16.9119 16.5638 17.04 16.3265 17.124 15.8977C17.2121 15.4479 17.2403 14.8502 17.2476 13.9943C17.2511 13.5801 17.5897 13.2472 18.0039 13.2507Z" fill={color} fillRule="evenodd"/>
</Svg>;

export default BoldFullScreenCircle;