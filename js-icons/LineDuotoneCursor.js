import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LineDuotoneCursor = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M12.6361 15.2616L11.4334 16.4643C10.2022 17.6955 9.58656 18.3111 8.92489 18.1658C8.26322 18.0204 7.96225 17.2035 7.3603 15.5696L5.3527 10.1205C4.15187 6.86106 3.55146 5.23136 4.39141 4.39141C5.23136 3.55146 6.86106 4.15187 10.1205 5.35271L15.5696 7.3603C17.2035 7.96225 18.0204 8.26322 18.1658 8.92489C18.3111 9.58656 17.6955 10.2022 16.4643 11.4334L15.2616 12.6361" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
	<Path d="M12.636 15.2618L16.5743 19.2001C16.9821 19.6079 17.186 19.8117 17.4134 19.906C17.7167 20.0316 18.0574 20.0316 18.3607 19.906C18.5882 19.8117 18.792 19.6078 19.1998 19.2001C19.6076 18.7923 19.8115 18.5884 19.9057 18.3609C20.0313 18.0577 20.0313 17.7169 19.9057 17.4137C19.8115 17.1862 19.6076 16.9823 19.1998 16.5745L15.2615 12.6362" opacity="0.5" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
</Svg>;

export default LineDuotoneCursor;
