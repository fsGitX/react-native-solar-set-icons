import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LinearTrellis = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M19 22V21.5M5 22V21.5" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M12 21V15" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M2.87867 20.1213L2.34834 20.6517L2.34834 20.6517L2.87867 20.1213ZM2.00172 16.0001L1.25174 16.0042L1.25174 16.0042L2.00172 16.0001ZM21.1213 20.1213L21.6516 20.6517L21.6516 20.6516L21.1213 20.1213ZM21.9982 16.0001L22.7482 16.0042L22.7482 16.0042L21.9982 16.0001ZM16 20.25H7.99999V21.75H16V20.25ZM7.99999 20.25C6.56457 20.25 5.56346 20.2484 4.80811 20.1469C4.07433 20.0482 3.68576 19.8678 3.409 19.591L2.34834 20.6517C2.95025 21.2536 3.70813 21.5125 4.60824 21.6335C5.48677 21.7516 6.60698 21.75 7.99999 21.75V20.25ZM1.25174 16.0042C1.25776 17.0857 1.28364 17.9871 1.41894 18.7237C1.55817 19.4817 1.82341 20.1267 2.34834 20.6517L3.409 19.591C3.16554 19.3475 2.99837 19.0195 2.89425 18.4527C2.7862 17.8644 2.7578 17.0894 2.75171 15.9959L1.25174 16.0042ZM16 21.75C17.393 21.75 18.5132 21.7516 19.3917 21.6335C20.2918 21.5125 21.0497 21.2536 21.6516 20.6517L20.591 19.591C20.3142 19.8678 19.9256 20.0482 19.1919 20.1469C18.4365 20.2484 17.4354 20.25 16 20.25V21.75ZM21.2483 15.9959C21.2422 17.0894 21.2138 17.8644 21.1057 18.4527C21.0016 19.0195 20.8344 19.3475 20.591 19.591L21.6516 20.6516C22.1766 20.1267 22.4418 19.4817 22.581 18.7237C22.7163 17.9871 22.7422 17.0857 22.7482 16.0042L21.2483 15.9959ZM2.99999 15.75H21V14.25H2.99999V15.75ZM22.7482 16.0042C22.7536 15.0324 21.9644 14.25 21 14.25V15.75C21.1401 15.75 21.249 15.8631 21.2483 15.9959L22.7482 16.0042ZM2.75171 15.9959C2.75097 15.8631 2.85986 15.75 2.99999 15.75V14.25C2.03555 14.25 1.24633 15.0324 1.25174 16.0042L2.75171 15.9959Z" fill={color}/>
	<Path d="M20.5 15V6.13747C20.5 5.74953 20.5 5.55556 20.4822 5.4229C20.359 4.50695 19.8459 3.94509 18.9449 3.73952C18.8144 3.70975 18.5429 3.68506 18 3.63571C16.9981 3.54463 15.8169 3.19591 14.7687 2.81455C13.2754 2.27127 12.5288 1.99963 12 1.99963C11.4712 1.99963 10.7246 2.27127 9.23133 2.81455C8.18314 3.19591 7.00193 3.54463 6 3.63571C5.45709 3.68507 5.18562 3.70974 5.05512 3.73952C4.15409 3.94509 3.64099 4.50695 3.51784 5.4229C3.5 5.55556 3.5 5.74953 3.5 6.13747V15" stroke="black" strokeWidth="1.5"/>
	<Path d="M15 18L17 18" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M7 18L9 18" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M14.5 11L13.5 12M13.5 8L10.5 11M10.5 7L9.5 8" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
</Svg>;

export default LinearTrellis;
