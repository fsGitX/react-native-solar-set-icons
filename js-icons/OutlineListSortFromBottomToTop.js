import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const OutlineListSortFromBottomToTop = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M16.7628 3.28854C17.0691 3.18645 17.4063 3.29179 17.6 3.55005L20.6 7.55005C20.8485 7.88142 20.7814 8.35152 20.45 8.60005C20.1186 8.84858 19.6485 8.78142 19.4 8.45005L17.75 6.25005V20C17.75 20.4143 17.4142 20.75 17 20.75C16.5858 20.75 16.25 20.4143 16.25 20V4.00005C16.25 3.67723 16.4566 3.39062 16.7628 3.28854ZM13 8.75005H4V7.25005H13V8.75005ZM13 13.75H6V12.25H13V13.75ZM13 18.75H8V17.25H13V18.75Z" fill={color} fillRule="evenodd"/>
</Svg>;

export default OutlineListSortFromBottomToTop;
