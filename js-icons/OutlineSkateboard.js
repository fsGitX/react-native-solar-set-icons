import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const OutlineSkateboard = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M2.62405 6.58398L3.43659 7.80279C4.03935 8.70693 5.0541 9.25001 6.14075 9.25001H17.8593C18.9459 9.25001 19.9607 8.70693 20.5634 7.80278L21.376 6.58398L22.6241 7.41603L21.8115 8.63483C20.9306 9.95628 19.4475 10.75 17.8593 10.75H6.14075C4.55257 10.75 3.06947 9.95628 2.18851 8.63484L1.37598 7.41603L2.62405 6.58398ZM7.00001 13.75C6.30966 13.75 5.75001 14.3097 5.75001 15C5.75001 15.6904 6.30966 16.25 7.00001 16.25C7.69037 16.25 8.25001 15.6904 8.25001 15C8.25001 14.3097 7.69037 13.75 7.00001 13.75ZM4.25001 15C4.25001 13.4812 5.48123 12.25 7.00001 12.25C8.5188 12.25 9.75001 13.4812 9.75001 15C9.75001 16.5188 8.5188 17.75 7.00001 17.75C5.48123 17.75 4.25001 16.5188 4.25001 15ZM17 13.75C16.3097 13.75 15.75 14.3097 15.75 15C15.75 15.6904 16.3097 16.25 17 16.25C17.6904 16.25 18.25 15.6904 18.25 15C18.25 14.3097 17.6904 13.75 17 13.75ZM14.25 15C14.25 13.4812 15.4812 12.25 17 12.25C18.5188 12.25 19.75 13.4812 19.75 15C19.75 16.5188 18.5188 17.75 17 17.75C15.4812 17.75 14.25 16.5188 14.25 15Z" fill={color} fillRule="evenodd"/>
</Svg>;

export default OutlineSkateboard;
