import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LineDuotoneMedicineJarOfPills = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M6 3.5C6 3.03406 6 2.80109 6.07612 2.61732C6.17761 2.37229 6.37229 2.17761 6.61732 2.07612C6.80109 2 7.03406 2 7.5 2H16.5C16.9659 2 17.1989 2 17.3827 2.07612C17.6277 2.17761 17.8224 2.37229 17.9239 2.61732C18 2.80109 18 3.03406 18 3.5C18 3.96594 18 4.19891 17.9239 4.38268C17.8224 4.62771 17.6277 4.82239 17.3827 4.92388C17.1989 5 16.9659 5 16.5 5H7.5C7.03406 5 6.80109 5 6.61732 4.92388C6.37229 4.82239 6.17761 4.62771 6.07612 4.38268C6 4.19891 6 3.96594 6 3.5Z" stroke="black" strokeWidth="1.5"/>
	<Path d="M4.5 18H19.5" opacity="0.5" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M4.5 10H19.5" opacity="0.5" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M5.50122 7.79902L7.90434 5.87652C8.44688 5.4425 8.71814 5.22549 9.03955 5.11274C9.36095 5 9.70834 5 10.4031 5H13.6427C14.3438 5 14.6943 5 15.0182 5.11466C15.3421 5.22933 15.6146 5.44989 16.1595 5.89102L18.5168 7.79931C19.455 8.55877 20 9.70126 20 10.9083V17.5649C20 18.4927 19.6775 19.3916 19.0877 20.1078L18.7294 20.5428C17.9696 21.4655 16.837 22 15.6417 22H8.95693C8.38582 22 8.10026 22 7.82957 21.9628C7.02661 21.8526 6.27608 21.5011 5.67738 20.9548C5.47554 20.7706 5.29272 20.5513 4.92711 20.1125C4.32806 19.3937 4 18.4875 4 17.5518V10.9225C4 9.70736 4.55236 8.55811 5.50122 7.79902Z" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M12 12V16M10 14L14 14" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
</Svg>;

export default LineDuotoneMedicineJarOfPills;
