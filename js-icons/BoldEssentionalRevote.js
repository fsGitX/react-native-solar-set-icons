import * as React from "react"
import Svg, { Path } from "react-native-svg";
    
const BoldEssentionalRevote = ({
    size = 24,
    color = "#1f2937",
    stroke = 2,
    ...props
    }) => <Svg height={size} width={size} fill="none" viewBox="0 0 24 24" strokeWidth={stroke} xmlns="http://www.w3.org/2000/svg" {...props}>
	<Path d="M10.4348 0.306155C10.7164 0.421572 10.9004 0.695766 10.9004 1.00015V1.97786C11.2467 1.97688 11.6074 1.97688 11.9829 1.97688L12.0577 1.97688C14.1301 1.97687 15.7631 1.97686 17.0391 2.15103C18.3498 2.32991 19.3952 2.70501 20.2163 3.53858C21.0359 4.37058 21.4033 5.4272 21.5788 6.75233C21.75 8.04554 21.75 9.70136 21.75 11.8072V11.9197C21.75 14.0255 21.75 15.6813 21.5788 16.9745C21.4033 18.2997 21.0359 19.3563 20.2163 20.1883C19.3952 21.0219 18.3498 21.397 17.0391 21.5758C15.7631 21.75 14.1301 21.75 12.0577 21.75H11.9423C9.86991 21.75 8.23694 21.75 6.96085 21.5758C5.65019 21.397 4.60483 21.0219 3.78371 20.1883C2.96414 19.3563 2.59674 18.2997 2.42124 16.9745C2.24998 15.6813 2.24999 14.0255 2.25 11.9197V11.8072C2.24999 9.70137 2.24998 8.04554 2.42124 6.75233C2.59674 5.4272 2.96414 4.37058 3.78371 3.53858C4.07439 3.24349 4.54925 3.23991 4.84434 3.53059C5.13943 3.82127 5.14301 4.29613 4.85233 4.59122C4.35388 5.09724 4.06227 5.78639 3.90826 6.94927C3.75155 8.13258 3.75 9.68904 3.75 11.8634C3.75 14.0378 3.75155 15.5943 3.90826 16.7776C4.06227 17.9405 4.35388 18.6296 4.85233 19.1356C5.34923 19.6401 6.02354 19.934 7.1637 20.0896C8.32662 20.2483 9.85717 20.25 12 20.25C14.1428 20.25 15.6734 20.2483 16.8363 20.0896C17.9765 19.934 18.6508 19.6401 19.1477 19.1356C19.6461 18.6296 19.9377 17.9405 20.0917 16.7776C20.2485 15.5943 20.25 14.0378 20.25 11.8634C20.25 9.68904 20.2485 8.13258 20.0917 6.94927C19.9377 5.78639 19.6461 5.09724 19.1477 4.59122C18.6508 4.08678 17.9765 3.79286 16.8363 3.63725C15.6734 3.47853 14.1428 3.47688 12 3.47688C11.6146 3.47688 11.2486 3.4769 10.9004 3.47789V4.5542C10.9004 4.85857 10.7165 5.13276 10.4348 5.24818C10.1532 5.3636 9.8297 5.29736 9.6161 5.08052L7.86569 3.30355C7.57811 3.0116 7.5781 2.54288 7.86567 2.25092L9.61608 0.47384C9.82968 0.256991 10.1532 0.190739 10.4348 0.306155Z" fill={color} fillRule="evenodd"/>
	<Path d="M16.0303 10.0303C16.3232 9.73742 16.3232 9.26255 16.0303 8.96966C15.7374 8.67676 15.2626 8.67676 14.9697 8.96966L10.5 13.4393L9.03033 11.9697C8.73744 11.6768 8.26256 11.6768 7.96967 11.9697C7.67678 12.2625 7.67678 12.7374 7.96967 13.0303L9.96967 15.0303C10.2626 15.3232 10.7374 15.3232 11.0303 15.0303L16.0303 10.0303Z" fill={color}/>
</Svg>;

export default BoldEssentionalRevote;
