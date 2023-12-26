import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const OutlineTranslation2 = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12C21.25 14.5545 20.2155 16.866 18.5407 18.5407C18.2478 18.8336 18.2478 19.3085 18.5407 19.6014C18.8336 19.8943 19.3085 19.8943 19.6014 19.6014C21.5459 17.6569 22.75 14.9683 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 14.9683 2.45406 17.6569 4.3986 19.6014C4.6915 19.8943 5.16637 19.8943 5.45926 19.6014C5.75216 19.3085 5.75216 18.8336 5.45926 18.5407C3.78452 16.866 2.75 14.5545 2.75 12Z" fill={color}/>
	<Path d="M6.75 12C6.75 9.1005 9.1005 6.75 12 6.75C14.8995 6.75 17.25 9.1005 17.25 12C17.25 13.45 16.6632 14.7614 15.7123 15.7123C15.4194 16.0052 15.4194 16.4801 15.7123 16.773C16.0052 17.0659 16.4801 17.0659 16.773 16.773C17.9937 15.5523 18.75 13.8638 18.75 12C18.75 8.27208 15.7279 5.25 12 5.25C8.27208 5.25 5.25 8.27208 5.25 12C5.25 13.8638 6.00634 15.5523 7.22703 16.773C7.51992 17.0659 7.9948 17.0659 8.28769 16.773C8.58058 16.4801 8.58058 16.0052 8.28769 15.7123C7.3368 14.7614 6.75 13.45 6.75 12Z" fill={color}/>
	<Path d="M9.25 12C9.25 10.4812 10.4812 9.25 12 9.25C13.5188 9.25 14.75 10.4812 14.75 12C14.75 13.5188 13.5188 14.75 12 14.75C10.4812 14.75 9.25 13.5188 9.25 12ZM12 10.75C11.3096 10.75 10.75 11.3096 10.75 12C10.75 12.6904 11.3096 13.25 12 13.25C12.6904 13.25 13.25 12.6904 13.25 12C13.25 11.3096 12.6904 10.75 12 10.75Z" fill={color} fillRule="evenodd"/>
	<Path d="M13.393 15.7434C13.0153 15.4757 12.6097 15.2765 12.1173 15.2528C12.0392 15.2491 11.9608 15.2491 11.8827 15.2528C11.3903 15.2765 10.9847 15.4757 10.607 15.7434C10.255 15.993 9.86615 16.3479 9.41455 16.7602L9.33587 16.832C8.33098 17.7493 7.51836 18.4911 7.00062 19.1089C6.50359 19.702 6.04684 20.4464 6.34164 21.2757C6.38098 21.3864 6.42962 21.4935 6.48687 21.5959C6.89759 22.331 7.73235 22.5508 8.53456 22.6483C9.3717 22.75 10.5153 22.75 11.9436 22.75H12.0563C13.4847 22.75 14.6283 22.75 15.4654 22.6483C16.2676 22.5508 17.1024 22.331 17.5131 21.5959C17.5704 21.4935 17.619 21.3864 17.6584 21.2757C17.9532 20.4464 17.4964 19.702 16.9994 19.1089C16.4816 18.4911 15.669 17.7493 14.6641 16.832L14.5854 16.7602C14.1338 16.3479 13.745 15.993 13.393 15.7434ZM11.4744 16.9671C11.7245 16.7899 11.8549 16.7559 11.9547 16.7511C11.9849 16.7496 12.0151 16.7496 12.0453 16.7511C12.1451 16.7559 12.2755 16.7899 12.5256 16.9671C12.7928 17.1566 13.1132 17.4473 13.607 17.898C14.6685 18.867 15.4046 19.5412 15.8497 20.0724C16.0699 20.3352 16.1778 20.5162 16.224 20.6375C16.2605 20.7334 16.249 20.7631 16.2455 20.772L16.245 20.7733C16.2341 20.804 16.2204 20.8344 16.2037 20.8643C16.1842 20.8991 16.0659 21.0643 15.2845 21.1592C14.549 21.2486 13.4975 21.25 12 21.25C10.5025 21.25 9.45103 21.2486 8.71554 21.1592C7.93413 21.0643 7.81578 20.8991 7.79635 20.8643C7.77964 20.8344 7.7659 20.804 7.75501 20.7733L7.75452 20.772C7.75105 20.7631 7.7395 20.7334 7.77599 20.6375C7.82219 20.5162 7.93006 20.3352 8.15029 20.0724C8.59539 19.5412 9.33155 18.867 10.393 17.898C10.8868 17.4473 11.2072 17.1566 11.4744 16.9671Z" fill={color} fillRule="evenodd"/>
</Svg>;

export default OutlineTranslation2;