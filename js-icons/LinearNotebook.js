import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const LinearNotebook = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M20.082 3.01775L20.1081 3.76729L20.1081 3.76729L20.082 3.01775ZM16.5 3.48744L16.2849 2.76895L16.2849 2.76895L16.5 3.48744ZM13.6738 4.80275L13.2982 4.15363L13.2982 4.15363L13.6738 4.80275ZM3.9824 3.07489L3.93639 3.82348L3.9824 3.07489ZM7 3.48744L7.19136 2.76227L7.19136 2.76227L7 3.48744ZM10.2823 4.87546L9.93167 5.53847L9.93167 5.53847L10.2823 4.87546ZM13.6276 20.0692L13.9804 20.7311L13.9804 20.7311L13.6276 20.0692ZM17 18.6334L16.8086 17.9082L16.8086 17.9082L17 18.6334ZM19.9851 18.2228L20.032 18.9714L20.032 18.9714L19.9851 18.2228ZM10.3724 20.0692L10.0196 20.7311L10.0196 20.7311L10.3724 20.0692ZM7 18.6334L7.19136 17.9082L7.19136 17.9082L7 18.6334ZM4.01486 18.2228L3.96804 18.9714L3.96804 18.9714L4.01486 18.2228ZM2.75 16.1436V4.9978H1.25V16.1436H2.75ZM22.75 16.1436V4.93319H21.25V16.1436H22.75ZM20.0559 2.2682C18.9175 2.30785 17.4296 2.42627 16.2849 2.76895L16.7151 4.20594C17.6643 3.92179 18.9892 3.80627 20.1081 3.76729L20.0559 2.2682ZM16.2849 2.76895C15.2899 3.06684 14.1706 3.64868 13.2982 4.15363L14.0495 5.45188C14.9 4.95969 15.8949 4.45149 16.7151 4.20594L16.2849 2.76895ZM3.93639 3.82348C4.90238 3.88285 5.99643 3.99829 6.80864 4.21262L7.19136 2.76227C6.23055 2.50873 5.01517 2.38695 4.02841 2.3263L3.93639 3.82348ZM6.80864 4.21262C7.77076 4.46651 8.95486 5.02196 9.93167 5.53847L10.6328 4.21244C9.63736 3.68606 8.32766 3.06211 7.19136 2.76227L6.80864 4.21262ZM13.9804 20.7311C14.9714 20.2028 16.1988 19.6205 17.1914 19.3585L16.8086 17.9082C15.6383 18.217 14.2827 18.8701 13.2748 19.4074L13.9804 20.7311ZM17.1914 19.3585C17.9943 19.1466 19.0732 19.0313 20.032 18.9714L19.9383 17.4743C18.9582 17.5356 17.7591 17.6574 16.8086 17.9082L17.1914 19.3585ZM10.7252 19.4074C9.71727 18.8701 8.3617 18.217 7.19136 17.9082L6.80864 19.3585C7.8012 19.6205 9.0286 20.2028 10.0196 20.7311L10.7252 19.4074ZM7.19136 17.9082C6.24092 17.6574 5.04176 17.5356 4.06168 17.4743L3.96804 18.9714C4.9268 19.0313 6.00566 19.1466 6.80864 19.3585L7.19136 17.9082ZM21.25 16.1436C21.25 16.8293 20.6817 17.4278 19.9383 17.4743L20.032 18.9714C21.5062 18.8791 22.75 17.6798 22.75 16.1436H21.25ZM22.75 4.93319C22.75 3.46989 21.5847 2.21495 20.0559 2.2682L20.1081 3.76729C20.7229 3.74588 21.25 4.25161 21.25 4.93319H22.75ZM1.25 16.1436C1.25 17.6798 2.49378 18.8791 3.96804 18.9714L4.06168 17.4743C3.31831 17.4278 2.75 16.8293 2.75 16.1436H1.25ZM13.2748 19.4074C12.4825 19.8297 11.5175 19.8297 10.7252 19.4074L10.0196 20.7311C11.2529 21.3885 12.7471 21.3885 13.9804 20.7311L13.2748 19.4074ZM13.2982 4.15363C12.4801 4.62709 11.4617 4.6507 10.6328 4.21244L9.93167 5.53847C11.2239 6.22177 12.791 6.18025 14.0495 5.45188L13.2982 4.15363ZM2.75 4.9978C2.75 4.30062 3.30243 3.78451 3.93639 3.82348L4.02841 2.3263C2.47017 2.23053 1.25 3.49864 1.25 4.9978H2.75Z" fill={color}/>
	<Path d="M12 5.854V20.9999" stroke="black" strokeWidth="1.5"/>
	<Path d="M5 9L9 10" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M19 9L15 10" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M5 13L9 14" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
	<Path d="M19 13L15 14" stroke="black" strokeLinecap="round" strokeWidth="1.5"/>
</Svg>;

export default LinearNotebook;
