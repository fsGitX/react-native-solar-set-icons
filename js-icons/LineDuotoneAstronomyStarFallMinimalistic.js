import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LineDuotoneAstronomyStarFallMinimalistic = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M14.7249 8.15612C16.2754 7.23788 17.0507 6.77876 17.6201 7.10452C18.1895 7.43027 18.1759 8.32517 18.1487 10.115L18.1416 10.578C18.1339 11.0866 18.13 11.3409 18.2248 11.5644C18.3196 11.7878 18.5023 11.9552 18.8677 12.2899L19.2003 12.5946C20.4862 13.7725 21.1291 14.3614 20.9784 15.0228C20.8277 15.6841 19.9831 15.9799 18.2941 16.5714L17.8571 16.7245C17.3771 16.8926 17.1371 16.9766 16.953 17.1451C16.7689 17.3137 16.6615 17.5475 16.4467 18.0153L16.2512 18.4412C15.4953 20.0874 15.1174 20.9105 14.4549 20.9935C13.7924 21.0765 13.284 20.3644 12.2673 18.9402L12.0043 18.5717C11.7154 18.167 11.5709 17.9647 11.3623 17.8453C11.1538 17.726 10.9047 17.7032 10.4065 17.6576L9.95303 17.6161C8.20005 17.4557 7.32356 17.3754 7.06482 16.7654C6.80608 16.1553 7.33644 15.4194 8.39716 13.9477L8.67158 13.5669C8.973 13.1487 9.12372 12.9396 9.17893 12.6973C9.23414 12.4551 9.18759 12.2071 9.09451 11.7111L9.00976 11.2596C8.68219 9.51421 8.51841 8.64154 9.02101 8.18152C9.52362 7.7215 10.3598 7.9788 12.032 8.49339L12.4647 8.62652C12.9399 8.77276 13.1775 8.84587 13.4202 8.81547C13.6629 8.78508 13.8832 8.65461 14.3238 8.39368L14.7249 8.15612Z" stroke="black" strokeWidth="1.5"/>
	<Path d="M13.5 6.5L13 6M9.5 2.5L11.5 4.5" opacity="0.5" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M6.5 6.5L4 4" opacity="0.5" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M6 12L4.5 10.5M2 8L2.5 8.5" opacity="0.5" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
</Svg>;

export default LineDuotoneAstronomyStarFallMinimalistic;
