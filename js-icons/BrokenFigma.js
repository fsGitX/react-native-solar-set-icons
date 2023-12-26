import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BrokenFigma = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M11.9999 8.66667H8.66658M11.9999 8.66667V2H8.66659C6.82564 2 5.33325 3.49238 5.33325 5.33333C5.33325 7.17428 6.82563 8.66667 8.66658 8.66667M11.9999 8.66667V15.3333H8.66658M11.9999 8.66667L15.3333 8.66667M8.66658 8.66667C6.82563 8.66667 5.33325 10.1591 5.33325 12C5.33325 13.8409 6.82563 15.3333 8.66658 15.3333M8.66658 15.3333C6.82564 15.3333 5.33325 16.8257 5.33325 18.6667C5.33325 20.5076 6.82564 22 8.66659 22C10.5075 22 11.9999 20.5076 11.9999 18.6667M15.3333 8.66667C13.4923 8.66667 11.9999 10.1591 11.9999 12C11.9999 13.8409 13.4923 15.3333 15.3333 15.3333C17.1742 15.3333 18.6666 13.8409 18.6666 12C18.6666 10.1591 17.1742 8.66667 15.3333 8.66667ZM15.3333 8.66667C17.1742 8.66667 18.6666 7.17428 18.6666 5.33333C18.6666 3.49238 17.1742 2 15.3333 2" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
</Svg>;

export default BrokenFigma;
