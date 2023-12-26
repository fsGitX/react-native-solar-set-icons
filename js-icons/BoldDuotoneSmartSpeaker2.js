import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldDuotoneSmartSpeaker2 = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M18.0476 3.43536C18.0691 3.51861 18.0814 3.60345 18.0849 3.68959C18.1421 5.10574 15.8124 6.87468 12.648 7.75482C9.29104 8.6885 6.26588 8.26841 5.89109 6.81651C5.85892 6.69189 5.84732 6.56372 5.85513 6.43293C5.85667 6.40709 5.85897 6.38114 5.86202 6.3551C6.02325 4.9776 8.27889 3.33475 11.2908 2.49705C14.6477 1.56337 17.6729 1.98346 18.0476 3.43536Z" fill={color} opacity="0.5"/>
	<Path d="M12.648 7.75469C9.29106 8.68837 6.2659 8.26827 5.89111 6.81638C5.85894 6.69176 5.84735 6.56358 5.85515 6.4328L5.24609 13.3087C5.80507 13.8701 7.49022 14.9997 11.9996 14.9997C16.6277 14.9997 18.2809 13.8098 18.7949 13.2656L18.0849 3.68945C18.1421 5.10561 15.8124 6.87454 12.648 7.75469Z" fill={color}/>
	<Path d="M7.02989 21.4129C8.00563 21.9999 9.34227 21.9999 12.0156 21.9999C14.6588 21.9999 15.9804 21.9999 16.9506 21.4216C17.6678 20.9942 18.2472 20.3563 18.6162 19.5881C19.1153 18.5488 19.0377 17.1793 18.8825 14.4403L18.7949 13.2656C18.2809 13.8098 16.6277 14.9997 11.9996 14.9997C7.49022 14.9997 5.80507 13.8701 5.24609 13.3087L5.15426 14.3509C4.9638 17.1187 4.86856 18.5027 5.36308 19.5547C5.72853 20.3322 6.3088 20.9791 7.02989 21.4129Z" fill={color} opacity="0.5"/>
</Svg>;

export default BoldDuotoneSmartSpeaker2;