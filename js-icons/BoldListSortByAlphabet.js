import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldListSortByAlphabet = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M2.25 7C2.25 6.58579 2.58579 6.25 3 6.25H13C13.4142 6.25 13.75 6.58579 13.75 7C13.75 7.41421 13.4142 7.75 13 7.75H3C2.58579 7.75 2.25 7.41421 2.25 7ZM16.5 6.25C16.7951 6.25 17.0628 6.42309 17.1839 6.69223L21.6839 16.6922C21.8539 17.07 21.6855 17.514 21.3078 17.6839C20.93 17.8539 20.486 17.6855 20.3161 17.3078L18.8787 14.1136H14.1213L12.6839 17.3078C12.514 17.6855 12.07 17.8539 11.6922 17.6839C11.3145 17.514 11.1461 17.07 11.3161 16.6922L15.8161 6.69223C15.9372 6.42309 16.2049 6.25 16.5 6.25ZM14.7963 12.6136H18.2037L16.5 8.82764L14.7963 12.6136ZM2.25 12C2.25 11.5858 2.58579 11.25 3 11.25H10C10.4142 11.25 10.75 11.5858 10.75 12C10.75 12.4142 10.4142 12.75 10 12.75H3C2.58579 12.75 2.25 12.4142 2.25 12ZM2.25 17C2.25 16.5858 2.58579 16.25 3 16.25H8C8.41421 16.25 8.75 16.5858 8.75 17C8.75 17.4142 8.41421 17.75 8 17.75H3C2.58579 17.75 2.25 17.4142 2.25 17Z" fill={color} fillRule="evenodd"/>
</Svg>;

export default BoldListSortByAlphabet;
