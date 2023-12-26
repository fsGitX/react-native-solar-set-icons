import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const OutlineMapPointSchool = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M3.25 10.1433C3.25 5.24427 7.15501 1.25 12 1.25C16.845 1.25 20.75 5.24427 20.75 10.1433C20.75 12.5084 20.076 15.0479 18.8844 17.2419C17.6944 19.4331 15.9556 21.3372 13.7805 22.3539C12.6506 22.882 11.3494 22.882 10.2195 22.3539C8.04437 21.3372 6.30562 19.4331 5.11556 17.2419C3.92403 15.0479 3.25 12.5084 3.25 10.1433ZM12 2.75C8.00843 2.75 4.75 6.04748 4.75 10.1433C4.75 12.2404 5.35263 14.5354 6.4337 16.526C7.51624 18.5192 9.04602 20.1496 10.8546 20.995C11.5821 21.335 12.4179 21.335 13.1454 20.995C14.954 20.1496 16.4838 18.5192 17.5663 16.526C18.6474 14.5354 19.25 12.2404 19.25 10.1433C19.25 6.04748 15.9916 2.75 12 2.75ZM10.9666 5.9318C11.6301 5.6894 12.3698 5.6894 13.0334 5.9318L15.3753 6.78735C15.9163 6.98499 16.25 7.46744 16.25 8.00001C16.25 8.53258 15.9163 9.01502 15.3753 9.21267L15.25 9.25844V11.7002C15.25 12.3732 14.856 13.0287 14.1693 13.2821C13.6442 13.4759 12.779 13.75 12 13.75C11.221 13.75 10.3558 13.4759 9.83069 13.2821C9.14396 13.0287 8.75 12.3732 8.75 11.7002V9.25843L8.62471 9.21265C8.08368 9.01501 7.75 8.53256 7.75 7.99999C7.75 7.46742 8.08368 6.98498 8.62471 6.78733L10.9666 5.9318ZM10.25 9.8064V11.7002C10.25 11.805 10.3069 11.859 10.35 11.8749C10.8512 12.0598 11.5041 12.25 12 12.25C12.4959 12.25 13.1488 12.0598 13.65 11.8749C13.6931 11.859 13.75 11.805 13.75 11.7002V9.80641L13.0334 10.0682C12.3699 10.3106 11.6302 10.3106 10.9666 10.0682L10.25 9.8064ZM12.5187 7.34073C12.1875 7.21976 11.8125 7.21976 11.4813 7.34073L9.67667 7.99999L11.4813 8.65927C11.8125 8.78024 12.1875 8.78024 12.5187 8.65927L14.3233 8.00001L12.5187 7.34073Z" fill={color} fillRule="evenodd"/>
</Svg>;

export default OutlineMapPointSchool;
