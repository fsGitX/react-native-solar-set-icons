import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LinearJarOfPills2 = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M4 3.5C4 3.03406 4 2.80109 4.07612 2.61732C4.17761 2.37229 4.37229 2.17761 4.61732 2.07612C4.80109 2 5.03406 2 5.5 2H14.5C14.9659 2 15.1989 2 15.3827 2.07612C15.6277 2.17761 15.8224 2.37229 15.9239 2.61732C16 2.80109 16 3.03406 16 3.5C16 3.96594 16 4.19891 15.9239 4.38268C15.8224 4.62771 15.6277 4.82239 15.3827 4.92388C15.1989 5 14.9659 5 14.5 5H5.5C5.03406 5 4.80109 5 4.61732 4.92388C4.37229 4.82239 4.17761 4.62771 4.07612 4.38268C4 4.19891 4 3.96594 4 3.5Z" stroke="black" strokeWidth="1.5"/>
	<Path d="M2.5 18H10.5" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M2.5 10H17.5" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M10.5 22H6.95693C6.38582 22 6.10026 22 5.82957 21.9628C5.02661 21.8526 4.27608 21.5011 3.67738 20.9548C3.47554 20.7706 3.29272 20.5513 2.92711 20.1125C2.32806 19.3937 2 18.4875 2 17.5518V10.9225C2 9.70736 2.55236 8.55811 3.50122 7.79902L5.90434 5.87652C6.44688 5.4425 6.71814 5.22549 7.03955 5.11274C7.36095 5 7.70834 5 8.40312 5H11.6427C12.3438 5 12.6943 5 13.0182 5.11466C13.3421 5.22933 13.6146 5.44989 14.1595 5.89102L16.5168 7.79931C17.455 8.55877 18 9.70126 18 10.9083V12.5" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M10 12V16M8 14L12 14" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M14.7726 16.7726C14.7726 16.7726 15.7648 16.9833 16.8908 18.1093C18.0169 19.2353 18.2274 20.2274 18.2274 20.2274M19.2638 15.7362C20.2178 16.6902 20.2487 18.206 19.3329 19.1218L17.1218 21.3329C16.206 22.2487 14.6902 22.2178 13.7362 21.2638C12.7822 20.3098 12.7513 18.794 13.6671 17.8782L15.8782 15.6671C16.794 14.7513 18.3098 14.7822 19.2638 15.7362Z" stroke="black" strokeWidth="1.5"/>
</Svg>;

export default LinearJarOfPills2;
