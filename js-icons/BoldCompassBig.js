import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldCompassBig = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M3.55428 21.5288C5.35132 22.75 8.49749 21.4915 14.7898 18.9746C16.132 18.4377 16.8031 18.1693 17.3295 17.7076C17.4637 17.59 17.59 17.4637 17.7076 17.3295C18.1693 16.8031 18.4377 16.132 18.9746 14.7898C21.4915 8.49749 22.75 5.35132 21.5288 3.55428C21.2393 3.1282 20.8718 2.7607 20.4457 2.47117C18.6487 1.25001 15.5025 2.50848 9.21017 5.02542C7.86802 5.56228 7.19695 5.8307 6.67048 6.29238C6.53633 6.41002 6.41002 6.53633 6.29238 6.67048C5.8307 7.19695 5.56228 7.86802 5.02542 9.21017C2.50848 15.5025 1.25001 18.6487 2.47117 20.4457C2.76071 20.8718 3.1282 21.2393 3.55428 21.5288ZM8.25 12C8.25 9.92893 9.92893 8.25 12 8.25C14.0711 8.25 15.75 9.92893 15.75 12C15.75 14.0711 14.0711 15.75 12 15.75C9.92893 15.75 8.25 14.0711 8.25 12ZM9.75 12C9.75 10.7574 10.7574 9.75 12 9.75C13.2426 9.75 14.25 10.7574 14.25 12C14.25 13.2426 13.2426 14.25 12 14.25C10.7574 14.25 9.75 13.2426 9.75 12Z" fill={color} fillRule="evenodd"/>
</Svg>;

export default BoldCompassBig;
