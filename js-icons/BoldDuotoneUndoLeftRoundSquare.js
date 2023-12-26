import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldDuotoneUndoLeftRoundSquare = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z" fill={color} opacity="0.5"/>
	<Path d="M9.3011 6.91415C9.58205 7.21851 9.56307 7.693 9.25871 7.97396L8.41824 8.74978H14.0385C16.3644 8.74978 18.25 10.6353 18.25 12.9613C18.25 15.2873 16.3644 17.1729 14.0385 17.1729H9.5C9.08579 17.1729 8.75 16.8371 8.75 16.4229C8.75 16.0086 9.08579 15.6729 9.5 15.6729H14.0385C15.536 15.6729 16.75 14.4589 16.75 12.9613C16.75 11.4638 15.536 10.2498 14.0385 10.2498H8.41824L9.25871 11.0256C9.56307 11.3066 9.58205 11.781 9.3011 12.0854C9.02015 12.3898 8.54565 12.4088 8.24129 12.1278L5.99129 10.0509C5.83748 9.9089 5.75 9.7091 5.75 9.49978C5.75 9.29045 5.83748 9.09066 5.99129 8.94868L8.24129 6.87175C8.54565 6.5908 9.02015 6.60978 9.3011 6.91415Z" fill={color} fillRule="evenodd"/>
</Svg>;

export default BoldDuotoneUndoLeftRoundSquare;
